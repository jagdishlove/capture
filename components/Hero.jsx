import React from 'react'

function Hero() {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' >
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] '/>
        <div className='p-5 text-white z-[20] '>
         <h2 className='text-2xl font-bold sm:text-5xl'>Heading</h2>
         <p className='py-5 sm:text-xl'>Message</p>
         <button className=' px-8 py2 border hover:bg-white hover:text-black'>Book</button>
        </div>
    </div>
  )
}

export default Hero