"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/libs/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/70">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:leminhhai9209@gmail.com">
          leminhhai9209@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4 
          dark:bg-white/10 dark:focus:bg-opacity-100 transition-all
          dark:outline-none
          dark:text-white/70
          "
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4
          dark:bg-white/10 dark:focus:bg-opacity-100 transition-all
          dark:outline-none
          dark:text-white/70
          "
          placeholder="Your message"
        />
        <div className="flex flex-col justify-center items-center mt-3">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900
        text-white rounded-full outline-none transition-all
        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        dark:bg-white
        dark:bg-opacity-10
        "
          >
            Submit{" "}
            <FaPaperPlane
              className="text-xs opacity-70 transition-all 
          group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </form>
    </motion.section>
  );
}
