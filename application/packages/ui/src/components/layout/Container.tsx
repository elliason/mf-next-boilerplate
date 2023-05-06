import { forwardRef } from 'react';
import { clsx } from 'clsx';

type OuterContainerProps = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
};

export const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(function OuterContainer(
    { className, children, ...props },
    ref
) {
    return (
        <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    );
});

type InnerContainerProps = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
};

export const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(function InnerContainer(
    { className, children, ...props },
    ref
) {
    return (
        <div ref={ref} className={clsx('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    );
});

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container({ children, ...props }, ref) {
    /* TODO: Fix this type error */
    return (
        <OuterContainer ref={ref as any} {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    );
});
