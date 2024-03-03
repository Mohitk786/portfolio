import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import profile from "../assets/profile.jpg"
import nodejs from "../assets/nodejs.webp"
import expressjs from "../assets/express.webp"
import redux from "../assets/redux.webp"

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col items-center justify-center gap-[15%] bg-white'>
        
            <div className='flex gap-8 w-[60%] justify-center items-center'>
                <div className='mt-4 p-6 w-[50%] flex flex-col justify-center gap-8 '>
                    <h1 className=' text-black font-bold text-5xl '>Full Stack <span className='text-indigo-700'>MERN Developer</span> 👋</h1>
                    <p className='text-slate-700/70 leading-6 font-bold'>Hi! I'm Mohit Kumar.  A passionate Full Stack MERN Developer based in Ghaziabad, India  </p>
                    <div className='text-3xl flex gap-3'>
                        <IoLogoLinkedin/>
                        <FaGithub/>
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
                    <div className='w-full flex gap-6 items-center justify-center' >
                            <FaHtml5 className='text-orange-600 text-5xl'/>
                            <IoLogoCss3 className='text-blue-600 text-5xl'/>
                            <IoLogoJavascript className='text-yellow-300 text-5xl'/>
                            <SiTailwindcss className='text-sky-800 text-5xl'/>
                            <FaReact className='text-sky-400 text-5xl'/>
                            <img src={redux} className='w-[12vh] text-5xl'/>
                            <img src={nodejs} className=' w-[7vh] text-5xl'/>
                            <img src={expressjs} className='text-5xl w-[13vh]' />
                            <DiMongodb className='text-green-600 w-[5vh] text-5xl'/>
                    </div>
                </div>


                <div className='w-full flex m-x-[2%] items-center justify-around'>
                    <div className='flex w-[13%] justify-around'>
                        <p className='text-black w-full font-semibold text-xl'>Programming languages</p>
                        <p className='w-[1/10] border border-slate-600'></p>
                </div>
                    <div className='w-full flex gap-6 items-center justify-center' >
                        <IoLogoJavascript className='text-yellow-300 text-5xl'/>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Home