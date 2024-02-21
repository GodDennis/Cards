import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver()
  })

  return (
    <Card>
      <form className={'form'}>
        <Typography as={'h1'} variant={'h1'}>
          Forgot your password?
        </Typography>
        <div className={'inputWrapper'}>
          <ControlledInput
            control={control}
            label={'Email'}
            name={'userEmail'}
            type={'email'}
            variant={'simple'}
          />
          <Typography as={'p'} className={'inputDescr'} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
        <Button className={'button'} fullWidth>
          <Typography as={'span'} variant={'subtitle2'}>
            Send Instructions
          </Typography>
        </Button>
        <Typography as={'span'} className={'question'} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={'toLogInLink'} to={'/'} variant={'subtitle2'}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
