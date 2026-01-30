"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const promotionMessage: string[] = [
  "Envío gratis a partir de $80.",
  "Tu primer cambio es gratis.",
  "15% off en tu primera compra.",
];

export const BannerPromoCarousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop
        autoplay={{
          delay: 2500,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper simple-arrow bg-black text-white text-sm"
      >
        {promotionMessage.map((message) => (
          <SwiperSlide className="p-1" key={message}>
            {message}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
