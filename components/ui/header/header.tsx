'use client'
import Link from 'next/link'
import { Clapperboard, Drama, Film, Home, Search } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { ActionButton, LoggedInUser, Logo } from '..'
import { SearchInput } from '../search-input'
import { MobileMenu } from '../mobile-menu'

export function Header() {
  const { data: session } = useSession()

  return (
    <div className="sticky bottom-0 z-40 w-full bg-base-400">
      <div className="m-auto flex h-[5.5rem] w-full max-w-[1540px] items-center px-5 max-sm:h-[70px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex w-full items-center justify-between  max-lg:justify-end">
          <div className="ml-16 flex gap-6 max-lg:hidden">
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
          <div className="flex w-max items-center gap-6">
            <div className="flex items-center gap-12">
              <div className="max-lg:hidden">
                <SearchInput.Root>
                  <SearchInput.Trigger>
                    <button className="flex h-max w-max cursor-pointer items-center justify-center rounded-full bg-transparent p-3 outline-none transition duration-300 ease-in-out hover:bg-zinc-900 active:bg-zinc-800">
                      <Search size={22} color="white" />
                    </button>
                  </SearchInput.Trigger>
                </SearchInput.Root>
              </div>
              {session ? (
                <LoggedInUser />
              ) : (
                <ActionButton onClick={() => signIn()} text="sign in" />
              )}
            </div>
            <div className="flex h-max items-center lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
