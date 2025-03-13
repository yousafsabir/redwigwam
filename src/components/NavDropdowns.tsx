import { ASSETS } from "@/lib/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function JobSeekersDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
        Job Seekers
        <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-xl p-3">
        <DropdownMenuItem className="text-base hover:underline">
          <a href="https://login.redwigwam.com/otp-email?utm_source=websitesignuppage&utm_term=none">
            Sign up now
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base hover:underline">
          <a href="https://www.redwigwam.com/jobs/">Latest jobs</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function EmployersDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
        For Employers
        <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-xl p-3">
        <DropdownMenuItem className="text-base hover:underline">
          <a href="https://hirer.redwigwam.com/login/" target="_blank">
            Hirer login
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base hover:underline">
          <a
            href="https://hirer.redwigwam.com/wizards/registration"
            target="_blank"
          >
            Hirer Sign up
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base hover:underline">
          <a
            href="https://savvycal.com/redwigwam/chat-with-redwigwam"
            target="_blank"
          >
            Book Demo
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
