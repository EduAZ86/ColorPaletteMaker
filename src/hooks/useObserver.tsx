'use client'
import { useEffect, useRef, useState } from "react"

interface IIntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export const useObserver = (options: IIntersectionObserverOptions) => {

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const elementRef = useRef<any>(undefined)
    const [intersectionRatio, setIntersectionRatio] = useState<number>(0);
    useEffect(() => {
        const element = elementRef.current
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    setIsIntersecting(entry.isIntersecting);
                })
            },
            options
        )
        if (element) {
            observer.observe(element)
        }
        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, []);

    return { elementRef, isIntersecting }
}

