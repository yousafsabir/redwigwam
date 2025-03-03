import { ASSETS } from "@/lib/assets";

export default function KeyBenefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={ASSETS["/key-benefits-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />

      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-medium mb-6">
            Why Businesses Choose
            <br />
            Redwigwam
          </h2>
          <p className="text-xl text-gray-700">
            Discover how Redwigwam simplifies your hiring process. Our platform
            connects you with pre-vetted, flexible staff quickly and
            efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#D8D8D8] bg-white rounded-2xl p-8">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img
                src={ASSETS["/all-bookmark-white.svg"]}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">
              Just Book Qualified Workers
            </h3>
            <p className="text-gray-700">
              Book pre-vetted workers instantly—no hassle, no delays.
            </p>
          </div>

          <div className="border border-[#D8D8D8] bg-white rounded-2xl p-8">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img
                src={ASSETS["/manager-white.png"]}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">Responsive Candidates</h3>
            <p className="text-gray-700">
              90% of workers respond within 5 minutes—fill shifts faster.
            </p>
          </div>

          <div className="border border-[#D8D8D8] bg-white rounded-2xl p-8">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img
                src={ASSETS["/search-white.svg"]}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">
              Find Qualified Workers
            </h3>
            <p className="text-gray-700">
              Get the right workers, with the right skills, at the right time.
            </p>
          </div>

          <div className="border border-[#D8D8D8] bg-white rounded-2xl p-8">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img
                src={ASSETS["/drag-right-white.svg"]}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-2xl font-medium mb-4">
              Right to Work Compliance
            </h3>
            <p className="text-gray-700">
              We handle Right to Work checks—hire faster, stay compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
