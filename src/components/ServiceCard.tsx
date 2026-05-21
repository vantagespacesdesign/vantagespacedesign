'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, string> = {
  home: '🏠',
  coffee: '☕',
  chair: '🪑'
};

export function ServiceCard({ title, subtitle, description, icon }: Service) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group glow-card overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 p-8 transition-shadow duration-300"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
        {iconMap[icon] ?? '✨'}
      </div>
      <p className="text-sm uppercase tracking-[0.35em] text-sand/70">{subtitle}</p>
      <h3 className="mt-4 text-2xl font-semibold text-surface">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-surface/70">{description}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm text-sand transition group-hover:translate-x-1">
        <span>Explore</span> <ArrowRight size={16} />
      </div>
    </motion.article>
  );
}
