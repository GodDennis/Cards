import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { HeadCellProps, SortTableData, THeader } from '@/components/ui/table/THeader'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { AddNewCard } from '@/layouts/modals/addNewCard'
import { DeleteModal } from '@/layouts/modals/deleteModal'
import { CardWithGrade } from '@/services/api-types'
import { useDeleteCardMutation } from '@/services/cards-api'
import { getTimeString } from '@/utils/decksDto'
import { errorHelper } from '@/utils/errorHelper'
import clsx from 'clsx'

import s from './myDeckTable.module.scss'

type card = CardWithGrade

type DescTableProps = {
  cards: card[]
  className?: string
  head: HeadCellProps[]
  sortData?: SortTableData | null
  sortHandler?: (data: SortTableData) => void
  withSettings?: boolean
}

export const MyDeckTable = ({
  cards,
  className,
  head,
  sortData,
  sortHandler,
  withSettings = false,
}: DescTableProps) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [isRefactorOpen, setIsRefactorOpen] = useState<boolean>(false)
  const [cardId, setCardId] = useState<string>('')
  const [deleteCardHandler] = useDeleteCardMutation()

  const onDeleteBtnClick = (cardId: string) => {
    setCardId(cardId)
    setOpenDelete(true)
  }

  const onRefactorClick = (cardId: string) => {
    setCardId(cardId)
    setIsRefactorOpen(true)
  }

  const removeHandler = () => {
    deleteCardHandler(cardId)
      .unwrap()
      .then(() => toast.success('Card successfully removed'))
      .catch(e => errorHelper(e))
  }

  return (
    <Table.Root className={clsx(s.root, className)}>
      <THeader filterHandler={sortHandler} head={head} sortData={sortData} withFilter />
      <Table.Body>
        {cards.map(card => {
          return (
            <Table.Row key={card.id}>
              <Table.Cell className={s.questionCell}>
                {card.questionImg ? (
                  <img alt={'Question image'} className={s.deckPreview} src={card.questionImg} />
                ) : (
                  card.question
                )}
              </Table.Cell>
              <Table.Cell className={s.nswerCell}>
                {card.answerImg ? (
                  <img alt={'Answer image'} className={s.deckPreview} src={card.answerImg} />
                ) : (
                  card.answer
                )}
              </Table.Cell>
              <Table.Cell className={s.timeCell}>{getTimeString(card.updated)}</Table.Cell>
              <Table.Cell className={s.gradeCell}>
                <Rating value={+card.grade} />
              </Table.Cell>
              {withSettings && (
                <Table.Cell>
                  <div className={clsx(s.flexContainer, s.buttonsBlock)}>
                    <Button className={s.actionBtn} onClick={() => onRefactorClick(card.id)}>
                      <EditPen />
                    </Button>
                    <Button className={s.actionBtn} onClick={() => onDeleteBtnClick(card.id)}>
                      <Delete />
                    </Button>
                  </div>
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
      <DeleteModal
        closeHandler={setOpenDelete}
        elementType={'Card'}
        open={openDelete}
        removeHandler={removeHandler}
        title={'Delete card'}
      />
      <AddNewCard
        cardId={cardId}
        closeHandler={setIsRefactorOpen}
        isRefactor
        open={isRefactorOpen}
      />
    </Table.Root>
  )
}
