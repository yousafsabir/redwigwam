"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ASSETS } from "@/lib/assets";

export default function Brands() {
  return (
    <div className="py-32">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl max-w-2xl mx-auto text-center font-semibold leading-[1.1] text-app-gray-3 mb-5">
          Join 1,000+ businesses hiring with redwigwam
        </h2>
        <p className="max-w-2xl text-center mx-auto mb-8 sm:mb-14 text-app-gray-3">
          From local businesses to large enterprises, we’re here to help.
          Whether you need to hire a single employee or build a larger team, our
          services are tailored to fit your needs.
        </p>
        <Swiper
          className="header-swiper"
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={32}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            580: {
              slidesPerView: 3,
            },
            830: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {ASSETS.brands.map((brand) => (
            <SwiperSlide key={brand}>
              <img src={brand} alt="Brand Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
