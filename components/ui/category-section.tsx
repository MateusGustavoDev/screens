import { ReactNode } from "react";

interface CategorySectionProps {
  text: string;
  children: ReactNode;
}

export default function CategorySection({
  text,
  children,
}: CategorySectionProps) {
  return (
    <div className="m-auto flex w-full max-w-[1780px] flex-col gap-10 py-12">
      <span className="font-poppins text-3xl font-semibold text-white">
        {text}
      </span>
      <div className="flex gap-8">{children}</div>
    </div>
  );
}
