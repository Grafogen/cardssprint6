import type { Meta, StoryObj } from '@storybook/react'
import { Login } from '@/components/auth/auth-login/login'

const meta = {
  title: 'Auth/Login',
  component: Login,
  tags: ['autodocs'],
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
