import { toast } from 'react-toastify'

import { toastAppError } from '@/utils/toastAppError'
import { toastBaseError } from '@/utils/toastBaseError'

export const errorHelper = (e: any, defaultMessage: string | void) => {
  if (e.data.errorMessages[0].message) {
    toastAppError(e)
  } else if (e.data.message) {
    toastBaseError(e)
  } else {
    toast.error(defaultMessage || 'Some error has occured')
  }
}
