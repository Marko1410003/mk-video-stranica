import React from 'react';

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
};

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href?: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) & {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    as = 'button',
    children,
    className = '',
    ...props
}) => {
    const base =
        'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none';

    const sizes: Record<string, string> = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const variants: Record<string, string> = {
        primary:
            'bg-orange-500 text-white hover:bg-orange-600 active:scale-95 shadow-lg shadow-orange-500/25 animate-pulse-glow',
        secondary:
            'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white active:scale-95',
        ghost:
            'text-orange-400 hover:text-orange-300 underline-offset-4 hover:underline',
    };

    const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    if (as === 'a') {
        const { href, ...anchorProps } = props as ButtonAsAnchor;
        return (
            <a href={href} className={classes} {...anchorProps}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...(props as ButtonAsButton)}>
            {children}
        </button>
    );
};
