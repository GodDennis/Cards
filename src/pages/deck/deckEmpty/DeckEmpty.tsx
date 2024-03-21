import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BackwardLink } from '@/components/ui/backward-link'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/layouts/modals/addNewCard'

import s from './deckEmpty.module.scss'

type DeckEmptyType = {
  isAuthor: boolean
  name: string
}

export const DeckEmpty = ({ isAuthor, name }: DeckEmptyType) => {
  const [openAdd, setOpenAdd] = useState<boolean>(false)

  return (
    <div className={s.container}>
      <div>
        <BackwardLink className={s.linkBack} to={'/'} variant={'body2'}>
          Back to Decks List
        </BackwardLink>
      </div>
      <div className={s.sectionHeader}>
        <div className={s.headerContainer}>
          <Typography as={'h1'} className={s.header} variant={'h1'}>
            {name}
          </Typography>
        </div>
        <Typography as={'p'} className={s.description} variant={'body1'}>
          This pack is empty. {isAuthor && 'Click add new card to fill this pack'}
        </Typography>
        <div className={s.buttonContainer}>
          {isAuthor ? (
            <Button onClick={() => setOpenAdd(true)}>Add New Card</Button>
          ) : (
            <Button as={Link} to={`/decks`}>
              Back to home page
            </Button>
          )}
        </div>
        <AddNewCard closeHandler={setOpenAdd} open={openAdd} />
      </div>
    </div>
  )
}
