import { useSearchParams } from 'react-router-dom'

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const URLParams = Object.fromEntries(searchParams)

  const onSetPageSize = (value: number) => {
    const pageQuery = { size: value.toString() }

    delete URLParams.page
    setSearchParams({ ...URLParams, ...pageQuery })
  }

  const onSetCurrentPage = (value: number) => {
    const pageQuery = { page: value.toString() }

    if (value === 1 || undefined) {
      delete URLParams.page
      setSearchParams(URLParams)
    } else {
      setSearchParams({ ...URLParams, ...pageQuery })
    }
  }

  return {
    onSetCurrentPage,
    onSetPageSize,
    searchParams,
  }
}
