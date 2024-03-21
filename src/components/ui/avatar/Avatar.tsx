import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { NullPhoto } from '@/icons/NullPhoto'

import s from './avatar.module.scss'

type Props = {
  icon?: ReactNode
} & ComponentPropsWithoutRef<'span'>

export const Avatar = ({ className, icon }: Props) => {
  const avatar = icon ? icon : <NullPhoto />

  return <span className={`${s.avatar} ${className}`}>{avatar}</span>
}
