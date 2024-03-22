import { ArrowDown } from '@/icons/ArrowDown'
import { ArrowUp } from '@/icons/ArrowUp'
import clsx from 'clsx'

import s from './table.module.scss'

import { Table } from '.'

type FilterDirections = 'asc' | 'desc'

export type HeadCellProps = {
  filterKey: string
  title: string
}

export type SortTableData = {
  filterDirection: FilterDirections
  filterKey: string
} | null

type HeaderProps = {
  className?: string
  filterHandler?: (data: SortTableData) => void
  head: HeadCellProps[]
  sortData?: SortTableData | null
  withFilter?: boolean
}

export const THeader = ({ className, filterHandler, head, sortData, withFilter }: HeaderProps) => {
  const switchFilterDirection = (filterDirection: FilterDirections) => {
    return filterDirection === 'asc' ? 'desc' : 'asc'
  }

  const onFilterChange = (filterKey: string) => {
    if (!sortData) {
      filterHandler?.({ filterDirection: 'asc', filterKey })

      return
    }
    if (filterKey === sortData.filterKey) {
      if (sortData.filterDirection === 'asc') {
        filterHandler?.({
          filterDirection: switchFilterDirection(sortData.filterDirection),
          filterKey,
        })
      } else {
        filterHandler?.(null)
      }
    } else {
      filterHandler?.({ filterDirection: 'asc', filterKey })
    }
  }

  return (
    <Table.Head className={clsx(s.tableHead, className)}>
      <Table.Row>
        {head.map(column => {
          return withFilter && column.filterKey ? (
            <Table.HeadCell
              className={sortData?.filterKey === column.filterKey ? s.active : undefined}
              key={column.filterKey}
              onClick={() => onFilterChange(column.filterKey)}
            >
              {column.title}
              {sortData?.filterKey === column.filterKey && (
                <span className={s.arrowContainer}>
                  {sortData?.filterDirection === 'asc' ? (
                    <ArrowDown height={'12px'} width={'20px'} />
                  ) : (
                    <ArrowUp height={'12px'} width={'20px'} />
                  )}
                </span>
              )}
            </Table.HeadCell>
          ) : (
            <Table.HeadCell key={column.filterKey}>{column.title}</Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
