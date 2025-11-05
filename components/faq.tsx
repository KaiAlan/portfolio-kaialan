"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

type FaqType = {
  question: string;
  answer: string;
};

const faqs: FaqType[] = [
  {
    question: "What is included in your web and mobile (UI/UX) design service?",
    answer:
      "Each design package covers user research, wireframes, high-fidelity designs, and handoff-ready files, along with feedback rounds for revision.",
  },
  {
    question: "Do you offer only design, or can you also build the site?",
    answer:
      "Yes, we also offer end-to-end site development along with design packages when needed.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most design or development projects are completed within 2–6 weeks based on scope and requirements.",
  },
  {
    question: "Will I be able to update my site after launch?",
    answer:
      "Websites come with an easy editor for updates and all design assets are delivered for future use.",
  },
  {
    question: "Can you provide ongoing support or updates?",
    answer:
      "Absolutely! Monthly retainer and on-demand update packages are available for continuous support.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-space-grotesk font-semibold mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>
      <Accordion.Root type="single" collapsible className="rounded-xl border border-gray-200 overflow-hidden bg-white">
        {faqs.map((faq, index) => (
          <Accordion.Item
            value={faq.question}
            key={index}
            className="border-b border-gray-200 focus:outline-none"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-base sm:text-lg font-medium font-space-grotesk text-gray-900 text-left transition-colors hover:bg-gray-50 cursor-pointer">
                <span className="pr-6">
                {faq.question}
                </span>
                <ChevronDownIcon
                  className="transition-transform duration-300 group-data-[state=open]:rotate-180 h-5 w-5 text-gray-500 shrink-0"
                  aria-hidden="true"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-6 pt-1 text-gray-500 text-base">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
