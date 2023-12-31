import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import movieBanner from "@/public/movie-banner.jpeg";
import PlayNowButton from "./PlayNowButton";
import WatchListButton from "./WatchListButton";

export default function MoviesCarousel() {
  return (
    <Carousel className="m-auto max-w-[1700px] px-4">
      <CarouselContent>
        <CarouselItem className="h-[720px] w-full bg-[url(/movie-banner.jpeg)] bg-cover bg-no-repeat ">
          <div className="absolute z-20 h-[720px] w-full bg-black opacity-45" />
          <div className="absolute top-1/2 z-50 ml-14 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-6">
                <span className="font-poppins text-4xl font-semibold text-white">
                  Panther
                </span>
                <span className="font-poppins  text-xl text-white">
                  Action, Drama • 2018 • 2h 35m
                </span>
              </div>
              <span className="max-w-[474px] font-poppins text-sm text-[#807E81]">
                The trailer of "Panther" a Bangla movie starring Jeet and
                Shraddha Das in the lead role. The movie is directed by Anshuman
                Pratyush.
              </span>
            </div>
            <div className="flex gap-5">
              <PlayNowButton />
              <WatchListButton />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="h-[720px] w-full bg-[url(/movie-banner-2.jpeg)] bg-cover bg-no-repeat">
          <Image src={movieBanner} alt="Movie name" fill />
        </CarouselItem>
        <CarouselItem className="h-[720px] w-full bg-[url(/movie-banner-3.jpg)] bg-cover bg-no-repeat">
          <Image src={movieBanner} alt="Movie name" fill />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="h-[46px] w-[46px]" />
      <CarouselNext className="h-[46px] w-[46px]" />
    </Carousel>
  );
}
