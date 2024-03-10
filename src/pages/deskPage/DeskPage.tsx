import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DescTable } from '@/components/ui/table/DescTable/DescTable'
import { HeadCellProps } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import { GetDecksResponse } from '@/services/api-types'
import { useGetAllDecksQuery } from '@/services/desk-api'
import { decksDto } from '@/utils/decksDto'

import s from './deskPage.module.scss'

export const DeskPage = () => {
  const { pageCount } = useParams()
  const { data } = useGetAllDecksQuery()

  console.log(data)

  const tabs = [
    { name: 'My Cards', value: 'myCards' },
    { name: 'All Cards', value: 'allCards' },
  ]

  return (
    <div className={s.superContainer}>
      <div className={s.container}>
        <div className={s.sectionHeader}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button>Add New Deck</Button>
        </div>
        <div className={s.deskActions}>
          <Input className={s.search} placeholder={'Input search'} variant={'search'} />

          <div className={s.flexItemsContainer}>
            <Typography className={s.tabLabel} variant={'body2'}>
              Show decks cards
            </Typography>
            <TabSwitcher tabs={tabs}></TabSwitcher>
          </div>
          <div className={s.flexItemsContainer}>
            <Typography className={s.sliderLabel} variant={'body2'}>
              Number of cards
            </Typography>
            <Slider />
          </div>
          <Button variant={'secondary'}>Clear Filter</Button>
        </div>
        <DescTable
          className={s.table}
          decks={decksDto(data ?? ({} as GetDecksResponse))}
          head={columns}
        />
        <Pagination totalPages={data?.pagination.totalPages || 1} />
      </div>
    </div>
  )
}

const columns: HeadCellProps[] = [
  { key: 'name', title: 'Name' },
  { key: 'cards', title: 'Cards' },
  { key: 'lastUpdated', title: 'Last Updated' },
  { key: 'createdBy', title: 'Created by' },
  { key: '', title: '' },
]

const res = {
  items: [
    {
      author: {
        id: '2311111f-61b6-4168-91b1-1b2307bcf458',
        name: 'Dragon',
      },
      cardsCount: 4,
      cover: null,
      created: '2023-11-07T16:27:31.497Z',
      id: 'cloojo6qw1evxvo2q7v37mz4q',
      isPrivate: false,
      name: '🔥🌛🍂',
      updated: '2023-12-01T09:43:18.171Z',
      userId: '2311111f-61b6-4168-91b1-1b2307bcf458',
    },
    {
      author: {
        id: '0afa4517-54e8-4b13-a9a6-01fde9e42f76',
        name: 'Android 🤖',
      },
      cardsCount: 0,
      cover: null,
      created: '2023-10-18T19:12:27.906Z',
      id: 'clnw4r9j5123mvo2qurvlo8d4',
      isPrivate: false,
      name: '🙃🙃🙃',
      updated: '2023-10-18T19:12:27.906Z',
      userId: '0afa4517-54e8-4b13-a9a6-01fde9e42f76',
    },
    {
      author: {
        id: 'b92084f6-6177-48ce-97f5-5d50e968cc82',
        name: 'Wedzmin',
      },
      cardsCount: 3,
      cover: null,
      created: '2023-12-03T14:34:55.606Z',
      id: 'clppl3j7a097ywv2qlxqf87e6',
      isPrivate: false,
      name: '🗝🗝🗝',
      updated: '2023-12-08T21:00:46.377Z',
      userId: 'b92084f6-6177-48ce-97f5-5d50e968cc82',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-02-23T14:11:44.484Z',
      id: 'clsyqdkgz0fiirr2ufav7q6dn',
      isPrivate: false,
      name: '🚀 newDeck',
      updated: '2024-02-23T14:11:44.484Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-02-23T14:19:48.539Z',
      id: 'clsyqnxyy0fjerr2uqzd17lsf',
      isPrivate: false,
      name: '🚀 newDeck',
      updated: '2024-02-23T14:19:48.539Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-21T17:50:12.131Z',
      id: 'clrnsneeb003by42wzcfnogij',
      isPrivate: false,
      name: '🐸 new card updated updated',
      updated: '2024-01-21T19:01:07.387Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-21T17:55:12.171Z',
      id: 'clrnsttwq003hy42wjx2fsddx',
      isPrivate: false,
      name: '🥳 new card updated updated',
      updated: '2024-01-21T18:10:40.115Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-01-21T17:49:04.511Z',
      id: 'clrnsly7z003ay42wb28ao26l',
      isPrivate: false,
      name: '🐸 new card',
      updated: '2024-01-21T17:49:04.511Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2024-02-11T17:23:02.188Z',
      id: 'clshrxcq309ajrr2uedmeph7v',
      isPrivate: false,
      name: '✨✨✨✨✨✨✨✨✨✨✨✨🦝',
      updated: '2024-02-11T17:23:02.188Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
    {
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'kukus',
      },
      cardsCount: 0,
      cover: null,
      created: '2023-11-21T09:12:53.636Z',
      id: 'clp84b69v017zwv2qp1ivmbof',
      isPrivate: false,
      name: '✅ name p5JTudhxrSxnrp4NtL4xk',
      updated: '2023-11-21T09:12:53.636Z',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
    },
  ],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2524,
    totalPages: 253,
  },
}
