import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={ASSETS["/ready-to-hire-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-5xl text-center lg:text-left font-medium mb-6">
              Ready To Hire Smarter?
            </h2>
            <p className="text-xl text-center lg:text-left text-gray-700 mb-8">
              Join thousands of businesses using Redwigwam for staffing
              solutions that fit your needs. Experience the ease of hiring with
              our pre-vetted workforce.
            </p>
            <div className="flex justify-center gap-3 lg:justify-start">
              <a
                href="https://savvycal.com/redwigwam/chat-with-redwigwam"
                target="_blank"
              >
                <Button variant="default">
                  Book Demo
                  <img
                    src={ASSETS["/arrow-right-white.svg"]}
                    alt=""
                    className="w-5 h-5"
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
          </div>

          <div className="relative">
            <img
              src={ASSETS["/ready-to-hire.svg"]}
              alt="Ready to Hire"
              className="w-full"
              loading="lazy"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-lg max-w-md w-full">
              <h3 className="text-3xl font-medium mb-2">
                The#1Home For Hourly Works
              </h3>
              <p className="text-gray-700">
                Acess The UK's Latgets Network Of Hourly Paid Works
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
