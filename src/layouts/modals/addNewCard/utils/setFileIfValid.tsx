import { toast } from 'react-toastify'

export const setFileIfValid = (setter: Function, file: File, maxSizeMb: number) => {
  if (file.size <= maxSizeMb * 1024 * 1024) {
    const imgURL = convertToBase64(file)

    setter(imgURL)
  } else {
    toast.error(`File size must be smaller than ${maxSizeMb}mb!`)
  }
}

const convertToBase64 = (file: File) => {
  return URL.createObjectURL(file)
}
