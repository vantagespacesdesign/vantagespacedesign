'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/site';
import { ServiceCard } from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <section className="section-container pt-36 pb-24">
      <SectionHeading title="Services" subtitle="What we offer" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
