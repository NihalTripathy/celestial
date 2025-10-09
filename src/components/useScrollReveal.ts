"use client";
import { useEffect, useRef, MutableRefObject } from 'react';

/**
 * Custom hook that adds a scroll reveal effect to any element.
 * Elements using this hook should have CSS styles for the
 * `.reveal` and `.is-visible` classes defined in globals.scss.
 */
export function useScrollReveal<T extends HTMLElement>(): MutableRefObject<T | null> {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.2 }
    );
    node.classList.add('reveal');
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, []);

  return elementRef;
}