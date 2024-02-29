import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getCard: builder.query<any, string>({
      providesTags: ['card'],
      query: (id: string) => ({
        method: 'GET',
        url: `/v1/cards/${id}`,
      }),
    }),
  }),
  reducerPath: 'baseApi',
  tagTypes: ['card'],
})

export const { useGetCardQuery } = baseApi
