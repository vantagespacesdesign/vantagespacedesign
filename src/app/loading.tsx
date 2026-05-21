'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-surface">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-sand">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sand" />
        loading
      </div>
    </div>
  );
}
