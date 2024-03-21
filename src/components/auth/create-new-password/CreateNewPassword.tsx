import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { useResetPasswordMutation } from '@/services/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './createNewPassword.module.scss'

import { errorHelper } from '../../../utils/errorHelper'
import { PasswordFormValue, passwordFormSchems } from '../helpers/loginValidationSchema'

export const CreateNewPassword = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  const [reset] = useResetPasswordMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordFormValue>({
    resolver: zodResolver(passwordFormSchems),
  })

  const onSubmit = (value: PasswordFormValue) => {
    token &&
      reset({ password: value.password, token })
        .unwrap()
        .then(() => {
          navigate('/login')
        })
        .catch(e => errorHelper(e))
  }

  return (
    <Card className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Create new password
        </Typography>
        <div className={s.inputWrapper}>
          <ControlledInput
            className={s.input}
            control={control}
            error={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
            variant={'password'}
          />
          <Typography as={'p'} className={s.inputDescr} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button className={s.button} fullWidth type={'submit'}>
          <Typography as={'span'} variant={'subtitle2'}>
            Submit
          </Typography>
        </Button>
      </form>
    </Card>
  )
}
