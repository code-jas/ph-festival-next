import { useEffect, useRef } from "react"

// TODO: RESEARCH ABOUT THIS
const useIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserver) => { 
    const observer = useRef<IntersectionObserver | null>();
    // console.log('observer :>> ', observer);

    useEffect(() =>  {
        observer.current = new IntersectionObserver(callback, options);
        return () => { observer.current?.disconnect()}
    },[callback, options])

    const observe = (element: HTMLElement) => {
        observer.current?.observe(element)
        // console.log('observe:', observer); 
    }

    const unobserver = (element: HTMLElement) => {
        observer.current?.unobserve(element);
        // console.log('unobserve :>> ', observer);
    }

    return { observe, unobserver }
}

export default useIntersectionObserver;