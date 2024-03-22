import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginFormValues, loginSchema } from '@/components/auth/helpers/loginValidationSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { useLoginMutation } from '@/services/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './signIn.module.scss'

import { errorHelper } from '../../../utils/errorHelper'

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })
  const [login] = useLoginMutation()

  const onSubmit = (values: LoginFormValues) => {
    login(values)
      .unwrap()
      .catch(e => {
        if (e.status === 401) {
          toast.error('Incorrect login or password')
        } else {
          errorHelper(e)
        }
      })
  }

  return (
    <div className={s.container}>
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} variant={'h1'}>
          Sign in
        </Typography>
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputContainer}>
            <ControlledInput
              className={s.input}
              control={control}
              error={errors.email?.message}
              label={'Email'}
              name={'email'}
            />
            <ControlledInput
              className={s.input}
              control={control}
              error={errors.password?.message}
              label={'Password'}
              name={'password'}
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
            <Typography
              as={Link}
              className={s.forgotPassword}
              to={'/forgot-password'}
              variant={'body2'}
            >
              Forgot Password?
            </Typography>
          </div>

          <Button fullWidth type={'submit'}>
            Sign in
          </Button>
        </form>
        <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
        <Typography as={Link} className={s.signIn} to={'/signUp'}>
          Sign Up
        </Typography>
      </Card>
    </div>
  )
}
