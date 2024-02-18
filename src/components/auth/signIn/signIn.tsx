import { useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/helpers/loginValidationSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signIn.module.scss'

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <div>
      <Card as={'div'} className={s.container}>
        <Typography as={'h1'} variant={'h1'}>
          Sign in
        </Typography>
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputContainer}>
            <Input {...register('email')} error={errors.email?.message} label={'Email'} />
            <Input
              {...register('password')}
              error={errors.password?.message}
              label={'Password'}
              variant={'password'}
            />
          </div>
          <div className={s.linkCheckbox}>
            <ControlledCheckbox
              className={s.rememberMe}
              control={control}
              name={'rememberMe'}
              text={'Remember Me'}
            />
            <Typography as={'a'} className={s.forgotPassword} href={'#'} variant={'body2'}>
              Forgot Password?
            </Typography>
          </div>

          <Button fullWidth type={'submit'}>
            Login
          </Button>
        </form>
        <Typography variant={'body2'}>Don't have an account?</Typography>
        <Typography as={'a'} className={s.signIn} href={'#'}>
          Sign Up
        </Typography>
      </Card>
    </div>
  )
}
