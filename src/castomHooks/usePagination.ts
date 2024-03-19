import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageSize, setPageSize] = useState<number>(10)

  const URLParams = Object.fromEntries(searchParams)

  const onSetPageSize = (value: number) => {
    setPageSize(value)
  }

  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) ?? 1)
  const onSetCurrentPage = (value: number) => {
    searchParams.set('page', value.toString())
    setCurrentPage(value)
  }

  useEffect(() => {
    setSearchParams(URLParams)
  }, [currentPage])

  return {
    currentPage,
    onSetCurrentPage,
    onSetPageSize,
    pageSize,
  }
}
