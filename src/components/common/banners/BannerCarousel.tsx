"use client";

import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useBreakpoint } from "@/hooks";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

const bannerDesktopNameList: string[] = [
  "adidas-1.webp",
  "adidas.webp",
  "milenia.webp",
  "promo-adidas.webp",
  "puma.webp",
];

const bannerMobileNameList: string[] = [
  "1-MOB.jpg",
  "2-MOB.jpg",
  "3-MOB.jpg",
  "4-MOB.jpg",
  "5-MOB.png",
];

export const BannerCarousel = () => {
  const { mounted, isUp } = useBreakpoint();
  if (!mounted) return <div className="w-full h-[500px]" />;
  const banners = isUp("lg") ? bannerDesktopNameList : bannerMobileNameList;
  const folder = isUp("lg") ? "desktop/home" : "mobile/home";
  return (
    <div className="w-full h-[500px]">
      <Swiper
        key={folder}
        navigation
        pagination={{ clickable: true }}
        keyboard
        autoplay={{ delay: 2000 }}
        loop
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper opacity-100 custom-arrow"
      >
        {banners.map((bannerName, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/banners/${folder}/${bannerName}`}
              alt="Banner de promociones"
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
