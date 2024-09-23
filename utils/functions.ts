import type { ButtonProps, ButtonLinkProps, NuxtButtonLinkProps } from "../components/button.types";
import { twMerge } from "tailwind-merge";

export function useButtonVariants(props: ButtonProps | ButtonLinkProps | NuxtButtonLinkProps): string {
    const themeVariants: {[key: string]: string} = {
        primary: "hover:bg-primary border-primary focus:ring-primary text-primary hover:text-neutral-950",
        secondary: "hover:bg-secondary border-secondary focus:ring-secondary text-secondary hover:text-neutral-950",
        warning: "hover:bg-amber-600 border-amber-600 focus:ring-amber-600 text-amber-600 hover:text-white",
        danger: "hover:bg-red-700 border-red-700 focus:ring-red-700 text-red-700 hover:text-white",
        icon: "rounded-none border-s-0 border-t-0 border-e-0 text-gray-300 border-b-2 pb-2 border-dashed border-secondary hover:text-gray-100 hover:border-gray-300 hover:scale-105 h-auto w-auto hover:bg-transparent text-2xl p-2 flex flex-row items-center justify-center",
    };

    const sizeVariants: {[key: string]: string} = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return twMerge(
        "rounded-none duration-200 border-2 border-gray-300 outline-none focus:ring text-base text-gray-300 font-semibold focus:ring-gray-300 focus:ring-opacity-50 bg-transparent hover:bg-gray-300 hover:text-neutral-950",
        sizeVariants[props.size || "md"],
        themeVariants[props.variant || ""],
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
    );
}