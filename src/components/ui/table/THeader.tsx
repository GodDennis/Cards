import s from './table.module.scss'

import { Table } from '.'

export type HeadCellProps = {
  [key: string]: string
}
type HeaderProps = {
  className?: string
  head: HeadCellProps[]
}

export const THeader = ({ className, head }: HeaderProps) => {
  return (
    <Table.Head className={`${s.tableHead} ${className}`}>
      <Table.Row>
        {head.map(column => (
          <Table.HeadCell key={column.key}>{column.title}</Table.HeadCell>
        ))}
      </Table.Row>
    </Table.Head>
  )
}
