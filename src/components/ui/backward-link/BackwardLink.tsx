import { Link } from 'react-router-dom'

import { Typography, Variant } from '@/components/ui/typography'
import { LeftArrow } from '@/icons/LeftArrow'
import clsx from 'clsx'

import s from './backward-list.module.scss'

type BackwardLinkProps = {
  children: string
  className?: string
  to: string
  variant?: Variant
}

export const BackwardLink = ({ children, className, to, variant }: BackwardLinkProps) => {
  return (
    <Typography as={Link} className={clsx(s.backwardLink, className)} to={to} variant={variant}>
      <LeftArrow />
      {children}
    </Typography>
  )
}
