import { useEffect, useRef } from "react"

// TODO: RESEARCH ABOUT THIS

const useIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options);
    return () => {
      observer.current?.disconnect();
    };
  }, [callback, options]);

  const observe = (element: HTMLElement) => {
    observer.current?.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current?.unobserve(element);
  };

  return { observe, unobserve };
};

export default useIntersectionObserver;
