'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/types';

export function BlogCard({ title, excerpt, date, category }: BlogPost) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group rounded-[2rem] border border-white/10 bg-black/70 p-8 shadow-soft transition">
      <p className="text-xs uppercase tracking-[0.35em] text-sand/70">{category}</p>
      <h3 className="mt-4 text-2xl font-semibold text-surface">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-surface/70">{excerpt}</p>
      <p className="mt-6 text-sm uppercase tracking-[0.35em] text-surface/60">{date}</p>
    </motion.article>
  );
}
