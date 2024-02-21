import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './createNewPassword.module.scss'

import { PasswordFormValue, passwordFormSchems } from '../helpers/loginValidationSchema'

export const CreateNewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordFormValue>({
    resolver: zodResolver(passwordFormSchems),
  })

  const onSubmit = (value: PasswordFormValue) => {
    return value
  }

  return (
    <Card>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Create new password
        </Typography>
        <div className={s.inputWrapper}>
          <ControlledInput
            className={s.input}
            control={control}
            error={errors.password?.message}
            label={'Email'}
            name={'password'}
            type={'password'}
            variant={'password'}
          />
          <Typography as={'p'} className={s.inputDescr} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button className={s.button} fullWidth>
          <Typography as={'span'} variant={'subtitle2'}>
            Send Instructions
          </Typography>
        </Button>
      </form>
    </Card>
  )
}
