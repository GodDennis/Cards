import { z } from 'zod'

const question = z.string().min(3)
const answer = z.string().min(3)

export const addNewCardSchema = z.object({
  answer,
  question,
})

export const updateCardSchema = z.object({
  answer: z.string().min(3).optional(),
  question: z.string().min(3).optional(),
})

export type AddNewCardForm = z.infer<typeof addNewCardSchema>
