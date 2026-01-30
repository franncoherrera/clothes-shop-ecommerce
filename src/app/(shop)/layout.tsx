import { BannerPromoCarousel, Footer, Sidebar, TopMenu } from "@/components";
import { BreakpointProvider } from "@/hooks";

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
        <div className="px-0">{children}</div>
        <Footer />
      </main>
    </BreakpointProvider>
  );
}
