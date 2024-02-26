import { ComponentProps } from 'react'

import * as RadioGr from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '../typography'

type Option = {
  name: string
  value: string
}

export type RadioGroupProps = {
  //use only when component controlled
  changeHandler?: (value: string) => void
  //use only when component uncontrolled
  defaultValue?: string
  disabled?: boolean
  error?: string
  name: string
  options: Option[]
  required?: boolean
  //use only when component controlled
  value?: string
} & Omit<ComponentProps<'div'>, 'dir' | 'ref'>

export const RadioGroup = (props: RadioGroupProps) => {
  const { changeHandler, className, defaultValue, disabled, error, name, options, value, ...rest } =
    props

  const classNames = {
    error: s.errorMessage,
    radioGroupIndicator: s.radioGroupIndicator,
    radioGroupItem: s.radioGroupItem,
    radioGroupRoot: clsx(s.radioGroupRoot, className),
    radioWrapper: s.radioWrapper,
  }

  return (
    <RadioGr.Root
      className={classNames.radioGroupRoot}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={changeHandler}
      value={value}
      {...rest}
    >
      {options.map((o, i) => {
        return (
          <div className={classNames.radioWrapper} key={o.value}>
            <RadioGr.Item className={classNames.radioGroupItem} id={i + o.value} value={o.value}>
              <RadioGr.Indicator className={classNames.radioGroupIndicator} />
            </RadioGr.Item>
            <label htmlFor={i + o.value}>
              <Typography as={'span'} variant={'body2'}>
                {o.name}
              </Typography>
            </label>
          </div>
        )
      })}
      {error && (
        <Typography as={'span'} className={classNames.error} variant={'body2'}>
          {error}
        </Typography>
      )}
    </RadioGr.Root>
  )
}
