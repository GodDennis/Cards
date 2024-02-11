import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typopraphy'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body1',
  },
}

export const SubTitle1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body2',
  },
}

export const SubTitle2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link2',
  },
}
