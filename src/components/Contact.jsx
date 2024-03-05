import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    
    const contact = useRef();
    useGSAP.register(contact);


    useEffect(() => {
        useGSAP.register(contact);
        gsap.from(contact.current, {
            y: 100,
            duration: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: contact.current,
                start:   "top 100%",
                end: "top 80%",
                scrub: 0.5,
            },
        });

    }, []);
  
    return (
    <div ref={contact} className='w-screen mt-40 h-auto flex flex-col gap-16 items-center'>
        
        <div className='flex gap-2  flex-col w-[50%]'>
            <p className='text-indigo-700 font-bold text-4xl'>CONTACT</p>
            <h1 className='font-bold text-2xl'>Don't be shy! Hit me up! 👇</h1>
        </div>

        <div className='w-[45%] flex gap-40'>
            <div className='flex gap-5'>
                <div className='text-indigo-700 mt-1 text-2xl'><FaMapLocationDot/></div>
                <div>
                    <p className='font-bold'>Location</p>
                    <p className='text-zinc-700 font-serif'>Ghaziabad, India</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='text-indigo-700 mt-1 text-2xl'><IoIosMailOpen/></div>
                <div>
                    <p className='font-bold'>Mail</p>
                    <p className='text-zinc-700 font-serif'>kumarmohit08004@gmail.com</p>
                </div>
            </div>
        </div>

        <div className='w-full bg-black flex items-center justify-center'>
            <div className='text-white font-bold text-sm w-[50%] p-10 flex items center justify-between'>
                <p clas>Copyright @ 2024. All rights are reserved</p>
                <div className='text-2xl flex gap-5'>
                    <a target='_blank' title='Linkedin' href='https://github.com/Mohitk786'><IoLogoLinkedin/></a>
                    <a target='_blank' title='Github' href='https://www.linkedin.com/in/mohit-kumar-02b54223a/'><FaGithub/></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact