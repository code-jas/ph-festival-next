import { useEffect } from 'react';

const useVideoScroll = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.target.id === 'vid-scroll-control') {
                if (entry.isIntersecting) {
                    (entry.target as HTMLVideoElement).play();
                } else {
                    (entry.target as HTMLVideoElement).pause();
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const videoEl = document.getElementById('vid-scroll-control');
    if (videoEl) {
      observer.observe(videoEl);
    }

    return () => {
      if (videoEl) {
        observer.unobserve(videoEl);
      }
    };
  }, []);
};

export default useVideoScroll;
