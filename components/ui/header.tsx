"use client";
import Logo from "./logo";
import Link from "next/link";
import { Clapperboard, Drama, Film, Home, Tv, Youtube } from "lucide-react";
import SearchInput from "./search-input";
import { signIn, useSession } from "next-auth/react";
import LoggedInUser from "./logged-in-user";
import ActionButton from "./action-button";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky  z-50 w-full">
      <div className="m-auto flex h-24 w-full max-w-[1780px] items-center">
        <Logo />
        <div className="flex w-full items-center justify-between">
          <div className="ml-16 flex gap-6">
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Home size={22} />
              Home
            </Link>
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Film />
              Movie
            </Link>
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Drama size={22} />
              Drama
            </Link>
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Youtube size={22} />
              Music Video
            </Link>
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Tv size={22} />
              Live Show
            </Link>
            <Link
              href="#"
              className="flex gap-2 font-poppins font-semibold text-white"
            >
              <Clapperboard size={22} />
              Comedies
            </Link>
          </div>
          <div className="flex items-center gap-12">
            <SearchInput />
            {session ? (
              <LoggedInUser />
            ) : (
              <ActionButton onClick={() => signIn()} text="sign in" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
