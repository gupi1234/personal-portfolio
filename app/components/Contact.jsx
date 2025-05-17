'use client';
import { assets } from '@/assets/assets';
import { Ovo } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
});

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '17d4517d-c630-4fad-bfbc-c836c7a9d867');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('✅ Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult('❌ ' + data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:100%_auto] ${
        isDarkMode ? 'bg-none' : ''
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h4
        className={`text-center mb-2 text-lg ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Connect With me
      </motion.h4>

      <motion.h2
        className={`text-center text-5xl ${ovo.className}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Get in touch
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        the form below or connect with me on social media.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          {/* Name Input */}
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg placeholder:text-gray-700 ${
              isDarkMode
                ? 'bg-darkHover border-white/90 placeholder:text-white'
                : 'bg-white'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg placeholder:text-gray-700 ${
              isDarkMode
                ? 'bg-darkHover border-white/90 placeholder:text-white'
                : 'bg-white'
            }`}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
        </div>

        {/* Textarea */}
        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 placeholder:text-gray-700 ${
            isDarkMode
              ? 'bg-darkHover border-white/90 placeholder:text-white'
              : 'bg-white'
          }`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-gray-600 duration-500 ${
            isDarkMode ? 'bg-transparent border-[0.5px] hover:bg-darkHover' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Submit now{' '}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        {/* Result message */}
        <motion.p
          className="mt-5 text-center font-medium text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
