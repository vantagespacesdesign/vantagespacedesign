'use client';

import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }}>
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sand/85">{subtitle}</p>
        <h2 className="section-heading font-semibold text-surface">{title}</h2>
      </div>
    </motion.div>
  );
}
