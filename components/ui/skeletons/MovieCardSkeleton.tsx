import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieCardSkeletonProps {
  horizontal?: boolean;
}

function MovieCardSkeleton({ horizontal }: MovieCardSkeletonProps) {
  return (
    <>
      {horizontal ? (
        <Skeleton width={400} height={240} />
      ) : (
        <Skeleton width={214} height={290} />
      )}
    </>
  );
}

export function CarouselSkeleton({ horizontal }: MovieCardSkeletonProps) {
  return (
    <div className="m-auto flex w-full flex-col gap-10 overflow-hidden py-12">
      <Skeleton width={200} height={40} />
      <div className="flex gap-4">
        {horizontal ? (
          <>
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
            <MovieCardSkeleton horizontal />
          </>
        ) : (
          <>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
}
