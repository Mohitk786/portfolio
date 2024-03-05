import React, { useRef, useEffect } from 'react';
import aboutImg from "../assets/about.webp";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const about = useRef();

    useEffect(() => {
        useGSAP.register(about);
        gsap.from(about.current, {
            y: 200,
            duration: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: about.current,
                start:   "top 100%",
                end: "top 40%",
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <section className='body marker:w-screem h-screen overflow-hidden flex justify-center items-center '>
            <div ref={about} className='about w-[60%] flex justify-center items-center gap-28'>
                <div className='w-[50%] relative'>
                    <div className='w-[90%]'>
                        <img
                            src={aboutImg}
                            alt="about"
                            className='rounded-2xl'
                        />
                    </div>
                </div>
                <div className='w-[50%] flex flex-col gap-5'>
                    <p className='text-lg font-bold text-indigo-700'>ABOUT ME </p>
                    <p className='font-bold text-2xl'>A dedicated Full Stack MERN Developer based in Ghaziabad, India</p>
                    <p className='font-black text-slate-600'>
                    I'm Mohit Kumar, a dedicated Full Stack MERN Developer with a passion for creating seamless and efficient web applications. Proficient in MongoDB, Express.js, 
                    React.js, and Node.js, I specialize in transforming ideas into impactful digital experiences. From crafting engaging user interfaces to building robust 
                    server-side applications, I bring a holistic approach to development. Let's collaborate and bring your vision to life!
                    Having built a myriad of front-end and full-stack web applications, my portfolio showcases the versatility of my work. From Ed-Tech platforms to data-driven 
                    dashboards, each project reflects my commitment to quality, clean code, and user-centric design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
