import { CardWithGrade, CardWithoutGrade, UpdateCardBody } from './api-types'
import { baseApi } from './base-api'

const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteCard: builder.mutation<void, string>({
      invalidatesTags: ['Card'],
      query: cardId => ({
        method: 'DELETE',
        url: `/v1/cards/${cardId}`,
      }),
    }),
    getCard: builder.query<CardWithGrade, string>({
      providesTags: ['Card'],
      query: cardId => ({
        method: 'GET',
        url: `/v1/cards/${cardId}`,
      }),
    }),
    updateCard: builder.mutation<CardWithoutGrade, { body: UpdateCardBody; cardId: string }>({
      invalidatesTags: ['Card'],
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `/v1/cards/${cardId}`,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useDeleteCardMutation, useGetCardQuery, useUpdateCardMutation } = cardsApi
