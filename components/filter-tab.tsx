"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React, { useRef, useLayoutEffect, useState } from "react";

const tabItems = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "uiux" },
  { label: "Graphics", value: "graphics" },
  { label: "Branding", value: "branding" },
];

export function FilterTab() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || tabItems[0].value;
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  // Store slider position for sliding animation
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
    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-fit">
      <TabsList
        ref={containerRef}
        className="relative h-11 flex bg-[#f6f6f5] border-[#eaeaea] rounded-[11px] p-2 gap-0 perspective-[1000px]"
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
  );
}
