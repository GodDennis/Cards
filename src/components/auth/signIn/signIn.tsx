import { useForm } from 'react-hook-form'
import { LoginFormValues, loginSchema } from '@/components/auth/helpers/loginValidationSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signIn.module.scss'
import { Header } from '@/components/ui/header'
import { ControlledInput } from '@/components/ui/input/ControlledInput'

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (values: LoginFormValues) => {
    console.log(values)
  }

  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} variant={'h1'}>
          Sign in
        </Typography>
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputContainer}>
            <ControlledInput
              error={errors.email?.message}
              label={'Email'}
              className={s.input}
              name={'email'}
              control={control}
            />
            <ControlledInput
              error={errors.password?.message}
              label={'Password'}
              name={'password'}
              control={control}
              variant={'password'}
              className={s.input}
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
            Sign in
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
