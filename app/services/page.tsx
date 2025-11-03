import FaqAccordion from "@/components/faq";
import OptimizedImage from "@/components/images/optimized-image-component";
import PricingSection from "@/components/pricing";
import { Button } from "@/components/ui/button";
import {
  ChatBubbleIcon,
  CheckIcon,
  LightningBoltIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import React from "react";

type ServiceType = {
  name: string;
  features: string[];
  ctaLink: string;
  recentProjectLink: string;
  preview: string;
};

const services: ServiceType[] = [
  {
    name: "Web and Mobile Design",
    features: [
      "Research-driven UI/UX",
      "Wireframing & Prototyping",
      "Mobile-first, Responsive Design",
      "Usability Audits & Redesigns",
      "Design Systems & Handoff",
    ],
    ctaLink: "",
    recentProjectLink: "",
    preview: "/images/services/web.png",
  },
  {
    name: "Brand Design",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Business Collateral (cards, docs)",
      "Social/Digital Brand Assets",
      "Consultation & Iterative Design",
    ],
    ctaLink: "",
    recentProjectLink: "",
    preview: "/images/services/brand.png",
  },
  {
    name: "Framer Development",
    features: [
      "End-to-end Framer site builds",
      "Figma to Framer transformations",
      "Custom code and CMS setup",
      "Animations, interactive elements",
      "SEO & performance optimization",
    ],
    ctaLink: "",
    recentProjectLink: "",
    preview: "/images/services/framer.png",
  },
];

const Services = () => {
  return (
    <section className="w-full flex flex-col px-5 mx-auto">
      <div className="sticky top-0 z-100 w-full flex flex-col md:flex-row justify-between items-start gap-2 py-5 bg-[#FCFCFC]">
        <h1 className="text font-semibold">My Services</h1>
        <p className="max-w-xl text-wrap md:text-right text-sm text-[#929292]">
          I love designing.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
        <RefferCard />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 my-32">
        <div className="w-full">
          <PricingSection />
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="min-w-64 w-full flex flex-col gap-0 rounded-2xl overflow-hidden bg-white border border-gray-200">
      <div className="relative w-full h-72 flex flex-col justify-center overflow-y-clip select-none">
        <OptimizedImage
          src={service.preview}
          alt={service.name + "preview"}
          className="w-full h-full"
        />
        <div
          className="absolute -left-10 right-0 -bottom-20 w-[1000px] h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0) 100%)",
            filter: "blur(5px)",
            zIndex: 10,
          }}
        />
      </div>
      <div className="w-full h-full p-6 pt-0 flex flex-col gap-0">
        <div className="w-full h-full flex flex-col gap-12">
          <div className="w-full h-full flex flex-col justify-between gap-6">
            <h1 className="text-4xl font-space-grotesk font-semibold">
              {service.name}
            </h1>
            <ul className="w-full flex flex-col gap-2">
              {service.features.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-1 justify-start items-center text-xs"
                >
                  <CheckIcon className="text-green-400" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col gap-0">
            <Button className="w-full h-10 text-white font-semibold bg-black p-3 cursor-pointer">
              Get a quote
            </Button>
            <Button
              variant="ghost"
              className="w-full h-10 text-gray-400 font-medium p-3 cursor-pointer"
            >
              See recent projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RefferCard = () => {
  return (
    <div className="min-w-64 w-full flex flex-col justify-start items-start gap-0 rounded-2xl overflow-hidden bg-white border border-gray-200">
      <div className="relative w-full h-72 flex flex-col justify-start overflow-y-clip select-none">
        {/* <OptimizedImage
          src={service.preview}
          alt={service.name + "preview"}
          className="w-full h-full"
        /> */}
        <div className="w-full h-full flex flex-col gap-28 p-6 bg-[#EE5E32]">
          <span className="w-36 rounded-full flex justify-center items-center py-1 px-2 bg-white text-black text-xs">
            Earn 5% commission
          </span>
          <div className="flex flex-col justify-start items-start gap-0">
            <h1 className="text-4xl font-space-grotesk font-semibold text-white">
              Reffer & Earn
            </h1>
            <p className="text text-gray-200">
              for each friend that you invite
            </p>
          </div>
        </div>
        <div
          className="absolute -left-10 right-0 -bottom-20 w-[1000px] h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0.25) 80%, rgba(255,255,255,0) 100%)",
            filter: "blur(5px)",
            zIndex: 10,
          }}
        />
      </div>
      <div className="w-full h-full p-6 pt-6 flex flex-col">
        <div className="w-full h-full flex flex-col justify-between gap-12">
          <div className="w-full h-full flex flex-col gap-6">
            <h1 className="text-xs font-space-grotesk font-semibold">
              How it works:
            </h1>
            <ul className="w-full flex flex-col gap-2">
              <li className="flex gap-2 justify-start items-center text-xs">
                <PersonIcon className="" />
                <p>Reffer to a friend</p>
              </li>
              <li className="flex gap-2 justify-start items-center text-xs">
                <ChatBubbleIcon className="" />
                <p>
                  Contact me at <strong>Twitter/Whatsapp/LinkedIn/Email</strong>
                </p>
              </li>
              {/* <li
                  className="flex gap-2 justify-start items-center text-xs"
                >
                  <TimerIcon className="" />
                  <p>I verify your refferal</p>
                </li> */}
              <li className="flex gap-2 justify-start items-center text-xs">
                <LightningBoltIcon className="" />
                <p>
                  You recive <strong>5% commission</strong> on every successfull
                  refferal
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-0">
            {/* <Button className="w-full h-10 text-white font-semibold bg-black p-3 cursor-pointer">
              Share this portfolio
            </Button> */}
            <Button
              variant="secondary"
              className="w-full h-10 font-medium p-3 cursor-pointer"
            >
              Share this portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
