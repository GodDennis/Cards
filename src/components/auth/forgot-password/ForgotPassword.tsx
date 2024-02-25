import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './fogotPassword.module.scss'

import { EmailFormValue, emailFormSchema } from '../helpers/loginValidationSchema'

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailFormValue>({
    resolver: zodResolver(emailFormSchema),
  })

  const onSubmit = (value: EmailFormValue) => {
    return value
  }

  return (
    <Card>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Forgot your password?
        </Typography>
        <div className={s.inputWrapper}>
          <ControlledInput
            className={s.input}
            control={control}
            error={errors.email?.message}
            label={'Email'}
            name={'email'}
            type={'email'}
            variant={'simple'}
          />
          <Typography as={'p'} className={s.inputDescr} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
        <Button className={s.button} fullWidth>
          <Typography as={'span'} variant={'subtitle2'}>
            Send Instructions
          </Typography>
        </Button>
        <Typography as={'span'} className={s.question} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={s.toLogInLink} to={'/login'} variant={'subtitle2'}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
