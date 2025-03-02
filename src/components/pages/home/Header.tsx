"use client";

import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const mobileProfessionals = [
  "/professional-1.png",
  "/professional-2.png",
  "/professional-3.png",
  "/professional-4.png",
  "/professional-5.png",
  "/professional-6.png",
  "/professional-7.png",
  "/professional-8.png",
  "/professional-9.png",
] as const;

const professionals = [
  [
    "/professional-1.png",
    "/professional-2.png",
    "/professional-3.png",
    "/professional-4.png",
    "/professional-11.png",
    "/professional-12.png",
  ],
  [
    "/professional-5.png",
    "/professional-6.png",
    "/professional-7.png",
    "/professional-8.png",
    "/professional-4.png",
    "/professional-3.png",
  ],
  [
    "/professional-9.png",
    "/professional-10.png",
    "/professional-11.png",
    "/professional-12.png",
    "/professional-1.png",
    "/professional-2.png",
  ],
] as const;

export default function Header() {
  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={ASSETS["/header-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="hidden md:block md:text-6xl font-bold leading-[1.12] mb-6">
              Connect
              <br />
              with Top Talent
              <br />
              in Minutes
            </h1>
            <p className="max-w-[75%] md:w-auto text-center md:text-left mx-auto md:mx-0 text-xl text-gray-700 mb-10">
              Discover how Redwigwam simplifies your hiring process. Our
              platform connects you with pre-vetted, flexible staff quickly and
              efficiently.
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-4">
              <a
                href="https://savvycal.com/redwigwam/chat-with-redwigwam"
                target="_blank"
              >
                <Button variant="default">
                  Book A Demo
                  <img
                    src={ASSETS["/arrow-right-white.svg"]}
                    alt=""
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <a
                href="https://hirer.redwigwam.com/wizards/registration"
                target="_blank"
              >
                <Button variant="outline">
                  Register Now
                  <img
                    src={ASSETS["/arrow-right-black.svg"]}
                    alt=""
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-1 mt-8">
              {[...Array(5)].map((i) => (
                <img
                  src={ASSETS["/star.svg"]}
                  alt="star"
                  className="w-6 h-6"
                  key={i}
                />
              ))}
              <img
                src={ASSETS["/rating-company.png"]}
                alt="Rating Company"
                className="w-6 h-6 ml-4"
              />
              <span className="text-lg ml-2 font-medium">5 Star Rating</span>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-5xl md:hidden text-center font-bold leading-[1.12] mb-6">
              Connect
              <br />
              with Top Talent
              <br />
              in Minutes
            </h1>
            <div className="mx-auto max-w-[300px] min-[400px]:max-w-[350px] md:hidden relative grid grid-cols-3 gap-2 min-[400px]:gap-4 mb-8">
              {mobileProfessionals.map((image) => (
                <div className="flex justify-center" key={image}>
                  <div className="max-[400px]:w-[75px] rounded-2xl overflow-hidden">
                    <img
                      src={ASSETS[image]}
                      alt="Professional"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {professionals.map((p, i) => (
                <Swiper
                  className="hidden md:block"
                  key={i}
                  modules={[Autoplay]}
                  slidesPerView={3}
                  spaceBetween={16}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: i % 2 === 0,
                  }}
                  speed={1700}
                  breakpoints={{
                    1202: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {p.map((image) => (
                    <SwiperSlide key={image}>
                      <div className="rounded-2xl w-[120px] aspect-square overflow-hidden">
                        <img
                          src={ASSETS[image]}
                          alt="Professional"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
