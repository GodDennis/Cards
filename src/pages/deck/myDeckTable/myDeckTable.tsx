import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { THeader } from '@/components/ui/table/THeader'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { DeleteCard } from '@/layouts/modals/deleteCard'
import { CardWithGrade } from '@/services/api-types'
import { getTimeString } from '@/utils/decksDto'
import clsx from 'clsx'

import s from './myDeckTable.module.scss'

type HeadCellProps = {
  [key: string]: string
}
type card = CardWithGrade

type DescTableProps = {
  cards: card[]
  className?: string
  head: HeadCellProps[]
  withSettings?: boolean
}

export const MyDeckTable = ({ cards, className, head, withSettings = false }: DescTableProps) => {
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
        {cards.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell>
                {card.questionImg ? (
                  <img alt={'Question image'} className={s.deckPreview} src={card.questionImg} />
                ) : (
                  card.question
                )}
              </Table.Cell>
              <Table.Cell>
                {card.answerImg ? (
                  <img alt={'Answer image'} className={s.deckPreview} src={card.answerImg} />
                ) : (
                  card.answer
                )}
              </Table.Cell>
              <Table.Cell>{getTimeString(card.updated)}</Table.Cell>
              <Table.Cell className={s.gradeCell}>
                <Rating value={+card.grade} />
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
                  </div>
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
      <DeleteCard closeHandler={setOpenDelete} open={openDelete} />
    </Table.Root>
  )
}
