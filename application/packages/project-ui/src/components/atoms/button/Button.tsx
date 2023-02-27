import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    HTMLAttributes?: React.HTMLAttributes<HTMLButtonElement>;
}

export const Button = ({ text, className, onClick, HTMLAttributes }: ButtonProps) => {
    return (
        <button className={clsx(styles.button, className)} onClick={onClick} {...HTMLAttributes}>
            {text}
        </button>
    );
};
