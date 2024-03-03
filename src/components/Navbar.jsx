import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full fixed pt-6  flex gap-[70%] ml-12 text-black '>
            <p className='font-bold text-2xl'>Mohit.<span className='text-indigo-700'>dev</span></p>
            <div className='font-semibold text-xl flex gap-4 justify-evenly items-center'>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
    </div>
  )
}
