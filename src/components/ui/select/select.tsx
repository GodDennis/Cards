import * as Select from '@radix-ui/react-select';
import s from './select.module.scss'
import {ComponentPropsWithoutRef, forwardRef, ReactNode, Ref, useState} from "react";
import {Typography} from "@/components/ui/typography";
import ArrowUp from "@/icons/ArrowUp";
import ArrowDown from "@/icons/ArrowDown";
import {Direction} from "@radix-ui/react-select";

type SelectProps = {
    options?: { value: string, label: string }[],
    placeholder?: string,
    disabled?: boolean,
    defaultValue?: string,
    label?: string,
    onValueChange?: (value: string) => void
    onOpenChange?: () => void,
    dir?: Direction,
    value?: string,
} & Omit<ComponentPropsWithoutRef<'select'>, 'onChange' | 'value' | 'dir'>

const SelectDemo = (props: SelectProps) => {

    const defaultOptions = [
        {value: '1', label: 'Option 1'},
        {value: '2', label: 'Option 2'},
        {value: '3', label: 'Option 3'},
    ];

    const {
        options = defaultOptions,
        placeholder,
        disabled = false,
        label,
        className,
        defaultValue = options[0].value,
        onValueChange,
        onOpenChange,
        dir,
        value,
        ...rest
    } = props

    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState<string | undefined>(undefined)

    const handleValueChange = (value: string) => {
        onValueChange?.(value)
        setCurrentValue(value)
    }

    const handleOpenChange = () => {
        onOpenChange?.()
        setOpen(!open)
    }


    return (
        <div >
            <Typography variant={'body2'} className={disabled? s.labelDisabled: s.label}>{label}</Typography>
            <Select.Root onOpenChange={handleOpenChange}
                         disabled={disabled}
                         value={currentValue}
                         onValueChange={handleValueChange}
                         defaultValue={defaultValue} {...rest}>
                <Select.Trigger className={`${className} ${s.SelectTrigger}`}>
                    <Select.Value placeholder={<Typography variant={"body1"}>{placeholder}</Typography>}/>
                    <Select.Icon className={s.SelectIcon}>
                        {open && <ArrowUp fill={disabled ? 'var(--color-dark-300)' : 'white'}/>}
                        {!open && <ArrowDown fill={disabled ? 'var(--color-dark-300)' : 'white'}/>}
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className={s.SelectContent} position={'popper'} sideOffset={-1}>
                        <Select.Viewport>
                            <Select.Group>
                                {options.map((option, index) => (
                                    <SelectItem value={option.value} key={index}>{option.label}</SelectItem>
                                ))}
                            </Select.Group>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}


const SelectItem = forwardRef((props: {
    children?: ReactNode,
    value: string,
    disabled?: boolean
}, forwardedRef: Ref<HTMLDivElement>) => {
    return (
        <Select.Item value={props.value} disabled={props.disabled} ref={forwardedRef} className={s.SelectItem}>
            <Select.ItemText>
                <Typography variant={'body1'} style={{margin: 0}}>{props.children}</Typography>
            </Select.ItemText>
        </Select.Item>
    )
})


export default SelectDemo;

