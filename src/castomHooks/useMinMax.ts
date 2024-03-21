import { useSearchParams } from 'react-router-dom'

import { useGetMinMaxQuery } from '@/services/desk-api'

import { useDebounceValue } from './useDebounceValue'

export const useMinMax = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const URLParams = Object.fromEntries(searchParams)

  const { data } = useGetMinMaxQuery()

  const [debouncedMin, setDebouncedMin] = useDebounceValue(
    searchParams.get('min') ? +searchParams.get('min')! : data?.min,
    500
  )
  const [debouncedMax, setDebouncedMax] = useDebounceValue(
    searchParams.get('max') ? +searchParams.get('max')! : data?.max,
    500
  )

  const onMinMaxChange = ([min, max]: number[]) => {
    // eslint-disable-next-line perfectionist/sort-objects
    const minMaxQuery = { min: min.toString(), max: max.toString() }

    setDebouncedMin(min)
    setDebouncedMax(max)

    delete URLParams.page
    setSearchParams({ ...URLParams, ...minMaxQuery })
  }

  return {
    debouncedMax,
    debouncedMin,
    onMinMaxChange,
    searchParams,
  }
}
