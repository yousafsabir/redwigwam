import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <header className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img
        src={ASSETS["/how-it-works-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="container mx-auto py-20 text-center">
        <h1 className="text-5xl text-app-gray-3 font-bold leading-[1.12] mb-6">
          Find the Right Hourly Workers,
          <br />
          Fast and Easy
        </h1>
        <p className="text-xl text-app-gray-2 max-w-3xl mx-auto mb-12">
          Effortlessly Connect with Qualified Hourly Workers and Streamline Your
          Staffing Process
        </p>
        <a href="/demo">
          <Button>
            Book A Demo
            <img
              src={ASSETS["/arrow-right-white.svg"]}
              alt=""
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </a>
      </div>
    </header>
  );
}
