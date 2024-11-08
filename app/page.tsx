'use client';
import Link from 'next/link';
import { projects } from '@/config/projects';


export default function Home() {
  return (
    <div className="snap-container h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="snap-section flex items-center justify-center min-h-screen bg-neon-paleBlue">
        <div className="text-center p-8">
          <h1 className="text-5xl font-bold text-neon-hotPink mb-6">
            Causality Computing
          </h1>
          <p className="text-xl text-slate-700">
            visualize your thoughts
            test
          </p>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project, index) => (
        <section
          key={project.slug}
          className="snap-section min-h-screen flex items-center bg-neon-paleBlue"
        >
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-neon-cyan/30"></div>
              <span className="text-neon-hotPink font-medium">Project {index + 1}</span>
              <div className="flex-1 h-px bg-neon-cyan/30"></div>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-neon-hotPink mb-4">
                  {project.name}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <Link 
                href={`/projects/${project.slug}`}
                className="px-6 py-3 bg-neon-hotPink text-white rounded-lg
                         hover:bg-neon-pink transition-colors duration-300
                         shadow-lg hover:shadow-neon-cyan/20"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}