import {
  AlignJustify,
  Clapperboard,
  Drama,
  Film,
  Home,
  Search,
} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './sheet'
import Link from 'next/link'
import { SearchInput } from './search-input'

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
        <div className="mt-10 flex flex-col gap-4">
          <SearchInput.Root>
            <SearchInput.Trigger>
              <button className="flex w-full items-center gap-3 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white outline-none transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800">
                <Search />
                Pesquisar
              </button>
            </SearchInput.Trigger>
          </SearchInput.Root>
          <Link
            href="#"
            className="flex gap-3 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Home size={22} />
            Home
          </Link>
          <Link
            href="#"
            className="flex gap-3 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Film />
            Movie
          </Link>
          <Link
            href="#"
            className="flex gap-3 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Drama size={22} />
            Drama
          </Link>
          <Link
            href="#"
            className="flex gap-3 rounded-lg bg-transparent px-3 py-2 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-zinc-900  active:bg-zinc-800"
          >
            <Clapperboard size={22} />
            Comedies
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
