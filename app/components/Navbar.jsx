'use client';
import { Ovo } from 'next/font/google';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="err" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll ? 'bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <a href="#top">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mr-14">
            GD.
          </h2>
        </a>

        <ul
          className={`hidden md:flex gap-6 lg:gap-8 items-center rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'shadow-sm bg-opacity-50 text-[10px] md:text-[12px] lg:text-[16px] z-10 backdrop-blur-md bg-white/20'
          }`}
        >
          {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map(
            (text, idx) => (
              <li key={idx}>
                <a
                  href={`#${text.toLowerCase().replace(/ /g, '')}`}
                  className={ovo.className}
                >
                  {text}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="err" className="w-6" />
          </button>
          <a
            href="#contact"
            className={`hidden lg:flex gap-3 items-center px-6 py-2 border border-gray-300 ml-4 rounded-full ${ovo.className}`}
          >
            Contact <Image src={assets.arrow_icon} alt="err" className="w-3" />
          </a>
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="err" className="w-6" />
          </button>
        </div>

        {/* ✅ MOBILE MENU controlled by state */}
        <ul
          className={`fixed md:hidden flex-col gap-4 py-20 px-10 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'
          }`}
        >
          <div
            className="absolute right-6 top-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={assets.close_black}
              alt="err"
              className="w-4 cursor-pointer"
            />
          </div>
          {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map(
            (text, idx) => (
              <li key={idx} onClick={() => setIsMenuOpen(false)}>
                <a
                  href={`#${text.toLowerCase().replace(/ /g, '')}`}
                  className={ovo.className}
                >
                  {text}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
