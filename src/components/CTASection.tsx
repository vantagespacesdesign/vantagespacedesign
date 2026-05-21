'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-black/80 p-10 text-center shadow-lifted">
      <p className="text-sm uppercase tracking-[0.35em] text-sand/70">Collaborate with us</p>
      <h2 className="mt-4 text-4xl font-semibold text-surface sm:text-5xl">Designing spaces that feel inherently calm and luxurious.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-surface/70 sm:text-base">
        We craft interiors with precision, quiet details, and an editorial point of view. Begin your next project with Matter of Space.
      </p>
      <Button className="mt-8">Book a consultation</Button>
    </motion.section>
  );
}
