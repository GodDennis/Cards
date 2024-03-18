import { Deck } from '@/components/ui/table/table.stories'
import { GetDecksResponse } from '@/services/api-types'

export const decksDto = (items: GetDecksResponse): Deck[] => {
  return items?.items?.map(item => ({
    authorId: item.author.id,
    cardsCount: item?.cardsCount,
    cover: item?.cover,
    createdBy: item?.author.name,
    id: item?.id,
    lastUpdated: new Date(item?.updated).toLocaleDateString('ru-RU'),
    name: item?.name,
  }))
}

export const getTimeString = (time: string) => {
  return new Date(time).toLocaleDateString('ru-RU')
}
