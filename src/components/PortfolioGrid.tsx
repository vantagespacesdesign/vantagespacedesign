'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types';

export function PortfolioGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <motion.article
          key={item.title}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-soft"
        >
          <div className="relative h-72 overflow-hidden bg-[#1d1b19]">
            <Image src={item.image} alt={item.title} fill className="object-cover" priority={false} />
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-sand/70">{item.category}</p>
            <h3 className="text-xl font-semibold text-surface">{item.title}</h3>
            <p className="text-sm text-surface/70">{item.location}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
