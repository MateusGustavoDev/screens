"use client";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import Link from "next/link";
import { History, ListPlus, LogOut, User } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function LoggedInUser() {
  const { data: session } = useSession();

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Avatar className="h-11 w-11">
            {session &&
              (session.user?.image ? (
                <AvatarImage src={session?.user?.image} />
              ) : null)}
          </Avatar>
        </Dialog.Trigger>
        <Dialog.Content className="data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]">
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
                  className="flex items-center gap-4 font-poppins text-white"
                >
                  <User color="white" />
                  Profile
                </Link>
                <div className="w-full border border-zinc-800" />
                <Link
                  href="#"
                  className="flex items-center gap-4 font-poppins text-white"
                >
                  <ListPlus color="white" />
                  Watchlist
                </Link>
                <div className="w-full border border-zinc-800" />
                <Link
                  href="#"
                  className="flex items-center gap-4 font-poppins text-white"
                >
                  <History color="white" />
                  Watch History
                </Link>
                <div className="w-full border border-zinc-800" />
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-4 font-poppins text-[#F84550] outline-none"
                >
                  <LogOut color="#F84550" />
                  Unsubscribe
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
