import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  text: string;
}

export function ActionButton({ size, text, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded bg-brand-red px-6 py-2 font-poppins font-semibold text-white hover:bg-brand-red/70 max-sm:px-4 max-sm:text-sm"
      {...rest}
    >
      {text}
    </button>
  );
}
