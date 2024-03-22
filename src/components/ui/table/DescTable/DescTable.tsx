import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { Play } from '@/icons/Play'
import { AddNewDeck } from '@/layouts/modals/addNewDeck'
import { useDeleteDeckMutation } from '@/services/desk-api'
import { toastBaseError } from '@/utils/toastBaseError'
import clsx from 'clsx'

import s from './descTable.module.scss'

import { Table } from '..'
import { Button } from '../../button'
import { Typography } from '../../typography'
import { HeadCellProps, SortTableData, THeader } from '../THeader'

type Deck = {
  authorId: string
  cardsCount: number
  cover: null | string
  createdBy: string
  id: string
  lastUpdated: string
  name: string
}

export type DescTableProps = {
  authId: string
  className?: string
  decks: Deck[]
  head: HeadCellProps[]
  sortData?: SortTableData | null
  sortHandler?: (data: SortTableData) => void
}

export const DescTable = ({
  authId,
  className,
  decks,
  head,
  sortData,
  sortHandler,
}: DescTableProps) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [currentDeckId, setCurrentDeckId] = useState<string>('')
  const editHandler = (deckId: string) => {
    setCurrentDeckId(deckId)
    setEditOpen(true)
  }

  const deleteHandler = (id: string) => {
    deleteDeck(id)
      .unwrap()
      .then(() => toast.success('Deck successfully removed'))
      .catch(e => toastBaseError(e))
  }

  return (
    <Table.Root className={clsx(s.root, className)}>
      <THeader filterHandler={sortHandler} head={head} sortData={sortData} withFilter />
      <Table.Body>
        {decks?.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.Cell className={s.nameCell}>
                <div className={s.flexContainer}>
                  {deck.cover && (
                    <img alt={'Desc Preview'} className={s.deckPreview} src={deck.cover} />
                  )}

                  <Typography
                    as={Link}
                    className={s.link}
                    to={`/deck/${deck.id}`}
                    variant={'body2'}
                  >
                    {deck.name}
                  </Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.countCell}>
                <Typography variant={'body2'}>{deck.cardsCount}</Typography>
              </Table.Cell>
              <Table.Cell className={s.dateCell}>
                <Typography variant={'body2'}>{deck.lastUpdated}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={'body2'}>{deck.createdBy}</Typography>
              </Table.Cell>
              <Table.Cell className={s.btnsCell}>
                <div className={clsx(s.flexContainer, s.buttonsBlock)}>
                  <Button
                    as={Link}
                    className={s.actionBtn}
                    to={deck.cardsCount ? '/learn/' + deck.id : '#'}
                  >
                    <Play fill={deck.cardsCount ? undefined : '#4C4C4C'} />
                  </Button>
                  {authId === deck.authorId && (
                    <>
                      <Button className={s.actionBtn} onClick={() => editHandler(deck.id)}>
                        <EditPen />
                      </Button>
                      <Button className={s.actionBtn} onClick={() => deleteHandler(deck.id)}>
                        <Delete />
                      </Button>
                    </>
                  )}
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
