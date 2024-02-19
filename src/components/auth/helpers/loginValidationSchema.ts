import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
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
