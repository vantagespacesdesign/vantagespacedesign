'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteIntro } from '@/data/site';

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,241,235,0.18),_transparent_25%),linear-gradient(180deg,_rgba(17,17,17,0.92),_rgba(17,17,17,0.98))]" />
      <div className="section-container relative z-10 flex flex-col items-start gap-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-sand/75">Architectural Interiors</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-surface sm:text-6xl lg:text-7xl">
            {siteIntro.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-surface/75 sm:text-lg">
            {siteIntro.copy}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto">Start a project</Button>
            <a href="#portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-surface/80 transition hover:text-sand">
              View portfolio <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[480px] w-[480px] translate-x-20 translate-y-24 rounded-full bg-sand/10 blur-3xl md:block" />
    </section>
  );
}
