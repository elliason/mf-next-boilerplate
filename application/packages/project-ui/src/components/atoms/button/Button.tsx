import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    onClick?: () => void;
    HTMLAttributes?: React.HTMLAttributes<HTMLButtonElement>;
    children?: React.ReactNode;
}

export const Button = ({ className, onClick, HTMLAttributes, children }: ButtonProps) => {
    return (
        <button className={clsx(styles.button, className)} onClick={onClick} {...HTMLAttributes}>
            {children}
        </button>
    );
};
