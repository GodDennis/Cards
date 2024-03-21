import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './loader.module.scss'

type LoaderProps = ComponentProps<'div'>

export const Loader = ({ className, ...rest }: LoaderProps) => {
  return (
    <div className={clsx(s.loaderWrapper, className)} {...rest}>
      <div className={clsx(s.loader)} />
    </div>
  )
}
