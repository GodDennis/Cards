import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'article', children, className, ...restProps } = props

  return (
    <Component className={`${className} ${s.card}`} {...restProps}>
      {children}
    </Component>
  )
}
