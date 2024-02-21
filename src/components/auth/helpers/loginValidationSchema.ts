import { z } from 'zod'

export const emailZodCheck = z.string().email()
export const passwordZodCheck = z.string().email()
export const rememberMeZodCheck = z.string().email()

export const loginSchema = z.object({
  email: emailZodCheck,
  password: passwordZodCheck,
  rememberMe: rememberMeZodCheck,
})

export const emailFormSchema = z.object({
  email: emailZodCheck,
})

export const passwordFormSchems = z.object({
  password: passwordZodCheck,
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type EmailFormValue = z.infer<typeof emailFormSchema>
export type PasswordFormValue = z.infer<typeof passwordFormSchems>
