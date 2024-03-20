import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounceValue } from './useDebounceValue'

export const useInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState<string>('')
  const [debouncedSearchStr, setDebouncedSearchStr] = useDebounceValue('', 500)

  const URLParams = Object.fromEntries(searchParams)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)

    searchParams.set('val', e.currentTarget.value.toString())
    if (e.currentTarget.value.toString() === '') {
      searchParams.delete('val')
    }
  }

  useEffect(() => {
    setSearchParams(URLParams)
    setDebouncedSearchStr(searchParams.get('val') ?? '')
  }, [value])

  return {
    debouncedSearchStr,
    onInputChange,
    searchParams,
    value,
  }
}
