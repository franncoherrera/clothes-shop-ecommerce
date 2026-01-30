export const revalidate = 60;
import { getProductsCarouselByNumber } from "@/actions";
import {
  BannerCarousel,
  BannerCategories,
  BannerMessage,
  ProductCarousel,
} from "@/components";

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
