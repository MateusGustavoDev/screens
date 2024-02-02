export function Banner() {
  return (
    <div className="m-auto mb-4 h-[720px] max-w-[1540px] bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat max-md:h-[420px] max-sm:h-[320px]">
      <div className="flex h-full w-full items-center bg-black opacity-85">
        <div className="m-auto w-full max-w-[1780px] px-6">
          <div className="flex max-w-[860px] flex-col gap-6 max-md:gap-4">
            <span className="font-poppins text-2xl font-semibold text-white max-lg:text-xl max-md:text-base">
              Welcome to BD Screens
            </span>
            <span className="font-poppins text-6xl leading-tight text-white max-md:text-4xl max-sm:text-2xl">
              Download Unlimited Movies, Drama, Music Video and More Content.
            </span>
            <div className="max-w-[550px]">
              <span className="font-poppins text-lg leading-loose text-white max-md:text-base max-sm:text-sm">
                Enjoy exclusive Music Video popular movies and Live shows.
                Subscribe BD Screen now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
