

'use client';

import React, { useState } from 'react';

const projects = [
  {
    title: 'Cloud-based AI Chatbot',
    description: 'An intelligent chatbot powered by AI, deployed on the cloud with real-time responses.',
    live: 'https://dainty-cocada-e4d956.netlify.app/',
    code: 'https://github.com/EngineerPrem/Cloud-base-AI-Chatbot',
    image: '/Cloud Chatbot.gif',
    learnMore: {
      content: (
      <>
        <h2 className="text-purple-600 font-bold text-xl mb-2">Cloud-Based AI Chatbot</h2>
        <span className="text-purple-400 font-semibold">Description:</span> 
        <p>I started this project with only basic knowledge of HTML and CSS. While attending Naan Mudhalvan classes, I slowly learned JavaScript and the fundamentals of chatbot logic. Using AI tools and steady learning, I was able to build a simple web-based chatbot that responds to user queries.</p>
        <span className="text-purple-400 font-semibold">Built With:</span>
        <p> HTML, CSS, JavaScript, Python(flask)</p>
        <span className="text-purple-400 font-semibold">Key Features:</span>
        <ul className="list-disc ml-6">
          <li>Responsive chat interface</li>
          <li>If user asks a known question → chatbot gives a proper answer</li>
          <li>If not matched → it replies “Thank you”</li>
          <li>Fully runs in the browser (no external cloud services)</li>
        </ul>
        <span className="text-purple-400 font-semibold">Challenges Faced:</span>
        <p> Understanding response conditions and making the chatbot feel real without using actual cloud tools.</p>
        <span className="text-purple-400 font-semibold">What I Learned:</span>
        <p> Basics of scripting logic, conditional statements, UI design, and how to simulate smart behavior.</p>
      </>
    ),
    },
  },
  {
    title: 'Snack Ordering App',
    description: 'A simple authentication-based app to login and order your favorite snacks.',
    live: '',
    code: 'https://github.com/EngineerPrem/SnackSquadApp',
    image: '/SnackOrdering.gif',
    learnMore: {
      content: 
    (
      <>
        <h2 className="text-purple-600 font-bold text-xl mb-2">Snack Ordering App</h2>
        <span className="text-purple-400 font-semibold">Description:</span>
        <p> This is not part of my studies — I tried building this project with the help of ChatGPT. I didn’t have any prior knowledge of Android development, but while exploring step-by-step, I surprised myself by completing it successfully. This project made me realize that I can do more than I thought.</p>
        <span className="text-purple-400 font-semibold">Built With:</span>
        <p> Java, Kotlin, Android Studio(Using ChatGPT)</p>
        <span className="text-purple-400 font-semibold">Key Features:</span>
        <ul className="list-disc ml-6">
          <li>User Login & Signup system</li>
          <li>User authentication with confirmation messages</li>
          <li>Order snacks from menu</li>
          <li>Real-time feedback (e.g., “Login Successful”, “Order Placed”)</li>
          <li>Order summary and simulated checkout</li>
        </ul>
        <span className="text-purple-400 font-semibold">Challenges Faced:</span>
        <p> Understanding Android Studio and Kotlin for the first time felt difficult, but I overcame it by asking questions and learning through practice.</p>
        <span className="text-purple-400 font-semibold">What I Learned:</span>
        <p> This project gave me confidence that even without knowing something, I can still build useful apps if I stay patient and ask the right questions. I learned about layouts, UI flow, login systems, and handling user actions.</p>
      </>
    ),
    },
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using Next.js, Tailwind CSS, Framer Motion, and dark mode.',
    live: 'https://your-portfolio-live-link.com',
    code: 'https://github.com/EngineerPrem/Next.js-Portfolio',
    image: '/portfolio.gif',
    learnMore: {
      content: (
      <>
        <h2 className="text-purple-600 font-bold text-xl mb-2">My Portfolio Project</h2>
        <span className="text-purple-400 font-semibold">Description:</span>
        <p> This is my most exciting project. I’m building a complete personal portfolio website from scratch using modern technologies. It showcases my resume, projects, blogs, certificates, and contact details — all in one place. It’s not just a project; it’s my identity on the internet.</p>
        <span className="text-purple-400 font-semibold">Built With:</span>
        <p> Next.js, Tailwind CSS, Zustand, Framer Motion, Zod</p>
        <span className="text-purple-400 font-semibold">Key Features:</span>
        <ul className="list-disc ml-6">
          <li>Clean and responsive design</li>
          <li>Resume, Certificates, Projects, Blog pages</li>
          <li>Reusable components and animations</li>
          <li>Form validations with Zod</li>
          <li>Dark & Light mode toggle</li>
          <li>State management using Zustand</li>
        </ul>
        <span className="text-purple-400 font-semibold">Challenges Faced:</span>
        <p> Structuring pages and making content look balanced. Managing state and validations correctly across components.</p>
        <span className="text-purple-400 font-semibold">What I’m Learning:</span> 
        <p>Design thinking, modern React development, folder structure, UI/UX, animations, and how to build production-level code in a steady way.</p>
      </>
    ),
    },
  },
];

const ProjectCard = ({
  title,
  description,
  live,
  code,
  image,
  onLearnMore,
  onLiveClick,
}: {
  title: string;
  description: string;
  live: string;
  code: string;
  image: string;
  onLearnMore: () => void;
  onLiveClick: (live: string) => void;
}) => {
  return (
    <div className="border-2 border-purple-600 dark:border-purple-500 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{title}</h2>
      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
      <div className="flex flex-wrap gap-4 mt-4 items-center">
        <button
          onClick={() => onLiveClick(live)}
          className="text-blue-600 dark:text-blue-400 underline font-medium"
        >
          Live
        </button>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 underline font-medium"
        >
          GitHub
        </a>
        <button
          onClick={onLearnMore}
          className="ml-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-zinc-900 text-black dark:text-white transition-colors">
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-600">My Projects</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            {...proj}
            onLearnMore={() => {
              setModalContent({ title: proj.title, content: proj.learnMore.content });
              setShowModal(true);
            }}
            onLiveClick={(live) => {
              if (!live) {
                setShowComingSoon(true);
              } else {
                window.open(live, '_blank');
              }
            }}
          />
        ))}
      </div>

      {/* ✅ Learn More Modal */}
      {showModal && modalContent && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-xl shadow-lg overflow-y-auto max-h-[90vh]">
            <div className="text-sm mb-4">{modalContent.content}</div>

            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-red-500">Coming Soon</h2>
            <p className="mb-4">This project’s live preview will be available soon.</p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

