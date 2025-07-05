'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="min-h-screen px-4 md:px-10 py-12 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10"
      >

         {/* LEFT SIDE */}
        <div className="flex-1 space-y-8">
  {/* 👤 Profile Image & Details (Slightly Left Aligned) */}
  <div className="flex flex-col items-start">
    {/* Image */}
    <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg mx-auto">
      <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
    </div>

    {/* Details Centered under Image */}
    <div className="mt-4 text-left text-zinc-700 dark:text-zinc-300 space-y-1">

      <p>🟢 <strong>Name:</strong> Premrajesh Ravichnadran</p>
      <p>📍 <strong>Location:</strong>Karur, Tamilnadu</p>
      <p>📧 <strong>Email:</strong> premrajesh2005@gmail.com</p>
      <p>🔗 <strong>GitHub:</strong> <a href="https://github.com/EngineerPrem" className="text-purple-600 hover:underline">GitHub - Premrajesh</a></p>
      <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/premrajeshr/" className="text-purple-600 hover:underline">LinkedIn - Premrajesh</a></p>
    </div>
  </div>


  {/* Resume Button */}
          <div>
            <Link href="/Prem.pdf" download>
              <button className="mt-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition">
                📄 Download Resume
              </button>
            </Link>
          </div>

  {/* Tagline */}
          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow text-center">
            <p className="italic text-purple-600 dark:text-purple-400">"Empowered by learning, inspired by design — I build with heart and logic."</p>
          </div>

  {/* 📘 Currently Studying Section (Left Aligned) */}
  <div>
    <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 text-left">📘 Currently Studying</h2>
    <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mt-2 ml-6 space-y-1">
      <li>Python for Data Science - NPTEL</li>
      <li>React, Data Analyist- PowerBi, Excel</li>
      <li>I’m still learning — one step at a time — with focus, patience, and a genuine love for what I do.</li>
    </ul>
  </div>

 

  {/* 🌟 Personal Fun Facts Section (Left Aligned) */}
  <div>
    <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 text-left">🌟 Personal Fun Facts</h2>
    <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mt-2 ml-6 space-y-2">
      <li>🧠 I’m a slow but steady learner — once I understand something, I rarely forget it.</li>
      <li>🎵 I enjoy listening to music while learning — it helps me stay focused.</li>
      <li>💫 I’ve been deeply inspired by someone special — their love and support helped me believe in myself more.</li>
      <li>🌙 I enjoy late-night learning sessions — the world is quiet, and my focus is strongest.</li>
      <li>📝 I learn better when I write things down step-by-step, even if it takes longer.</li>
      <li>🌍 I believe in kindness, consistency, and lifelong learning.</li>
    </ul>
  </div>
</div>



        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-8">
          <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">✨ About Me</h2>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        I’m a curious and passionate learner with a strong interest in technology. I enjoy exploring how things work, and I’m always eager to grow both personally and professionally. I believe in learning step by step, staying consistent, and never giving up — no matter how slow the progress feels.
      </p>
    </div>

    {/* 🌱 My Past */}
    <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">🌱 My Past</h2>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        In the past, I had very little knowledge about tech or coding. I was unsure where to begin and found it difficult to understand technical concepts. But I never let that stop me. I started from scratch, asked questions, and kept pushing forward at my own pace.
      </p>
    </div>

    {/* 🚀 My Present */}
    <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">🚀 My Present</h2>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Now, I’m building a solid foundation in Web Development, learning the basics like HTML, CSS, JavaScript, and modern tools like Next.js. I’ve also started studying Data Analytics with Python, which has opened up a new perspective on how data shapes the digital world.
      </p>
    </div>

    {/* 🌟 My Future */}
    <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">🎯 Career Goals</h2>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        In the future, I see myself becoming a confident developer and data enthusiast. I aim to create real-world applications, solve meaningful problems, and continue learning new technologies. My goal is to keep growing, stay humble, and contribute to something valuable.
      </p>
    </div>

    {/* 🎓 Education */}
    <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">🎓 Education</h2>
      <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
    <li>
      <strong>B.E in Computer Science</strong> – Park College of Technology, Anna University (2022–2026)
    </li>
    <li>
      <strong>Higher Secondary Certification (HSC)</strong> – Government Model Higher Secondary School, Jegathapy, Karur (2020–2022)
    </li>
    <li>
      <strong>Secondary School Leaving Certificate (SSLC)</strong> – Government Higher Secondary School, Palayajeyankondamchozhapuram, Karur (2019–2020)
    </li>
  </ul>
    </div>

    {/* 🎯 Career Goals */}
    {/* <div>
      <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2"></h2>
      <p className="text-zinc-700 dark:text-zinc-300">
        I aim to work in a dynamic tech environment that challenges me to grow every day. I dream of contributing to open-source, leading projects, and eventually mentoring other developers.
      </p>
    </div> */}
          {/* Hobbies or Fun Facts */}
          
        </div>
      </motion.div>
    </main>
  );
};

export default AboutPage;
