"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowDownRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderButton from "@/components/ProjectSliderButton";

const projects = [
  {
    num: "01",
    title: "Zenchat",
    description:
      "A real-time chat application enabling instant messaging and seamless communication between users. Built with WebSocket and Socket.io for live updates, ensuring smooth and responsive interactions",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Socket io" },
      { name: "MongoDB" },
      { name: "Shadcnui" },
    ],
    image: "/assets/projectPhotos/zenchat.png",
    live: "https://zen-chat.me/",
    github: "https://github.com/Shrey120/ZenChat",
  },
  {
    num: "02",
    title: "Shopswift",
    description:
      "An e-commerce platform offering seamless shopping with a wide range of products, designed for a smooth user experience, integrated with Stripe for secure and efficient online payments, ensuring hassle-free transactions.",

    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "Stripe" },
    ],
    image: "/assets/projectPhotos/Shop.png",
    live: "https://shopswiftely.vercel.app/",
    github: "https://github.com/Shrey120/ShopSwift-Frontend",
  },
  {
    num: "03",
    title: "Eat & Repeat",
    description:
      "A food ordering platform featuring a diverse selection of dishes, designed to enhance user experience with easy navigation and quick access to favorites, integrated with secure payment options for seamless transactions",
    href: "",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "Stripe" },
    ],
    image: "/assets/projectPhotos/Food.png",
    live: "https://eatandrepeat.netlify.app/",
    github: "https://github.com/Shrey120/EAT-N-REPEAT-Frontend",
  },
  {
    num: "04",
    title: "Subscribify",
    description:
      "A subscription-based platform offering exclusive content and services tailored to user preferences, designed for seamless navigation and easy management of subscriptions, ensuring a personalized and engaging experience",
    href: "",
    stack: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Stripe" },
    ],
    image: "/assets/projectPhotos/subscribe.png",
    live: "https://subscribify.netlify.app/",
    github: "https://github.com/Shrey120/Subscribify-Frontend",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className=' mx-20 xl:mx-40'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[43px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className='border boder-white/20'></div>
              <div className='flex items-center gap-4 '>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                        <BsArrowDownRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
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
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 '></div>
                    <div className='relative h-full w-full'>
                      <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt=''
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <ProjectSliderButton
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all '
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
