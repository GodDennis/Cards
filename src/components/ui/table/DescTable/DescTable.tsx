import image from '@/assets/Images/ivan.jpeg'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { Play } from '@/icons/Play'

import s from './descTable.module.scss'

import { Table } from '..'
import { Button } from '../../button'
import { THeader } from '../THeader'

type HeadCellProps = {
  [key: string]: string
}
type DescTableProps = {
  head: HeadCellProps[]
  items: any[]
}

export const DescTable = ({ head, items }: DescTableProps) => {
  const { Body, Cell, Root, Row } = Table

  const playHandler = () => {}
  const editHandler = () => {}
  const deleteHandler = () => {}

  return (
    <Root className={s.root}>
      <THeader head={head} />
      <Body>
        {' '}
        {items.map(item => {
          return (
            <Row key={item}>
              <Cell>
                <div className={s.flexContainer}>
                  <img alt={'Desc Preview'} className={s.deckPreview} src={image} />
                  {item.title}
                </div>
              </Cell>
              <Cell>{item.count}</Cell>
              <Cell>{item.lastUpdate}</Cell>
              <Cell>
                <span>{item.author}</span>
              </Cell>
              <Cell>
                <div className={`${s.flexContainer} ${s.buttonsBlock}`}>
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
              </Cell>
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}
