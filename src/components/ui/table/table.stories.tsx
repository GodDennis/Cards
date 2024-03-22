import { Link } from 'react-router-dom'

import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { Play } from '@/icons/Play'
import { decksDto } from '@/utils/decksDto'
import clsx from 'clsx'
import { withRouter } from 'storybook-addon-react-router-v6'

import s from './table.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'
import { DescTableProps } from './DescTable/DescTable'
import { HeadCellProps, THeader } from './THeader'
import { Table } from './TablePrimitive'

const columns: HeadCellProps[] = [
  { filterKey: 'name', title: 'Name' },
  { filterKey: 'cards', title: 'Cards' },
  { filterKey: 'lastUpdated', title: 'Last Updated' },
  { filterKey: 'createdBy', title: 'Created by' },
  { filterKey: '', title: '' },
]

export const TableSt = ({ decks }: Partial<DescTableProps>) => {
  return (
    <Table.Root className={clsx(s.root)}>
      <THeader
        filterHandler={() => {}}
        head={columns}
        sortData={{ filterDirection: 'asc', filterKey: 'name' }}
        withFilter
      />
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
                    <Play fill={undefined} />
                  </Button>
                  {true && (
                    <>
                      <Button className={s.actionBtn}>
                        <EditPen />
                      </Button>
                      <Button className={s.actionBtn}>
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
    </Table.Root>
  )
}
export default {
  component: TableSt, // Сам компонент
  decorators: [withRouter], // Название компонента
  title: 'Components/Table',
}

// eslint-disable-next-line storybook/prefer-pascal-case
export const res = {
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

export type Deck = {
  authorId: string
  cardsCount: number
  cover: null | string
  createdBy: string
  id: string
  lastUpdated: string
  name: string
}

export const Primary = () => <TableSt decks={decksDto(res)} />
