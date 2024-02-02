import { MovieCardSkeleton } from '@/components/ui/skeletons/movie-carousel-skeleton'
import Skeleton from 'react-loading-skeleton'

export function ForYouMovieSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton width={200} height={40} />
      <div className="grid grid-cols-2 gap-4">
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
      </div>
    </div>
  )
}
