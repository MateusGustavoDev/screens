import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function MoviePlayerSkeleton() {
  return (
    <div className="w-full max-w-[1000px]  max-2xl:max-w-[2000px]">
      <div className="relative aspect-video">
        <Skeleton width={'100%'} height={'100%'} />
      </div>
      <div className="flex flex-col px-5">
        <div className="mt-12 flex justify-between max-md:mt-6 max-md:flex-col max-md:justify-start max-md:gap-6">
          <div className="flex flex-col gap-5">
            <Skeleton width={200} height={40} />
          </div>
          <div className="flex items-center gap-12">
            <Skeleton width={60} height={60} />
            <Skeleton width={60} height={60} />
            <Skeleton width={60} height={60} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="w-11 bg-black font-poppins text-xl font-semibold text-white"></span>
          <Skeleton width={'100%'} height={60} />
        </div>
      </div>
    </div>
  )
}
