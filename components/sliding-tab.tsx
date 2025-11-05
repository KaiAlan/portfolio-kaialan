'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React, { useRef, useLayoutEffect, useState } from "react";

type Tab = {
  label: string;
  value: string;
  content?: React.ReactNode;
};

const tabItems: Tab[] = [
  { label: "All", value: "all", content: <div>All Content</div> },
  { label: "UI/UX", value: "uiux", content: <div>UI/UX Content</div> },
  { label: "Graphics", value: "graphics", content: <div>Graphics Content</div> },
  { label: "Branding", value: "branding", content: <div>Branding Content</div> },
];

export default function AnimatedTabsWithContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || tabItems[0].value;
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const index = tabItems.findIndex((t) => t.value === currentTab);
    if (index === -1 || !refs.current[index]) return;

    const tabNode = refs.current[index];
    const containerNode = containerRef.current;
    if (!tabNode || !containerNode) return;

    const containerRect = containerNode.getBoundingClientRect();
    const tabRect = tabNode.getBoundingClientRect();

    setSliderStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    });
  }, [currentTab]);

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="w-fit"
      >
        <TabsList
          ref={containerRef}
          className="relative h-11 flex bg-[#F1F1F1] border-[#eaeaea] rounded-[11px] p-2 gap-0 perspective-[1000px]"
        >
          <motion.div
            className="absolute top-2 bottom-2 bg-white rounded-[5px] shadow"
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              left: sliderStyle.left,
              width: sliderStyle.width,
            }}
          />
          {tabItems.map((item, idx) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              className="w-full px-3 py-1.5 rounded-[5px] text-xs font-semibold text-neutral-500 cursor-pointer relative z-10 select-none"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.span
                layoutId={currentTab === item.value ? "clickedbutton" : undefined}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`relative block ${
                  currentTab === item.value ? "text-black" : "text-neutral-500"
                }`}
              >
                {item.label}
              </motion.span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
}