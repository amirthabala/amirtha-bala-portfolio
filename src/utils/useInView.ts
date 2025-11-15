import { RefObject, useEffect, useState } from "react";

const useInView = (
  ref: RefObject<HTMLElement | null>,
  threshold: number = 0.2
): boolean => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
};

export default useInView;
