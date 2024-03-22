import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RegisterFormValues, registerSchema } from '@/components/auth/helpers/loginValidationSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/services/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import 'react-toastify/dist/ReactToastify.css'

import s from '@/components/auth/signIn/signIn.module.scss'

import { errorHelper } from '../../../utils/errorHelper'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) })

  const navigate = useNavigate()
  const link = `${import.meta.env.VITE_DEPLOY_URL}/verify-email/##token##`
  const onSubmit = (values: RegisterFormValues) => {
    signUp({
      email: values.email,
      html: `<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="${link}">Confirm email</a>. If it doesn\'t work, copy and paste the following link in your browser:<br/>${link}`,
      name: values.email,
      password: values.password,
      sendConfirmationEmail: true,
      subject: 'FlashCards',
    })
      .unwrap()
      .then(() => {
        navigate(`/checkEmail/${values.email}`)
      })
      .catch(e => {
        if (e.status === 400) {
          toast.error('This email already exists!')
        } else {
          errorHelper(e)
        }
      })
    reset()
  }

  return (
    <div className={s.container}>
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Sign Up
        </Typography>
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(s.inputContainer, s.signUpInputs)}>
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
            <ControlledInput
              className={s.input}
              control={control}
              error={errors.confirmPassword?.message}
              label={'Confirm Password'}
              name={'confirmPassword'}
              variant={'password'}
            />
          </div>
          <Button fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography className={s.haveAnAccount} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} className={s.signIn} to={'/login'}>
          Sign In
        </Typography>
      </Card>
    </div>
  )
}
