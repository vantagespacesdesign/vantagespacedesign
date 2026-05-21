'use client';

import { motion } from 'framer-motion';

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: index * 0.12 }}
          className="rounded-[2rem] border border-white/10 bg-black/70 p-8 shadow-soft"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-lg font-semibold text-sand">
            {index + 1}
          </div>
          <h3 className="text-2xl font-semibold text-surface">{step.title}</h3>
          <p className="mt-4 text-sm leading-7 text-surface/70">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
