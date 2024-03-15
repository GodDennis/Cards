import { z } from 'zod'

const question = z.string().min(3)
const answer = z.string().min(3)

export const addNewCardSchema = z.object({
  answer,
  question,
})

export type AddNewCardForm = z.infer<typeof addNewCardSchema>
