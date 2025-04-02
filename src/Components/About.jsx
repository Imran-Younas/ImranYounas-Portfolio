import React from "react";
import AboutImg from "../assets/Black.jpg";

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt=""
            className="w-64 h-72 rounded-3xl object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm Pro Full-stack Dwveloper Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error dicta veritatis totam iusto
              quia maxime consequuntur dolorem laboriosam rerum voluptatum,
              assumenda possimus, unde veniam esse! Excepturi cum aspernatur
              obcaecati in!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/4">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                    
                  </div>
                </div>
              </div>

              {/* --------------------- React --------------- */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/4">React.js</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                    
                  </div>
                </div>
              </div>

              {/* ------------------- Node.js and Express ---------------- */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/4">Node.js & Express.js</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                    
                  </div>
                </div>
              </div>

                            {/* ------------------- Mongo ---------------- */}
                <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/4">Mongo DB</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className='bg-gradient-to-r from-green-400 to-blue-500
                  h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                    
                  </div>
                </div>
              </div>


            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p>Projects Completed</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
