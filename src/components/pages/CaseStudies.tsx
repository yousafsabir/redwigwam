"use client";

import { ASSETS } from "@/lib/assets";

import { useState, useRef, type ComponentRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, Mousewheel } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/mousewheel";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  tag: string;
  image: string;
  publishedAt: string;
  modal: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

export default function CaseStudies() {
  const swiperPrevBtnRef = useRef<ComponentRef<"button">>(null);
  const swiperNextBtnRef = useRef<ComponentRef<"button">>(null);

  const [currentCaseStudy, setCurrentCaseStudy] = useState<number | null>(null);

  const caseStudies: Array<CaseStudy> = [
    {
      id: 1,
      title: "How we delivered 6500 +hrs in 3 weeks for set",
      tag: "development",
      image: ASSETS["/blog-1.svg"],
      publishedAt: "May 08, 2024",
      modal: {
        title: "Delivering 6,500+ Hours of Work in 3 Weeks for Deeset",
        challenge:
          "Deeset, a retail solutions provider, required urgent large-scale support to complete merchandising and retail execution tasks across the UK—with just one week’s notice.",
        solution:
          "Redwigwam rapidly mobilised its nationwide workforce, ensuring full coverage across all required locations. Workers were briefed and deployed at speed, with real-time reporting to track progress.",
        result:
          "Over 6,500 hours of work were delivered in just three weeks, meeting all deadlines. Deeset successfully executed their retail plan without disruption, reinforcing their trust in Redwigwam’s ability to provide scalable, last-minute solutions.",
      },
    },
    {
      id: 2,
      title: "2000 applicants and national coverage",
      tag: "development",
      image: ASSETS["/blog-2.svg"],
      publishedAt: "May 08, 2024",
      modal: {
        title: "Powering National Market Research with Central Fieldwork",
        challenge:
          "Central Fieldwork, a leading market research agency, needed a highly responsive and diverse workforce to conduct surveys and collect data representing real views across Britain.",
        solution:
          "Using Redwigwam’s smart recruitment tools, they built a pool of over 1,000 engaged workers. The platform’s precision filtering allowed them to match the right workers to specific demographics, ensuring high-quality data collection at speed.",
        result:
          "Central Fieldwork now has a go-to nationwide workforce, enabling them to move fast and deploy the most appropriate workers for each project, delivering accurate and representative insights efficiently.",
      },
    },
    {
      id: 3,
      title: "How we automatically help logistics people ",
      tag: "development",
      image: ASSETS["/blog-3.svg"],
      publishedAt: "May 08, 2024",
      modal: {
        title: "Automating Job Fulfilment for a Leading Logistics Provider",
        challenge:
          "A major logistics company needed to fill thousands of roles quickly but struggled with the manual effort of posting jobs and managing applications.",
        solution:
          "Redwigwam integrated seamlessly with their system, automatically pulling job listings from their site—eliminating the need for manual uploads. Our platform then matched these roles with pre-vetted workers, ensuring fast and efficient recruitment.",
        result:
          "Over 3,000 applicants were sourced, significantly reducing admin time while maintaining high-quality hires. The logistics provider now benefits from a fully automated, scalable recruitment solution that keeps operations running smoothly.",
      },
    },
    {
      id: 4,
      title: "Seasonal staff with siamo ",
      tag: "development",
      image: ASSETS["/blog-1.svg"],
      publishedAt: "May 08, 2024",
      modal: {
        title: "Seasonal Warehouse Staffing for Siamo",
        challenge:
          "Siamo, a workforce solutions provider, needed a reliable pipeline of warehouse staff to support fluctuating demand, particularly during peak seasons.",
        solution:
          "Redwigwam supplied a steady stream of pre-vetted workers each week, ensuring Siamo had the flexibility to scale up or down based on operational needs. Our platform’s automated matching meant vacancies were filled quickly, with minimal admin effort.",
        result:
          "Siamo successfully maintained full warehouse coverage throughout peak periods, avoiding labour shortages and ensuring seamless operations. The partnership continues to provide long-term workforce stability with on-demand staffing support.",
      },
    },
    {
      id: 5,
      title: "Need a product off the shelf discretly? ",
      tag: "development",
      image: ASSETS["/blog-2.svg"],
      publishedAt: "May 08, 2024",
      modal: {
        title: "Rapid Nationwide Product Recall in Under a Week",
        challenge:
          "A major retailer faced an urgent product recall and needed a nationwide team to remove affected stock from shelves immediately. Speed was critical to prevent customer impact and ensure compliance.",
        solution:
          "Redwigwam deployed its flexible workforce at record speed. The job was live on our platform within 30 minutes, and workers were in stores on the same day. Our real-time reporting tools provided instant updates, ensuring full visibility of progress.",
        result:
          "The entire recall operation was completed in under a week, with stores cleared efficiently and accurately. The retailer praised Redwigwam’s ability to mobilise a national workforce instantly, preventing potential reputational damage and ensuring compliance.",
      },
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
          {caseStudies.map((study, i) => (
            <SwiperSlide key={study.id + i}>
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={study.image}
                  alt="Blog Image"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">{study.tag}</span>
                    <span className="text-gray-600">{study.publishedAt}</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-6 line-clamp-2 h-[64px]">
                    {study.title}
                  </h3>
                  <Button
                    variant={"outline"}
                    className="w-full"
                    onClick={() => setCurrentCaseStudy(study.id)}
                  >
                    Read More
                    <img
                      src={ASSETS["/arrow-right-black.svg"]}
                      alt=""
                      className="w-5 h-5"
                    />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CaseStudyModal
        open={currentCaseStudy}
        onOpenChange={setCurrentCaseStudy}
        modal={
          currentCaseStudy
            ? caseStudies.filter((study) => study.id === currentCaseStudy)[0]
                .modal
            : undefined
        }
      />
    </section>
  );
}

function CaseStudyModal(props: {
  modal?: CaseStudy["modal"];
  open: number | null;
  onOpenChange: (open: number | null) => void;
}) {
  return (
    <Dialog
      open={!!props.open}
      onOpenChange={(v) => {
        v ? props.onOpenChange(props.open) : props.onOpenChange(null);
      }}
    >
      <DialogContent className="bg-white !pt-10 !rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-6">
            {props.modal?.title}
          </DialogTitle>
          <div className="space-y-4">
            <p>
              <span className="font-bold">Challenge: </span>
              {props.modal?.challenge}
            </p>
            <p>
              <span className="font-bold">Solution: </span>
              {props.modal?.solution}
            </p>
            <p>
              <span className="font-bold">Result: </span>
              {props.modal?.result}
            </p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
