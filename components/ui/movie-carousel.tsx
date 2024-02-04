'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { CarouselButton } from './carousel-button'

interface MovieCarouselProps {
  text: string
  children: ReactNode
}

export function MovieCarousel({ text, children }: MovieCarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [offsetWidth, setOffsetWidth] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState(false)

  useEffect(() => {
    addEventListener('resize', () => {
      if (window.innerWidth <= 1024) {
        setWindowWidth(true)
      } else {
        setWindowWidth(false)
      }
    })
  }, [])

  useEffect(() => {
    if (carousel.current?.scrollWidth) {
      setOffsetWidth(carousel.current.offsetWidth)
    }
  }, [])

  function scrollNext() {
    if (carousel.current) {
      carousel.current.scrollLeft += offsetWidth
    }
  }

  function scrollPrevious() {
    if (carousel.current) {
      carousel.current.scrollLeft -= offsetWidth
    }
  }

  return (
    <div className="m-auto flex w-full flex-col gap-10 px-10 py-12 max-lg:px-0 max-lg:py-8 max-lg:pl-5 max-sm:gap-4 max-sm:py-5">
      <span className="font-poppins text-3xl font-semibold text-white max-sm:text-xl">
        {text}
      </span>
      <div className="relative">
        {windowWidth ? (
          <div className="w-ful flex cursor-pointer gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {children}
          </div>
        ) : (
          <div
            ref={carousel}
            className="flex w-full cursor-pointer gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {children}
          </div>
        )}
        <CarouselButton arrow="left" onClick={scrollPrevious} />
        <CarouselButton arrow="right" onClick={scrollNext} />
      </div>
    </div>
  )
}
