import { baseApi } from './base-api'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    forgotPassword: builder.mutation<void, ForgotPasswordArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/recover-password`,
      }),
    }),
    getAuth: builder.query<any, void>({
      providesTags: ['Auth'],
      query: () => ({
        method: 'GET',
        url: `/v1/auth/me`,
      }),
    }),
    login: builder.mutation<any, any>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/login`,
      }),
    }),
    logout: builder.mutation<any, void>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/logout`,
      }),
    }),
    resetPassword: builder.mutation<void, ResetPassword>({
      query: args => ({
        body: {
          password: args.password,
        },
        method: 'POST',
        url: `/v1/auth/reset-password/${args.token}`,
      }),
    }),
    signUp: builder.mutation<any, SignUpArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/sign-up`,
      }),
    }),
    updateUser: builder.mutation<any, { avatar?: File; name?: string }>({
      invalidatesTags: ['Auth'],

      query: body => {
        const formData = new FormData()

        if (body.avatar) {
          formData.append('avatar', body.avatar)
        }
        if (body.name) {
          formData.append('name', body.name)
        }

        return {
          body: formData,
          method: 'PATCH',
          url: `/v1/auth/me`,
        }
      },
    }),
    verifyEmail: builder.mutation<void, { code: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/verify-email`,
      }),
    }),
  }),
})

type ResetPassword = {
  password: string
  token: string
}

type SignUpArgs = {
  email: string
  html: string
  name: string
  password: string
  sendConfirmationEmail: boolean
  subject: string
}

type ForgotPasswordArgs = {
  email: string
  html: string
  subject: string
}

export const {
  useForgotPasswordMutation,
  useGetAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useVerifyEmailMutation,
} = authApi
