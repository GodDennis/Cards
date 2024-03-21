import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useInput } from '@/castomHooks/useInput'
import { useMinMax } from '@/castomHooks/useMinMax'
import { usePagination } from '@/castomHooks/usePagination'
import { useTabs } from '@/castomHooks/useTabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader/Loader'
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
import { handleQueryError } from '@/utils/handleQueryError'

import s from './deckPage.module.scss'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { onSetCurrentPage, onSetPageSize } = usePagination()
  const { debouncedSearchStr, onInputChange } = useInput()
  const { onTabChange } = useTabs()
  const { debouncedMax, debouncedMin, onMinMaxChange } = useMinMax()

  const [isAddDeckOpen, setIsAddDeckOpen] = useState<boolean>(false)
  // const [tabValue, setTabValue] = useState<string>('allCards')
  const [sortTableData, setSortTableData] = useState<SortTableData | null>(null)

  const { data: minMaxData, isLoading: isMinMaxLoading } = useGetMinMaxQuery()
  const { data: userData, isLoading: isGetAuthLoading } = useGetAuthQuery()

  const sortQueryString =
    sortTableData !== null ? `${sortTableData.filterKey}-${sortTableData.filterDirection}` : null
  const {
    data,
    error: getDecksError,
    isError: isGetDecksError,
    isLoading: isGetDecksLoading,
  } = useGetDecksQuery(
    {
      authorId: searchParams.get('tab') === 'myCards' ? userData.id : '',
      currentPage: Number(searchParams.get('page') ?? 1),
      itemsPerPage: Number(searchParams.get('size') ?? 10),
      maxCardsCount: Number(debouncedMax),
      minCardsCount: Number(debouncedMin),
      name: debouncedSearchStr,
      orderBy: sortQueryString,
    },
    {
      skip:
        debouncedMax === null ||
        Number.isNaN(Number(debouncedMax)) ||
        debouncedMin === null ||
        Number.isNaN(Number(debouncedMin)),
    }
  )
  const isSearch = !!debouncedSearchStr
  const isDataNotEmpty = data?.items && data?.items.length > 0

  const tabs = [
    { name: 'My Cards', value: 'myCards' },
    { name: 'All Cards', value: 'allCards' },
  ]

  const swichIsAddDeckOpenHandler = () => {
    setIsAddDeckOpen(true)
  }

  handleQueryError(isGetDecksError, getDecksError)
  if (isMinMaxLoading || isGetAuthLoading || isGetDecksLoading) {
    return <Loader />
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
            onChange={onInputChange}
            placeholder={'Input search'}
            value={searchParams.get('search') ?? ''}
            variant={'search'}
          />

          <div className={s.flexItemsContainer}>
            <Typography className={s.tabLabel} variant={'body2'}>
              Show decks cards
            </Typography>
            <TabSwitcher
              changeHandler={onTabChange}
              tabs={tabs}
              value={searchParams.get('tab') || 'allCards'}
            ></TabSwitcher>
          </div>
          <div className={s.flexItemsContainer}>
            <Typography className={s.sliderLabel} variant={'body2'}>
              Number of cards
            </Typography>
            {minMaxData && (
              <Slider
                maxValue={minMaxData?.max}
                minValue={minMaxData?.min}
                onChange={onMinMaxChange}
                value={[
                  searchParams.get('min') !== null && searchParams.get('min')
                    ? Number(searchParams.get('min'))
                    : minMaxData?.min,
                  searchParams.get('max') !== null && searchParams.get('max')
                    ? Number(searchParams.get('max'))
                    : minMaxData?.max,
                ]}
              />
            )}
          </div>
          <Button onClick={() => setSearchParams({})} variant={'secondary'}>
            Clear Filter
          </Button>
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
              currentPage={Number(searchParams.get('page') ?? 1)}
              pageSize={Number(searchParams.get('size') ?? 10)}
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
