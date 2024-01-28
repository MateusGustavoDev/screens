interface MovieCardProps {
  horizontal?: boolean;
  movieImage: string;
  name: string;
}

export function MovieCard({ horizontal, movieImage, name }: MovieCardProps) {
  return (
    <div
      className={`group relative  ${
        horizontal
          ? "h-[240px] w-[400px] bg-top"
          : "h-[290px] w-[214px] bg-center "
      } shrink-0 rounded bg-slate-500 bg-cover`}
      style={{ backgroundImage: `url(${movieImage})` }}
    >
      <div className="hidden h-full w-full bg-gradient-to-t from-black/90 to-black/10 group-hover:block ">
        <span className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 text-center font-poppins text-sm font-semibold text-zinc-200">
          {name}
        </span>
      </div>
    </div>
  );
}
