'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-14 bg-white dark:bg-zinc-900 transition-colors dark: ">
      <div className="absolute top-[0px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[0px] right-[0px] w-[300px] h-[300px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      {/* Left Text Section */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
          Hi, I'm Premrajesh Ravichandran
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-lg mx-auto md:mx-0">
          A passionate web developer crafting immersive & glowing digital experiences with a modern touch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
          <Link href="/project">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-semibold shadow-md hover:shadow-orange-500/50 transition dark:shadow-orange-400/30 dark:hover:shadow-red-500/60">
              🚀 View Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition font-semibold">
              ✉️ Contact Me
            </button>
          </Link>
          <Link href="/resume">
            <button className="px-6 py-3 rounded-xl border-2 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 transition font-semibold">
              💼 See My Skills
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="mt-12 md:mt-0 md:w-1/2 flex justify-center relative"
      >
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          <Image
            src="/profile.jpg"
            alt="Hero Image"
            fill
            className="rounded-full object-cover shadow-[0_0_40px_rgba(255,70,90,0.5)] dark:shadow-[0_0_40px_rgba(255,0,90,0.6)] border-4 border-red-400 dark:border-purple-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

{/* <MotionLink
    href="/certificate"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white px-5 py-3 rounded-xl transition shadow"
  >
    <GraduationCap size={20} />
    Certificates
  </MotionLink> */}