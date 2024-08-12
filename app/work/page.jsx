"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website built with React, Redux, and Material UI. The website allows users to browse products, add items to cart, and checkout. It also includes features such as user authentication, payment gateway integration, and order management.",
    stack: ["Html 5", "Css 3", "JavaScript"],
    image: "/images/project1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills. Built with React and Tailwind CSS, it includes sections like About Me, Projects, and Contact.",
    stack: ["React.js", "Tailwind CSS", "Next.js"],
    image: "/images/project2.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "backend",
    title: "Chat Application",
    description:
      "A real-time chat application built with Node.js and Socket.io. Users can create chat rooms, send messages, and view online status.",
    stack: ["Node.js", "Socket.io", "Express.js"],
    image: "/images/project3.png",
    live: "#",
    github: "#",
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {activeProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {activeProject.category} project
              </h2>
              <p className="text-white/60">{activeProject.description}</p>
              <ul className="flex gap-2">
                {activeProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item}
                    {index !== activeProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={activeProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={activeProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns
  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
  btnStyles="w-12 h-12 rounded-full bg-accent/60 flex justify-center items-center cursor-pointer"
  iconsStyles="text-2xl text-white"
/>

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
