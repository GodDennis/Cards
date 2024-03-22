import { Select } from '@/components/ui/select'
import { ArrowBack } from '@/icons/ArrowBack'
import { ArrowForward } from '@/icons/ArrowForward'
import clsx from 'clsx'

import s from './pagination.module.scss'

type Props = {
  currentPage: number
  pageSize?: number
  setCurrentPage: (value: number) => void
  setPageSize: (value: number) => void
  totalCount?: number
  totalPages: number
}

export const Pagination = (props: Props) => {
  const { currentPage, pageSize, setCurrentPage, setPageSize, totalPages } = props

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }
  const options = [
    { label: '10', value: '10' },
    { label: '20', value: '20' },
    { label: '30', value: '30' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ]

  const changePageSize = (value: string) => {
    setPageSize(+value)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    let startPage = 1
    let endPage = totalPages

    if (totalPages > 5) {
      if (currentPage <= 4) {
        endPage = 5
      } else if (currentPage >= totalPages - 3) {
        startPage = totalPages - 4
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          className={clsx(i === currentPage ? s.active : '', s.link)}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      )
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <li className={s.link} key={'1'} onClick={() => handlePageChange(1)}>
          1
        </li>
      )
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <li className={s.link} key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </li>
      )
    }

    if (startPage > 1) {
      pageNumbers.splice(1, 0, <li key={'collapse1'}>...</li>)
    }

    if (endPage < totalPages) {
      pageNumbers.splice(pageNumbers.length - 1, 0, <li key={'collapse2'}>...</li>)
    }

    return pageNumbers
  }

  return (
    <div className={s.pagination}>
      <ul>
        <li onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}>
          <ArrowBack fill={currentPage === 1 ? 'var(--color-dark-100)' : 'white'} />
        </li>
        {renderPageNumbers()}
        <li
          onClick={() =>
            handlePageChange(currentPage === totalPages ? currentPage : currentPage + 1)
          }
        >
          <ArrowForward fill={currentPage === totalPages ? 'var(--color-dark-100)' : 'white'} />
        </li>
      </ul>

      <div className={s.countPicker}>
        Показать
        <Select onValueChange={changePageSize} options={options} value={pageSize?.toString()} />
        на странице
      </div>
    </div>
  )
}
