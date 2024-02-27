import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type Variant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
