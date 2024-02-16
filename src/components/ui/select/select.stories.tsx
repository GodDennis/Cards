import type { Meta, StoryObj } from '@storybook/react'
import SelectDemo from "@/components/ui/select/select";

const meta = {
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
    component: SelectDemo,
    tags: ['autodocs'],
    title: 'Components/SelectDemo',
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

export const SelectStory: Story = {
}
