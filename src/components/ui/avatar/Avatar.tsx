import { ComponentPropsWithoutRef } from 'react'

import s from './avatar.module.scss'

import nullphoto from '../../../assets/Images/nullPhoto.svg'

type Props = {
  src: null | string
} & ComponentPropsWithoutRef<'span'>

export const Avatar = ({ className, src }: Props) => {
  const avatar = src ? src : nullphoto

  return (
    <span className={`${s.avatar} ${className}`}>
      <img alt={''} src={avatar} />
    </span>
  )
}
