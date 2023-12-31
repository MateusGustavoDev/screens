import { ListPlus } from "lucide-react";

export default function WatchListButton() {
  return (
    <button className="flex h-[66px] w-[190px]  items-center justify-center gap-4 overflow-hidden rounded-sm border border-white px-8 py-3 font-poppins font-semibold text-white backdrop-blur-lg">
      <ListPlus />
      Watch list
    </button>
  );
}
