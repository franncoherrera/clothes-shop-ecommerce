import { getProductsCarouselByNumber } from "@/actions/products/get-product-carousel";
import { BannerCarousel } from "@/components/common/banners/BannerCarousel";
import { BannerCategories } from "@/components/common/banners/BannerCategories";
import { BannerMessage } from "@/components/common/banners/BannerMessage";
import { ProductCarousel } from "@/components/product/product-carousel/ProductCarousel";

export const revalidate = 60;


interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home() {
  const firstCarousel = await getProductsCarouselByNumber({ gender: "men" });
  const secondCarousel = await getProductsCarouselByNumber({ gender: "women" });

  return (
    <>
      <BannerCarousel />
      <ProductCarousel products={firstCarousel.products} />
      <BannerMessage message={"Envio gratis a todo el pais a partir de $80"}/>
      <BannerCategories />
      <ProductCarousel products={secondCarousel.products} />
    </>
  );
}
