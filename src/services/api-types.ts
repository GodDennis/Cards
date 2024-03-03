export type SaveGradeBody = {
  cardId: string
  grade: string
}

export type CreateCardBody = {
  answer: string
  answerImg?: string
  answerVideo?: string
  question: string
  questionImg?: string
  questionVideo?: string
}

export type UpdateCardBody = Partial<CreateCardBody>

export type GetCardsInDeckParams = {
  answer?: string
  currentPage?: string
  itemsPerPage?: string
  orderBy?: string
  question?: string
}
export type GetCardsInDeckResponse = {
  items: CardWithGrade[]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalItems: number
    totalPages: number
  }
}

export type CardWithGrade = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type DeckType = {
  author: {
    id: string
    name: string
  }
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DeckWithoutAuthor = Omit<DeckType, 'author'>

export type GetDecksResponse = {
  items: DeckType[]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalItems: number
    totalPages: number
  }
}

export type GetDecksArgs = {
  minCardsCont?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  userId?: string
  currentPage?: number
  itemsPerPage?: number
}

export type CreateDeckArgs = {
  cover?: string
  name: string
  isPrivate?: boolean
}

export type GetMinMax = {
  max: number
  min: number
}

export type CardWithoutGrade = Omit<CardWithGrade, 'grade'>

// export type Grade = '1' | '2' | '3' | '4' | '5'