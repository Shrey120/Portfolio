"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare } from "react-icons/fa"; // Add more icons as needed
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiStripe,
  SiNetlify,
  SiPostman,
  SiShadcnui,
  SiCplusplus,
  SiSocketdotio,
  SiHtml5,
  SiRender,
  SiVercel,
  SiGithub,
  SiCss3,
} from "react-icons/si"; // Add other skill icons

const skills = [
  { name: "React", icon: <FaReact className='text-5xl text-sky-500' /> },
  { name: "Next.js", icon: <SiNextdotjs className='text-5xl text-white' /> },
  { name: "Node.js", icon: <FaNodeJs className='text-5xl text-green-500' /> },
  { name: "MongoDB", icon: <SiMongodb className='text-5xl text-green-600' /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className='text-5xl text-sky-400' />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className='text-5xl text-yellow-500' />,
  },
  { name: "Git", icon: <FaGitAlt className='text-5xl text-orange-600' /> },
  {
    name: "Express.js",
    icon: <SiExpress className='text-5xl text-white' />,
  },
  { name: "C++", icon: <SiCplusplus className='text-5xl text-blue-600' /> },
  { name: "Github", icon: <SiGithub className='text-5xl text-white' /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className='text-5xl text-blue-500' />,
  },

  { name: "HTML", icon: <SiHtml5 className='text-5xl text-orange-500' /> },
  { name: "Render", icon: <SiRender className='text-5xl text-green-500' /> },
  { name: "Stripe", icon: <SiStripe className='text-5xl text-blue-500' /> },
  { name: "Netlify", icon: <SiNetlify className='text-5xl text-green-600' /> },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className='text-5xl text-white' />,
  },
  { name: "Vercel", icon: <SiVercel className='text-5xl text-white' /> },
  { name: "Postman", icon: <SiPostman className='text-5xl text-orange-600' /> },
  {
    name: "Shadcn",
    icon: <SiShadcnui className='text-5xl text-purple-500'>🛠️</SiShadcnui>,
  },
  {
    name: "Css",
    icon: <SiCss3 className='text-5xl text-blue-500'>🛠️</SiCss3>,
  },
];

const Skills = () => {
  return (
    <section className='min-h-[80vh] flex flex-col py-9 xl:px-0'>
      <div className='container mx-auto'>
        <div className='xl:mx-40'>
          {/* Top Heading */}
          <h1 className='text-6xl font-extrabold text-accent mb-6'>
            Why Hire Me?
          </h1>

          {/* Description */}
          <p className='text-lg text-white/80 mb-12'>
            I bring a diverse set of skills to the table, with expertise in both
            front-end and back-end technologies. My passion for clean, efficient
            code helps me deliver solutions that are both robust and scalable.
          </p>
        </div>
        {/* Skills Icons */}
        <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center xl:mx-44'>
          {skills.map((skill, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className='xl:bg-[#27272c] xl:p-5 xl:rounded-3xl cursor-pointer flex flex-col items-center gap-2'>
                  {skill.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
