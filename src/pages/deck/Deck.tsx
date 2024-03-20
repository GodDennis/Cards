import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import edit from '@/assets/Images/edit-2-outline.svg'
import play from '@/assets/Images/play-circle-outline.svg'
import trash from '@/assets/Images/trash-outline.svg'
import { useDebounceCallback } from '@/castomHooks/useDebounceCallback'
import { useDebounceValue } from '@/castomHooks/useDebounceValue'
import { usePagination } from '@/castomHooks/usePagination'
import { BackwardLink } from '@/components/ui/backward-link'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader/Loader'
import { Pagination } from '@/components/ui/pagination'
import { HeadCellProps, SortTableData } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/layouts/modals/addNewCard'
import { AddNewDeck } from '@/layouts/modals/addNewDeck'
import { DeleteModal } from '@/layouts/modals/deleteModal'
import { MyDeckTable } from '@/pages/deck/myDeckTable/myDeckTable'
import { AppError } from '@/services/api-types'
import { useGetAuthQuery } from '@/services/auth-api'
import { useDeleteDeckMutation, useGetCardsInDeckQuery, useGetDeckQuery } from '@/services/desk-api'
import { toastAppError } from '@/utils/toastAppError'

import s from './deck.module.scss'

import { DeckEmpty } from './deckEmpty/DeckEmpty'

const baseColumns: HeadCellProps[] = [
  { filterKey: 'question', title: 'Question' },
  { filterKey: 'answer', title: 'Answer' },
  { filterKey: 'updated', title: 'Last Updated' },
  { filterKey: 'grade', title: 'Grade' },
]

export const Deck = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false)
  const [isRefactorDeckOpen, seIsRefactorDeckOpen] = useState<boolean>(false)
  const [isRemoveDeckOpen, seIsRemoveDeckOpen] = useState<boolean>(false)
  const [isAuthor, setIsAuthor] = useState<boolean | null>(null)
  const [sortTableData, setSortTableData] = useState<SortTableData | null>(null)

  const [searchString, setSearchString] = useDebounceValue<string>('', 500)
  const { currentPage, onSetCurrentPage, onSetPageSize, pageSize } = usePagination()

  const { deckId = '' } = useParams()
  const navigate = useNavigate()

  const { data: userData, isFetching: isUserDataLoading } = useGetAuthQuery()
  const { data: deckData, isFetching: isDeckDataLoading } = useGetDeckQuery(deckId)
  const [removeDeckHandler] = useDeleteDeckMutation()

  const sortQueryString =
    sortTableData !== null ? `${sortTableData.filterKey}-${sortTableData.filterDirection}` : null
  const {
    data: cardsData,
    error: queryError,
    isError: isQueryError,
  } = useGetCardsInDeckQuery({
    deckId,
    params: {
      currentPage: String(currentPage),
      itemsPerPage: String(pageSize),
      orderBy: sortQueryString,
      question: searchString,
    },
  })

  useEffect(() => {
    if (userData && deckData) {
      userData.id === deckData.userId ? setIsAuthor(true) : setIsAuthor(false)
    }
  }, [userData, deckData])

  const list = [
    {
      redirect: `/learn/${deckId}`,
      src: play,
      title: 'Learn',
    },
    {
      onClick: () => {
        seIsRefactorDeckOpen(true)
      },
      src: edit,
      title: 'Edit',
    },
    {
      onClick: () => {
        seIsRemoveDeckOpen(true)
      },
      src: trash,
      title: 'Delete',
    },
  ]
  let columns = baseColumns
  const totalPages = cardsData?.pagination.totalPages ?? 0
  const cards = cardsData?.items
  const cover = deckData?.cover

  const onInputChange = (value: string) => {
    onSetCurrentPage(1)
    setSearchString(value)
  }

  const onRemoveDeck = () => {
    removeDeckHandler(deckId)
      .unwrap()
      .then(() => {
        navigate('/')
        toast.success('Deck successfully removed')
      })
      .catch(e => toastAppError(e))
  }

  if (isQueryError) {
    toast.error((queryError as AppError).data.errorMessages[0].message)
  }

  if (isUserDataLoading || isDeckDataLoading || isAuthor === null) {
    return (
      <div className={s.loaderPageContainer}>
        <Loader className={s.pageLoader} />
      </div>
    )
  }
  if (deckData?.cardsCount === 0 && isAuthor !== null) {
    return <DeckEmpty isAuthor={isAuthor} />
  }
  if (currentPage !== 1 && !searchString && currentPage > totalPages) {
    navigate('/404')
  }
  if (isAuthor) {
    columns = [...baseColumns, { filterKey: '', title: '' }]
  }

  if (isAuthor !== null && cards) {
    return (
      <div className={s.container}>
        <div>
          <BackwardLink className={s.linkBack} to={'/'} variant={'body2'}>
            Back to Decks List
          </BackwardLink>
        </div>
        <div className={s.sectionHeader}>
          <div className={s.headerWithDropDown}>
            <div className={s.headerContainer}>
              <Typography as={'h1'} className={s.header} variant={'h1'}>
                {isAuthor ? 'My Deck' : 'Friend’s Deck'}
              </Typography>
              {isAuthor && (
                <DropDownMenu className={s.menu}>
                  <DropDownList options={list} />
                </DropDownMenu>
              )}
            </div>
            {cover && <img alt={'deck image'} className={s.deckImage} src={cover} />}
          </div>
          {isAuthor ? (
            <Button onClick={() => setIsAddOpen(true)}>Add New Card</Button>
          ) : (
            <Button as={Link} to={`/learn/${deckId}`}>
              Learn to Pack
            </Button>
          )}
          <AddNewCard closeHandler={setIsAddOpen} open={isAddOpen} />
        </div>
        <div className={s.deskActions}>
          <Input
            className={s.search}
            defaultValue={''}
            maxLength={29}
            onChange={e => onInputChange(e.currentTarget.value)}
            placeholder={'Input search'}
            variant={'search'}
          />
        </div>
        {cards.length > 0 ? (
          <>
            <MyDeckTable
              cards={cards}
              className={s.table}
              head={columns}
              sortData={sortTableData}
              sortHandler={setSortTableData}
              withSettings={isAuthor}
            />
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              path={`deck/${deckId}`}
              setCurrentPage={onSetCurrentPage}
              setPageSize={onSetPageSize}
              totalPages={totalPages}
            />
          </>
        ) : (
          <Typography
            as={'div'}
            className={s.searchNotification}
            variant={'body1'}
          >{`No elements found with parameter "${searchString}"`}</Typography>
        )}
        <AddNewDeck
          closeHandler={seIsRefactorDeckOpen}
          deckId={deckId}
          isRefactor
          open={isRefactorDeckOpen}
        />
        <DeleteModal
          closeHandler={seIsRemoveDeckOpen}
          elementType={'Deck'}
          open={isRemoveDeckOpen}
          removeHandler={onRemoveDeck}
          title={'Remove Deck'}
        />
      </div>
    )
  }
}
