'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/site';
import { PortfolioGrid } from '@/components/PortfolioGrid';

export default function ProjectsPage() {
  return (
    <section className="section-container pt-36 pb-24">
      <SectionHeading title="Projects portfolio" subtitle="Selected interiors" />
      <div className="mt-10">
        <PortfolioGrid items={projects} />
      </div>
    </section>
  );
}
