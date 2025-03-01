import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const why = [
  {
    image: ASSETS["/why-image.svg"],
    imageScale: 1.7,
    title: "Job Board Distribution",
    points: [
      "You'll reach a wider network. Bringing candidates into a central place.",
      "Tried of posting on various job boards? We'll handle your job posting for you.",
      "consolidating all candidates in a central, secure, and user-friendly platform",
    ],
    btnText: "Get Started",
  },
  {
    image: ASSETS["/qualified-workers.svg"],
    imageScale: 1.5,
    title: "Find Qualified Workers",
    points: [
      "Browse through pre-vetted candidates and select the best fit  your business needs.",
      "Request videos, resume, availability, and specific  to ensure that only the most suitable candidates advance through your application process. Save your team the effort of pursing unqualified candidates.",
      "The typical candidate applies to 74 job during each visit to indeed. Is your team spending hours each day reminding employees about their applications and what your business represents?",
    ],
    btnText: "Book Demo",
  },
  {
    image: ASSETS["/responsive-candidates.svg"],
    imageScale: 1.45,
    title: "Responsive Candidates",
    points: [
      "Mobile-first communication means candidates respond within an average of 5 minutes, with an impressive 90%  rate. You need to connect with candidates in their  space, whether that's on social media or niche job boards.",
      "Traditional email open rates are only 2.3%, so avoid sending emails that will likely go unnoticed.",
      "Are you wasting valuable in-house time cold calling candidates? Utilize redwigwam to engage actively interested workers instead.",
    ],
    btnText: "Get Started",
  },
  {
    image: ASSETS["/right-work.svg"],
    imageScale: 1.4,
    title: "Right to Work",
    points: [
      "Redwigwam can check applicants right to work as standard  with no extra cost",
      "Redwigwam can check applicants right to work as standard and with no extra cost. You can filters to only see workers who have the right to work in the UK. Allowing to move faster- see applicants who have already their right to work.",
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
