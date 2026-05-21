'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const testimonial = useMemo(() => items[index], [items, index]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 p-8 shadow-soft">
      <motion.div key={testimonial.author} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="flex items-center gap-3 text-sand/80">
          <Quote size={24} />
          <span className="text-xs uppercase tracking-[0.4em]">Client feedback</span>
        </div>
        <p className="mt-8 text-xl leading-9 text-surface">“{testimonial.quote}”</p>
        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-sand/70">{testimonial.author}</p>
        <p className="text-sm text-surface/70">{testimonial.role}</p>
      </motion.div>

      <div className="mt-10 flex items-center justify-between gap-3">
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-surface transition hover:border-sand/60 hover:text-sand"
          onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-surface transition hover:border-sand/60 hover:text-sand"
          onClick={() => setIndex((prev) => (prev + 1) % items.length)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
