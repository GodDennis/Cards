import image from '@/assets/Images/ivan.jpeg'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { Play } from '@/icons/Play'
import clsx from 'clsx'

import s from './descTable.module.scss'

import { Table } from '..'
import { Button } from '../../button'
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
  const playHandler = () => {}
  const editHandler = () => {}
  const deleteHandler = () => {}

  return (
    <Table.Root className={clsx(s.root, className)}>
      <THeader head={head} />
      <Table.Body>
        {decks?.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.Cell>
                <div className={s.flexContainer}>
                  <img alt={'Desc Preview'} className={s.deckPreview} src={image} />
                  {deck.name}
                </div>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount}</Table.Cell>
              <Table.Cell>{deck.lastUpdated}</Table.Cell>
              <Table.Cell>
                <span>{deck.createdBy}</span>
              </Table.Cell>
              <Table.Cell>{deck.lastUpdated}</Table.Cell>
              <Table.Cell>
                <span>{deck.createdBy}</span>
              </Table.Cell>
              <Table.Cell>
                <div className={clsx(s.flexContainer, s.buttonsBlock)}>
                  <Button className={s.actionBtn} onClick={playHandler}>
                    <Play />
                  </Button>
                  <Button className={s.actionBtn} onClick={editHandler}>
                    <EditPen />
                  </Button>
                  <Button className={s.actionBtn} onClick={deleteHandler}>
                    <Delete />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
