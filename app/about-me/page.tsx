import Image from "next/image";
import React from "react";

const left = [
  "Freelancing Mar 24' - present",
  "Perccent Jun-Sep 25'",
  "Hack4Bengal 23-25'",
  "B.Tech 21-25'",
  // ...more
];

const right = [
  "Crafting digital experiences and brand identities for startups and individuals",
  "Designed Perccent's web and mobile app from scratch with the team",
  "Website, branding, posters, prints for Eastern India's Largest Hackathon",
  "Graduated as a Computer Science Grad",
  // ...more
];

const AboutMe = () => {
  return (
    <section className="relative w-full min-h-[calc(100%-64px)] p-5 flex flex-col justify-between items-start gap-8 overflow-hidden">
      <Image
        src='/red-cd.svg'
        alt='red-cd'
        width={100}
        height={100}
        className="absolute -bottom-32 -left-56 2xl:-bottom-48 2xl:-left-96 w-[600px] 2xl:w-[1000px] -z-1"
      />
      <div className="w-full flex flex-col gap-20">
        <div className="w-full flex justify-between items-start mb-10">
          <h1 className="font-semibold">About Me</h1>
          <p className="max-w-2xl text-4xl text-black text-left font-semibold leading-11">
            Based in India. Specializing in Web and Mobile (UI/UX) design.
            Skilled in Branding, motion, prototyping and UX. Defining the
            future.
          </p>
        </div>
        <div className="w-full flex justify-end items-start mb-10">
          <p></p>
        </div>
      </div>
      <div className="w-full flex justify-end items-end mb-10">
        <div className="max-w-2xl grid grid-cols-2 gap-y-2 text-black text-xs font-space-grotesk font-medium tracking-wide">
          {left.map((item, i) => (
            <>
              <span key={item}>{item}</span>
              <span key={right[i]}>{right[i] ?? ""}</span>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
