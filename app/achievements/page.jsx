"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const achievements = [
  {
    num: "01",
    title: "Leetcode Profile",
    description:
      "Solved over 450+ questions and have the highest rating of 1451 which helped me strengthen my algorithms and data structures knowledge ",
    href: "https://leetcode.com/u/shreygupta12028/",
  },
  {
    num: "02",
    title: "Codeforces Profile",
    description:
      "Achieved a maximum contest rating of 1002, consistently working on improving problem-solving skills in a competitive environment",
    href: "https://codeforces.com/profile/shrey120",
  },
  {
    num: "03",
    title: "Gfg Profile",
    description:
      "Solved over 50 problems with a coding score of 191, ranking 93rd overall on my college campus",
    href: "https://www.geeksforgeeks.org/user/shreygupta12028/",
  },
  {
    num: "04",
    title: "Codechef Profile",
    description:
      "Highest rating of 3 star(1483) and solved over 100 problems on the platform",
    href: "https://www.codechef.com/users/shrey120",
  },
];

const Achievemnent = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='xl:mx-60'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {achievement.num}
                </div>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  href={achievement.href}
                  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                {achievement.title}
              </h2>
              <p className='text-white/60'>{achievement.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievemnent;
