import type { Meta, StoryObj } from '@storybook/react'

import edit from '@/assets/Images/edit-2-outline.svg'
import ivan from '@/assets/Images/ivan.jpeg'
import logOut from '@/assets/Images/log-out.svg'
import person from '@/assets/Images/person-outline.svg'
import play from '@/assets/Images/play-circle-outline.svg'
import trash from '@/assets/Images/trash-outline.svg'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { withRouter } from 'storybook-addon-react-router-v6'
const meta = {
  argTypes: {},
  component: DropDownMenu,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Drop-down-menu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const WithUser: Story = {
  args: {
    list: [
      { redirect: '#', src: person, title: 'My Profile' },
      { redirect: '#', src: logOut, title: 'Sign Out' },
    ],
    userBarInfo: {
      avatar: ivan,
      email: 'j&johnson@gmail.com',
      id: 1,
      userName: 'Ivan',
    },
    variant: 'avatar',
  },
}
export const Simple: Story = {
  args: {
    list: [
      { redirect: '#', src: play, title: 'Learn' },
      { redirect: '#', src: edit, title: 'Edit' },
      { redirect: '#', src: trash, title: 'Delete' },
    ],
    variant: 'contextMenu',
  },
}
