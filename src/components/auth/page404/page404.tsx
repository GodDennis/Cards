import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import s from './page404.module.scss'
import { Page404Image } from '@/icons/Page404Image'

export const Page404 = () => {
  return (
    <div className={s.container}>
      <Header isLoggedIn={true} />
      <div className={s.mainContainer}>
        <div className={s.image404}>
          <Page404Image />
        </div>
        <Typography className={s.pageNotFound} variant={'body2'}>
          Sorry! Page not found!
        </Typography>
        <Button as={'a'} href={'#'}>
          Back to home page
        </Button>
      </div>
    </div>
  )
}
