import { z } from 'zod'

export const emailZodCheck = z.string().email()
export const passwordZodCheck = z.string().min(3).max(30)
export const rememberMeZodCheck = z.boolean().optional()

export const loginSchema = z.object({
  email: emailZodCheck,
  password: passwordZodCheck,
  rememberMe: rememberMeZodCheck,
})

export const registerSchema = z
  .object({
    // eslint-disable-next-line prettier/prettier
    confirmPassword: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(30),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: 'The passwords did not match',
    path: ['confirmPassword'],
  })

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
