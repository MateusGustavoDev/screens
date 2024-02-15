import Link from 'next/link'
import facebook from '@/public/facebook.svg'
import instagram from '@/public/instagram.svg'
import Image from 'next/image'
import { Logo } from '..'

export function Footer() {
  return (
    <div className="mt-[120px] flex min-h-[300px] flex-col items-center justify-center gap-7 border-t-2 border-t-base-300 bg-base-400 px-10 py-16 max-md:py-12">
      <div>
        <Logo />
      </div>
      <div className="m-auto flex w-full max-w-[1240px] justify-between gap-6 max-md:flex-col max-md:justify-center">
        <div className="flex items-center justify-center gap-14 max-md:gap-8">
          <Link href="#" className="font-poppins text-lg text-white">
            Feedback
          </Link>
          <div className="h-6 w-[1px] bg-base-200" />
          <Link href="#" className="font-poppins text-lg text-white">
            Help
          </Link>
          <div className="h-6 w-[1px] bg-base-200" />
          <Link href="#" className="font-poppins text-lg text-white">
            FAQ
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <span className="font-poppins text-lg text-zinc-400">Follow In</span>
          <div className="flex items-center gap-8">
            <Link href="#">
              <Image src={facebook} width={12} height={12} alt="Facebook" />
            </Link>
            <div className="h-6 w-[1px] bg-base-200" />
            <Link href="#">
              <Image src={instagram} width={26} height={26} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
      <span className="font-poppins text-zinc-400">
        ©2021 All rights reserved
      </span>
    </div>
  )
}
