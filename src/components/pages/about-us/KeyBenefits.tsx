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
            Discover key benefits of
            <br />
            Redwigwam staffing.
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
              Instantly access a pool of pre-vetted workers, making it easy to
              book qualified talent for your business needs.
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
              Receive quick responses from candidates ready to take on your job
              openings, ensuring no delays in your staffing process.
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
              Our platform matches your business with workers who have the right
              skills, experience, and qualifications for your specific job
              requirements.
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
              Ensure all your hires meet legal requirements with our built-in
              Right to Work compliance feature, saving you time and reducing
              risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
