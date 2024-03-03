import { Deck } from '@/components/ui/table/table.stories'
import { GetDecksResponse } from '@/services/api-types'

export const decksDto = (items: GetDecksResponse): Deck[] => {
  return items.items.map(item => ({
    cardsCount: item.cardsCount,
    createdBy: item.author.name,
    id: item.id,
    lastUpdated: new Date(item.updated).toLocaleDateString('ru-RU'),
    name: item.name,
  }))
}
