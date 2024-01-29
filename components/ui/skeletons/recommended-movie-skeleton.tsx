import Skeleton from "react-loading-skeleton";

export function MovieRecommendedSkeleton() {
  return (
    <div className="w-full">
      <div className="aspect-[1600/800] ">
        <Skeleton width={"100%"} height="100%"></Skeleton>
      </div>
    </div>
  );
}
