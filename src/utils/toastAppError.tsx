import { toast } from 'react-toastify'

import { AppError } from '@/services/api-types'

export const toastAppError = (error: AppError) => {
  toast.error(error.data.errorMessages?.[0]?.message)
}
