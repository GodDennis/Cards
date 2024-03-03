import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  CardWithGrade,
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
  SaveGradeBody,
  UpdateCardBody,
} from './api-types'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Card', 'Cards', 'RandomCard', 'Decks', 'Deck'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    createCard: builder.mutation<CardWithoutGrade, { body: CreateCardBody; deckId: string }>({
      invalidatesTags: ['Cards'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${deckId}/cards`,
      }),
    }),
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
      invalidatesTags: ['Card'],
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `/v1/cards/${cardId}`,
      }),
    }),
    getAllDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
      providesTags: ['Decks'],
      query: args => ({
        method: 'GET',
        url: `/v2/decks`,
        params: args || undefined,
      }),
    }),
    createDeck: builder.mutation<DeckType, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: body => ({
        method: 'POST',
        url: `/v1/decks`,
        body,
      }),
    }),
    deleteDeck: builder.mutation<DeckWithoutAuthor, string>({
      invalidatesTags: ['Decks'],
      query: id => ({
        method: 'DELETE',
        url: `/v1/decks/${id}`,
      }),
    }),
    updateDeck: builder.mutation<DeckType, { id: string; body: Partial<CreateDeckArgs> }>({
      invalidatesTags: ['Decks'],
      query: ({ id, body }) => ({
        method: 'PATCH',
        url: `/v1/decks/${id}`,
        body,
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
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardQuery,
  useGetCardsInDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
  useUpdateCardMutation,
  useGetAllDecksQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useGetMinMaxQuery,
} = baseApi
