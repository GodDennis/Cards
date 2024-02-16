import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { CheckboxIcon } from '@/icons/CheckboxIcon'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type InputProps = {
  disabled?: boolean
  text?: string
} & ComponentPropsWithoutRef<'input'>

export const CheckboxComponent = (props: InputProps) => {
  const { disabled = false, text } = props

  return (
      <div className={s.rootDiv}>
        <Checkbox.Root className={s.CheckboxRoot} disabled={disabled} id={'c1'}>
          <Checkbox.Indicator className={disabled ? s.disabledIndicator : s.CheckboxIndicator}>
            <CheckboxIcon
              bcgFill={disabled ? `var(--color-dark-100)` : 'white'}
              iconFill={disabled ? `var(--color-light-700)` : `var(--color-dark-900`}
            />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={disabled ? s.labelDisabled : s.Label} htmlFor={'c1'}>
          <Typography variant={'body2'}>{text && text}</Typography>
        </label>
      </div>
  )
}
