import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({title, description, image, techUsed, flow, code, website}) => {
        
    const Card = useRef();
    
    useEffect(() => {
    useGSAP.register(Card);
    gsap.from(Card.current, {
        y: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: Card.current,
            start:   "top 100%",
            end: "top 30%",
            scrub: 0.5,
        },
    });
    }, [])
  
    return (
    <div ref={Card} className={`w-[60%] flex ${flow === "1" ? "justify-start" : "flex-row-reverse justify-end"} gap-14`}>
            <div className='w-[80%]'>
                <img 
                    src={image}
                    height="40%"
                    alt="about"
                    className='rounded-2xl'
                />
            </div>
            <div className='w-[40%] text-center flex flex-col gap-5 justify-center items-center'>
                    <p className='font-bold text-2xl'>{title}</p>
                    <p className='font-black text-slate-600 overflow-y-auto'>
                       {description}
                    </p>
                
                
                    <div className='font-semibold text-xl flex gap-3'>
                        {
                            techUsed.map((tech, index)=>(
                                <p key={index}>{tech}</p>
                            ))
                        }   
                    </div>
                
                <div className='flex w-[60%] items-center justify-between'>
                    <a target='_blank' href={code} className='flex gap-1 items-center'><p>Code</p> <FaGithub className='text-xl'/></a>
                    <a target='_blank' href={website} className='flex gap-1 items-center'><p>Live Demo</p> <LuArrowUpRightFromCircle className='text-xl'/></a>

                </div>
            </div>
        </div>
  )
}

export default ProjectCard