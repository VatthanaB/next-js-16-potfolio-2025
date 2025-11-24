"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface PortfolioItem {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  demo: boolean;
}

const items: PortfolioItem[] = [
  {
    id: 0,
    color: "from-violet-400 to-purple-400",
    title: "AI-Powered Language Learning Platform",
    desc: "As Technical Lead & Product Developer, I am currently leading development of an AI-powered language learning platform designed to revitalize an indigenous language through culturally authentic, gamified learning experiences. The platform combines conversational AI, adaptive learning pathways, and cultural principles to serve learners across multiple proficiency levels. Built with Next.js, Azure cloud services, HeyGen for video generation, and OpenAI models, I am architecting scalable cloud-based infrastructure, implementing headless CMS for dynamic content management, and developing adaptive branching lesson frameworks with AI integration. The platform focuses on cultural authenticity and community partnerships, designed to scale and support growing learner communities.",
    img: "/learning_app.jpg",
    link: "",
    demo: false,
  },
  {
    id: 1,
    color: "from-purple-400 to-pink-400",
    title: "AI-Powered Healthcare Simulation Platform",
    desc: "As Full-Stack Developer & Team Lead, I am currently leading a development team for an AI-powered SaaS platform delivering conversational patient simulations for healthcare education. The platform addresses global healthcare workforce shortages through accessible, scalable clinical training using agentic AI methodology. I am architecting cloud-based infrastructure supporting multi-agent AI systems, implementing model-agnostic AI frameworks with separation between design (LLMs) and delivery (SLMs), and building multi-modal delivery systems supporting conversational AI avatars, interactive video, 3D/VR environments, and chatbot integrations. The platform serves healthcare institutions globally with scalable pricing models designed for both individual learners and institutional deployments.",
    img: "/helathacare_ai.jpg",
    link: "",
    demo: false,
  },
  {
    id: 2,
    color: "from-pink-400 to-rose-400",
    title: "Buzzly",
    desc: "At Buzzly, I am currently contributing to building a platform, currently in production, empowering young voices in New Zealand by tackling engagement challenges through co-design with youth. I work on both frontend (Next.js 14) and backend (Strapi) development, and manage AWS infrastructure (Lambda, S3, ECS, Amplify) for reliability and performance. My role includes ongoing development, support and optimization to ensure the platform's scalability and impact on youth engagement.",
    img: "/buzzly.png",
    link: "https://www.buzzly.nz/",
    demo: true,
  },
  {
    id: 3,
    color: "from-rose-400 to-orange-400",
    title: "Dialect revitalisation",
    desc: "As a contractor for Toro Technology, I led development of a proof of concept to revitalize Te Reo Nāti in Gisborne, collaborating with Datacom. The project leveraged AI services including Azure OCR, custom translation, Text-to-Speech, and OpenAI APIs. I architected and implemented a custom translator and voice model, building the responsive frontend with Next.js and managing the backend with Strapi CMS. Working alongside a Datacom software architect and designer, I delivered a culturally authentic solution that balances traditional language preservation with modern technology.",
    img: "/maia.png",
    link: "",
    demo: false,
  },
  {
    id: 4,
    color: "from-orange-400 to-blue-400",
    title: "Datacom Scheduler",
    desc: "I fully delivered the Datacom Scheduler during my 10-week internship at Datacom, playing a major role in developing this comprehensive content management system. Built with Next.js, Strapi CMS, and Azure Services, the project was executed using Agile methodologies and DevOps best practices. I structured Strapi CMS content-types, implemented real-time data fetching logic, and ensured efficient workflows throughout the development lifecycle. The system demonstrates scalable architecture and high-quality outputs for enterprise content management needs.",
    img: "/datacom.png",
    link: "",
    demo: false,
  },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="  h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-violet-400" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-start pt-8 px-12 justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col justify-start gap-8 text-white">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt=""
                      width={700}
                      height={400}
                      className="rounded-2xl md:w-96 md:h-64 lg:w-[700px] lg:h-[350px] xl:w-[700px] xl:h-[400px] object-fill"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[700px] text-sm lg:text-lg xl:w-[700px]">
                    {item.desc}
                  </p>
                  <div className="flex justify-end flex-grow">
                    {item.link ? (
                      <Link href={item.link} target="_blank">
                        <button className=" p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                          See Live
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-5xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath href="#circlePath" className="text-xl">
                Full-Stack Developer & Bug Fixer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

