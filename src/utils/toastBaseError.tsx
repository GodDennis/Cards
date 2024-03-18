import { toast } from 'react-toastify'

import { BaseError } from '@/services/api-types'

export const toastBaseError = (error: BaseError) => {
  toast.error(error.data.message)
}
