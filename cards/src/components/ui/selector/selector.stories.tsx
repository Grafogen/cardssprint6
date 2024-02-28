import type { Meta, StoryObj } from '@storybook/react'
import { SelectScrollable } from './selector'

const meta = {
  title: 'Components/Selector',
  component: SelectScrollable,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectScrollable>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
