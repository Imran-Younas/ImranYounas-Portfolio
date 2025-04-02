import React from 'react'
import projectImg from '../assets/project.png'

const projects = [{
    id: 1,
    img: projectImg,
    name: "Doctor Appointment System",
    technology: "MERN Stack",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam.",

},
{
    id: 2,
    name: "Doctor Appointment System",
    technology: "MERN Stack",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam.",

},
{
    id: 3,
    name: "Doctor Appointment System",
    technology: "MERN Stack",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam.",

},
]


function Project() {
  return (
    <div className="bg-black text-white py-20" id="projects">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        

        {projects.map(project => (
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform
             transition-transform duration-300 hover:scale-105'>
<img src={projectImg} className='rounded-lg mb-4 w-full h-48 object-cover' alt="" />
<h3  className='text-2xl font-bold mb-2'>{project.name}</h3>
<p className='text-gray-400 mb-2'>{project.technology}</p>
<a href="https://www.youtube.com/watch?v=ziosLGwbXYM" className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-3xl' target='_blank' rel='noopener noreferrar'>Code</a>
            </div>
            
        ))}

      </div>
      </div>
      </div>
  )
}

export default Project

