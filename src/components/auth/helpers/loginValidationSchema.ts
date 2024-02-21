import { z } from 'zod'

export const emailZodCheck = z.string().email()
export const passwordZodCheck = z.string().email()
export const rememberMeZodCheck = z.string().email()

export const loginSchema = z.object({
  email: emailZodCheck,
  password: passwordZodCheck,
  rememberMe: rememberMeZodCheck,
})

export type LoginFormValues = z.infer<typeof loginSchema>
