'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import { experienceData } from '@/assets/assets';

const ovo = Ovo({ subsets: ['latin'], weight: '400' });

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      id="experience"
      className="w-full px-6 md:px-[10%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        className={`text-center mb-2 text-lg tracking-wider  font-bold ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Journey
      </motion.h4>
      <motion.h2
        className={`text-center text-3xl md:text-5xl font-bold ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative mt-16 border-l-2 border-indigo-400 dark:border-indigo-600 pl-4 sm:pl-6 space-y-10">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative group p-5 sm:p-6 rounded-xl shadow-md transition-all ${
              isDarkMode
                ? 'bg-[#0f1123] text-white border border-[#1f2239]'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <span className="absolute left-[-28px] md:left-[-35px] top-10 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 dark:bg-[#0f1123]"></span>

            {/* Card Content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-full border shadow"
                />
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">{item.company}</p>
                <p className="text-xs opacity-60">{item.duration}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base leading-relaxed opacity-90">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
