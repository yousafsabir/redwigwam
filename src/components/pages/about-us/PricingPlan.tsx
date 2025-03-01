import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";

const pricingPlans = [
  {
    mostPopular: false,
    title: "Pay as you go",
    pricing: "£12",
    period: "per day",

    benefits: [
      "Per Job Posted",
      "Applicant Tracking",
      "SMS access",
      "Access to Redwigwam workers",
    ],
    link: "https://hirer.redwigwam.com/wizards/registration",
  },
  {
    mostPopular: true,
    title: "Business Plan",
    pricing: "£199",
    period: "mo",
    benefits: [
      "Sms",
      "Right to work checks",
      "Job Board Distribution",
      "ATS Access",
    ],
    link: "https://hirer.redwigwam.com/wizards/registration",
  },
  {
    mostPopular: false,
    title: "Enterprise Plan",
    pricing: "£599",
    period: "mo",
    benefits: [
      "Premium Job board Distribution",
      "Shift management",
      "Export worker details",
      "Right to work checks",
      "Unlimited SMS",
    ],
    link: "https://hirer.redwigwam.com/wizards/registration",
  },
];

export default function PricingPlan() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={ASSETS["/pricing-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium mb-6">Pricing Plan</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover how Redwigwam simplifies your hiring process. Our platform
            connects you with pre-vetted
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              className="relative overflow-hidden bg-white rounded-[10px] border border-[#d8d8d8] p-8"
              key={plan.pricing}
            >
              {/* Most Popular Banner */}
              {plan.mostPopular && (
                <div className="absolute w-[300px] flex top-12 -right-32 rotate-[45deg] bg-red-500 text-white px-4 py-2 rounded-bl-lg">
                  <p className="ml-[55px]">Most Popular</p>
                </div>
              )}
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-8">
                {plan.title}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-medium">{plan.pricing}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-8">*when billed yearly</p>
              <a href={plan.link} className="block mb-6">
                <Button
                  variant={plan.mostPopular ? "default" : "outline"}
                  className="w-full"
                >
                  Get Started
                  <img
                    src={
                      plan.mostPopular
                        ? ASSETS["/arrow-right-white.svg"]
                        : ASSETS["/arrow-right-black.svg"]
                    }
                    alt=""
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <div className="w-full h-[1px] bg-[#d8d8d8] mb-6" />

              <ul className="space-y-4">
                {plan.benefits.map((benefit) => (
                  <li className="flex gap-2">
                    <img
                      src={ASSETS["/checkmark-red.svg"]}
                      alt=""
                      className="w-5 h-5"
                    />
                    <span className="font-medium text-app-gray-3">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
