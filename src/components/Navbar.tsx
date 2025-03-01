import { ASSETS } from "@/lib/assets";
import Sidebar from "@/components/Sidebar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-navbar">
      <div className="container mx-auto py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <a href="/" className="flex items-center">
            <img src={ASSETS["/logo.svg"]} alt="Redwigwam" className="h-8" />
          </a>
          <a
            href="/about-us"
            className="hidden text-app-gray-2 md:inline font-medium hover:opacity-75"
          >
            About Us
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className="relative group">
            <button className="flex items-center gap-[5px] text-app-gray-2 font-medium hover:opacity-75">
              For Job Seeker
              <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-[5px] text-app-gray-2 font-medium hover:opacity-75">
              For Employers
              <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Sidebar />
      </div>
    </nav>
  );
}
