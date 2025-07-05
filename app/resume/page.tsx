'use client'


import { motion } from "framer-motion";
import Link from "next/link";
import { Download, GraduationCap, Mail } from "lucide-react";

// Wrap Link with motion
const MotionLink = motion(Link);

export default function ResumePage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 🧪 Internship Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">🧪 Internship Experience</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>LearnX (Online) – Full Stack Developer (3 Months)</strong><br />
              Developed authentication and CRUD operations using the MERN stack.<br />
              <em>Project:</em> E-Commerce Website
            </li>
            <li>
              <strong>NSIC – Python Internship (1 Week)</strong><br />
              Learned basic Python scripting, control structures, and logic building.
            </li>
            <li>
              <strong>Round’s Edge Technologies – Frontend Developer (2 Months)</strong><br />
              Built responsive UI using React.js and Tailwind CSS for live company projects.
            </li>
          </ul>
        </motion.section>

        {/* 🧠 Workshops Attended */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">🧠 Workshops Attended</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Park College of Engineering – Python Workshop (1 Day)</strong><br />
              Explored Python syntax, data types, and small hands-on projects.
            </li>
            <li>
              <strong>KPR College – Cyber Threats Workshop (2 Days)</strong><br />
              Learned fundamentals of cybersecurity, online threats, and digital awareness.
            </li>
          </ul>
        </motion.section>

        {/* 💼 Leadership & Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">💼 Leadership & Work Experience</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><strong>NSS Volunteer</strong><br />7-day rural camp: cleanliness, time management, team coordination</li>
            <li><strong>Tech Coordinator – AICTE ATAL FDP</strong><br />Managed live sessions, tech setup, real-time support</li>
            <li><strong>Event Coordinator – Idea Sphere</strong><br />Handled logistics and volunteer communication</li>
            <li><strong>Placement Coordinator</strong><br />Assisted in organizing campus recruitment drives</li>
            <li><strong>Overall College Coordinator</strong><br />Led large-scale events across departments</li>
          </ul>
        </motion.section>

        {/* 📁 Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">📁 Projects</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Cloud-Based AI Chatbot</strong><br />
              Tech: HTML, CSS, JavaScript – Simple Q&A interface
            </li>
            <li>
              <strong>E-Commerce Website</strong><br />
              MERN Stack, Tailwind CSS – CRUD, auth, filters, listings
            </li>
            <li>
              <strong>Snack Ordering App</strong><br />
              Java, Kotlin – Android system for canteen orders
            </li>
            <li>
              <strong>Contact Form</strong><br />
              Next.js, React Hook Form, Zod – Real-time form validation
            </li>
          </ul>
        </motion.section>

        {/* 🛠 Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">🛠 Technical Skills</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Frontend:</strong> React.js (Intermediate), Next.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Python (Basics), Java (Basics), SQL (Intermediate)</li>
            <li><strong>Form Handling:</strong> React Hook Form, Zod Validation</li>
            <li><strong>Tools:</strong> Git, Visual Studio Code</li>
          </ul>
        </motion.section>

        {/* 🌐 Languages Known */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">🌐 Languages Known</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>English – Professional Proficiency</li>
            <li>Tamil – Native</li>
            <li>Telungu – Speaking</li>
          </ul>
        </motion.section>

        {/* 📚 Learning Platforms Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">📚 Learning Platforms Used</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>NPTEL – Data Analytics with Python</li>
            <li>Coursera – Frontend Basics & Responsive Design</li>
            <li>YouTube – React.js, Next.js, Framer Motion tutorials</li>
            <li>W3Schools & GeeksForGeeks – Practice exercises</li>
          </ul>
        </motion.section>

        {/* 🧰 Additional Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">🧰 Additional Skills</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>MS Word, Canva Design</li>
            <li>Leadership & Public Speaking</li>
            <li>Team Collaboration</li>
            <li>Patience & Consistent Learning</li>
            <li>Step-by-Step Visual Learning Style</li>
          </ul>
        </motion.section>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="/Prem.pdf"
    download
    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-5 py-3 rounded-xl transition shadow"
  >
    <Download size={20} />
    Download Resume
  </motion.a>

  <MotionLink
    href="/certificate"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white px-5 py-3 rounded-xl transition shadow"
  >
    <GraduationCap size={20} />
    Certificates
  </MotionLink>

  <MotionLink
    href="/contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white px-5 py-3 rounded-xl transition shadow"
  >
    <Mail size={20} />
    Get in Touch
  </MotionLink>
</div>

    </div>
  )
}
