"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
        <Image
          src='/assets/photo_bg.png'
          priority
          quality={100}
          fill
          className='object-contain rounded-full'
          alt='Shreyash Gupta'
        />
      </div>
      <motion.svg
        className='w-[300px] xl:w-[500px] h-[300px] xl:h-[506px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        fill='transparent'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 506 506'>
        <motion.circle
          cx='253'
          cy='253'
          r='250'
          stroke='#00ff99'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: "15 120 25 25",
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
