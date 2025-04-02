import React from 'react'
import ProfileImg from '../assets/Profile.jpg'
import Black from '../assets/black.jpg'

function Home() {
  return (
    <div className='bg-black text-center text-white py-16' id='home'>
      <img className='mx-auto mb-8 w-52 h-56 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src={Black} alt="" />
      <h1 className='text-4xl font-bold'>
        I'm {" "} 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Imran Younas</span>
         ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
      {/* px-4 md:px-32 */}
        I specialize in building  modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-700 to-blue-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
        <button className='border text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Home