"use client";

import { Product } from "@/interfaces";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselItem } from "./ProductCarouselItem";

interface Props {
  products: Product[];
}

export const ProductCarousel = ({ products }: Props) => {
  if (products.length === 0) return;
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        360: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 25,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper product-carousel custom-arrow my-5"
    >
      {products.map((product) => (
        <SwiperSlide>
          <ProductCarouselItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
