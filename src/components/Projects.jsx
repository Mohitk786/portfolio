import React from 'react'
import reelpedia from "../assets/ree-pedia.png"
import ProjectCard from './ProjectCard';
import edtech from "../assets/Ed_Tech.png"

const Projects = () => {
  return (
    <div className='w-screen mt-16 h-auto flex flex-col gap-20 items-center'>
        
        <div className='flex gap-2  flex-col w-[50%]'>
            <p className='text-indigo-700 font-bold text-4xl'>PROJECTS</p>
            <h1 className='font-bold text-2xl'>Each project is a unique piece of development ✅</h1>
        </div>


        <div className='w-[100%] flex flex-col  gap-16 items-center'>
            <ProjectCard
                title="REEL PEDIA 📺"
                description="Reel Pedia is more than just a movie database; it's a celebration of the cinematic arts. Dive into an extensive 
                collection of films, TV shows, and documentaries. Immerse yourself in a user-friendly interface that allows you 
                to explore genres, discover hidden gems, and stay updated on the latest releases."
                image={reelpedia}
                techUsed={["React", "Redux", "Tailwind"]}
                flow="1"
                code="https://github.com/Mohitk786/ReelPedia"
                website="https://reelpedia.netlify.app/"
            />


            <ProjectCard
                title="Smart-Study Hub 📘"
                description="Smart-Study-Hub is an innovative Ed-Tech project, designed as a full-stack MERN (MongoDB, Express.js, React, Node.js) 
                application, providing a dynamic and user-friendly platform for online learning. Drawing inspiration from successful platforms like 
                Udemy, Smart-Study-Hub aims to revolutionize the education landscape by offering a diverse range of high-quality courses, seamlessly 
                combining interactive content with cutting-edge technology.."
                image={edtech}
                techUsed={["React", "MongoDB", "Express.js", "Node.js"]}
                flow="0"
                code="https://github.com/Mohitk786/SmartStudy-Hub"
                website="https://smart-study-hub.netlify.app/"
            />

            <ProjectCard
                title="REEL PEDIA 📺"
                description="Reel Pedia is more than just a movie database; it's a celebration of the cinematic arts. Dive into an extensive 
                collection of films, TV shows, and documentaries. Immerse yourself in a user-friendly interface that allows you 
                to explore genres, discover hidden gems, and stay updated on the latest releases."
                image={reelpedia}
                techUsed={["React", "Redux", "Tailwind"]}
                flow="1"
                code="https://github.com/Mohitk786/ReelPedia"
                website="https://reelpedia.netlify.app/"
            /> 

            <ProjectCard
                title="REEL PEDIA 📺"
                description="Reel Pedia is more than just a movie database; it's a celebration of the cinematic arts. Dive into an extensive 
                collection of films, TV shows, and documentaries. Immerse yourself in a user-friendly interface that allows you 
                to explore genres, discover hidden gems, and stay updated on the latest releases."
                image={reelpedia}
                techUsed={["React", "Redux", "Tailwind"]}
                flow="0"
                code="https://github.com/Mohitk786/ReelPedia"
                website="https://reelpedia.netlify.app/"
            /> 
        </div>
        
        
    </div>
  )
}

export default Projects