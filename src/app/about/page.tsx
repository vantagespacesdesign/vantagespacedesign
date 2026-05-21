'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';

export default function AboutPage() {
  return (
    <section className="section-container pt-36 pb-24">
      <SectionHeading title="About Matter of Space" subtitle="Studio profile" />
      <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-black/75 p-10 shadow-soft">
          <p className="text-lg leading-9 text-surface/80">
            Matter of Space is an interiors studio built around quiet luxury, modern materiality, and sculptural composition. We partner with homeowners, developers, and boutique hospitality brands to craft spaces that feel atmospheric, grounded, and beautifully refined.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-black/75 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-surface">Our philosophy</h3>
            <p className="mt-4 text-sm leading-7 text-surface/70">We believe luxury is defined by restraint, detail, and a sense of calm. Each project is shaped by proportion, texture, and a meaningful use of light.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/75 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-surface">Creative direction</h3>
            <p className="mt-4 text-sm leading-7 text-surface/70">Our process emphasizes narrative design, storytelling through material palettes, and an editorial approach to every interior gesture.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
