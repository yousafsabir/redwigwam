"use client";

import { ASSETS } from "@/lib/assets";

import { useRef, type ComponentRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, Mousewheel } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/mousewheel";

export default function Blogs() {
  const swiperPrevBtnRef = useRef<ComponentRef<"button">>(null);
  const swiperNextBtnRef = useRef<ComponentRef<"button">>(null);

  const blogs: Array<{
    id: number;
    title: string;
    tag: string;
    image: string;
    publishedAt: string;
    link: string;
  }> = [
    {
      id: 1,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-1.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
    {
      id: 2,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-2.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
    {
      id: 3,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-3.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
    {
      id: 4,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-1.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
    {
      id: 5,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-2.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
    {
      id: 6,
      title: "Redwigwam can check applicants right to work as standard.",
      tag: "development",
      image: ASSETS["/blog-3.svg"],
      publishedAt: "May 08, 2024",
      link: "#",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-medium">Latest Blog</h2>
          <div className="flex gap-4">
            <button
              className="blog-prev w-12 h-12 rounded-full border border-[#5A5A5A] text-[#5A5A5A] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors group"
              ref={swiperPrevBtnRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  d="M3.99982 11.9998L19.9998 11.9998"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button
              className="blog-next w-12 h-12 rounded-full border border-[#5A5A5A] text-[#5A5A5A] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors group"
              ref={swiperNextBtnRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  d="M20.0001 11.9998L4.00012 11.9998"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, FreeMode, Thumbs, Mousewheel]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          navigation={{
            prevEl: swiperPrevBtnRef.current,
            nextEl: swiperNextBtnRef.current,
          }}
          onBeforeInit={(swiper) => {
            (swiper.params.navigation as NavigationOptions).prevEl =
              swiperPrevBtnRef.current;
            (swiper.params.navigation as NavigationOptions).nextEl =
              swiperNextBtnRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={blog.id + i}>
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">{blog.tag}</span>
                    <span className="text-gray-600">{blog.publishedAt}</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-6 line-clamp-2">
                    {blog.title}
                  </h3>
                  <a
                    href={blog.link}
                    className="inline-flex items-center gap-2 text-lg hover:gap-4 transition-all"
                  >
                    Read More
                    <img
                      src={ASSETS["/arrow-right-black.svg"]}
                      alt=""
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
