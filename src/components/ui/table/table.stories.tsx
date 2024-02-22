import type { Meta, StoryObj } from '@storybook/react'

import { DescTable } from './DescTable/DescTable'
import { HeadCellProps } from './THeader'

const meta = {
  component: DescTable,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof DescTable>

export default meta
type Story = StoryObj<typeof meta>

const columns: HeadCellProps[] = [
  { key: 'name', title: 'Name' },
  { key: 'cards', title: 'Cards' },
  { key: 'lastUpdated', title: 'Last Updated' },
  { key: 'createdBy', title: 'Created by' },
  { key: '', title: '' },
]

const items = [
  {
    author: 'Artur',
    count: 4,
    lastUpdate: '18.03.2021',
    title: 'Pack Name',
  },
  {
    author: 'Dennis',
    count: 4,
    lastUpdate: '18.03.2021',
    title: 'Pack Name',
  },
  {
    author: 'Nina',
    count: 4,
    lastUpdate: '18.03.2021',
    title: 'Pack Name',
  },
]

export const Table: Story = {
  args: {
    head: columns,
    items,
  },
}
