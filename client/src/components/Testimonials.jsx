import React from 'react'
import { testimonialsData } from '../assets/assets'; // Assuming you are importing the data
import { assets } from '../assets/assets'; // Assuming you are importing assets
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 p-6 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-white/20 p-12 rounde-lg shadow-md  w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
            {/* User Image */}
            <div className='flex flex-col items-center'>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className='rounded-full w-14 '
              />
            </div>

            {/* User Name and Role */}
            <h2 className='flex justify-center text-xl font-semibold mt-3'>{testimonial.name}</h2>
            <h3 className='flex justify-center text-gray-500 mb-4'>{testimonial.role}</h3>

            {/* Rating Stars */}
            <div className='flex justify-center mb-4'>
              {Array(testimonial.stars).fill().map((item, index) => (
                <img key={index} src={assets.rating_star} alt="Star" className='w-5 h-5' />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
