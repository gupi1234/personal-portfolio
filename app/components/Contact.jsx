'use client';
import { assets } from '@/assets/assets';
import { darkMode } from '@/tailwind.config';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '17d4517d-c630-4fad-bfbc-c836c7a9d867');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className={`w-full  px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:100%_auto] ${
        isDarkMode ? 'bg-none' : ''
      }`}
    >
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Connect With me
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>Get in touch</h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12  ${ovo.className}`}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        the form below or connect with me on social media.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg placeholder:text-gray-700 ${
              isDarkMode
                ? 'bg-darkHover border-white/90 placeholder:text-white'
                : 'bg-white'
            }`}
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg placeholder:text-gray-700 ${
              isDarkMode
                ? 'bg-darkHover border-white/90 placeholder:text-white'
                : 'bg-white'
            }`}
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter Your message"
          required
          name="message"
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 placeholder:text-gray-700 ${
            isDarkMode
              ? 'bg-darkHover border-white/90 placeholder:text-white'
              : 'bg-white'
          }`}
        />
        <button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-gray-600 duration-500 ${
            isDarkMode ? 'bg-transparent border-[0.5px] hover:bg-darkHover' : ''
          }`}
        >
          Submit now{' '}
          <Image src={assets.right_arrow_white} alt="err" className="w-4" />
        </button>

        <p className="mt-">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
