"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/libs/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7
    sm:mb-40 scroll-mt-28
    "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 dark:text-white/70">
        My strengths lie in familiarity with modern technologies such as
        ReactJS, NextJS, TailwindCSS, Shadcn/ui, MongoDB, NodeJS, and the
        ability to develop a Full-Stack website using these technologies and
        frameworks{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
      </p>

      <p className="dark:text-white/70">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

export default About;
