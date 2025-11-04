"use client";

import { cloneElement, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  CubeIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  LinkedInLogoIcon,
  TransformIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import LinkedinColoredIcon from "@/assets/svg/linkedin-colored";
import XColoredIcon from "@/assets/svg/x-colored";
import GmailColoredIcon from "@/assets/svg/gmail-colored";
import SkewIcon from "@/assets/svg/skew";
import ContainerIcon from "@/assets/svg/container";
import FaceWinkIcon from "@/assets/svg/face-wink";
import GridIcon from "@/assets/svg/grid";

const navLinks = [
  {
    href: ["/", "/all", "/ui-ux", "/graphics", "/branding"],
    label: "My Works",
    icon: <ContainerIcon />,
    color: "#ff637e",
  },
  {
    href: ["/gallery"],
    label: "Gallery",
    icon: <GridIcon />,
    color: "#2b7fff",
  },
  {
    href: ["/about-me"],
    label: "About Me",
    icon: <FaceWinkIcon />,
    color: "#f0b100",
  },
  {
    href: ["/services"],
    label: "Services",
    icon: <SkewIcon />,
    color: "#00bba7",
  },
];

const MobileMenuBar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky bottom-0 left-0 sm:hidden w-full h-20 px-5 py-4 bg-white shadow">
      <div className="w-full flex justify-between gap-2">
        {navLinks.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href[0]}
              className="group w-full h-full flex flex-col justify-center items-center rounded-[11px] cursor-pointer p-1 gap-1"
            >
              {cloneElement(item.icon, {
                width: 16,
                height: 16,
                stroke: item.href.includes(pathname) ? "#000000" : "#808080",
                strokeWidth: 1,
                fill: item.href.includes(pathname) ? item.color : "none",
              })}
              <div className="w-full h-full flex justify-start items-center">
                <span
                  className={cn(
                    "w-full text-center text-[10px] font-semibold group-hover:text-black",
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
        <SocialButtons />
      </div>
    </nav>
  );
};

export default MobileMenuBar;

const SocialButtons = () => {
  return (
    <div className="group w-full h-full flex flex-col justify-center items-center rounded-[11px] cursor-pointer p-1 gap-1">
      <span className="flex">
        <span className="rounded-full border border-gray-200 box-border bg-white w-4 h-4 flex items-center justify-center">
          <LinkedinColoredIcon width={12} height={12} />
        </span>
        <span className="rounded-full border border-gray-200 box-border bg-white w-4 h-4 flex items-center justify-center -ml-1">
          <XColoredIcon width={12} height={12} />
        </span>
        <span className="rounded-full border border-gray-200 box-border bg-white w-4 h-4 flex items-center justify-center -ml-1">
          <GmailColoredIcon width={12} height={12} />
        </span>
      </span>

      <div className="w-full h-full flex justify-start items-center">
        <span className="w-full text-center text-[10px] font-semibold text-[#808080]">
          Socials
        </span>
      </div>
    </div>
  );
};

const HireMeCard = () => {
  // const [ adHidden, setAdHidden ] = useState(false)
  return (
    <div className="w-full flex flex-col bg-[#EE5E32] mb-6 rounded-[6px] p-2 gap-5 select-none">
      <div className="w-full flex flex-col justify-start items-start gap-20">
        <span className="text-white text-sm font-semibold">@kaialan_</span>
        <p className="text-white text-left text-2xl font-bold leading-8">
          Crafting ever lasting Experiences & Identities{" "}
        </p>
      </div>
      <Button className="w-full bg-white text-black hover:bg-black hover:text-white font-semibold transition-all cursor-pointer">
        Book a Call
      </Button>
    </div>
  );
};
