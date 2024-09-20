export type ButtonSize = 'sm' | 'md' | 'lg' | string;
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'icon' | string;

export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;
}

export interface ButtonLinkProps extends ButtonProps {
    href?: string;
    target?: string;
}

export interface NuxtButtonLinkProps extends ButtonProps {
    to?: string;
}