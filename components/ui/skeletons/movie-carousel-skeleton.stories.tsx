import { Meta, StoryObj } from '@storybook/react'
import { MovieCardSkeleton } from './movie-carousel-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'

const meta: Meta<typeof MovieCardSkeleton> = {
  title: 'ui/MovieCarouselSkeleton',
  component: MovieCardSkeleton,
  decorators: [
    (Story) => {
      return (
        <SkeletonTheme
          baseColor="var(--skeleton-base-color)"
          highlightColor="var(--skeleton-highlight-color)"
        >
          {Story()}
        </SkeletonTheme>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof MovieCardSkeleton>

export const Default: Story = {}
