import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  text: string;
}

export default function Button({ size, text, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-brand-red font-poppins rounded px-6 py-2 font-semibold text-white"
      {...rest}
    >
      {text}
    </button>
  );
}
