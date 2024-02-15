import Link from 'next/link'

//** Card do filme */

interface MovieCardProps {
  id: number
  name: string
  movieImage: string
  horizontal?: boolean
}
export function MovieCard({
  id,
  horizontal,
  movieImage,
  name,
}: MovieCardProps) {
  return (
    <Link href={`movie?id=${id}`}>
      <div
        className={`group relative  ${
          horizontal
            ? 'h-[240px] w-[400px] bg-top max-lg:h-[190px] max-lg:w-[350px] max-sm:h-[168px] max-sm:w-[277px]'
            : 'h-[290px] w-[214px] bg-center max-lg:h-[240px] max-lg:w-[190px] max-sm:h-[136px] max-sm:w-[100px]'
        } shrink-0 rounded bg-cover`}
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_TMDB_IMAGE_URL + movieImage
          })`,
        }}
      >
        <div className="hidden h-full w-full animate-[dialog-overlay-show_300ms] bg-gradient-to-t from-black/90 to-black/10 group-hover:block ">
          <span className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 text-center font-poppins text-sm font-semibold text-zinc-200 max-sm:text-xs">
            {name}
          </span>
        </div>
      </div>
    </Link>
  )
}
