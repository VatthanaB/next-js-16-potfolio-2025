"use client";
import Brain from "../../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center items-center md:items-start">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-xl md:text-2xl">
              A little bit about me
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-sm md:text-lg">
              Hello, I&apos;m Vatthana, a full-stack engineer based in Auckland,
              New Zealand, specializing in AI-integrated applications and
              cloud-native architectures. With expertise in building agentic
              systems, RAG pipelines, and modern web technologies, I help
              organizations leverage AI to solve real-world problems. Currently,
              I&apos;m working as a Full Stack Engineer at Seen Ventures,
              designing and operating AI-ready platforms on AWS and Azure. I
              also continue contracting with Buzzly and Toro Technology,
              building dynamic Next.js applications and managing cloud
              infrastructure. My unique background as a Michelin-trained pastry
              chef brings precision, creativity, and attention to detail to
              every technical challenge.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="text-xs md:text-base italic">
              &quot;From pastries to programming, every step is a reminder that
              reinvention is always within reach.&quot;
            </span>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col items-center md:items-start gap-12 justify-center"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl md:text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Flask
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MUI
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Strapi CMS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                DevOps
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Microsoft Azure
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS Services
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CI/CD Pipelines
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PydanticAI
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                LangChain
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                n8n
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col items-center md:items-start  gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl md:text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <ExperienceListItem
                title="Full Stack Engineer"
                descriptionDesktop="Designing and operating AI-ready platforms on AWS and Azure. Architecting agentic systems with PydanticAI, implementing RAG pipelines, and orchestrating AI workflows. Building scalable microservices with Next.js, Strapi, Node.js, and Python."
                descriptionMobile="Full Stack Engineer at Seen Ventures, building AI-ready platforms on AWS and Azure."
                date="January 2025 - Present"
                company="Seen Ventures · Hybrid"
                position="left"
              />
              <ExperienceListItem
                title="Full-stack Developer"
                descriptionDesktop="Building dynamic, server-rendered applications using Next.js 14 for Buzzly, a platform empowering young voices in New Zealand. Managing content integration with Strapi CMS and overseeing AWS cloud infrastructure (Lambda, S3, ECS, Amplify)."
                descriptionMobile="Full-stack developer on Buzzly, a youth engagement platform."
                date="May 2024 - Present"
                company="Buzzly & Datacom · Contract"
                position="right"
              />
              <ExperienceListItem
                title="Full Stack Developer"
                descriptionDesktop="Leading development of AI-driven Te Reo Nāti revitalization project. Implemented custom AI translator and voice model using Azure OCR, custom translator, Azure TTS, and OpenAI APIs. Built responsive frontend with Next.js and managed backend with Strapi CMS."
                descriptionMobile="Leading AI-driven Te Reo Nāti revitalization project with custom translator and voice model."
                date="May 2024 - Present"
                company="Toro Technology & Datacom · Contract"
                position="left"
              />
              <ExperienceListItem
                title="Full-stack Developer"
                descriptionDesktop="Full-stack developer on digital screens scheduler project, utilizing Strapi for backend and Next.js for frontend. Led structuring of Strapi CMS content-types and implemented real-time data fetching logic."
                descriptionMobile="Full-stack developer on screens scheduler project."
                date="Feb 2024 - April 2024"
                company="Datacom · Internship"
                position="right"
              />
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

interface ExperienceListItemProps {
  title: string;
  descriptionDesktop: string;
  descriptionMobile: string;
  date: string;
  company: string;
  position?: "left" | "right";
}

const ExperienceListItem = ({
  title,
  descriptionDesktop,
  descriptionMobile,
  date,
  company,
  position = "left",
}: ExperienceListItemProps) => {
  return (
    <div className="flex justify-between min-h-48 mb-8">
      {/* LEFT SIDE CONTENT */}
      {position === "left" && (
        <>
          <div className="w-1/3 flex flex-col gap-2">
            <div className="bg-white text-sm md:text-base p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="hidden md:block p-3 text-sm italic leading-relaxed">
              {descriptionDesktop}
            </div>
            <div className="md:hidden p-3 text-xs italic leading-relaxed">
              {descriptionMobile}
            </div>
            <div className="p-3 text-red-400 text-xs md:text-sm font-semibold">
              {date}
            </div>
            <div className="p-1 rounded bg-white text-xs md:text-sm font-semibold w-fit">
              {company}
            </div>
          </div>

          {/* CENTER LINE */}
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-0"></div>
            </div>
          </div>

          {/* EMPTY RIGHT SIDE */}
          <div className="w-1/3"></div>
        </>
      )}

      {/* RIGHT SIDE CONTENT */}
      {position === "right" && (
        <>
          {/* EMPTY LEFT SIDE */}
          <div className="w-1/3"></div>

          {/* CENTER LINE */}
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-0"></div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-1/3 flex flex-col gap-2">
            <div className="bg-white text-sm md:text-base p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="hidden md:block p-3 text-sm italic leading-relaxed">
              {descriptionDesktop}
            </div>
            <div className="md:hidden p-3 text-xs italic leading-relaxed">
              {descriptionMobile}
            </div>
            <div className="p-3 text-red-400 text-xs md:text-sm font-semibold">
              {date}
            </div>
            <div className="p-1 rounded bg-white text-xs md:text-sm font-semibold w-fit">
              {company}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
