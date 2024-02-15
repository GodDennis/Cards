import { ComponentProps, useState } from 'react'

import * as RadioGr from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '../typography'

type Option = {
  name: string
  value: string
}

type RadioGroupProps = {
  changeHandler: (value: string) => void
  disabled?: boolean
  name: string
  options: Option[]
  required?: boolean
  value: string
} & ComponentProps<'div'>

export const RadioGroup = (props: RadioGroupProps) => {
  const { changeHandler, className, disabled, name, options, value } = props

  const classNames = {
    radioGroupIndicator: s.radioGroupIndicator,
    radioGroupItem: s.radioGroupItem,
    radioGroupRoot: clsx(s.radioGroupRoot, className),
    radioWrapper: s.radioWrapper,
  }

  return (
    <RadioGr.Root
      className={classNames.radioGroupRoot}
      disabled={disabled}
      name={name}
      onValueChange={changeHandler}
      value={value}
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
    </RadioGr.Root>
  )
}
