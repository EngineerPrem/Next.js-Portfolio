// components/ProjectCard.tsx
'use client';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Props {
  title: string;
  image: string;
  github: string;
  live: string;
  role: string;
  level: string;
  description: string;
}

export default function ProjectCard({ title, image, github, live, role, level, description }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
      <img src={image} alt={title} className="rounded-md w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <div className="flex gap-2 text-sm text-white mb-2">
        <span className="bg-blue-600 px-2 py-1 rounded-full">{role}</span>
        <span className="bg-green-600 px-2 py-1 rounded-full">{level}</span>
      </div>

      <div className="flex justify-between text-sm">
        <a href={github} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
        <a href={live} target="_blank" className="text-green-500 hover:underline">Live Site</a>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-3 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        View Details
      </button>

      {showModal && (
        <ProjectModal
          title={title}
          description={description}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
