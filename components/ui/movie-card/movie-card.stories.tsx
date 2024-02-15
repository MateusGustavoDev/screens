import { Meta, StoryObj } from '@storybook/react'
import { MovieCard } from './movie-card'

const meta: Meta<typeof MovieCard> = {
  title: 'ui/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  argTypes: {
    movieImage: {
      control: 'text',
      description: 'Caminho do backdrop path do filme',
    },
    name: {
      control: 'text',
      description: 'Nome do filme',
    },
    horizontal: {
      control: 'boolean',
      description: 'Define se o card vai ser na horizontal ou vertical',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    id: 1,
    movieImage: '/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg',
    name: 'Nome do filme',
  },
}
