import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounceValue } from './useDebounceValue'

export const useInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [debouncedSearchStr, setDebouncedSearchStr] = useDebounceValue(
    searchParams.get('val') ?? '',
    500
  )

  const URLParams = Object.fromEntries(searchParams)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputQuery = { val: e.currentTarget.value.toString() }

    delete URLParams?.page
    setDebouncedSearchStr(e.currentTarget.value.toString() ?? '')
    setSearchParams({ ...URLParams, ...inputQuery })
    if (e.currentTarget.value.toString() === '') {
      delete URLParams.val
      setSearchParams({ ...URLParams })
    }
  }

  return {
    debouncedSearchStr,
    onInputChange,
    searchParams,
  }
}
