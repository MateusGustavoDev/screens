import { convertMinutesToHoursAndMinutes } from "@/utils/minutes-to-hours";
import { Download, ListPlus, Share2 } from "lucide-react";

interface MoviePlayerProps {
  id: number;
  name: string;
  overview: string;
  productionCompanies: string;
  releaseDate: string;
  youtubeKey: string;
  runtime: number;
}

export function MoviePlayer({
  id,
  name,
  overview,
  productionCompanies,
  releaseDate,
  youtubeKey,
  runtime,
}: MoviePlayerProps) {
  const runtimeFormatted = convertMinutesToHoursAndMinutes(runtime);
  const releaseYear = new Date(releaseDate);

  return (
    <div className="w-full max-w-[1000px]">
      <div className="relative w-full ">
        <div className="aspect-video w-full">
          <iframe
            className="absolute left-0 top-0 aspect-video h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="mt-12 flex justify-between">
          <div className="flex flex-col gap-5">
            <span className="font-poppins text-3xl font-semibold text-white">
              {name}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-poppins text-lg font-semibold text-white">
                {releaseYear.getFullYear()} · {runtimeFormatted.hours}h{" "}
                {runtimeFormatted.minutes}m
              </span>
              <span className="font-poppins text-sm text-zinc-400">
                {productionCompanies}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <button className="group flex flex-col items-center  gap-4 text-sm text-zinc-400 hover:text-blue-600">
              <ListPlus
                className="text-zinc-400 group-hover:text-blue-600"
                size={20}
              />
              WatchList
            </button>
            <button className="group flex flex-col items-center  gap-4 text-sm text-zinc-400 hover:text-blue-600">
              <Share2
                className="text-zinc-400 group-hover:text-blue-600"
                size={20}
              />
              Share
            </button>
            <button className="group flex flex-col items-center  gap-4 text-sm text-zinc-400 hover:text-blue-600">
              <Download
                className="text-zinc-400 group-hover:text-blue-600"
                size={20}
              />
              Download
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-poppins text-xl font-semibold text-white">
            Description
          </span>
          <span className="font-poppins text-zinc-400">{overview}</span>
        </div>
      </div>
    </div>
  );
}
