import { toast } from 'react-toastify'

import { AppError, BaseError } from '@/services/api-types'
import { toastAppError } from '@/utils/toastAppError'
import { toastBaseError } from '@/utils/toastBaseError'

export const errorHelper = (e: unknown, defaultMessage: string | void) => {
  if ((e as AppError).data?.errorMessages?.[0]?.message) {
    toastAppError(e as AppError)
  } else if ((e as BaseError).data?.message) {
    toastBaseError(e as BaseError)
  } else {
    toast.error(defaultMessage || 'Some error has occured')
  }
}
