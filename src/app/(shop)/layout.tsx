import { Footer, Sidebar, TopMenu } from '@/components';
import { BannerPromoCarousel } from '@/components/common/banners/BannerPromoCarousel';
import { BreakpointProvider } from '@/hooks';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BreakpointProvider>
      <main className="min-h-screen">
        <BannerPromoCarousel />
        <TopMenu />
        <Sidebar />
        <div className="px-0 pl-10 pr-10">{children}</div>
        <Footer />
      </main>
    </BreakpointProvider>
  );
}
