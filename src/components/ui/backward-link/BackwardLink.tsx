import { ElementType } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'

type BackwardLinkProps<T extends ElementType> = TypographyProps<T>

export const BackwardLink = <T extends ElementType>({ ...rest }: BackwardLinkProps<T>) => {
  return <Typography {...rest} />
}
