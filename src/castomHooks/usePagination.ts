import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const usePagination = () => {
  const { pageCount } = useParams()

  const [pageSize, setPageSize] = useState<number>(20)
  const onSetPageSize = (value: number) => {
    setPageSize(value)
  }

  const [currentPage, setCurrentPage] = useState<number>(pageCount ? +pageCount : 1)
  const onSetCurrentPage = (value: number) => {
    setCurrentPage(value)
  }

  return {
    currentPage,
    onSetCurrentPage,
    onSetPageSize,
    pageSize,
  }
}
