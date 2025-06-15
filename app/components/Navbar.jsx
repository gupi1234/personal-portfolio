'use client';

import { Ovo } from 'next/font/google';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuVisible(true);
      setTimeout(() => {
        setIsAnimatingOpen(true);
      }, 10);
    } else {
      setIsAnimatingOpen(false);
      const timeout = setTimeout(() => {
        setMenuVisible(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden hidden lg:block">
        <Image src={assets.header_bg_color} alt="err" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300
    ${
      isScroll
        ? 'bg-white/70 dark:bg-transparent backdrop-blur-md shadow-sm dark:shadow-white/20'
        : 'bg-transparent'
    }
  `}
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
              : ' shadow-sm bg-opacity-50 text-[10px]  md:text-[12px] lg:text-[16px] z-10 backdrop-blur-md bg-white/20   '
          } ${
            isDarkMode
              ? 'dark:border dark:border-white/50 dark:bg-transparent'
              : ''
          }`}
        >
          <li>
            <a href="#top" className={`${ovo.className}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${ovo.className}`}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className={`${ovo.className}`}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={`${ovo.className}`}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`${ovo.className}`}>
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="err"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className={`hidden lg:flex gap-3 items-center px-6 py-2 border border-gray-300 ml-4 rounded-full ${
              ovo.className
            }  ${isDarkMode ? 'dark:border-white/50' : ''} `}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="err"
              className=" w-3"
            />
          </a>
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="err"
              className="w-6"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuVisible && (
          <ul
            className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 ease-in-out
            ${isDarkMode ? 'bg-[#191752]' : 'bg-rose-50'}`}
            style={{
              transform: isAnimatingOpen ? 'translateX(0)' : 'translateX(100%)',
              pointerEvents: isAnimatingOpen ? 'auto' : 'none',
            }}
          >
            <div
              className="absolute right-6 top-6"
              onClick={() => setIsMenuOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="Close menu"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#top" className={ovo.className}>
                Home
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#about" className={ovo.className}>
                About me
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#services" className={ovo.className}>
                Services
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#work" className={ovo.className}>
                My Work
              </a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#contact" className={ovo.className}>
                Contact me
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
