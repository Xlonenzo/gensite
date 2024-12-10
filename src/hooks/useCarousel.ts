import { useState, useEffect } from 'react';

export function useCarousel(length: number, interval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % length);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + length) % length);
  };

  return { currentSlide, nextSlide, prevSlide };
}