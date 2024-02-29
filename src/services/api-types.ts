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
