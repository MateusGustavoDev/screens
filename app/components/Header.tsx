import Icon from "./Icon";
import Link from "next/link";
import { Clapperboard, Drama, Film, Home, Tv, Youtube } from "lucide-react";
import Button from "./Button";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="absolute z-50 w-full">
      <div className="m-auto flex h-[68px] w-full max-w-[1780px] items-center">
        <Icon />
        <div className="flex w-full items-center justify-between">
          <div className="ml-16 flex gap-6">
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Home size={22} />
              Home
            </Link>
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Film />
              Movie
            </Link>
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Drama size={22} />
              Drama
            </Link>
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Youtube size={22} />
              Music Video
            </Link>
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Tv size={22} />
              Live Show
            </Link>
            <Link
              href="#"
              className="font-poppins flex gap-2 font-semibold text-white"
            >
              <Clapperboard size={22} />
              Comedies
            </Link>
          </div>
          <div className="flex items-center gap-12">
            <SearchInput />
            <Button text="sign in" />
          </div>
        </div>
      </div>
    </div>
  );
}
