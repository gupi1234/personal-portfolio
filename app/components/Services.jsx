'use client';
import { assets, serviceData } from '@/assets/assets';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        className={`text-center mb-2 text-lg ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className={`text-center text-5xl ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My Services
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I’m a front-end developer from West Bengal, India. I don’t have any
        degree — I learned web development through Udemy, YouTube, and other
        online resources. I know HTML, CSS, JavaScript, React, TypeScript, and
        Tailwind CSS. I love coding and practice daily to improve my skills and
        build projects.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-autoFit gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className={`border-2 border-gray-400 rounded-xl px-8 py-12 cursor-pointer hover:-translate-y-1 hover:shadow-blackCustom duration-500 ${
              isDarkMode
                ? 'hover:bg-darkHover shadow-whiteCustom'
                : 'hover:bg-gray-200'
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3
              className={`text-lg my-4 text-gray-700 ${
                isDarkMode ? 'text-white' : ''
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm text-gray-600 leading-5 ${
                isDarkMode ? 'text-white/80' : ''
              }`}
            >
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-2">
              Read more{' '}
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
