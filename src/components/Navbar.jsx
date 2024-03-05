import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"



export const Navbar = () => {

  const container = useRef();
  const navbar = useRef()

  useGSAP(()=>{

    gsap.from(".title", {
      y:-50,
      opacity:0,
      delay:0.4,
      duration:0.8,
    })

    gsap.from(".link", {
      y:-50,
      opacity:0,
      delay: 0.1,
      duration:0.6,
      stagger:0.3
    }, {scope:container})
    

  })
  
  return (
    <div ref={navbar} className='w-full fixed pt-6  flex gap-[70%] ml-12 text-black '>
            <p className='title font-bold text-2xl'>Mohit.<span className='text-indigo-700'>dev</span></p>
            <div ref={container} className='font-semibold text-xl flex gap-4 justify-evenly items-center'>
                <a  href='#' className='link hover:text-indigo-700 duration-300 cursor-pointer'>Home</a>
                <a  href="#" className='link hover:text-indigo-700 duration-300 cursor-pointer'>About</a>
                <Link className=' link hover:text-indigo-700 duration-300 cursor-pointer'>Projects</Link>
                <a href="#" className='link hover:text-indigo-700 duration-300 cursor-pointer'>Contact</a>
            </div>
    </div>
  )
}
