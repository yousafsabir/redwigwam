import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const why = [
  {
    image: ASSETS["/job-board"],
    imageScale: 1.2,
    title: "Job Board Distribution",
    points: [
      "We Post Jobs Everywhere – So You Don’t Have To",
      "Your roles go live on Google, Indeed, Facebook, and more – reaching top talent instantly. One platform, endless possibilities",
      "consolidating all candidates in a central, secure, and user-friendly platform",
    ],
    btnText: "Get Started",
  },
  {
    image: ASSETS["/qualified-workers"],
    imageScale: 1.5,
    title: "Find Qualified Workers",
    points: [
      "Browse top candidates and instantly match with the best fit for your business.",
      "Request videos, CVs, and availability – making hiring easier than ever.",
      "Skip the hassle of endless applications – get the right workers, fast.",
    ],
    btnText: "Book Demo",
  },
  {
    image: ASSETS["/responsive-candidates"],
    imageScale: 1.45,
    title: "Responsive Candidates",
    points: [
      "90% of candidates respond within 5 minutes—reach them where they are.",
      "Email open rates are only 2.3%. Stop wasting time on ignored messages",
      "Ditch cold calls. Engage active job seekers instantly.",
    ],
    btnText: "Get Started",
  },
  {
    image: ASSETS["/right-to-work"],
    imageScale: 1.4,
    title: "Right to Work",
    points: [
      "We verify Right to Work at no extra cost—so you hire with confidence.",
      "Use smart filters to find fully compliant workers instantly.",
    ],
    btnText: "Let's Chat",
  },
];

export default function WhyRedwigwam() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl font-semibold text-app-gray-3 text-center mb-32">
          Why Redwigwam
        </h2>

        <div className="space-y-40">
          {why.map((w, i) => (
            <div
              key={w.title + i}
              className={cn(
                "why-section flex gap-6 lg:gap-32 flex-col items-center",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              <h3 className="lg:hidden text-center text-4xl font-medium">
                {w.title}
              </h3>
              <div className="flex-1">
                <img
                  src={w.image}
                  alt={w.title}
                  className={`main-image`}
                  style={{ transform: `scale(${w.imageScale})` }}
                />
              </div>

              <div className="flex-1 max-w-xl">
                <h3 className="hidden lg:block text-4xl font-medium mb-10">
                  {w.title}
                </h3>

                <div className="space-y-6 mb-10">
                  {w.points.map((point, i) => (
                    <div className="flex gap-4" key={i}>
                      <div className="flex-shrink-0 w-6 h-6 gap-4">
                        <img
                          src={ASSETS["/checkmark-circle-black.svg"]}
                          alt="Checkmark"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-base text-app-gray-2">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://savvycal.com/redwigwam/chat-with-redwigwam"
                    target="_blank"
                  >
                    <Button variant="default">
                      {w.btnText}
                      <img
                        src={ASSETS["/arrow-right-white.svg"]}
                        alt=""
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
