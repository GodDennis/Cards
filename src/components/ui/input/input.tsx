import {ComponentPropsWithoutRef, ElementRef, forwardRef, useState} from 'react'

import { EyeOutline } from '@/icons/EyeOutline'
import { SearchOutline } from '@/icons/SearchOutline'

import s from '@/components/ui/input/input.module.scss'
import { EyeOffOutline } from '@/icons/EyeOffOutline'

export type InputProps = {
  disabled?: boolean
  error?: null | string
  label?: string
  placeholder?: string
  variant?: 'password' | 'search' | 'simple'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  const { className, disabled = false, error = null, label, variant = 'simple', ...rest } = props

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${s.inputHeaders} ${disabled ? s.disabled : ''}`}>
      {' '}
      {label}
      <div className={s.inputContainer}>
        <input
          className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${
            disabled ? s.disabled : ''
          } ${className}`}
          ref={ref}
          type={showPassword ? 'text' : variant === 'password' ? 'password' : 'text'}
          {...rest}
        />
        {error && <div className={s.errorMessage}>{error}</div>}
        {variant === 'password' && (
          <span className={s.passwordIcon} onClick={() => setShowPassword(!showPassword)}>
            {' '}
            {showPassword ? <EyeOffOutline fill={'white'} /> : <EyeOutline fill={'white'} />}
          </span>
        )}
        {variant === 'search' && (
          <span className={s.searchIcon}>
            {' '}
            <SearchOutline fill={'white'} />
          </span>
        )}
      </div>
    </div>
  )
})
