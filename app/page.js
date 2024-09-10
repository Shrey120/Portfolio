"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/ShreyashGuptaResume.pdf"; // Update the path if your CV file has a different name or location
    link.download = "Shreyash_Gupta_CV.pdf"; // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='h-full'>
      <div className='mx-auto h-full'>
        <div className='flex flex-col items-center justify-center xl:justify-between xl:mx-80 h-full xl:flex-row xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />
              <span className='text-accent'>Shreyash Gupta</span>
            </h1>
            <p className='max-w-[800px] mb-9 text-white/80'>
              Tech enthusiast with expertise in modern web technologies and a
              focus on creating real-time applications. Committed to
              problem-solving and enhancing user experiences through innovative
              project development. Passionate about continuous learning and
              personal growth in the tech industry.{" "}
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
                onClick={handleDownload} // Add the onClick event handler
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <div className='xl:mt-10'>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
