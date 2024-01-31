import { ListPlus } from "lucide-react";

export function WatchListButton() {
  return (
    <button className="flex h-[66px] w-[190px] items-center justify-center gap-4 overflow-hidden rounded-sm border border-white  px-8 py-3 font-poppins font-semibold text-white backdrop-blur-lg transition duration-300 ease-in-out hover:bg-white/10 active:bg-white/20 max-sm:h-[48px] max-sm:w-full">
      <ListPlus />
      Watch list
    </button>
  );
}
