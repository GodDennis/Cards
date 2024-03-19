import {
  CardWithoutGrade,
  CreateCardBody,
  CreateDeckArgs,
  DeckType,
  DeckWithoutAuthor,
  GetCardsInDeckParams,
  GetCardsInDeckResponse,
  GetDecksArgs,
  GetDecksResponse,
  GetMinMax,
} from './api-types'
import { baseApi } from './base-api'

export const deskApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CardWithoutGrade, { body: CreateCardBody; deckId: string }>({
      invalidatesTags: ['Cards', 'Deck'],
      query: ({ body, deckId }) => {
        const formData = new FormData()

        formData.append('answer', body.answer)
        formData.append('question', body.question)
        if (body.questionImg) {
          formData.append('questionImg', body.questionImg)
        }
        if (body.answerImg) {
          formData.append('answerImg', body.answerImg)
        }

        return {
          body: formData,
          method: 'POST',
          url: `/v1/decks/${deckId}/cards`,
        }
      },
    }),
    createDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: body => {
        const formData = new FormData()

        if (body.cover) {
          formData.append('cover', body.cover)
        }
        formData.append('name', body.name)
        formData.append('isPrivate', String(body.isPrivate))

        return {
          body: formData,
          method: 'POST',
          url: `/v1/decks`,
        }
      },
    }),
    deleteDeck: builder.mutation<DeckWithoutAuthor, string>({
      invalidatesTags: ['Decks'],
      query: id => ({
        method: 'DELETE',
        url: `/v1/decks/${id}`,
      }),
    }),
    getCardsInDeck: builder.query<
      GetCardsInDeckResponse,
      { deckId: string; params: GetCardsInDeckParams }
    >({
      providesTags: ['Cards'],
      query: ({ deckId, params }) => ({
        method: 'GET',
        params,
        url: `/v1/decks/${deckId}/cards`,
      }),
    }),
    getDeck: builder.query<DeckType, string>({
      providesTags: ['Deck'],
      query: id => ({
        method: 'GET',
        url: `/v1/decks/${id}`,
      }),
    }),
    getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
      providesTags: ['Decks'],
      query: args => ({
        method: 'GET',
        params: args || undefined,
        url: `/v2/decks`,
      }),
    }),
    getMinMax: builder.query<GetMinMax, void>({
      query: () => ({
        method: 'GET',
        url: `/v2/decks/min-max-cards`,
      }),
    }),
    updateDeck: builder.mutation<DeckType, { body: Partial<CreateDeckArgs>; id: string }>({
      invalidatesTags: ['Decks', 'Deck'],
      query: ({ body, id }) => {
        const formData = new FormData()

        if (body.cover) {
          formData.append('cover', body.cover)
        }
        if (body.name) {
          formData.append('name', body.name)
        }
        formData.append('isPrivate', String(body.isPrivate))

        return {
          body: formData,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsInDeckQuery,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetMinMaxQuery,
  useLazyGetDeckQuery,
  useUpdateDeckMutation,
} = deskApi
