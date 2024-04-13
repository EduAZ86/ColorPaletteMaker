import { useEffect, useRef, useState } from "react";

interface IIntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    calbackFunctionObserver?: () => Promise<void>;
}

export const useObserver = (options: IIntersectionObserverOptions) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const elementRef = useRef<any>(undefined);

    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    setIsIntersecting(entry.isIntersecting);
                    if (options.calbackFunctionObserver) {
                        options.calbackFunctionObserver();
                    }
                });
            },
            options
        );
        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { elementRef, isIntersecting };
};
