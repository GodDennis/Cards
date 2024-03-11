import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { THeader } from '@/components/ui/table/THeader'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { DeleteCard } from '@/layouts/modals/deleteCard'
import { getTimeString } from '@/utils/decksDto'
import clsx from 'clsx'

import s from './myDeckTable.module.scss'

type HeadCellProps = {
  [key: string]: string
}
type Deck = {
  answer: string
  grade: number
  id: string
  lastUpdated: string
  question: string
}

type DescTableProps = {
  className?: string
  decks: Deck[]
  head: HeadCellProps[]
  withSettings?: boolean
}

export function getImageOrText(data: string) {
  const isImageURL = (url: string) => {
    const imageExtensions = /\.(jpeg|jpg|gif|png)$/i

    return imageExtensions.test(url)
  }

  if (isImageURL(data)) {
    return <img alt={'Desc Preview'} className={s.deckPreview} src={data} />
  } else {
    return data
  }
}

export const MyDeckTable = ({ className, decks, head, withSettings = true }: DescTableProps) => {
  const [openDelete, setOpenDelete] = useState(false)

  const editHandler = () => {
    return
  }
  const deleteHandler = () => {
    setOpenDelete(true)
  }

  return (
    <Table.Root className={clsx(s.root, className)}>
      <THeader head={head} />
      <Table.Body>
        {decks.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.Cell>{getImageOrText(deck.question)}</Table.Cell>
              <Table.Cell>{getImageOrText(deck.answer)}</Table.Cell>
              <Table.Cell>{getTimeString(deck.lastUpdated)}</Table.Cell>
              <Table.Cell>
                <Rating value={deck.grade} />
              </Table.Cell>
              {withSettings && (
                <Table.Cell>
                  <div className={clsx(s.flexContainer, s.buttonsBlock)}>
                    <Button className={s.actionBtn} onClick={editHandler}>
                      <EditPen />
                    </Button>
                    <Button className={s.actionBtn} onClick={deleteHandler}>
                      <Delete />
                    </Button>
                    {openDelete && <DeleteCard closeHandler={setOpenDelete} open={openDelete} />}
                  </div>
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
