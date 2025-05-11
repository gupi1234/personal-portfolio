import React from 'react';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import { assets, infoList } from '@/assets/assets';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const About = () => {
  return (
    <div id="about" className="w-full  px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Introductions
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>About me</h2>

      <div className="flex flex-col lg:flex-row gap-20 mt-20 items-center">
        <div>
          <Image
            src={assets.user_image}
            alt="User"
            className="w-60 sm:w-80  rounded-tr-[90px] rounded-tl-[30px] 
              rounded-bl-[70px] rounded-br-[30px] object-cover shadow-xl
                transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl border-3 border-blue-300"
          />
        </div>
        <div className="flex-1">
          <p className="mb-4 text-justify max-w-2xl">
            Hi, I'm Gupi Debnath, a passionate Frontend Web Developer dedicated
            to crafting beautiful and responsive user interfaces. I enjoy
            turning complex problems into clean, elegant solutions using
            technologies like HTML, CSS, JavaScript, and React. Every day, I
            strive to improve my skills and stay updated with the latest trends
            in web development. I'm creative, focused, and always eager to learn
            and take on new challenges that push my boundaries as a developer.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-2 border-gray-400 rounded-xl p-6 cursor-pointer"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 h-6 inline-block mr-2 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
