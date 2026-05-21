'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Brand } from '@/types';

export function BrandCarousel({ items }: { items: Brand[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/70 p-6 shadow-soft">
      <Swiper spaceBetween={24} slidesPerView={2} loop autoplay={{ delay: 2200, disableOnInteraction: false }} modules={[Autoplay]} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}>
        {items.map((brand) => (
          <SwiperSlide key={brand.name}>
            <div className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-center text-lg font-semibold text-surface transition hover:border-sand/50 hover:text-sand">
              {brand.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
