import React from 'react'

const Collage = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2022/08/AB34DCB3-6A19-40FC-B98C-36438374C532.jpeg?time=1672188906" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2022/08/Copy-of-PHOTO-2022-05-22-15-05-30.jpg?time=1672188906" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-3 object-cover w-full h-[400px] p-2' src="https://images.pexels.com/photos/11119826/pexels-photo-11119826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/6111593/pexels-photo-6111593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
        {/* right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Our Strength</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellat?</p>
            <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, labore doloribus! Nesciunt rem commodi harum iusto aliquam excepturi quis nostrum optio hic, error inventore quas consectetur eveniet. Laboriosam, repudiandae atque.</p>
        <div>
            <button className='bg-black text-white border-black hover:shadow-xl'>Learn More About Our Stories</button>
        </div>
        </div>
    </div>
  )
}

export default Collage