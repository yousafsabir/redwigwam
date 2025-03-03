import { ASSETS } from "@/lib/assets";

const tools = [
  {
    icon: ASSETS["/job-search-white.svg"],
    title: "Post Job",
    description:
      "Scale your workforce up or down without long-term commitments, ensuring flexibility for your business.",
  },
  {
    icon: ASSETS["/link-white.svg"],
    title: "Connect with workers",
    description:
      "Scale your workforce up or down without long-term commitments, ensuring flexibility for your business.",
  },
  {
    icon: ASSETS["/comment-white.svg"],
    title: "Chat to Workers",
    description:
      "Scale your workforce up or down without long-term commitments, ensuring flexibility for your business.",
  },
];

export default function AllTools() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={ASSETS["/all-tools-bg.png"]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-32 md:gap-16 items-center">
          <h2 className="lg:hidden text-4xl text-center lg:text-left font-semibold leading-[1.12] text-app-gray-3 mb-[14px]">
            All-in-One Hiring Solution
            <br />
            Built for Speed
          </h2>
          <div className="relative">
            <img
              src={ASSETS["/all-tools.svg"]}
              alt="Workflow Diagram"
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="hidden lg:block text-4xl text-center lg:text-left font-semibold leading-[1.12] text-app-gray-3 mb-[14px]">
              All-in-One Hiring Solution
              <br />
              Built for Speed
            </h2>
            <p className="text-base text-center lg:text-left text-app-gray-2 leading-[1.12] font-normal mb-8">
              Post a job, chat with workers, and scale your team effortlessly.
              No long-term commitments, just flexible hiring that works.
            </p>

            <div className="w-full h-[1px] bg-[#D9D9D9] mb-8"></div>

            <div className="space-y-12">
              {tools.map((tool, i) => (
                <div className="flex gap-[10px]" key={tool.title + i}>
                  <div className="flex-shrink-0 w-9 h-9 bg-app-gray-3 rounded-full flex items-center justify-center">
                    <img src={tool.icon} alt="" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl text-app-gray-3 leading-[1.7] font-medium mb-[6px]">
                      {tool.title}
                    </h3>
                    <p className="text-app-gray-2 leading-[1.4]">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
