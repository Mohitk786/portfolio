import React from 'react'
import about from "../assets/about.webp"

const About = () => {
  return (
    <div className='w-screem h-screen  overflow-hidden flex justify-center items-center '>
        <div className='w-[60%] flex justify-center items-center gap-28'>
           <div className='w-[50%] relative'>
                <div className='w-[90%]'>
                    <img 
                        src={about}
                        alt="about"
                        className='rounded-2xl'
                    />
                </div>
                        {/* <div className='w-1/2 mx-auto mt-8'>
            <div className='w-full h-48 bg-red-200 rounded-full overflow-hidden relative'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className='text-4xl'>💻</p>
                </div>
                <div className='text-container absolute w-full h-full flex items-center justify-center'>
                <p className='text-white text-xl whitespace-nowrap animate-moveOnCircle'>
                    FULL STACK WEB DEVELOPER
                </p>
                </div>
            </div>
            </div> */}
            
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
    </div>
  )
}

export default About