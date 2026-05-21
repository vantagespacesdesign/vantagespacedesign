'use client';

import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 text-surface/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-sand/80">Studio</p>
          <h3 className="text-3xl font-semibold text-surface">Vantage Space Design</h3>
          <p className="text-sm leading-7 text-surface/70">
            A luxury interior design studio focused on editorial residences, warm hospitality, and thoughtful spatial curation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-sand/70">Offices</p>
            <p className="flex items-center gap-2 text-sm text-surface/80"><MapPin size={16} /> Mumbai, India</p>
            <p className="flex items-center gap-2 text-sm text-surface/80"><Phone size={16} /> +91 75032 98935</p>
            <p className="flex items-center gap-2 text-sm text-surface/80"><Mail size={16} /> vantagespacedesign@gmail.com</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-sand/70">Connect</p>
            <div className="flex items-center gap-4 text-surface/85">
              <Link href="#" className="transition hover:text-sand"><Instagram size={18} /></Link>
              <Link href="#" className="transition hover:text-sand"><Mail size={18} /></Link>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-sand/70">Copyright</p>
            <p className="text-sm text-surface/70">© 2026 Vantage Space Design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
