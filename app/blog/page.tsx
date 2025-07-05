"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Blog type
type Blog = {
  title: string;
  description: string;
  full: string;
};

// ✅ Blog Data
const blogs: Blog[] = [
  {
    title: "🌾 From Village Roots to Digital Dreams",
    description: "How belief, values, and effort helped me move from a small village to the tech world.",
    full: "I started from a humble village background where education was a luxury. Through hard work and my family's support, I discovered a passion for technology. My journey was not easy — I had no internet, no guidance. But I kept moving forward, learning from books, teachers, and eventually online platforms. Today, I'm pursuing a career in tech with purpose and pride.",
  },
  {
    title: "🔧 From Normal Thinking to Engineer Thinking",
    description: "How coding shaped the way I solve problems and think in structured steps.",
    full: "Before learning to code, I used to solve problems randomly. But engineering taught me logic, step-by-step planning, and debugging mindset. Today, I don’t panic when I see errors — I analyze, break them down, and fix them patiently. Coding changed not just how I work — it changed how I think.",
  },
  {
    title: "🙏 From Temple Priest Wishes to IT Role Dreams",
    description: "A simple blessing became the fuel for my tech journey.",
    full: "One day at a temple, a priest unexpectedly said, 'You’ll work in a big IT company one day.' I had no clue how. But I held on to that blessing like a promise. It gave me hope when I wanted to give up. Now I work every day to make that blessing come true.",
  },
  {
    title: "🌄 Winding Roads & Clear Thoughts",
    description: "A trip to Kollimalai gave me the mental reset I needed to reflect and refocus.",
    full: "Life was stressful, filled with doubts. One weekend, I visited the winding hills of Kollimalai. The fresh air and peaceful roads helped me pause and reflect. I realized: we need breaks to recharge. Nature gave me clarity and motivation to keep going.",
  },
  {
    title: "🎭 Between Family Pressures & My Studies",
    description: "Managing expectations and emotions to stay on track with my goals.",
    full: "Sometimes, I felt torn between my family’s expectations and my personal dreams. They wanted me to play it safe, but I knew I wanted something different. It wasn’t easy. But I learned to communicate calmly, explain my vision, and earn their trust.",
  },
  {
    title: "💪 Built with Self-Confidence & Hard Work",
    description: "How I use patience, repetition, and belief to grow — even when it’s hard.",
    full: "Confidence isn’t natural — it’s built. Every small success boosted me. Every failure taught me. I kept practicing even when I didn’t see results. Slowly, I saw growth. Today, I trust myself — because I’ve done the hard work.",
  },
  {
    title: "✉️ Dear Future Me",
    description: "A letter to remind my future self that I started from zero — and kept going.",
    full: "Dear Future Me, remember this: You started with doubts and no direction. But you didn’t quit. You learned, grew, and built something meaningful. When things get tough again, remember where you began. Keep going. You’ve got this.",
  },
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <div className="min-h-screen px-4 py-12 bg-white dark:bg-black text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* ✅ Main Blog Full Page Display */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-300 dark:border-gray-700">
          <h1 className="text-4xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">
            🌱 My Life Journey
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I’m a normal village child from a humble, hardworking family. My father took many risks and worked tirelessly to support my studies and give me a better future...
            </p>
            <p>
              At age 11, I shifted to a government school, and everything changed. I didn’t feel confident or connected. I was seen as just an{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">“average student,”</span> and the only support I found was from teachers who saw some potential in me.
            </p>
            <p>
              By age 15, I started asking myself deep questions:
              <br /><span className="text-purple-600 dark:text-purple-400">“Why am I here?”</span>
              <br /><span className="text-purple-600 dark:text-purple-400">“What am I supposed to become?”</span>
            </p>
            <p>
              The only thing that held me together was the pure love of my parents. They gave me <span className="text-purple-600 dark:text-purple-400 font-semibold">love, hope, and strength.</span>
            </p>

            <h2 className="text-2xl font-semibold pt-6 text-purple-700 dark:text-purple-300">
              ✨ Turning Point
            </h2>
            <p>
              I entered college filled with confusion. No tech background, no clarity. But I decided to learn steadily. Slowly, I explored Web Development and Data Analytics, doing small projects and online courses.
            </p>
            <p>
              The real turning point came when someone believed in me — more than I believed in myself.
            </p>

            <h2 className="text-2xl font-semibold pt-6 text-purple-700 dark:text-purple-300">
              🚀 Today
            </h2>
            <p>
              Today, I’m growing my skills with:
              <br />
              <b className="text-purple-600 dark:text-purple-400">Frontend:</b> React, Next.js, Tailwind CSS
              <br />
              <b className="text-purple-600 dark:text-purple-400">Backend:</b> Java, Python, SQL
              <br />
              <b className="text-purple-600 dark:text-purple-400">Validation Tools:</b> Zod, React Hook Form
              <br />
              <b className="text-purple-600 dark:text-purple-400">Projects:</b> E-commerce, Chatbot, Food App, Contact Forms
            </p>
            <p>
              I am a steady learner — patient, focused, and moving forward every day. I believe <span className="text-purple-600 dark:text-purple-400 italic">something beautiful is waiting for those who don’t give up.</span>
            </p>
          </div>
        </div>

        {/* ✅ Other Blog Cards */}
        <h2 className="text-3xl font-semibold mt-16 mb-6 text-purple-600 dark:text-purple-400 text-center">
          📚 My Blogs
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition rounded-xl p-5 shadow-md bg-gray-100 dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {blog.description}
              </p>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-4 px-4 py-2 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Modal Popup for Full Blog */}
      <AnimatePresence>
  {selectedBlog && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.7, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.7, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-lg relative text-black dark:text-white"
      >
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
          onClick={() => setSelectedBlog(null)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">
          {selectedBlog.title}
        </h2>
        <p className="text-base leading-relaxed whitespace-pre-line">
          {selectedBlog.full}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
