import { useState } from 'react'
import { Link } from 'react-router-dom'

import image from '@/assets/Images/ivan.jpeg'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { Play } from '@/icons/Play'
import { AddNewDeck } from '@/layouts/modals/addNewDeck'
import { useDeleteDeckMutation } from '@/services/desk-api'
import clsx from 'clsx'

import s from './descTable.module.scss'

import { Table } from '..'
import { Button } from '../../button'
import { Typography } from '../../typography'
import { THeader } from '../THeader'

type HeadCellProps = {
  [key: string]: string
}
type Deck = {
  cardsCount: number
  createdBy: string
  id: string
  lastUpdated: string
  name: string
}

type DescTableProps = {
  className?: string
  decks: Deck[]
  head: HeadCellProps[]
}

export const DescTable = ({ className, decks, head }: DescTableProps) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [currentDeckId, setCurrentDeckId] = useState<string>('')

  const playHandler = () => {
    return
  }
  const editHandler = (deckId: string) => {
    setCurrentDeckId(deckId)
    setEditOpen(true)
  }

  const deleteHandler = (id: string) => {
    deleteDeck(id)
  }

  return (
    <Table.Root className={clsx(s.root, className)}>
      <THeader head={head} />
      <Table.Body>
        {decks?.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.Cell>
                <div className={s.flexContainer}>
                  {image && <img alt={'Desc Preview'} className={s.deckPreview} src={image} />}
                  <Typography
                    as={Link}
                    className={s.link}
                    to={`/deck/${deck.id}/1`}
                    variant={'body2'}
                  >
                    {deck.name}
                  </Typography>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={'body2'}>{deck.cardsCount}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={'body2'}>{deck.lastUpdated}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={'body2'}>{deck.createdBy}</Typography>
              </Table.Cell>
              <Table.Cell>
                <div className={clsx(s.flexContainer, s.buttonsBlock)}>
                  <Button
                    as={Link}
                    className={s.actionBtn}
                    onClick={playHandler}
                    to={'/learn/' + deck.id}
                  >
                    <Play />
                  </Button>
                  <Button className={s.actionBtn} onClick={() => editHandler(deck.id)}>
                    <EditPen />
                  </Button>
                  <Button className={s.actionBtn} onClick={() => deleteHandler(deck.id)}>
                    <Delete />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
      <AddNewDeck closeHandler={setEditOpen} deckId={currentDeckId} isRefactor open={editOpen} />
    </Table.Root>
  )
}
