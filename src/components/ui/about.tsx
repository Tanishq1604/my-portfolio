"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiGithubLogoThin,
} from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Theming from "../theme";

function About() {

  return (
    <Theming>
    <div className="w-full px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
      

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40">
          <div className="absolute w-full p-2">
            <div className="flex justify-between items-center">
              <p className="text-xs">Mode</p>
              <div className="flex items-center">
                <span className="mr-1.5 flex justify-center h-2 w-2 items-center">
                  <span className="absolute flex w-2 h-2 rounded-full opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400"></span>
                  <span className="relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 bg-yellow-400"></span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
            <div className="mt-4">
              <p className="text-xs font-semibold">Available for freelance design projects. Hit me up for a collab 🦾</p>
              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>Contact me</span>
                <PiArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
        >
          <div className="absolute w-full p-2 z-10">
            <div className="flex justify-between items-center">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs">Joscript Stone</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
          </div>
          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold leading-5">
              Am Joscript Stone, an adventurous Creative Director based in the vibrant city of San Francisco. With a keen eye for aesthetics, a passion for innovation, and a drive for designs that leaves a lasting impact. Let's collaborate and bring your creative visions to life.
            </p>
          </div>
        </motion.div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
          <div className="absolute w-full p-2 z-20">
            <p className="text-xs">Experience & Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
          </div>
          <div className="bg-gradient-to-b w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent h-20 transition-all ease-in duration-200" />
          <div className="overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative">
            {[
              { time: "2002 -- 2012", title: "Creative Studio Owner", description: "Self-employed at my own creative studio, delivering innovative design solutions and giving value to your brand experience." },
              { time: "2020 -- 2022", title: "Nike Headquarters", description: "Designer & Creative Director" },
              { time: "2018 -- 2020", title: "Spotify", description: "Designer & Art Director" },
              { time: "2016 -- 2018", title: "Apple", description: "Product Designer" },
              { time: "2014 -- 2016", title: "Royal Academy of Arts", description: "Graduate Master’s Degree" },
              { time: "2012 -- 2016", title: "Zurich University of Arts", description: "Visual Communication" },
              { time: "2011 -- 2012", title: "Vogue France", description: "Graphic Designer" },
              { time: "2010 -- 2011", title: "Vignelli Associates", description: "Internship" },
              { time: "2010 -- 2011", title: "Norm Zurich", description: "Internship" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex gap-x-3 mt-4 px-2">
                  <p className="dark:text-neutral-400 text-xs w-20 shrink-0">{item.time}</p>
                  <div>
                    <h4 className="text-xs font-bold">{item.title}</h4>
                    <p className="text-[11px] text-neutral-500">{item.description}</p>
                  </div>
                </div>
                {index < 8 && (
                  <div className="px-2 my-3">
                    <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-t w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0 h-12 transition-all ease-in duration-200" />
        </div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
          <div className="absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
          </div>
          <div className="mt-8 px-2">
            {["Fusion Pro Presentation", "Fusion Pro Presentation", "Fusion Pro Presentation"].map((project, index) => (
              <div key={index} className="bg-[#F5F5F5] dark:bg-[#1B1B1B] rounded-md px-1 relative mt-4">
                <div className="flex justify-between items-center p-2 gap-x-2">
                  <Image width={200} height={200} className="w-14 h-14 rounded-full object-cover" src="/jo4.jpeg" alt="" />
                  <div>
                    <p className="text-xs font-bold">{project}</p>
                    <p className="text-xs text-neutral-500">Branding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
        >
          <div className="absolute w-full p-2 z-10">
            <div className="flex justify-between items-center">
              <p className="text-xs">Skills</p>
              <p className="text-neutral-500 text-xs">Overall</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
          </div>
          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold leading-5">
              Am Joscript Stone, an adventurous Creative Director based in the vibrant city of San Francisco. With a keen eye for aesthetics, a passion for innovation, and a drive for designs that leaves a lasting impact. Let's collaborate and bring your creative visions to life.
            </p>
          </div>
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative overflow-hidden cursor-pointer rounded-lg sm:h-40"
        >
          <div className="absolute w-full p-2 z-10">
            <div className="flex justify-between items-center">
              <p className="text-xs">Contact</p>
              <p className="text-neutral-500 text-xs">Ways to reach out</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
          </div>
          <div className="mt-6">
            <div className="grid gap-1 grid-cols-5 px-3">
              {[
                { href: "https://github.com/Tanishq1604", icon: <PiGithubLogoThin size={20} />, label: "Github" },
                { href: "https://www.linkedin.com/in/joscript/", icon: <PiLinkedinLogoThin size={20} />, label: "LinkedIn" },
                { href: "https://twitter.com/joscript", icon: <RiTwitterXLine size={20} />, label: "Twitter" },
                { href: "https://www.behance.net/joscript", icon: <PiBehanceLogoThin size={20} />, label: "Behance" },
                { href: "mailto:hi@joscript.com", icon: <IoIosMailUnread size={20} />, label: "Mail" },
              ].map((item, index) => (
                <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </Theming>
  );
}

export default About;
