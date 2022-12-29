import React from 'react'

const Donate = () => {
  return (
    <div className='flex flex-col h-auto justify-center py-30 p-16 max-w-[1200px] m-auto '>
        <h6 className='text-orange-700 font-bold'>Amputees return to their full mobility</h6>
        <h1 className='text-5xl md:text-6xl font-bold'>Our Featured Campaigns</h1>
        <p className='text-xl py-6'>Nova Pro currently has programs in half a dozen countries around the globe. Funds raised assist in covering the cost of devices to those most in need, and help with shipping, transport and storage expenses. Donations also cover expenses for soft and consumable goods and technology needs.</p>
        {/* cards */}
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* card1 */}
            <div className='rounded-xl shadow-lg h-[500px]'>
            <div className='p-5 flex flex-col'>
                <img className='max-w-full h-auto' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/el-salvador-square.png?time=1672188906" alt="/" />
                <h3 className='py-2 font-bold'>Prosthetics for El Salvador</h3>
                    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"'>
                    <div className='bg-blue-600 h-2.5 rounded-full" style="width: 45%"'></div>
                    </div>
                    <div className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 '>
                    <div className='py-6 grid place-items-center'>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Donate Now</button>
                    </div>
                    </div>  
                    </div>          
            </div>
            {/* card 2 */}
            <div className='rounded-xl shadow-lg h-[500px]'>
            <div className='p-5 flex flex-col'>
                <img className='max-w-full h-auto' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/venezuela-g74b8856f1_1280.png?time=1672188906" alt="/" />
                <h3 className='py-2 font-bold'>Help our Venezuelan Friends</h3>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"'>
                    <div className='bg-blue-600 h-2.5 rounded-full" style="width: 45%"'></div>
                    </div>
                    <div className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 '>
                    <div className='py-6 grid place-items-center'>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Donate Now</button>
                    </div>
                    </div> 
                    </div> 
            </div>
            {/* card 3 */}
            <div className='rounded-xl shadow-lg h-[500px]'>
            <div className='p-5 flex flex-col'>
                <img className='max-w-full h-auto' src="https://j2z52f.p3cdn1.secureserver.net/wp-content/uploads/2021/11/ghana-g87fd7debd_1280.png?time=1672188906" alt="/" />
                <h3 className='py-2 font-bold'>First steps for Ghana</h3>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"'>
                    <div className='bg-blue-600 h-2.5 rounded-full" style="width: 45%"'></div>
                    </div>
                    <div className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 '>
                    <div className='py-6 grid place-items-center'>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Donate Now</button>
                    </div>
                    </div>  
                    </div>
            </div>
        </div>
    </div>
        
    
  )
}

export default Donate