import Image from "next/image";

interface MovieCardProps {
  horizontal?: boolean;
  movieImage: string;
}

export default function MovieCard({ horizontal, movieImage }: MovieCardProps) {
  return (
    <div
      className={`relative ${
        horizontal ? "h-[240px] w-[400px]" : "h-[290px] w-[214px]"
      } rounded bg-slate-500`}
    >
      {horizontal ? (
        <Image src={movieImage} width={400} height={240} alt="Movie name" />
      ) : (
        <Image src={movieImage} width={214} height={290} alt="Movie name" />
      )}

      <span className="absolute bottom-3 left-3 z-50 font-poppins text-xl font-semibold text-white">
        Wanda Vision
      </span>
    </div>
  );
}
