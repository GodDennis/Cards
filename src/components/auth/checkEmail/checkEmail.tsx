import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Email } from '@/icons/Email'

import s from './checkEmail.module.scss'

export const CheckEmail = () => {
  const { email } = useParams()

  return (
    <div className={s.container}>
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Check Email
        </Typography>
        <div className={s.imageContainer}>
          <Email />
        </div>
        <Typography className={s.instructions} variant={'body2'}>
          We’ve sent an Email with instructions to {email}
        </Typography>
        <Button as={Link} className={s.button} fullWidth to={'/login'}>
          Back to Sign In
        </Button>
      </Card>
    </div>
  )
}
