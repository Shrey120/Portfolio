"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      institution: "Chandigarh Group of Colleges, Mohali",
      degree: "B.Tech, Computer Science and Engineering",
      year: "June 2024",
      gpa: "Current GPA: 8.06/10.0",
    },
    {
      institution: "Up Kirana Seva Samiti Vidhyalaya",
      degree: "Higher Secondary, ICSE",
      year: "March 2019",
      percentage: "PERCENT: 84.6/100.0",
    },
    {
      institution: "Up Kirana Seva Samiti Vidhyalaya",
      degree: "Secondary, ICSE",
      year: "March 2017",
      percentage: "PERCENT: 83/100.0",
    },
  ];

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='xl:mx-44'>
          {/* Education Details */}
          <div className='relative space-y-16'>
            {educationDetails.map((edu, index) => (
              <div
                key={index}
                className='flex items-start relative'>
                {/* Timeline Dots and Line */}
                {index < educationDetails.length - 1 && (
                  <>
                    <motion.div
                      className='absolute left-4 top-0 w-1 h-full bg-accent'
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5, delay: index * 0.5 }}
                    />
                    <motion.div
                      className='absolute left-4 top-0 w-1 h-full bg-accent'
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.5 }}
                    />
                  </>
                )}
                <div className='flex flex-col items-center mr-8'>
                  <motion.div
                    className='w-10 h-10 rounded-full bg-accent mb-4'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 0.5) * 0.5 }}
                  />
                </div>

                {/* Education Info */}
                <div className='bg-[#27272c] p-6 rounded-lg flex-1'>
                  <h2 className='text-2xl text-accent font-semibold mb-2'>
                    {edu.institution}
                  </h2>
                  <p className='text-lg text-white mb-1'>{edu.degree}</p>
                  <p className='text-md text-white mb-1'>{edu.year}</p>
                  {edu.gpa ? (
                    <p className='text-md text-white'>{edu.gpa}</p>
                  ) : (
                    <p className='text-md text-white'>{edu.percentage}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
