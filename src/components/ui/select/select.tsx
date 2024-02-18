import {ComponentPropsWithoutRef, ReactNode, Ref, forwardRef, useState} from 'react'

import {Typography} from '@/components/ui/typography'
import ArrowDown from '@/icons/ArrowDown'
import ArrowUp from '@/icons/ArrowUp'
import * as Select from '@radix-ui/react-select'
import {Direction} from '@radix-ui/react-select'

import s from './select.module.scss'


type SelectProps = {
    options?: { label: string; value: string }[]
    defaultValue?: string
    dir?: Direction
    disabled?: boolean
    label?: string
    onOpenChange?: () => void
    onValueChange?: (value: string) => void
    placeholder?: string
    value?: string
} & Omit<ComponentPropsWithoutRef<'select'>, 'dir' | 'onChange' | 'value'>

export const SelectDemo = (props: SelectProps) => {
    const defaultOptions = [
        {label: 'Option 1', value: '1'},
        {label: 'Option 2', value: '2'},
        {label: 'Option 3', value: '3'},
    ]

    const {
        options = defaultOptions,
        defaultValue = options[0].value,
        dir,
        disabled = false,
        label,
        onOpenChange,
        onValueChange,
        className,
        placeholder,
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
        <div>
            <Typography variant={'body2'} className={disabled ? s.labelDisabled : s.label}>
                {label}
            </Typography>
            <Select.Root
                defaultValue={defaultValue}
                disabled={disabled}
                onOpenChange={handleOpenChange}
                onValueChange={handleValueChange}
                value={currentValue} {...rest}>
                <Select.Trigger className={`${className} ${s.SelectTrigger}`}>
                    <Select.Value placeholder={<Typography variant={'body1'}>{placeholder}</Typography>}/>
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
                                    <SelectItem key={index} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </Select.Group>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}

const SelectItem = forwardRef(
    (
        props: {
            children?: ReactNode
            disabled?: boolean
            value: string
        },
        forwardedRef: Ref<HTMLDivElement>
    ) => {
        return (
            <Select.Item
                className={s.SelectItem}
                disabled={props.disabled}
                ref={forwardedRef}
                value={props.value}
            >
                <Select.ItemText>
                    <Typography style={{margin: 0}} variant={'body1'}>
                        {props.children}
                    </Typography>
                </Select.ItemText>
            </Select.Item>
        )
    }
)

