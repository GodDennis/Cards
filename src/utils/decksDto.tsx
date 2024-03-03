import { Deck, res } from '@/components/ui/table/table.stories'

export const decksDto = (items: typeof res): Deck[] => {
  return items.items.map(item => ({
    cardsCount: item.cardsCount,
    createdBy: item.author.name,
    id: item.id,
    lastUpdated: new Date(item.updated).toLocaleDateString('ru-RU'),
    name: item.name,
  }))
}

export const getTimeString = (time: string) => {
  return new Date(time).toLocaleDateString('ru-RU')
}
