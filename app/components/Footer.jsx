import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div>
          <a href="#top">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mr-14">
              GD.
            </h2>
          </a>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="err" className="w-6" />
          iamgupidebnath@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-r-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Gupi Debnath. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a terget="_blank " href="https://github.com/gupi1234">
              GitHub
            </a>
          </li>
          <li>
            <a
              terget="_blank "
              href="https://www.linkedin.com/in/gupi-debnath-9b159726a/"
            >
              Linkedin
            </a>
          </li>

          <li>
            <a
              terget="_blank "
              href="https://www.instagram.com/raju___debnath/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
