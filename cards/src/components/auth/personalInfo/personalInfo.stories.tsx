import type { Meta, StoryObj } from '@storybook/react'
import { PersonalInfo } from './personalInfo'
import avatar from '../../../svgs/avatar.png'
const meta = {
  title: 'Auth/PersonalInfo',
  component: PersonalInfo,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    avatar: avatar,
    nickName: 'Joe',
    email: 'j&johnson@gmail.com',
  },
}
