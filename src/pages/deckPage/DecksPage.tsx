import { useState } from 'react'

import { useInput } from '@/castomHooks/useInput'
import { usePagination } from '@/castomHooks/usePagination'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DescTable } from '@/components/ui/table/DescTable/DescTable'
import { HeadCellProps, SortTableData } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/layouts/modals/addNewDeck'
import { GetDecksResponse } from '@/services/api-types'
import { useGetAuthQuery } from '@/services/auth-api'
import { useGetDecksQuery, useGetMinMaxQuery } from '@/services/desk-api'
import { decksDto } from '@/utils/decksDto'

import s from './deckPage.module.scss'

export const DecksPage = () => {
  const { currentPage, onSetCurrentPage, onSetPageSize, pageSize } = usePagination()
  const { debouncedSearchStr, onInputChange, searchParams } = useInput()

  const [isAddDeckOpen, setIsAddDeckOpen] = useState<boolean>(false)
  const [tabValue, setTabValue] = useState<string>('allCards')
  const [minMaxValue, setMinMaxValue] = useState<number[]>([])
  const [sortTableData, setSortTableData] = useState<SortTableData | null>(null)

  const { data: minMaxData } = useGetMinMaxQuery()
  const { data: userData } = useGetAuthQuery()

  const sortQueryString =
    sortTableData !== null ? `${sortTableData.filterKey}-${sortTableData.filterDirection}` : null
  const { data } = useGetDecksQuery({
    authorId: tabValue === 'myCards' ? userData.id : '',
    currentPage: currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: minMaxValue[1],
    minCardsCount: minMaxValue[0],
    name: debouncedSearchStr,
    orderBy: sortQueryString,
  })
  const isSearch = !!debouncedSearchStr
  const isDataNotEmpty = data?.items && data?.items.length > 0

  const tabs = [
    { name: 'My Cards', value: 'myCards' },
    { name: 'All Cards', value: 'allCards' },
  ]

  const swichIsAddDeckOpenHandler = () => {
    setIsAddDeckOpen(true)
  }

  return (
    <div className={s.superContainer}>
      <div className={s.container}>
        <div className={s.sectionHeader}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button onClick={swichIsAddDeckOpenHandler}>Add New Deck</Button>
        </div>
        <div className={s.deskActions}>
          <Input
            className={s.search}
            // defaultValue={''}
            onChange={onInputChange}
            placeholder={'Input search'}
            value={searchParams.get('val') ?? ''}
            variant={'search'}
          />

          <div className={s.flexItemsContainer}>
            <Typography className={s.tabLabel} variant={'body2'}>
              Show decks cards
            </Typography>
            <TabSwitcher changeHandler={setTabValue} tabs={tabs} value={tabValue}></TabSwitcher>
          </div>
          <div className={s.flexItemsContainer}>
            <Typography className={s.sliderLabel} variant={'body2'}>
              Number of cards
            </Typography>
            {minMaxData && (
              <Slider
                maxValue={minMaxData?.max}
                minValue={minMaxData?.min}
                onChange={setMinMaxValue}
                value={minMaxValue}
              />
            )}
          </div>
          <Button variant={'secondary'}>Clear Filter</Button>
        </div>
        {isDataNotEmpty ? (
          <>
            <DescTable
              authId={userData.id}
              className={s.table}
              decks={decksDto(data ?? ({} as GetDecksResponse))}
              head={columns}
              sortData={sortTableData}
              sortHandler={setSortTableData}
            />
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              path={'decks'}
              setCurrentPage={onSetCurrentPage}
              setPageSize={onSetPageSize}
              totalPages={data?.pagination.totalPages || 1}
            />
          </>
        ) : (
          <Typography as={'div'} className={s.searchNotification} variant={'body1'}>
            {isSearch ? `No decks found with name "${debouncedSearchStr}"` : 'No decks found'}
          </Typography>
        )}
      </div>
      <AddNewDeck closeHandler={setIsAddDeckOpen} open={isAddDeckOpen} />
    </div>
  )
}

const columns: HeadCellProps[] = [
  { filterKey: 'name', title: 'Name' },
  { filterKey: 'cardsCount', title: 'Cards' },
  { filterKey: 'updated', title: 'Last Updated' },
  { filterKey: 'author.name', title: 'Created by' },
  { filterKey: '', title: '' },
]
