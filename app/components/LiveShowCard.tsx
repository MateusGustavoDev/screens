import Image from "next/image";
import liveShowThumb from "@/public/live-show.png";

export default function LiveShowCard() {
  return (
    <div className="bg flex w-full max-w-[360px] items-center gap-4 rounded">
      <Image
        src={liveShowThumb}
        width={128}
        height={108}
        alt="live show thumb"
      />
      <div className="flex h-full flex-col justify-between gap-2 ">
        <div className="flex flex-col gap-2">
          <span className="font-poppins text-xl font-semibold text-white">
            The K- POP Live Show
          </span>
          <span className="font-poppins text-sm text-[#807E81]">
            750 watching now
          </span>
        </div>
        <div className="w-max rounded border border-brand-red px-2 py-1">
          <span className="font-poppins text-sm text-brand-red">Live Now</span>
        </div>
      </div>
    </div>
  );
}
