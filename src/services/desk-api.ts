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
      invalidatesTags: ['Cards'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${deckId}/cards`,
      }),
    }),
    createDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/decks`,
      }),
    }),
    deleteDeck: builder.mutation<DeckWithoutAuthor, string>({
      invalidatesTags: ['Decks'],
      query: id => ({
        method: 'DELETE',
        url: `/v1/decks/${id}`,
      }),
    }),
    getAllDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
      providesTags: ['Decks'],
      query: args => ({
        method: 'GET',
        params: args || undefined,
        url: `/v2/decks`,
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
    getMinMax: builder.query<GetMinMax, void>({
      query: () => ({
        method: 'GET',
        url: `/v1/decks/min-max-cards`,
      }),
    }),
    updateDeck: builder.mutation<DeckType, { body: Partial<CreateDeckArgs>; id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ body, id }) => ({
        body,
        method: 'PATCH',
        url: `/v1/decks/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetAllDecksQuery,
  useGetCardsInDeckQuery,
  useGetDeckQuery,
  useGetMinMaxQuery,
  useUpdateDeckMutation,
} = deskApi
