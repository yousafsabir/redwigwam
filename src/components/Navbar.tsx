import { ASSETS } from "@/lib/assets";
import Sidebar from "@/components/Sidebar";
import {
  JobSeekersDropdown,
  EmployersDropdown,
} from "@/components/NavDropdowns";
import Logo from "../../public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-navbar">
      <div className="container mx-auto py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <a href="/" className="flex items-center">
            <Image
              src={ASSETS["/logo"]}
              alt="Redwigwam"
              className="h-8 w-auto"
              width={400}
              height={75}
            />
          </a>
          <a
            href="/about-us"
            className="hidden text-app-gray-2 md:inline font-medium hover:opacity-75"
          >
            About Us
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <JobSeekersDropdown />
          <EmployersDropdown />
        </div>

        <Sidebar />
      </div>
    </nav>
  );
}
