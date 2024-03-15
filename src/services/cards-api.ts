import { CardWithGrade, CardWithoutGrade, SaveGradeBody, UpdateCardBody } from './api-types'
import { baseApi } from './base-api'

const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteCard: builder.mutation<void, string>({
      invalidatesTags: ['Cards'],
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
    getRandomCard: builder.query<CardWithGrade, { deckId: string; previousCardId?: string }>({
      providesTags: ['RandomCard'],
      query: ({ deckId, previousCardId }) => ({
        method: 'GET',
        params: {
          previousCardId,
        },
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    saveGrade: builder.mutation<CardWithGrade, { body: SaveGradeBody; deckId: string }>({
      invalidatesTags: ['RandomCard'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${deckId}/learn`,
      }),
    }),
    updateCard: builder.mutation<CardWithoutGrade, { body: UpdateCardBody; cardId: string }>({
      invalidatesTags: ['Cards'],
      query: ({ body, cardId }) => {
        const formData = new FormData()

        if (body.question) {
          formData.append('question', body.question)
        }
        if (body.answer) {
          formData.append('answer', body.answer)
        }
        if (body.questionImg) {
          formData.append('questionImg', body.questionImg)
        }
        if (body.answerImg) {
          formData.append('answerImg', body.answerImg)
        }

        return {
          body: formData,
          method: 'PATCH',
          url: `/v1/cards/${cardId}`,
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const {
  useDeleteCardMutation,
  useGetCardQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
  useUpdateCardMutation,
} = cardsApi
