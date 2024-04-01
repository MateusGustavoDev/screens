'use client'
import { signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from './avatar'
import Link from 'next/link'
import { History, ListPlus, LogOut, User } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

export function LoggedInUser() {
  const { data: session } = useSession()

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div classNrounded-lge="rounded-full rounded-md bg-transparent p-2 transition duration-300 ease-in-out hover:bg-zinc-800 active:bg-zinc-700">
            <Avatar className="h-11 w-11 cursor-pointer select-none max-sm:h-9 max-sm:w-9">
              {session &&
                (session.user?.image ? (
                  <AvatarImage src={session?.user?.image} />
                ) : null)}
            </Avatar>
          </div>
        </Dialog.Trigger>
        <Dialog.Content className="select-none data-[state=open]:animate-[dialog-overlay-show_300ms]">
          <div className="relative">
            <div className="absolute right-0 mt-2 flex w-[257px] flex-col gap-6 rounded-lg bg-[#15161C] p-6 shadow-lg">
              <div className="flex flex-col items-center justify-center gap-3">
                <Avatar className="h-16 w-16">
                  {session &&
                    (session.user?.image ? (
                      <AvatarImage src={session?.user?.image} />
                    ) : null)}
                </Avatar>

                <span className="text-white opacity-35">
                  {session?.user?.name}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full border border-zinc-800" />
                <Link
                  href="#"
                  className="flex items-center gap-4 rounded-lg bg-transparent p-2 font-poppins  text-white transition duration-300 ease-in-out hover:bg-zinc-800 active:bg-zinc-700"
                >
                  <User color="white" />
                  Profile
                </Link>
                <div className="w-full border border-zinc-800" />
                <Link
                  href="#"
                  className="flex items-center gap-4 rounded-lg bg-transparent p-2 font-poppins  text-white transition duration-300 ease-in-out hover:bg-zinc-800 active:bg-zinc-700"
                >
                  <ListPlus color="white" />
                  Watchlist
                </Link>
                <div className="w-full border border-zinc-800" />
                <Link
                  href="#"
                  className="flex items-center gap-4 rounded-lg bg-transparent p-2 font-poppins  text-white transition duration-300 ease-in-out hover:bg-zinc-800 active:bg-zinc-700"
                >
                  <History color="white" />
                  Watch History
                </Link>
                <div className="w-full border border-zinc-800" />
                <button
                  onClick={() => signOut()}
                  className=" group flex items-center gap-4 rounded-lg bg-transparent p-2 font-poppins text-[#F84550] outline-none transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-red-400 active:bg-zinc-700"
                >
                  <LogOut className="text-[#F84550] group-hover:text-red-400" />
                  Unsubscribe
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
