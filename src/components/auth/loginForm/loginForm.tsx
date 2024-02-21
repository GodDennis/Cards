import { useForm } from 'react-hook-form'

import { LoginFormValues, loginSchema } from '@/components/auth/helpers/loginValidationSchema'
import { Button } from '@/components/ui/button'
import ControlledCheckbox from '@/components/ui/checkbox/controlledCheckbox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (values: LoginFormValues) => {
    console.log(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <Input {...register('email')} error={errors.email?.message} label={'Email'} />
      <Input
        {...register('password')}
        error={errors.password?.message}
        label={'Password'}
        variant={'password'}
      />
      <div>
        <ControlledCheckbox control={control} name={'rememberMe'} text={'Remember Me'} />
        <Button fullWidth type={'submit'}>
          Login
        </Button>
      </div>
    </form>
  )
}
