import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, TabSwitcher } from './tab-switcher'

const meta = {
  argTypes: {
    changeHandler: {
      action: 'changeHandler',
    },
  },
  args: {},
  component: TabSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const conetentMocks = [
  { content: 'content for tab_1', value: 'tab_1' },
  { content: 'content for tab_2', value: 'tab_2' },
  { content: 'content for tab_3', value: 'tab_3' },
  { content: 'content for tab_4', value: 'tab_4' },
].map(c => (
  <TabContent key={c.value} value={c.value}>
    <p>{c.content}</p>
  </TabContent>
))
const tabsMocks = [
  {
    disabled: false,
    name: 'tab_1',
    value: 'tab_1',
  },
  {
    disabled: false,
    name: 'tab_2',
    value: 'tab_2',
  },
  {
    disabled: false,
    name: 'tab_3',
    value: 'tab_3',
  },
  {
    disabled: false,
    name: 'tab_4',
    value: 'tab_4',
  },
]

export const WithoutContent: Story = {
  args: {
    tabs: tabsMocks,
    title: 'Title',
  },
}
const disabledTabs = tabsMocks.map(t => ({ ...t, disabled: true }))

export const WithoutContentDisabled: Story = {
  args: {
    tabs: disabledTabs,
    title: 'Some title added',
  },
}

export const WithContent: Story = {
  args: {
    children: conetentMocks,
    tabs: tabsMocks,
    title: 'Some title added',
  },
}
