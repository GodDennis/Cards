import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { ArrowDown } from '@/icons/ArrowDown'
import { ArrowUp } from '@/icons/ArrowUp'
import * as SelectRadix from '@radix-ui/react-select'
import { Direction } from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  defaultValue?: string
  dir?: Direction
  disabled?: boolean
  label?: string
  onOpenChange?: () => void
  onValueChange?: (value: string) => void
  options?: { label: string; value: string }[]
  placeholder?: string
  value?: string
} & Omit<ComponentPropsWithoutRef<'select'>, 'dir' | 'onChange' | 'value'>

export const Select = (props: SelectProps) => {
  const defaultOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

  const {
    className,

    dir,
    disabled = false,
    label,
    onOpenChange,
    onValueChange,
    options = defaultOptions,
    //eslint-disable-next-line perfectionist/sort-objects
    defaultValue,
    placeholder,
    value,
    ...rest
  } = props

  const [open, setOpen] = useState(false)

  const handleValueChange = (value: string) => {
    onValueChange?.(value)
  }

  const handleOpenChange = () => {
    onOpenChange?.()
    setOpen(!open)
  }

  return (
    <div>
      <Typography className={disabled ? s.labelDisabled : s.label} variant={'body2'}>
        {label}
      </Typography>
      <SelectRadix.Root
        disabled={disabled}
        onOpenChange={handleOpenChange}
        onValueChange={handleValueChange}
        value={value}
        {...rest}
      >
        <SelectRadix.Trigger className={`${className} ${s.SelectTrigger}`}>
          <SelectRadix.Value
            placeholder={<Typography variant={'body1'}>{placeholder}</Typography>}
          />
          <SelectRadix.Icon className={s.SelectIcon}>
            {open && <ArrowUp fill={disabled ? 'var(--color-dark-300)' : 'white'} />}
            {!open && <ArrowDown fill={disabled ? 'var(--color-dark-300)' : 'white'} />}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.SelectContent} position={'popper'} sideOffset={-1}>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                {options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
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
      <SelectRadix.Item
        className={s.SelectItem}
        disabled={props.disabled}
        ref={forwardedRef}
        value={props.value}
      >
        <SelectRadix.ItemText>
          <Typography style={{ margin: 0 }} variant={'body1'}>
            {props.children}
          </Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
