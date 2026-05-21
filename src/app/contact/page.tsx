'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <section className="section-container pt-36 pb-24">
      <SectionHeading title="Contact" subtitle="Start your project" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="rounded-[2rem] border border-white/10 bg-black/75 p-10 shadow-soft">
          <p className="text-lg leading-9 text-surface/80">
            For collaborations, commissioning new work, or studio inquiries, please share your project details and we will respond within two business days.
          </p>
          <div className="mt-10 space-y-4 text-sm text-surface/70">
            <p><strong className="text-surface">Studio</strong> Mumbai, India</p>
            <p><strong className="text-surface">Email</strong> hello@matterofspace.in</p>
            <p><strong className="text-surface">Phone</strong> +91 98765 43210</p>
          </div>
        </div>

        <form className="space-y-4 rounded-[2rem] border border-white/10 bg-black/75 p-10 shadow-soft">
          <label className="block text-sm text-surface/80">
            Name
            <input className="mt-2 w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-surface outline-none transition focus:border-sand" type="text" />
          </label>
          <label className="block text-sm text-surface/80">
            Email
            <input className="mt-2 w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-surface outline-none transition focus:border-sand" type="email" />
          </label>
          <label className="block text-sm text-surface/80">
            Message
            <textarea rows={5} className="mt-2 w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-surface outline-none transition focus:border-sand" />
          </label>
          <Button type="submit" className="w-full">Send message</Button>
        </form>
      </div>
    </section>
  );
}
