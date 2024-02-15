import { Meta, StoryObj } from '@storybook/react'
import { MovieCardSkeleton } from './movie-carousel-skeleton'

const meta: Meta<typeof MovieCardSkeleton> = {
  title: 'ui/MovieCarouselSkeleton',
  component: MovieCardSkeleton,
}

export default meta

type Story = StoryObj<typeof MovieCardSkeleton>

export const Default: Story = {}
