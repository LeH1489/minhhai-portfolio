"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/libs/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center
    sm:mb-0 scroll-mt-[100rem]
    "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/lehai.jpeg"
              alt="Le Hai portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem]
            border-white shodow-xl
            "
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
      sm:text-4xl
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Le Minh Hai.</span> I'm a{" "}
        <span className="font-bold">senior student in Hutech university</span>.
        I enjoy building <span className="italic">websites</span>. My focus is{" "}
        <span className="font-bold dark:underline">
          React (Next.js), Node.js
        </span>
        , C# .NET Core.
      </motion.p>

      <motion.div
        className="flex flex-col
      sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3
        flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition 
        dark:text-white/70
        "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          className="bg-white px-7 py-3
        flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 active:scale-105
        transition group cursor-pointer border border-black/10
        dark:bg-white/10
        dark:text-white/70
        "
          href="/CV_Le_Minh_Hai.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://github.com/LeH1489"
          target="_blank"
          className="bg-white p-4 text-gray-700
        flex items-center gap-2 rounded-full
         outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
         active:scale-105
        transition group cursor-pointer border border-black/10
        dark:bg-white/10
        dark:text-white/70
        "
        >
          Github <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
