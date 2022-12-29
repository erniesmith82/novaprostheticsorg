import React from 'react'

const Team = () => {
  return (
    
    <div className='flex flex-col h-auto place-items-center py-30 p-16 max-w-[1200px] m-auto '>
        <h6 className='text-orange-700 font-bold'>Our Team</h6>
        <h1 className='text-5xl md:text-6xl font-bold'>Meet Our Volunteers</h1>
        <p className='text-xl py-6'>Every team requires a diverse group working together toward a common goal.</p>
  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* cards */}
        <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
            <img className='rounded-xl' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/File_000-e1661109096770.png?time=1672201569" alt="/" />
            <div className='py-2 grid place-items-center'>
            <h5 className='text-xl md:text-2xl font-bold pt-4'>Hernan Luna</h5>
            <p className='text-lg md:text-xl'>Director/Founder</p>
            </div>
            </div>
            </div>
            <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
            <img className='rounded-xl' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/PHOTO-2022-08-21-13-41-01-e1661109061281.jpg?time=1672201569" alt="/" />
            <div className='py-6 grid place-items-center'>
            <h5 className='text-xl md:text-2xl font-bold pt-4'>Felix Ahorsu</h5>
            <p className='text-lg md:text-xl'>Program Administrator - Ghana</p>
            </div>
            </div>
            </div>
            <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
            <img className='rounded-xl' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/PHOTO-2022-08-21-13-33-24-2-e1661109147215.jpg?time=1672201569" alt="/" />
            <div className='py-6 grid place-items-center'>
            <h5 className='text-xl md:text-2xl font-bold pt-4'>Ronald Cedeno</h5>
            <p className='text-lg md:text-xl'>Program Administrator - Venezuela</p>
            </div>
            </div>
            </div>
            <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
            <img className='rounded-xl' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2022/09/PHOTO-2022-09-02-14-15-10-1-e1662506021219.jpg?time=1672201569" alt="/" />
            <div className='py-6 grid place-items-center'>
            <h5 className='text-xl md:text-2xl font-bold pt-4'>Douglas Lima</h5>
            <p className='text-lg md:text-xl'>Program Administrator - El Salvador</p>
            </div>
            </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Team