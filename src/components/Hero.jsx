import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img 
            className='top-0 left-0 w-full h-screen object-cover' 
            src="https://images.pexels.com/photos/3009792/pexels-photo-3009792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="/" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '>
            <div className='md:left-[10%] max-w-{1100px] m-auto absolute p-4'>
              <p>Nova Pro Foundation</p>
              <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>A new opportunity to take that first step</h1>
              <p className='max-w-[600px} drop-shadow-2xl py-2 text-xl'>
              A 501(c)(3) non-profit organization dedicated to helping low-income individuals with amputations who do not possess the means to purchase a prosthesis.
              We provide used prosthetic components in good working condition and give them a new life, allowing individuals to take their first steps.
              </p> 
              <button className='bg-white text-black'> About Nova Pro </button>
            </div>
        </div>
    </div>
  )
}

export default Hero