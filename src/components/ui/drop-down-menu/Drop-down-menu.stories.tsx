import type { Meta, StoryObj } from '@storybook/react'

import ivan from '@/assets/Images/ivan.jpeg'
import { DropDownMenu } from '@/components/ui/drop-down-menu'
import { Delete } from '@/icons/Delete'
import { EditPen } from '@/icons/EditPen'
import { LogOutOutline } from '@/icons/LogOutOutline'
import { Play } from '@/icons/Play'
import { Profile } from '@/icons/Profile'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Avatar } from '../avatar/Avatar'
import { DropDownList } from './Drop-down-list'
import { UserBarDropDown } from './Drop-down-user-bar'
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

const options = [
  { icon: <Play />, redirect: '#', title: 'Learn' },
  { icon: <EditPen />, redirect: '#', title: 'Edit' },
  { icon: <Delete />, redirect: '#', title: 'Delete' },
]

const userOptions = [
  { icon: <Profile />, redirect: '#', title: 'My Profile' },
  { icon: <LogOutOutline />, redirect: '#', title: 'Sign Out' },
]
const userBarInfo = {
  avatar: ivan,
  email: 'j&johnson@gmail.com',
  id: 1,
  userName: 'Ivan',
}

export default meta
type Story = StoryObj<typeof meta>

export const WithUser: Story = {
  args: {
    children: (
      <>
        <UserBarDropDown
          avatar={userBarInfo.avatar}
          email={userBarInfo.email}
          id={userBarInfo.id}
          userName={userBarInfo.userName}
        />
        <DropDownList options={userOptions} />
      </>
    ),
    trigger: <Avatar src={userBarInfo?.avatar} />,
  },
}
export const Simple: Story = {
  args: {
    children: <DropDownList options={options} />,
  },
}
