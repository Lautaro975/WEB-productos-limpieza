"use client"
import { useState, useCallback } from 'react';

export function useGalleryScroll(galleryRef) {
  const [fullX, setX] = useState(true);

  const recorrerX = useCallback(() => {
    if (!galleryRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 100) {
      setX(false);
    } else if (scrollLeft <= 100) {
      setX(true);
    }
  }, [galleryRef]);

  const recorrer = useCallback(() => {
    if (!galleryRef.current) return;
    const desplazamiento = 100;
    galleryRef.current.scrollBy({
      left: fullX ? desplazamiento : -desplazamiento,
      behavior: "smooth",
    });
    recorrerX();
  }, [fullX, recorrerX]);

  return {
    fullX,
    recorrer
  };
} 