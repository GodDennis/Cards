import { Navigate, useParams } from 'react-router-dom'

import { Page } from '../page'
import { QuestionCard } from '../questionCard'

export const LearnPage = () => {
  const { deckId } = useParams<string>()

  if (deckId) {
    return (
      <Page isLoggedIn>
        <QuestionCard deckId={deckId} />
      </Page>
    )
  } else {
    return <Navigate to={'/'} />
  }
}
