import { z } from 'zod'

export const emailZodCheck = z.string().email()
export const passwordZodCheck = z.string().email()
export const rememberMeZodCheck = z.string().email()

export const loginSchema = z.object({
  email: emailZodCheck,
  password: passwordZodCheck,
  rememberMe: rememberMeZodCheck,
})

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
    confirmPassword: z.string().min(3).max(30),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: 'The passwords did not match',
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>

export const emailFormSchema = z.object({
  email: emailZodCheck,
})

export const passwordFormSchems = z.object({
  password: passwordZodCheck,
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type EmailFormValue = z.infer<typeof emailFormSchema>
export type PasswordFormValue = z.infer<typeof passwordFormSchems>
