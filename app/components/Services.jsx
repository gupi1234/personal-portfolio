import { assets, serviceData } from '@/assets/assets';
import { darkMode } from '@/tailwind.config';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Services = ({ isDarkMode }) => {
  return (
    <div id="services" className="w-full  px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        What i Offer
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>My Services</h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        I’m a front-end developer from West Bengal, India. I don’t have any
        degree — I learned web development through Udemy, YouTube, and other
        online resources. I know HTML, CSS, JavaScript, React, TypeScript, and
        Tailwind CSS. I love coding and practice daily to improve my skills and
        build projects.
      </p>

      <div className="grid grid-cols-autoFit gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`border-2 border-gray-400 rounded-xl px-8 py-12 hover:shadow-blackCustom cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500 ${
              isDarkMode ? 'hover:bg-darkHover shadow-whiteCustom ' : ''
            }`}
          >
            <Image src={icon} alt="err" className="w-10" />
            <h3
              className={`text-lg my-4 text-grey-700 ${
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
            <a href={link} className=" flex items-center gap-2 text-sm mt-2">
              Read more{' '}
              <Image src={assets.right_arrow} alt="err" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
