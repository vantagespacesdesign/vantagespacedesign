'use client';

import { useLenis } from '@/hooks/useLenis';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { ProcessSteps } from '@/components/ProcessSteps';
import { BlogCard } from '@/components/BlogCard';
import { CTASection } from '@/components/CTASection';
import { BrandCarousel } from '@/components/BrandCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services, stats, projects, processSteps, testimonials, brands, posts } from '@/data/site';

export default function HomePage() {
  useLenis();
  useGsapReveal('.reveal');

  return (
    <>
      <HeroSection />

      <section className="section-container reveal">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <SectionHeading title="A refined practice of spatial storytelling." subtitle="Studio introduction" />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-soft">
            <p className="text-lg leading-9 text-surface/75">
              Matter of Space is a luxury interiors studio rooted in quiet materiality, sculptural form, and elegant proportion. Every project is shaped through careful research, layered finishes, and a restrained palette.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Studio impact" subtitle="Achievements" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <AnimatedCounter key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Signature services" subtitle="What we create" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Design process" subtitle="Our method" />
        <div className="mt-10">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section id="portfolio" className="section-container reveal">
        <SectionHeading title="Selected portfolio" subtitle="Recent work" />
        <div className="mt-10">
          <PortfolioGrid items={projects} />
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Client voices" subtitle="Testimonials" />
        <div className="mt-10">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Trusted by" subtitle="Brand collaborations" />
        <div className="mt-10">
          <BrandCarousel items={brands} />
        </div>
      </section>

      <section className="section-container reveal">
        <SectionHeading title="Latest insights" subtitle="Blog" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </section>

      <section className="section-container reveal">
        <CTASection />
      </section>
    </>
  );
}
