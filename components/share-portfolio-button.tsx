"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/assets/svg/whatsapp";
import { XIcon } from "@/assets/svg/x-twitter";
import { LinkedInIcon } from "@/assets/svg/linkedin";
import { LinkIcon } from "@/assets/svg/link";
import { FacebookIcon } from "@/assets/svg/facebook";

const portfolioLink =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "https://kaialan.vercel.app";

const introText = "Take a look at Kaialan Razz's portfolio:";

const socials = [
  {
    name: "Copy link",
    onClick: (url: string) =>
      navigator.clipboard.writeText(introText + " " + url),
    icon: (
      <span className="bg-gray-100 rounded-full p-3 text-black text-xl">
        <LinkIcon width={24} height={24} />
      </span>
    ),
    url: null,
  },
  {
    name: "WhatsApp",
    url: (url: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        introText + " " + url
      )}`,
    icon: (
      <span className="bg-green-500 rounded-full p-3 text-white text-xl">
        <WhatsAppIcon width={24} height={24} />
      </span>
    ),
  },
  {
    name: "LinkedIn",
    url: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        introText + " " + url
      )}`,
    icon: (
      <span className="bg-[#0288D1] rounded-full p-3 text-white text-xl">
        <LinkedInIcon width={24} height={24} />
      </span>
    ),
  },
  {
    name: "Facebook",
    url: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        introText + " " + url
      )}`,
    icon: (
      <span className="bg-[#1877f2] rounded-full p-3 text-white text-xl">
        <FacebookIcon width={24} height={24} />
      </span>
    ),
  },
  {
    name: "X",
    url: (url: string) =>
      `https://x.com/share?url=${encodeURIComponent(introText + " " + url)}`,
    icon: (
      <span className="bg-black rounded-full p-3 text-xl">
        <XIcon width={24} height={24} />
      </span>
    ),
  },
];

interface SharePortfolioProps {
  portfolioUrl?: string;
  variant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
  children: React.ReactNode;
}

export function SharePortfolio({
  portfolioUrl = portfolioLink,
  variant = "outline",
  className,
  children,
}: SharePortfolioProps) {
  const [copied, setCopied] = useState(false);

  function handleShare(social: (typeof socials)[number]) {
    if (social.onClick) {
      social.onClick(portfolioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (social.url) {
      window.open(social.url(portfolioUrl), "_blank");
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={variant} className={cn("font-semibold", className)}>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto flex flex-col items-center rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
        >
          <div className="mb-2 font-medium text-black dark:text-white text-center">
            Share
          </div>
          <div className="flex flex-row gap-5 justify-center">
            {socials.map((social) => (
              <button
                key={social.name}
                className="flex flex-col items-center focus:outline-none"
                onClick={() => handleShare(social)}
                type="button"
              >
                {social.icon}
                <span className="mt-2 text-xs font-medium text-black dark:text-white">
                  {social.name === "Copy link" && copied
                    ? "Copied!"
                    : social.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
