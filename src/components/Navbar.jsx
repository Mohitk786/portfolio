import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full fixed pt-6  flex gap-[70%] ml-12 text-black '>
            <p className='font-bold text-2xl'>Mohit.<span className='text-indigo-700'>dev</span></p>
            <div className='font-semibold text-xl flex gap-4 justify-evenly items-center'>
                <a  href='#' className='hover:text-indigo-700 duration-300 cursor-pointer'>Home</a>
                <a  href="#" className='hover:text-indigo-700 duration-300 cursor-pointer'>About</a>
                <Link className='hover:text-indigo-700 duration-300 cursor-pointer'>Projects</Link>
                <a href="#" className='hover:text-indigo-700 duration-300 cursor-pointer'>Contact</a>
            </div>
    </div>
  )
}
