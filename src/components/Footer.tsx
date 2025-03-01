import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/button";

const explore = [
  { label: "Find Work", href: "https://www.redwigwam.com/find-work/" },
  { label: "Post a Job", href: "https://www.redwigwam.com/post-a-job/" },
  { label: "Latest Jobs", href: "https://www.redwigwam.com/jobs/" },
  { label: "Sectors", href: "https://www.redwigwam.com/sectors/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "https://www.redwigwam.com/contact-us/" },
];

const legal = [
  { label: "Privacy", href: "https://www.redwigwam.com/privacy/" },
  { label: "Terms", href: "https://www.redwigwam.com/terms/" },
];

const socialLinks: {
  label: string;
  href: string;
  icon: keyof typeof ASSETS;
}[] = [
  {
    label: "Facebook",
    href: "https://en-gb.facebook.com/redwigwam/",
    icon: "/facebook-black.svg",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/redwigwam",
    icon: "/twitter-black.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/red-wigwam",
    icon: "/linkedin-black.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/redwigwam/?hl=en",
    icon: "/instagram-black.svg",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCFcWRzx65Oo7lZO2YPuW0xQ",
    icon: "/youtube-black.svg",
  },
];

export default function () {
  return (
    <footer className="bg-white py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <img
              src={ASSETS["/logo.svg"]}
              alt="Redwigwam"
              className="h-8 mb-4"
            />
            <h2 className="text-[18px] font-medium mb-4">
              Stay informed with our latest news and offers
            </h2>
          </div>

          <div>
            <p className="text-app-gray-1 text-sm mb-2">
              By Subscribing you agree to our Privacy Policy.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email Here"
                className="flex-1 px-6 py-3 rounded-[10px] border border-app-red focus:outline-none text-app-gray-3 placeholder:text-app-gray-3"
              />
              <Button>
                Join
                <img
                  src={ASSETS["/arrow-right-white.svg"]}
                  alt=""
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-bold text-app-gray-3 mb-6">Explore</h3>
            <ul className="space-y-4">
              {explore.map((link, i) => (
                <li key={link.href + i}>
                  <a
                    href={link.href}
                    className="text-app-gray-2 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-app-gray-3 mb-6">Legal</h3>
            <ul className="space-y-4">
              {legal.map((link, i) => (
                <li key={link.href + i}>
                  <a
                    href={link.href}
                    className="text-app-gray-2 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-app-gray-3 mb-6">Social</h3>
            <ul className="space-y-4">
              {socialLinks.map((link, i) => (
                <li key={link.href + i}>
                  <a
                    href={link.href}
                    className="text-app-gray-2 hover:text-gray-900"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-7">
            <p className="text-app-gray-2">
              © 2025 Redwigwam. All rights reserved.
            </p>
            <a
              href="https://www.redwigwam.com/privacy/"
              className="text-app-gray-2 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.redwigwam.com/terms/"
              className="text-app-gray-2 hover:text-gray-900"
            >
              Terms of Service
            </a>
            <button className="text-app-gray-2 hover:text-gray-900">
              Cookies settings
            </button>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a href={social.href} key={social.href + i} target="_blank">
                <img
                  src={ASSETS[social.icon]}
                  alt={social.label}
                  className="w-6 h-6 group-hover:brightness-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
