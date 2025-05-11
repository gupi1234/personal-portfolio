import { assets } from '@/assets/assets';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div className="relative w-40 h-40">
        <Image
          src={assets.profile_photo}
          alt="err"
          className="rounded-full w-40 h-40 border-2 border-blue-700 object-cover"
        />
        <div
          className="absolute bottom-2 right-6
        
        w-5 h-5 rounded-full bg-white border border-white  flex items-center justify-center"
        >
          <Image src={assets.verified} alt="Verified" className="w-4 h-4" />
        </div>
      </div>

      <h3
        className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}
      >
        Hi i'm Gupi Debnath
        <Image src={assets.hand_icon} alt="err" className=" w-6" />
      </h3>
      <h1
        className={`text-3xl md:text-5xl lg:text-[50px] mb-3 ${ovo.className}`}
      >
        Frontend Web Developer...
      </h1>
      <p className="max-w-2xl mx-auto">
        I am a frontend web developer with a passion for creating beautiful and
        functional user interfaces. I have experience with
        <span className="text-primary font-semibold"> HTML</span>,
        <span className="text-primary font-semibold"> CSS</span>,
        <span className="text-primary font-semibold"> JavaScript</span>, and
        <span className="text-primary font-semibold"> React</span>, and I am
        always eager to learn new technologies and improve my skills.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="err" className="w-4" />
        </a>

        <a
          href="/resume.pdf"
          download={true}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <Image src={assets.download_icon} alt="err" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
