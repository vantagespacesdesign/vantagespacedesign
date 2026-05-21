import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-container pt-36 pb-24 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-sand/70">Page not found</p>
      <h1 className="mt-6 text-5xl font-semibold text-surface">We couldn&rsquo;t locate that page.</h1>
      <p className="mt-6 text-base leading-8 text-surface/70">Return to the homepage to continue exploring our studio portfolio.</p>
      <Link href="/" className="mt-10 inline-flex rounded-full border border-white/10 bg-sand px-8 py-3 text-sm font-semibold text-ink transition hover:bg-surface hover:text-ink">
        Go home
      </Link>
    </section>
  );
}
