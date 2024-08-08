"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from '@/lib/myHooks';
import { useActiveSectionCntext } from '@/context/active-section-context';


const Intro = () => {
const { ref } = useSectionInView('Home', 0.5);
const {
  setActiveSection,
  setTimeOfLastClick,
} = useActiveSectionCntext();

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-32' id='home'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div
              initial={{ opacity:0, scale: 0 }}
              animate={{ opacity:1, scale: 1 }}
              transition={{
                type:"spring",
                duration: 0.2,
              }}
            >
            <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt='imge' width="192" height="192" quality="95" priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-blue-200 shadow-xl'/>
            </motion.div>
            <motion.span className='absolute bottom-0 left-0  text-4xl'
            initial={{ opacity:0, scale: 0 }}
            animate={{ opacity:1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
            }}
            >
                🤞
            </motion.span>
          </div>
        </div>

        <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Naman.</span> I'm a{" "}
        <span className="font-bold"> Front-End developer And Towards To Full-Stack</span> As a{" "}
        <span className="font-bold">Beginner</span>,  I enjoy
        building <span className="italic">sites & apps</span>. My focus is {" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
      >
        <Link href="#contact" className='bg-orange-600 group cursor-pointer text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-orange-400 active:scale-100 transition dark:bg-gray-900'onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }} >
        Contact me here <BsArrowRight
        className='opacity-70 group-hover:translate-x-1 transition'/> 
        </Link>

        <a className='bg-green-600 group  cursor-pointer text-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 hover:bg-green-400 active:scale-100 transition dark:bg-white/10' href='/CV.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1  transition'/>
        </a>

        <a className='bg-white text-blue-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-blue-200 hover:text-blue-800 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/naman-sompura-395567312/" target='www.linkedin.com/in/naman-sompura-395567312'>
            <BsLinkedin />
        </a>

        <a className='bg-white text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full
         focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-100 transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60'  href="https://github.com/Spy0008" target='_blank'>
            <BsGithub />
        </a>

      </motion.div>

    </section>
  )
}

export default Intro