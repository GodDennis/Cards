import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Page404Image } from '@/icons/Page404Image'

import s from './page404.module.scss'

export const Page404 = () => {
  return (
    <div className={s.container}>
      <div className={s.mainContainer}>
        <div className={s.image404}>
          <Page404Image />
        </div>
        <Typography className={s.pageNotFound} variant={'body2'}>
          Sorry! Page not found!
        </Typography>
        <Button as={Link} to={'/'}>
          Back to home page
        </Button>
      </div>
    </div>
  )
}
