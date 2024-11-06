"use client"
import Link from 'next/link';
import { projects } from '@/config/projects';
import BackButton from '@/components/layout/BackButton';

export default function Home() {
  return (
    <div className="p-8 bg-neon-paleBlue min-h-screen">
      <header className="mb-4">
        {/* Positioning for the Back Button */}
        <div className="relative mb-4 flex items-start">
          <BackButton className="absolute top-4 left-16 text-neon-hotPink font-medium text-sm" />
        </div>
        <h1 className="text-4xl font-bold text-neon-hotPink text-center">Projects</h1>
      </header>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-300 flex justify-between font-bold text-slate-700">
          <span className="w-1/3">Project Name</span>
          <span className="w-1/2">Description</span>
          <span className="w-1/6 text-right">Link</span>
        </div>

        {projects.map((project) => (
          <div 
            key={project.slug} 
            className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100 transition-colors duration-150"
          >
            <Link href={`/projects/${project.slug}`} className="w-1/3 font-semibold text-neon-hotPink flex items-center">
              📁 {project.name}
            </Link>
            <span className="w-1/2 text-slate-700">
              {project.description}
            </span>
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="text-blue-500 underline w-1/6 text-right"
            >
              GitHub
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}