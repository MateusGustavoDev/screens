import { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'
import { SessionProvider } from 'next-auth/react'

const meta: Meta<typeof Header> = {
  title: 'ui/Header',
  component: Header,
  decorators: [
    (Story) => {
      return <SessionProvider>{Story()}</SessionProvider>
    },
  ],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
