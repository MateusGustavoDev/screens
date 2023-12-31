import { Play } from "lucide-react";

export default function PlayNowButton() {
  return (
    <button className="flex h-[66px] w-[190px]  items-center justify-center gap-4 overflow-hidden rounded-sm font-poppins font-semibold text-white backdrop-blur-lg">
      <div className="absolute -z-10 h-full w-full bg-white opacity-10" />
      <div className="w-max rounded-full  bg-brand-red p-3 ">
        <Play color="white" />
      </div>
      Play Now
    </button>
  );
}
