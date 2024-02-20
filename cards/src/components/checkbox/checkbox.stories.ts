import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Box: Story = {
  args: {
    checked: true,
    label: 'click',
    disabled: false,
    className: 'buttonWrapper',
  },
}

export const BoxWithWrapper: Story = {
  args: {
    checked: true,
    label: 'click',
    disabled: false,
    className: 'buttonWrapper',
  },
}
