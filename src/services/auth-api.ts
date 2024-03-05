import { baseApi } from './base-api'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAuth: builder.query<any, any>({
      providesTags: ['Auth'],
      query: () => ({
        method: 'GET',
        url: `/v1/auth/me`,
      }),
    }),
    login: builder.query<any, any>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/login`,
      }),
    }),
    signUp: builder.query<any, any>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/sign-up`,
      }),
    }),
  }),
})
