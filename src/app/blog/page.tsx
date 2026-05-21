'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { posts } from '@/data/site';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {
  return (
    <section className="section-container pt-36 pb-24">
      <SectionHeading title="Journal" subtitle="Editorial stories" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
