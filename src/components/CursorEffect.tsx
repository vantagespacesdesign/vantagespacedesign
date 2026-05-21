'use client';

import { useEffect, useState } from 'react';

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-12 w-12 rounded-full border border-sand/60 bg-sand/10 opacity-80 blur-sm"
      style={{ transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)` }}
    />
  );
}
