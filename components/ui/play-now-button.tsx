import { Play } from "lucide-react";
import Link from "next/link";

interface PlayNowButtonProps {
  id: number;
}

export function PlayNowButton({ id }: PlayNowButtonProps) {
  return (
    <Link href={`/movie?id=${id}`}>
      <button className="flex h-[66px] w-[190px] items-center justify-center gap-4 overflow-hidden rounded-sm font-poppins font-semibold text-white backdrop-blur-lg transition duration-300 ease-in-out hover:bg-white/10 active:bg-white/20 max-sm:h-[48px] max-sm:w-full">
        <div className="absolute -z-10 h-full w-full bg-white opacity-10" />
        <div className="w-max rounded-full bg-brand-red p-3 max-sm:p-2 ">
          <Play color="white" className="h-6 w-6 max-md:h-4 max-sm:w-4" />
        </div>
        Play Now
      </button>
    </Link>
  );
}
