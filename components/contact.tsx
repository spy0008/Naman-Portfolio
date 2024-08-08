"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/myHooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit.btn';
import { error } from 'console';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}
    viewport={{
        once: true,
    }}
    >
       <SectionHeading>Contact me</SectionHeading>
       <p className='text-zinc-700 -mt-5'>Please contact me directly at <a className='underline' href='mailto:example@gmail.com'>example@gmail.com</a> or through this from.</p>
       <form action={async formData => {
        const { data, error} = await sendEmail(formData);

        if (error) {
            toast.error(error);
            return;
        }
        toast.success("Email sent successfully");
       }}
        className='mt-10 flex flex-col'>
        <input name='senderEmail'  type="email" required className='h-14 rounded-lg borderBlack px-4' maxLength={500} placeholder='Your Email'/>
        <textarea maxLength={5000} name='message' className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' required/>
        <SubmitBtn />
       </form>
    </motion.section>
  )
}
