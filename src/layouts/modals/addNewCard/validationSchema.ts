import { z } from 'zod'

const question = z.string().min(2)
const answer = z.string().min(1)

export const addNewCardSchema = z.object({
  answer,
  question,
})

export type AddNewCardForm = z.infer<typeof addNewCardSchema>
