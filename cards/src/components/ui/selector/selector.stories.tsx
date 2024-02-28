import type { Meta, StoryObj } from '@storybook/react'
import { Selector } from './selector'

const meta = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
