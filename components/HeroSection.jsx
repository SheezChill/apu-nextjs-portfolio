import React from 'react'
import TypeWritter from 'typewriter-effect'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroSection = () => {
  return (
    <main className="py-16 mt-16 md-flex md:shrink-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8 place-self-center justify-self-start"
        >
          <h1 className="font-extrabold">
            {/* span text seperator -- for design*/}
            <span className="text-white text-8xl ">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-gray-300 via-gray-700 to-yellow-500">
                Samuel
              </span>
            </span>
            <br></br>
            <span className="text-7xl">
              I'm a
              <span className="text-gray-500">
                <TypeWritter
                  options={{
                    strings: [
                      'Web developer',
                      'Designer',
                      'VTuber enthusiast',
                      '日本語勉強者'
                    ],
                    autoStart: true,
                    loop: true
                  }}
                ></TypeWritter>
              </span>
            </span>
          </h1>
          <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
            Scroll down to know more about me. or not. it's fine really.
          </p>
          <a
            href="#projects"
            className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-gray-600 hover:bg-gray-600"
          >
            <span className="text-xl text-white">Projects</span>
          </a>
        </motion.div>
        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[400px] h-[400px] relative z-0">
              <img
                src="/Hero-Section.webp"
                alt="hero section"
                className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false })
