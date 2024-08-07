"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/myHooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opscity: 0,
    y: 100,
  },
  animate: (index: number) => ( {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  })
}

export default function Skills() {

  const { ref } = useSectionInView('Skills');

  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-[6rem] text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-3 text-lg text-green-950'>
          {
            skillsData.map((skill, index) => (
              <motion.li
              variants={ fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }
              }
              custom={index}
             
              className='bg-zinc-200 border border-black/[0.1] rounded-xl px-5 py-3 shadow-xl' key={index}>{skill}</motion.li>
            ))
          }
        </ul>
    </section>
  )
}
