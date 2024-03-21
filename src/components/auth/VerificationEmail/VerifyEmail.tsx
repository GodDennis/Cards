import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Loader } from '@/components/ui/loader/Loader'
import { Typography } from '@/components/ui/typography'
import { Email } from '@/icons/Email'
import { useVerifyEmailMutation } from '@/services/auth-api'

import s from './verifyEmail.module.scss'

import { errorHelper } from '../../../utils/errorHelper'

export const VerifyEmail = () => {
  const { code } = useParams<{ code: string }>()
  const [verify, { isLoading }] = useVerifyEmailMutation()

  useEffect(() => {
    code &&
      verify({ code })
        .unwrap()
        .then()
        .catch(e => {
          if (e.status === 400) {
            toast.error('Email has already been verified')
          } else {
            errorHelper(e)
          }
        })
  }, [])

  return (
    <div className={s.container}>
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Email address confirmation
        </Typography>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={s.imageContainer}>
              <Email />
            </div>
            <Typography className={s.instructions} variant={'body2'}>
              Your email address has been confirmed
            </Typography>
            <Button as={Link} className={s.button} fullWidth to={'/login'}>
              Back to Sign In
            </Button>
          </>
        )}
      </Card>
    </div>
  )
}
