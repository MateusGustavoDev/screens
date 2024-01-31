import { AlignJustify, Clapperboard, Drama, Film, Home } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <AlignJustify
            color="white"
            className="h-7 w-7 max-sm:h-6 max-sm:w-6"
          />
        </button>
      </SheetTrigger>
      <SheetContent className="border-l-2 border-l-zinc-800 bg-base-400">
        <div className="flex flex-col gap-4">
          <Link
            href="#"
            className="flex gap-2 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Home size={22} />
            Home
          </Link>
          <Link
            href="#"
            className="flex gap-2 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Film />
            Movie
          </Link>
          <Link
            href="#"
            className="flex gap-2 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Drama size={22} />
            Drama
          </Link>
          <Link
            href="#"
            className="flex gap-2 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Clapperboard size={22} />
            Comedies
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
