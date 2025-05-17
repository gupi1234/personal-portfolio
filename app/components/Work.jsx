'use client';
import { assets, workData } from '@/assets/assets';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Headings */}
      <motion.h4
        className={`text-center mb-2 text-lg ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className={`text-center text-5xl ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My latest work
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Here you’ll find a collection of projects that showcase my skills in web
        development, including responsive designs, user-friendly interfaces, and
        modern technologies like React, TypeScript, and Tailwind CSS. Each
        project reflects my passion for clean code and engaging digital
        experiences.
      </motion.p>

      {/* Work Grid */}
      <div
        className={`grid grid-cols-autoFit my-10 gap-5 ${
          isDarkMode ? 'text-black' : ''
        }`}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-[4/3] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-2 border-gray-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <a href={project.link}>
              <div className="bg-white border-1 border-rose-500 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-rose-600">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-fuchsia-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-5"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.a
        href="https://github.com/gupi1234"
        className={`w-max flex items-center justify-center gap-2 text-gray-700 
        border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 ${
          isDarkMode
            ? 'text-white border-white hover:bg-darkHover bg-transparent'
            : ''
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
