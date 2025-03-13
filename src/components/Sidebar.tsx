"use client";

import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const body = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      body.current = window.document.querySelector("body");
    }
  }, []);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
    if (body.current) {
      body.current.classList.toggle("overflow-hidden");
    }
  }
  return (
    <div className="sidebar">
      <button
        className={cn("menu", sidebarOpen && "opened")}
        id="menu"
        aria-expanded={sidebarOpen}
        onClick={toggleSidebar}
        aria-label="Main Menu"
      >
        <svg width="30" height="30" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          ></path>
          <path className="line line2" d="M 20,50 H 80"></path>
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          "sidenav z-40 fixed top-0 bottom-0 bg-white flex flex-col justify-center items-center",
          sidebarOpen && "active",
        )}
      >
        <div className="mb-6">
          <a
            href="/about-us"
            className="text-app-gray-2 md:inline font-medium hover:opacity-75"
          >
            About Us
          </a>
        </div>

        <Accordion type="single" collapsible className="mb-2">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="flex items-center gap-[5px] text-base text-app-gray-2 font-medium pt-0">
              Job Seekers
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center space-y-2 border-b">
              <a href="https://login.redwigwam.com/otp-email?utm_source=websitesignuppage&utm_term=none">
                Sign up now
              </a>
              <a href="https://www.redwigwam.com/jobs/">Latest jobs</a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="flex items-center gap-[5px] text-base text-app-gray-2 font-medium pt-0">
              For Employers
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center space-y-2 border-b">
              <a href="https://hirer.redwigwam.com/login/" target="_blank">
                Hirer login
              </a>
              <a
                href="https://hirer.redwigwam.com/wizards/registration"
                target="_blank"
              >
                Hirer Sign up
              </a>
              <a
                href="https://savvycal.com/redwigwam/chat-with-redwigwam"
                target="_blank"
              >
                Book Demo
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
