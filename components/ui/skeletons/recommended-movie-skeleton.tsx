import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function RecommendedMoviesSkeleton() {
  return (
    <div className="w-full">
      <div className="aspect-[1600/800] ">
        <Skeleton width={'100%'} height="100%"></Skeleton>
      </div>
    </div>
  )
}
