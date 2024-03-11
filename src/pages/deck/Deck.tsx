import { useState } from 'react'
import { Link } from 'react-router-dom'

import edit from '@/assets/Images/edit-2-outline.svg'
import play from '@/assets/Images/play-circle-outline.svg'
import trash from '@/assets/Images/trash-outline.svg'
import { BackwardLink } from '@/components/ui/backward-link'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { HeadCellProps } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/layouts/modals/addNewCard'
import { MyDeckTable } from '@/pages/deck/myDeckTable/myDeckTable'

import s from './deck.module.scss'

import image from './../../layouts/images/Mask.png'

export const Deck = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false)
  const [isAuthor, setIsAuthor] = useState<boolean>(false)

  const list = [
    {
      onClick: () => {
        return
      },
      redirect: '#',
      src: play,
      title: 'Learn',
    },
    {
      onClick: () => {
        return
      },
      redirect: '#',
      src: edit,
      title: 'Edit',
    },
    {
      onClick: () => {
        return
      },
      redirect: '#',
      src: trash,
      title: 'Delete',
    },
  ]

  return (
    <div className={s.container}>
      <div>
        <BackwardLink className={s.linkBack} to={'/'} variant={'body2'}>
          Back to Decks List
        </BackwardLink>
      </div>
      <div className={s.sectionHeader}>
        <div className={s.headerWithDropDown}>
          <Typography variant={'h1'}>{isAuthor ? 'My Deck' : 'Friend’s Deck'}</Typography>
          {isAuthor && (
            <DropDownMenu className={s.menu}>
              <DropDownList options={list} />
            </DropDownMenu>
          )}
        </div>
        {isAuthor ? (
          <Button onClick={() => setOpenAdd(true)}>Add New Card</Button>
        ) : (
          // !!! add id to a path
          <Button as={Link} to={`/learn/`}>
            Learn to Pack
          </Button>
        )}
        {openAdd && <AddNewCard closeHandler={setOpenAdd} open={openAdd} />}
      </div>
      <div className={s.deskActions}>
        <Input className={s.search} placeholder={'Input search'} variant={'search'} />
      </div>
      <MyDeckTable className={s.table} decks={decks} head={columns} withSettings={isAuthor} />
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
    answer: 'This is TS',
    grade: 3,
    id: '1',
    lastUpdated: '2024-02-11T17:23:02.188Z',
    question: 'This is JS',
  },
  {
    answer: image,
    grade: 4,
    id: '2',
    lastUpdated: '2024-02-11T17:23:02.188Z',
    question: image,
  },
]
