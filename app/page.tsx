"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/5 lg:h-full lg:w-1/2 relative flex items-center justify-center mr-20 ">
          <Image
            src="/profile/headshot_vatthana.png"
            alt=""
            width={500}
            height={500}
            className="object-contain rounded-full hidden lg:block"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Building AI-Integrated Applications, Crafting Cloud-Native
            Solutions.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Full-stack engineer specializing in AI-integrated applications and
            cloud-native architectures. I design agentic systems, build RAG
            pipelines, and architect scalable platforms on AWS and Azure. With a
            unique background as a Michelin-trained pastry chef, I bring
            precision, creativity, and attention to detail to every technical
            challenge.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
