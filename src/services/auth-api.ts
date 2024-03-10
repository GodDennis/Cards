import { baseApi } from './base-api'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
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
    signUp: builder.mutation<any, SignUpArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/sign-up`,
      }),
    }),
  }),
})

type SignUpArgs = {
  email: string
  html: string
  name: string
  password: string
  sendConfirmationEmail: boolean
  subject: string
}

export const { useGetAuthQuery, useLoginMutation, useLogoutMutation, useSignUpMutation } = authApi
