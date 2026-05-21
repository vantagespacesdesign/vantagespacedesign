'use client';

import { useEffect, useMemo, useState } from 'react';

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const numeric = useMemo(() => parseInt(value, 10) || 0, [value]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame: number;
    let current = 0;
    const duration = 1800;
    const step = () => {
      current += Math.max(1, Math.round(numeric / 30));
      setCount(current > numeric ? numeric : current);
      if (current < numeric) {
        frame = requestAnimationFrame(step);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [numeric]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-soft">
      <p className="text-4xl font-semibold tracking-tight text-surface">{count}{value.includes('+') ? '+' : ''}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-sand/75">{label}</p>
    </div>
  );
}
