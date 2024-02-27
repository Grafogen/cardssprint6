import type { Meta, StoryObj } from '@storybook/react'
import { EditProfile } from './editProfile'
import avatar from '../../../svgs/avatar.png'
const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    avatar: avatar,
    nickName: 'Joe',
  },
}
