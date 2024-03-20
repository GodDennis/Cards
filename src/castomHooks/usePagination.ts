import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const URLParams = Object.fromEntries(searchParams)

  const [pageSize, setPageSize] = useState<number>(Number(searchParams.get('size') ?? 10))
  const onSetPageSize = (value: number) => {
    searchParams.set('size', value.toString())
    setPageSize(value)
  }

  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page') ?? 1))
  const onSetCurrentPage = (value: number) => {
    searchParams.set('page', value.toString())
    setCurrentPage(value)
  }

  useEffect(() => {
    setSearchParams(URLParams)
  }, [currentPage, pageSize])

  return {
    onSetCurrentPage,
    onSetPageSize,
    searchParams,
  }
}
