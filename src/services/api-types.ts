export type SaveGradeBody = {
  cardId: string
  grade: number
}

export type CreateCardBody = {
  answer: string
  answerImg?: File
  answerVideo?: string
  question: string
  questionImg?: File
  questionVideo?: string
}

export type UpdateCardBody = Partial<CreateCardBody>

export type GetCardsInDeckParams = {
  answer?: string
  currentPage?: string
  itemsPerPage?: string
  orderBy?: null | string
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
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
  userId?: string
}

export type CreateDeckArgs = {
  cover?: File | null
  isPrivate?: boolean
  name: string
}

export type GetMinMax = {
  max: number
  min: number
}

export type CardWithoutGrade = Omit<CardWithGrade, 'grade'>

export type ErrorMessage = {
  field: string
  message: string
}

export type AppError = {
  data: {
    errorMessages: ErrorMessage[]
  }
  status: number
}

export type BaseError = {
  data: {
    message: string
    path: string
    statusCode: number
    timestamp: Date
  }
  status: number
}
