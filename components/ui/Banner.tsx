export default function Banner() {
  return (
    <div className="m-auto h-[720px] max-w-[1920px] bg-[url('/banner.png')] bg-contain bg-center bg-no-repeat">
      <div className="flex h-full w-full items-center bg-black opacity-85">
        <div className="m-auto w-full max-w-[1780px]">
          <div className="flex max-w-[860px] flex-col gap-6">
            <span className="font-poppins text-2xl font-semibold text-white">
              Welcome to BD Screens
            </span>
            <span
              className="font-poppins text-6xl  leading-tight text-white
          "
            >
              Download Unlimited Movies, Drama, Music Video and More Content.
            </span>
            <div className="max-w-[550px]">
              <span className="font-poppins text-lg  leading-loose text-white">
                Enjoy exclusive Music Video popular movies and Live shows.
                Subscribe BD Screen now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
