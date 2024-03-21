import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { errorHelper } from './errorHelper'

export const handleQueryError = (
  isError: boolean,
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  if (isError && error) {
    errorHelper(error)
  }
}
