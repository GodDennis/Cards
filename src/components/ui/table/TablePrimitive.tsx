import { ComponentProps } from 'react'

import s from './table.module.scss'

const Root = ({ className, ...rest }: ComponentProps<'table'>) => (
  <table className={`${s.table} ${className}`} {...rest}></table>
)
const Head = ({ className, ...rest }: ComponentProps<'thead'>) => (
  <thead className={`${s.head} ${className}`} {...rest}></thead>
)
const Body = ({ className, ...rest }: ComponentProps<'tbody'>) => (
  <tbody className={className} {...rest}></tbody>
)
const Row = ({ className, ...rest }: ComponentProps<'tr'>) => (
  <tr className={`${s.row} ${className}`} {...rest}></tr>
)
const HeadCell = ({ className, ...rest }: ComponentProps<'th'>) => (
  <th className={`${s.headCell} ${className}`} {...rest}></th>
)
const Cell = ({ className, ...rest }: ComponentProps<'td'>) => (
  <td className={`${s.cell} ${className}`} {...rest}></td>
)

export const Table = {
  Body,
  Cell,
  Head,
  HeadCell,
  Root,
  Row,
}
