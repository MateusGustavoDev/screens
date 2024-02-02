import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

type CarouselButton = ComponentProps<'button'> & {
  arrow: 'left' | 'right'
  children?: ReactNode
}

export function CarouselButton({ arrow, children, ...props }: CarouselButton) {
  return (
    <button
      className={`group absolute ${
        arrow === 'right' ? '-right-7' : '-left-7'
      } top-1/2 z-50 h-max w-max -translate-y-1/2 rounded-full border-2 border-white bg-base-400 p-4 text-white hover:bg-zinc-800 active:bg-zinc-900 max-lg:hidden`}
      {...props}
    >
      {arrow === 'left' && <ArrowLeft className="text-white" size={20} />}
      {arrow === 'right' && <ArrowRight className=" text-white" size={20} />}
    </button>
  )
}
