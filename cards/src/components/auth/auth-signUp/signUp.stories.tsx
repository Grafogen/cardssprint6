import type { Meta, StoryObj } from '@storybook/react'
import { SignUp } from '@/components/auth/auth-signUp/signUp'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
