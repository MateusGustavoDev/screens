"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CarouselButton } from "./carousel-button";

interface MovieCarouselProps {
  text: string;
  children: ReactNode;
}

export function MovieCarousel({ text, children }: MovieCarouselProps) {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth <= 1024) {
        setWindowWidth(true);
      } else {
        setWindowWidth(false);
      }
    });
  }, []);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel?.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, [carousel.current]);

  function scrollNext() {
    if (carousel.current) {
      const offsetWidth = carousel.current.offsetWidth;
      if (scrollX < width) {
        if (scrollX + offsetWidth < width) {
          setScrollX(scrollX + offsetWidth);
        }
      }
    }
  }

  function scrollPrevious() {
    if (carousel.current) {
      const offsetWidth = carousel.current.offsetWidth;
      if (scrollX > 0) {
        setScrollX(scrollX - offsetWidth);
      }
      console.log(scrollX);
    }
  }

  return (
    <div className="m-auto flex w-full flex-col gap-10 px-5 py-12 max-lg:py-8 max-sm:gap-4 max-sm:py-5">
      <span className="font-poppins text-3xl font-semibold text-white max-sm:text-xl">
        {text}
      </span>
      <div className="relative">
        <motion.div
          className="relative w-full overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
          ref={carousel}
        >
          {windowWidth ? (
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="w-ful flex cursor-pointer gap-4"
            >
              {children}
            </motion.div>
          ) : (
            <div
              className="w-ful flex cursor-pointer gap-4"
              style={{
                transform: ` translateX(${-scrollX}px)`,
                transition: "transform 0.4s ease-in-out",
              }}
            >
              {children}
            </div>
          )}
        </motion.div>
        <CarouselButton arrow="left" onClick={scrollPrevious} />
        <CarouselButton arrow="right" onClick={scrollNext} />
      </div>
    </div>
  );
}
