import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieCardSkeletonProps {
  horizontal?: boolean;
}

export function MovieCardSkeleton({ horizontal }: MovieCardSkeletonProps) {
  return (
    <>
      {horizontal ? (
        <div className="h-[240px] w-[400px] bg-top max-lg:h-[190px] max-lg:w-[350px] max-sm:h-[168px] max-sm:w-[277px]">
          <Skeleton width={"100%"} height={"100%"} />
        </div>
      ) : (
        <div className="h-[290px] w-[214px] bg-center max-lg:h-[240px] max-lg:w-[190px] max-sm:h-[136px] max-sm:w-[100px]">
          <Skeleton width={"100%"} height={"100%"} />
        </div>
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
