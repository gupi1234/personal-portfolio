'use client';
import React from 'react';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Introductions
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>About me</h2>

      <div className="flex flex-col lg:flex-row gap-20 mt-20 items-center">
        {/* Profile Image */}
        <div>
          <Image
            src={assets.user_image}
            alt="User"
            className="w-60 sm:w-80  rounded-tr-[90px] rounded-tl-[30px] 
                rounded-bl-[70px] rounded-br-[30px] object-cover shadow-xl
                hover:scale-105 hover:-translate-y-1 duration-1000 hover:shadow-2xl border-3 border-blue-300"
          />
        </div>

        {/* Right content */}
        <div className="flex-1">
          <p className="mb-4 text-justify max-w-2xl">
            Hi, I'm Gupi Debnath, a passionate Frontend Web Developer...
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className={`rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 ${
                  isDarkMode
                    ? 'border-white border-2 shadow-whiteCustom hover:bg-darkHover'
                    : 'hover:shadow-blackCustom border-2 border-gray-400 hover:bg-lightHover'
                }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 h-6 inline-block mr-2 mt-3"
                />
                <h3
                  className={`my-4 font-semibold text-gray-700 ${
                    isDarkMode ? ' dark:text-white' : ''
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-gray-600 text-sm duration-300 ${
                    isDarkMode ? 'text-white/80' : 'hover:text-gray-800'
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4
            className={`my-6 text-gray-700 font-bold ${
              isDarkMode ? 'text-white/80' : ''
            }`}
            style={{ fontFamily: 'Ovo', sansSerif: 'sans-serif' }}
          >
            Tools I Use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-8 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
