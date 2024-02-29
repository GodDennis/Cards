export type SaveGradeBody = {
  cardId: string
  grade: string
}

export type UpdateCardBody = {
  answer?: string
  answerImg?: string
  answerVideo?: string
  question?: string
  questionImg?: string
  questionVideo?: string
}
