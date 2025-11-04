"use client";

import { cloneElement, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import LinkedinColoredIcon from "@/assets/svg/linkedin-colored";
import XColoredIcon from "@/assets/svg/x-colored";
import GmailColoredIcon from "@/assets/svg/gmail-colored";
import SkewIcon from "@/assets/svg/skew";
import ContainerIcon from "@/assets/svg/container";
import FaceWinkIcon from "@/assets/svg/face-wink";
import GridIcon from "@/assets/svg/grid";
import GoogleMeetIcon from "@/assets/svg/gmeet";

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
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const email = "dev.kaialan@gmail.com";

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent mailto from opening
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
  };

  return (
    <nav className="sticky bottom-0 left-0 sm:hidden w-full h-20 px-5 py-4 bg-white shadow">
      <div className="relative w-full flex justify-between gap-2">
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
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((open) => !open)}
          className="w-full h-full p-1"
        >
          <SocialButtons />
        </button>
        {open && (
          <div className="absolute bottom-[calc(100%+8px)] right-0 w-56 bg-white rounded-2xl shadow-lg flex flex-col py-4 px-5 z-20 transition-all border border-gray-100">
            <Link
              href="www.linkedin.com/in/kaialan"
              target="_blank"
              className="flex items-center gap-2 text-base font-medium hover:bg-gray-50 rounded"
            >
              <LinkedinColoredIcon width={20} height={20} />
              <span className="w-full flex flex-col gap-1 py-2 border-b border-gray-200">
                LinkedIn
              </span>
            </Link>
            <Link
              href="https://x.com/kaialan_"
              target="_blank"
              className="flex items-center gap-2 text-base font-medium hover:bg-gray-50 rounded"
            >
              <XColoredIcon width={20} height={20} />
              <span className="w-full flex flex-col gap-1 py-2 border-b border-gray-200">
                Twitter
              </span>
            </Link>
            <Link
              href="mailto:kaialanrazz@gmail.com"
              target="_blank"
              className="flex items-center gap-2 py-2 text-base font-medium hover:bg-gray-50 rounded"
            >
              <GmailColoredIcon width={20} height={20} className="p-px" />
              Gmail
            </Link>
          </div>
        )}

        <HireMeCard />
      </div>
    </nav>
  );
};

export default MobileMenuBar;

const SocialButtons = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-[11px] cursor-pointer gap-1">
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

// const HireMeCard = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="w-full flex justify-end absolute bottom-[calc(100%+8px)] right-0 transition-all">
//       {open ? (
//         <div className="w-2xs flex flex-col bg-[#EE5E32] mb-6 rounded-[6px] p-4 gap-5 select-none">
//           <div className="w-full flex flex-col justify-start items-start gap-10">
//             <div className="w-full flex justify-between items-center">
//               <span className="text-white text-sm">@kaialan_</span>
//               <Cross2Icon
//                 onClick={() => setOpen(false)}
//                 className="text-white w-5 h-5"
//               />
//             </div>
//             <p className="text-white text-left text-xl font-space-grotesk font-bold leading-6">
//               Crafting ever lasting Experiences & Identities{" "}
//             </p>
//           </div>
//           <Button className="w-full h-9 bg-black text-white hover:bg-white hover:text-black font-semibold transition-all cursor-pointer">
//             Book a Call
//           </Button>
//         </div>
//       ) : (
//         <Button
//           onClick={() => setOpen(true)}
//           className="w-16 h-16 rounded-full mb-5 p-2 flex items-center justify-center cursor-pointer"
//         >
//           <GoogleMeetIcon style={{ width: 32, height: 32 }} />
//         </Button>
//       )}
//     </div>
//   );
// };

const HireMeCard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full flex justify-end absolute bottom-[calc(100%+8px)] right-0 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, scaleY: 0.2, y: 20, borderRadius: "999px" }}
            animate={{
              opacity: 1,
              scaleY: 1,
              y: 0,
              borderRadius: "24px",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              scaleY: 0.2,
              y: 20,
              borderRadius: "999px",
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.3,
              },
            }}
            style={{ originY: 1 }}
            className="w-2xs flex flex-col bg-[#EE5E32] mb-6 rounded-[6px] p-4 gap-5 shadow-xl"
          >
            {/* Popup Content */}
            <div className="w-full flex flex-col justify-start items-start gap-10">
              <div className="w-full flex justify-between items-center">
                <span className="text-white text-sm">@kaialan_</span>
                <Cross2Icon
                  onClick={() => setOpen(false)}
                  className="text-white w-5 h-5 cursor-pointer"
                />
              </div>
              <p className="text-white text-left text-xl font-space-grotesk font-bold leading-6">
                Crafting ever lasting Experiences & Identities
              </p>
            </div>
            <Button className="w-full h-9 bg-black text-white hover:bg-white hover:text-black font-semibold transition-all cursor-pointer rounded-2xl">
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animate button too */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={open ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute bottom-0 right-0"
      >
        <Button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full mb-5 p-2 flex items-center justify-center cursor-pointer"
        >
          <GoogleMeetIcon style={{ width: 32, height: 32 }} />
        </Button>
      </motion.div>
    </div>
  );
};
