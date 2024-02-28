import type {Meta, StoryObj} from '@storybook/react'

import {MyDeck} from '.'
import {withRouter} from "storybook-addon-react-router-v6";

const meta = {
    argTypes: {},
    component: MyDeck,
    tags: ['autodocs'],
    decorators: [withRouter],
    title: 'Pages/MyDeck',
} satisfies Meta<typeof MyDeck>

export default meta
type Story = StoryObj<typeof meta>

export const MyDeckLayout: Story = {}