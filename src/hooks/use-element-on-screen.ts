import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options: IntersectionObserverInit | undefined) => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callBackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return {containerRef, isVisible};
};