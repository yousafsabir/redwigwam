import { Button } from "@/components/ui/button";
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
      <DropdownMenuTrigger className="flex items-center gap-2">
        For Job Seeker
        <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-xl">
        <DropdownMenuItem>
          <a href="#">Sign up now</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#">Latest jobs</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function EmployersDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        For Employers
        <img src={ASSETS["/angle-down.svg"]} alt="" className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-xl">
        <DropdownMenuItem>
          <a href="https://hirer.redwigwam.com/login/" target="_blank">
            Hirer login
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="https://hirer.redwigwam.com/wizards/registration"
            target="_blank"
          >
            Hirer Sign up
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
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
