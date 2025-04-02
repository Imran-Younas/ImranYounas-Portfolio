import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-500 mb-4'>Let's Talk</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, exercitationem eligendi. Repellat, labore at, inventore voluptatum ab culpa, 
              expedita voluptatem laudantium iure enim blanditiis. Quam dolorem debitis consequatur minus. Facere.
            </p>

            <div className="mb-4 mt-8">
              <span className="mr-2">📧</span>
              <a href="mailto:imran.pwr7@gmail.com" className="hover:underline">imran.pwr7@gmail.com</a>
            </div>

            <div className="mb-4 ">
              <span className="mr-2">📞</span>
              <span>+92 349 3036341</span>
            </div>

            <div className="mb-4 ">
              <span className="mr-2">📍</span>
              <span>Street, City, Province, Country</span>
            </div>

          </div>
          <div className="flex-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
