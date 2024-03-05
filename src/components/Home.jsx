import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import profile from "../assets/profile.jpg"
import nodejs from "../assets/nodejs.webp"
import expressjs from "../assets/express.webp"
import redux from "../assets/redux.webp"
import { SiLeetcode } from 'react-icons/si';


import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";


import { useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

const Home = () => {
    
    const intro = useRef()
    const tech = useRef()

    useGSAP(()=>{
        gsap.from(".desc", {
            y:50,
            duration:0.8,
            opacity:0,
            delay: 0.1,
            stagger:0.8
        }, {scope: intro})

        gsap.from(".tech", {
            y:50,
            duration:0.8,
            opacity:0,
            delay: 0.1,
            stagger:0.6
        }, {scope: tech})
    })
  
    return (

    <div className='w-screen h-screen overflow-hidden flex flex-col items-center justify-center gap-[15%] bg-white'>
            
            <div className='flex gap-8 w-[60%] justify-center items-center'>
                <div ref={intro} className='mt-4 p-6 w-[50%] flex flex-col justify-center gap-8 '>
                    <h1 className='desc text-black font-bold text-5xl '>Full Stack <span className='text-indigo-700'>MERN Developer</span> 👋</h1>
                    <p className='desc text-slate-700/70 leading-6 font-bold'>Hi! I'm Mohit Kumar.  A passionate Full Stack MERN Developer based in Ghaziabad, India  </p>
                    <div className='desc text-3xl flex gap-3'>
                    <a target='_blank' title='Linkedin' href='https://github.com/Mohitk786'><IoLogoLinkedin className='text-blue-600'/></a>
                    <a target='_blank' title="Github" href='https://www.linkedin.com/in/mohit-kumar-02b54223a/'><FaGithub/></a>
                    <a target='_blank' title='Leetcode' href='https://leetcode.com/mohitkumar2004/'><SiLeetcode className='text-yellow-600'/></a>
                    </div>
                </div>
                
                <div className='w-[50%] flex items-center justify-center'>
                    <img 
                        src={profile}
                        alt='profile'
                        className='w-[45%] p-2 rounded-full'
                    />
                </div>
            </div>
            
            <div className='w-[60%] flex flex-col items-center '>

                <div className='w-full flex m-x-[2%] items-center justify-around '>
                    <div className='flex w-[13%] justify-around'>
                        <p className='text-black w-full font-semibold text-xl'>Tech Stack</p>
                        <p className='w-[1/10] border border-slate-600'></p>
                    </div>
                    <div ref={tech} className='w-full flex gap-6 items-center justify-center' >
                            <FaHtml5 title='HTML' className='tech text-orange-600 cursor-pointer  text-5xl'/>
                            <IoLogoCss3 title='CSS' className='tech text-blue-600 cursor-pointer text-5xl'/>
                            <IoLogoJavascript title='Javascript' className='tech text-yellow-300  cursor-pointer text-5xl'/>
                            <SiTailwindcss title='Tailwind' className='text-sky-800 tech  text-5xl cursor-pointer '/>
                            <FaReact title='React' className='text-sky-400 cursor-pointer tech text-5xl'/>
                            <img  title='Redux' src={redux} className='w-[12vh] text-5xl tech cursor-pointer'/>
                            <img  title="Node.js" src={nodejs} className=' w-[7vh] text-5xl tech cursor-pointer'/>
                            <img  title="Express.js" src={expressjs} className='text-5xl tech w-[13vh] cursor-pointer' />
                            <DiMongodb className='text-green-600 w-[5vh] text-5xl tech cursor-pointer'/>
                    </div>
                </div>

               
            </div>

    </div>
  )
}

export default Home