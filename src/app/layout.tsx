import type { Metadata } from 'next';
import '@/styles/globals.css';
import { metadata as siteMetadata } from '@/lib/metadata';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FloatingCTAButton } from '@/components/FloatingCTAButton';
import { CursorEffect } from '@/components/CursorEffect';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL('https://matterofspace.local'),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: 'website'
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorEffect />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTAButton />
      </body>
    </html>
  );
}
