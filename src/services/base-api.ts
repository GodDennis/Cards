import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SaveGradeBody, UpdateCardBody } from './api-types'

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
      providesTags: ['Card'],
      query: (cardId: string) => ({
        method: 'GET',
        url: `/v1/cards/${cardId}`,
      }),
    }),
    getRandomCard: builder.query<any, { deckId: string; previousCardId: null | string }>({
      providesTags: ['RandomCard'],
      query: ({ deckId, previousCardId }) => ({
        method: 'GET',
        params: {
          previousCardId,
        },
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    saveGrade: builder.mutation<any, { body: SaveGradeBody; deckId: string }>({
      invalidatesTags: ['RandomCard'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    updateCard: builder.mutation<any, { body: UpdateCardBody; cardId: string }>({
      invalidatesTags: ['Card'],
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `/v1/cards/${cardId}`,
      }),
    }),
  }),
  reducerPath: 'baseApi',
  tagTypes: ['Card', 'RandomCard'],
})

export const {
  useGetCardQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
  useUpdateCardMutation,
} = baseApi
