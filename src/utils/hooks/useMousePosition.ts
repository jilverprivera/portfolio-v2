import { useState, useEffect } from "react";

type props = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<props>({ x: 0, y: 0 });
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
