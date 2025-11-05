"use client";

import React from "react";
import { RainbowButton } from "./ui/rainbow-button";

type PricingModel = {
  title: string;
  description: string;
};

const pricingModels: PricingModel[] = [
  {
    title: "Fixed Fee",
    description:
      "For well-defined projects, pay a set amount for concrete results with clear deliverables.",
  },
  {
    title: "Hourly Rate",
    description:
      "Best for open-ended consulting, design tweaks, or small tasks; flexible billing for ongoing work.",
  },
  {
    title: "Retainer",
    description:
      "Reserve priority hours each month for recurring support and ongoing updates.",
  },
  {
    title: "Subscription",
    description:
      "Ideal for clients seeking bundled design plus maintenance services, predictable and all-inclusive.",
  },
];

export default function PricingSection() {
  return (
    <section className="w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-space-grotesk font-semibold mb-3 text-gray-900">
        Worried about Pricing?
      </h2>
      <p className="mb-10 text-gray-600 text-xs">
        Pricing is typically project-based with clear deliverables. For ongoing
        work, hourly and retainer models are available. Every project gets a
        personalized quote, just share your goals and budget for tailored
        suggestions.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {pricingModels.map((model, idx) => (
          <div
            key={model.title}
            className="rounded-lg border border-gray-200 bg-white shadow-sm p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-space-grotesk font-semibold text-gray-900">
              {model.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {model.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-2">
        <span className="text-base text-center text-gray-700 mb-3">
          Need something custom? Every project gets a personalized estimate.
        </span>
        <RainbowButton variant="default" className="h-12 rounded-lg flex justify-center items-center font-medium">
          Get a custom quote
        </RainbowButton>
      </div>
    </section>
  );
}
