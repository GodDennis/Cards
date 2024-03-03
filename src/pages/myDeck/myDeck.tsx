import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { HeadCellProps } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import image from './../../layouts/images/Mask.png'
import s from './myDeck.module.scss'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { BackwardLink } from '@/components/ui/backward-link'
import play from '@/assets/Images/play-circle-outline.svg'
import edit from '@/assets/Images/edit-2-outline.svg'
import trash from '@/assets/Images/trash-outline.svg'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { MyDeckTable } from '@/pages/myDeck/myDeckTable/myDeckTable'
import { useState } from 'react'
import { AddNewCard } from '@/layouts/modals/addNewCard'

export const MyDeck = () => {
  const [openAdd, setOpenAdd] = useState(false)

  const list = [
    { redirect: '#', src: play, title: 'Learn' },
    { redirect: '#', src: edit, title: 'Edit' },
    { redirect: '#', src: trash, title: 'Delete' },
  ]

  return (
    <div className={s.container}>
      <div>
        <BackwardLink to={'https://google.com'} variant={'body2'} className={s.linkBack}>
          Back to Decks List
        </BackwardLink>
      </div>
      <div className={s.sectionHeader}>
        <div className={s.headerWithDropDown}>
          <Typography variant={'h1'}>My Deck</Typography>
          <DropDownMenu children={<DropDownList list={list} />} className={s.menu} />
        </div>
        <Button onClick={() => setOpenAdd(true)}>Add New Card</Button>
        {openAdd && <AddNewCard open={openAdd} closeHandler={setOpenAdd} />}
      </div>
      <div className={s.deskActions}>
        <Input className={s.search} variant={'search'} placeholder={'Input search'} />
      </div>
      <MyDeckTable className={s.table} decks={decks} head={columns} />
      <Pagination />
    </div>
  )
}

const columns: HeadCellProps[] = [
  { key: 'question', title: 'Question' },
  { key: 'answer', title: 'Answer' },
  { key: 'lastUpdated', title: 'Last Updated' },
  { key: 'grade', title: 'Grade' },
  { key: '', title: '' },
]

export const decks = [
  {
    id: '1',
    question: 'This is JS',
    answer: 'This is TS',
    lastUpdated: '2024-02-11T17:23:02.188Z',
    grade: 3,
  },
  {
    id: '2',
    question: image,
    answer: image,
    lastUpdated: '2024-02-11T17:23:02.188Z',
    grade: 4,
  },
]
