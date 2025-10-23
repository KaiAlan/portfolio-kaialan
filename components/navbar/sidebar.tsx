"use client";

import { cloneElement } from "react";
import Link from "next/link";
import OptimizedImage from "../images/optimized-image-component";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CubeIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  LinkedInLogoIcon,
  TransformIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const navLinks = [
  {
    href: ["/", "/all", "/ui-ux", "/graphics", "/branding"],
    label: "My Works",
    icon: <CubeIcon />,
  },
  { href: ["/gallery"], label: "Gallery", icon: <DashboardIcon /> },
  { href: ["/about-me"], label: "About Me", icon: <FaceIcon /> },
  { href: ["/services"], label: "Services", icon: <TransformIcon /> },
];

const socialLinks = [
  { href: "", label: "LinkedIn", icon: <LinkedInLogoIcon /> },
  { href: "", label: "X/Twitter", icon: <TwitterLogoIcon /> },
  { href: "", label: "Email", icon: <EnvelopeClosedIcon /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 left-0 w-[220px] h-screen">
      <div className="w-[220px] h-full flex flex-col gap-6 px-5 border-r border-r-[#EBEBEB]">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full h-16 flex flex-col justify-center items-center gap-1">
            <Link href="/" className="w-full flex justify-start items-center">
              <div className="flex gap-2 items-center justify-start w-full">
                <OptimizedImage
                  src="/images/profile.png"
                  alt="profile image"
                  className="w-8 rounded-full bg-pink-400"
                />
                <p className="text-base w-full h-full font-mono">
                  Kaialan Razz
                </p>
              </div>
            </Link>
          </div>
          <p className="text-[#929292] text-xs">
            UI/UX and Graphics designer, currently Freelancing, building things
            that hopefully encourage us to lead more thoughtful lives.
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          {navLinks.map((item) => {
            return (
              <Link
                href={item.href[0]}
                className={cn(
                  "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2",
                  item.href.includes(pathname)
                    ? "bg-[#f1f1f1] border-[0.5px] border-[#EAEAEA]"
                    : ""
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0",
                    item.href.includes(pathname)
                      ? "bg-white border border-[#EAEAEA]"
                      : ""
                  )}
                >
                  {cloneElement(item.icon, {
                    color: item.href.includes(pathname) ? "#000000" : "#808080",
                  })}
                </div>
                <div className="w-full h-full flex justify-start items-center">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      item.href.includes(pathname)
                        ? "text-black"
                        : "text-[#808080]"
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <span className="text-xs text-[#A7A7A7] font-medium">Socials</span>
          <div className="w-full flex flex-col gap-1">
            {socialLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  className={cn(
                    "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2 hover:bg-[#f1f1f1] hover:border-[0.5px] hover:border-[#EAEAEA]"
                  )}
                >
                  <div
                    className={cn(
                      "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0 hover:bg-white hover:border-[0.5px] hover:border-[#EAEAEA]"
                    )}
                  >
                    {cloneElement(item.icon, {
                      color: item.href.includes(pathname)
                        ? "#000000"
                        : "#808080",
                    })}
                  </div>
                  <div className="w-full h-full flex justify-start items-center">
                    <span
                      className={cn(
                        "text-xs font-medium text-[#808080] hover:text-black"
                      )}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
