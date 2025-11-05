"use client";

import { cloneElement, useState } from "react";
import Link from "next/link";
import OptimizedImage from "../images/optimized-image-component";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
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

// const socialLinks = [
//   { href: "", label: "LinkedIn", icon: <LinkedInLogoIcon /> },
//   { href: "", label: "X/Twitter", icon: <TwitterLogoIcon /> },
//   { href: "", label: "Email", icon: <EnvelopeClosedIcon /> },
// ];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden sm:inline-block sticky top-0 left-0 w-[220px] h-screen bg-[#FCFCFC]">
      <div className="w-[220px] h-full flex flex-col justify-between items-center gap-6 px-5 border-r border-r-[#EBEBEB]">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full h-16 flex flex-col justify-center items-center gap-1">
              <Link href="/" className="w-full flex justify-start items-center">
                <div className="flex gap-2 items-center justify-start w-full">
                  <OptimizedImage
                    src="/images/profile.png"
                    alt="profile image"
                    className="w-8 rounded-full bg-pink-400"
                  />
                  <p className="text-base w-full h-full font-space-grotesk">
                    Kaialan Razz
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-[#929292] text-xs">
              UI/UX and Brand designer, currently Freelancing, building things
              that hopefully encourage us to lead more thoughtful lives.
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            {navLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href[0]}
                  className={cn(
                    "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2 hover:bg-[#f1f1f1] hover:border-[0.5px] hover:border-[#EAEAEA]",
                    item.href.includes(pathname)
                      ? "bg-[#f1f1f1] border-[0.5px] border-[#EAEAEA]"
                      : ""
                  )}
                >
                  <div
                    className={cn(
                      "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0 group-hover:bg-white group-hover:border-[0.5px] group-hover:border-[#EAEAEA]",
                      item.href.includes(pathname)
                        ? "bg-white border border-[#EAEAEA]"
                        : ""
                    )}
                  >
                    {cloneElement(item.icon, {
                      width: 16,
                      height: 16,
                      stroke: item.href.includes(pathname)
                        ? "#000000"
                        : "#808080",
                      strokeWidth: 1,
                      fill: item.href.includes(pathname) ? item.color : "none",
                      className: `group-hover:text-[${item.color}]`,
                    })}
                  </div>
                  <div className="w-full h-full flex justify-start items-center">
                    <span
                      className={cn(
                        "text-xs font-medium group-hover:text-black",
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
            <SocialButtons />
          </div>
        </div>
        <HireMeCard />
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialButtons = () => {
  const [copied, setCopied] = useState(false);
  const email = "kaialanrazz@gmail.com";

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent mailto from opening
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <Link
        href="https://linkedin.com/in/kaialan"
        className={cn(
          "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2 hover:bg-[#f1f1f1] hover:border-[0.5px] hover:border-[#EAEAEA]"
        )}
      >
        <div
          className={cn(
            "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0 group-hover:bg-white group-hover:border-[0.5px] group-hover:border-[#EAEAEA]"
          )}
        >
          <LinkedInLogoIcon className="text-[#808080] group-hover:text-blue-500" />
        </div>
        <div className="w-full h-full flex justify-start items-center">
          <span
            className={cn(
              "text-xs text-[#808080] group-hover:text-black font-medium"
            )}
          >
            LinkedIn
          </span>
        </div>
      </Link>
      <Link
        href="https://x.com/kaialan_"
        className={cn(
          "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2 hover:bg-[#f1f1f1] hover:border-[0.5px] hover:border-[#EAEAEA]"
        )}
      >
        <div
          className={cn(
            "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0 group-hover:bg-white group-hover:border-[0.5px] group-hover:border-[#EAEAEA]"
          )}
        >
          <TwitterLogoIcon className="text-[#808080] group-hover:text-black" />
        </div>
        <div className="w-full h-full flex justify-start items-center">
          <span
            className={cn(
              "text-xs text-[#808080] group-hover:text-black font-medium"
            )}
          >
            X/Twitter
          </span>
        </div>
      </Link>
      <Link
        // href={`mailto:${email}`}
        href=""
        onClick={handleCopy}
        className={cn(
          "group w-full h-full flex justify-start rounded-[11px] cursor-pointer p-1 gap-2 hover:bg-[#f1f1f1] hover:border-[0.5px] hover:border-[#EAEAEA]"
        )}
      >
        <div
          className={cn(
            "w-7 h-7 flex justify-center items-center rounded-[7px] shrink-0 group-hover:bg-white group-hover:border-[0.5px] group-hover:border-[#EAEAEA]"
          )}
        >
          <EnvelopeClosedIcon className="text-[#808080] group-hover:text-green-500" />
        </div>
        <div className="relative w-full h-full flex justify-start items-center">
          <span
            className={cn(
              "text-xs text-[#808080] group-hover:text-black font-medium"
            )}
          >
            <span className="group-hover:hidden">Email</span>
            {/* <span className="hidden group-hover:block"> */}
            <div className="w-full hidden group-hover:block">
              {copied ? (
                <div className="flex justify-center items-center gap-1 text-green-800 text-xs px-2 py-1">
                  <CheckCircledIcon className="text-green-800" />
                  copied
                </div>
              ) : (
                <span>Click to copy Email</span>
              )}
            </div>
          </span>
          {/* </span> */}
        </div>
      </Link>
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
      <Link href='https://cal.com/kaialan/intro' className="w-full">
        <Button className="w-full bg-white text-black hover:bg-black hover:text-white font-semibold transition-all cursor-pointer">
          Book a Call
        </Button>
      </Link>
    </div>
  );
};
