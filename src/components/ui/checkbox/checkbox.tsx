import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { CheckboxIcon } from '@/icons/CheckboxIcon'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  disabled?: boolean
  text?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (props, ref) => {
    const { className, disabled = false, text, ...rest } = props

    return (
      <div className={`${s.rootDiv} ${className}`}>
        <RadixCheckbox.Root
          className={`${s.CheckboxRoot}`}
          {...rest}
          disabled={disabled}
          id={'1'}
          ref={ref}
        >
          <RadixCheckbox.Indicator className={disabled ? s.disabledIndicator : s.CheckboxIndicator}>
            <CheckboxIcon
              bcgFill={disabled ? `var(--color-dark-100)` : 'white'}
              iconFill={disabled ? `var(--color-light-700)` : `var(--color-dark-900`}
            />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label className={disabled ? s.labelDisabled : s.Label} htmlFor={'1'}>
          <Typography variant={'body2'}>{text}</Typography>
        </label>
      </div>
    )
  }
)
