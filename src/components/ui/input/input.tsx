import { ComponentPropsWithoutRef } from 'react'

import { EyeOutline } from '@/icons/eye-outline'
import { SearchOutline } from '@/icons/search-outline'

import s from '@/components/ui/input/input.module.scss'

export type InputProps = {
  disabled?: boolean
  error?: null | string
  headers?: string
  placeholder?: string
  variant?: 'password' | 'search' | 'simple'
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const {
    className,
    disabled = false,
    error = null,
    headers = 'Input',
    variant = 'simple',
    ...rest
  } = props

  return (
    <div className={`${s.inputHeaders} ${disabled ? s.disabled : ''}`}>
      {' '}
      {headers}
      <input
        className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${
          disabled ? s.disabled : ''
        } ${className}`}
        {...rest}
      />
      {error && <div className={s.errorMessage}>{error}</div>}
      {variant === 'password' && (
        <span className={s.passwordIcon}>
          {' '}
          <EyeOutline fill={'white'} />
        </span>
      )}
      {variant === 'search' && (
        <span className={s.searchIcon}>
          {' '}
          <SearchOutline fill={'white'} />
        </span>
      )}
    </div>
  )
}
