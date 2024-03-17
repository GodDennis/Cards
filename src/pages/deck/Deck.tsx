import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import edit from '@/assets/Images/edit-2-outline.svg'
import play from '@/assets/Images/play-circle-outline.svg'
import trash from '@/assets/Images/trash-outline.svg'
import { usePagination } from '@/castomHooks/usePagination'
import { BackwardLink } from '@/components/ui/backward-link'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { DropDownList } from '@/components/ui/drop-down-menu/Drop-down-list'
import { Input } from '@/components/ui/input'
import { Loader } from '@/components/ui/loader/Loader'
import { Pagination } from '@/components/ui/pagination'
import { HeadCellProps } from '@/components/ui/table/THeader'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/layouts/modals/addNewCard'
import { AddNewDeck } from '@/layouts/modals/addNewDeck'
import { DeleteModal } from '@/layouts/modals/deleteModal'
import { MyDeckTable } from '@/pages/deck/myDeckTable/myDeckTable'
import { useGetAuthQuery } from '@/services/auth-api'
import { useDeleteDeckMutation, useGetCardsInDeckQuery, useGetDeckQuery } from '@/services/desk-api'

import s from './deck.module.scss'

import { DeckEmpty } from './deckEmpty/DeckEmpty'

const baseColumns: HeadCellProps[] = [
  { key: 'question', title: 'Question' },
  { key: 'answer', title: 'Answer' },
  { key: 'lastUpdated', title: 'Last Updated' },
  { key: 'grade', title: 'Grade' },
]

export const Deck = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false)
  const [isRefactorDeckOpen, seIsRefactorDeckOpen] = useState<boolean>(false)
  const [isRemoveDeckOpen, seIsRemoveDeckOpen] = useState<boolean>(false)
  const [isAuthor, setIsAuthor] = useState<boolean | null>(null)
  const [searchString, setSearchString] = useState<string>('')
  const { deckId = '', pageCount = '' } = useParams()
  const { data: userData, isFetching: isUserDataLoading } = useGetAuthQuery()
  const { data: deckData, isFetching: isDeckDataLoading } = useGetDeckQuery(deckId)
  const navigate = useNavigate()
  const { currentPage, onSetCurrentPage, onSetPageSize, pageSize } = usePagination()
  const [removeDeckHandler] = useDeleteDeckMutation()

  const { data: cardsData, isFetching: isCardsDataLoading } = useGetCardsInDeckQuery({
    deckId,
    params: {
      currentPage: String(currentPage),
      itemsPerPage: String(pageSize),
      question: searchString,
    },
  })

  useEffect(() => {
    if (cardsData?.pagination.currentPage && +pageCount !== cardsData?.pagination.currentPage) {
      navigate(`/deck/${deckId}/${cardsData?.pagination.currentPage}`)
    }
  }, [cardsData?.pagination.currentPage, deckId, pageCount])

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
    columns = [...baseColumns, { key: '', title: '' }]
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetCurrentPage(1)
    setSearchString(e.currentTarget.value)
  }

  const onRemoveDeck = () => {
    removeDeckHandler(deckId)
      .unwrap()
      .then(() => navigate('/'))
      .catch(e => toast.error(e.data.errorMessages[0].message))
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
            <Button onClick={() => setOpenAdd(true)}>Add New Card</Button>
          ) : (
            <Button as={Link} to={`/learn/${deckId}`}>
              Learn to Pack
            </Button>
          )}
          <AddNewCard closeHandler={setOpenAdd} open={openAdd} />
        </div>
        <div className={s.deskActions}>
          <Input
            className={s.search}
            onChange={onInputChange}
            placeholder={'Input search'}
            value={searchString}
            variant={'search'}
          />
        </div>
        <MyDeckTable cards={cards} className={s.table} head={columns} withSettings={isAuthor} />
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          path={`deck/${deckId}`}
          setCurrentPage={onSetCurrentPage}
          setPageSize={onSetPageSize}
          totalPages={totalPages}
        />
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
