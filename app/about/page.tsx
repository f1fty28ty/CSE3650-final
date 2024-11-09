'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neon-paleBlue p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => window.location.replace(window.location.origin)}
          className="mb-6 px-4 py-2 text-neon-hotPink hover:text-neon-pink 
                     flex items-center gap-2 transition-colors duration-300"
        >
          <span>←</span> Home
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-neon-hotPink mb-8">About Me</h1>
          
          <div className="space-y-6 text-slate-700">
            <p>
              Hi! I am Miles Silveria, an aspiring Computer Systems professional with a strong background 
              in computer science, cybersecurity, and project management. With over three years of hands-on 
              experience, I excel at collaborating with diverse teams, communicating effectively, and managing 
              complex projects in fast-paced environments.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Freestyle Snowboard Coach</h3>
                  <p className="text-slate-700">
                    <span className="italic">Big Bear Mountain Resort | Oct 2022 - Present</span>
                    <br />
                    Utilized AASI teaching standards to create a safe and enjoyable experience for snowboarders.
                    Taught freestyle techniques, managed groups effectively, and developed strong interpersonal skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Education</h2>
              <p>
                <span className="font-semibold">CSU San Bernardino</span> — BA in Computer Systems (Expected Jun 2026)
                <br />
                <span className="font-semibold">CU Boulder</span> — Coursework in Computer Science (Sep 2022 - Jun 2023)
                <br />
                <span className="font-semibold">Long Beach CC</span> — General Studies (Sep 2023 - Jun 2024)
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Certifications</h2>
              <ul className="list-disc list-inside">
                <li>PSIA-AASI Level 3 Snowboard Instructor (Sep 2024 - Present)</li>
                <li>RHEL System Administrator 1 (Sep 2024 - Present)</li>
                <li>Boy Scouts of America Life Scout (Mar 2009 - Jan 2017)</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Blockchain Implementation in C++</h3>
                  <p>
                    Developed a foundational blockchain application with SHA-256 hashing, nonce-based mining, 
                    and transaction handling to understand blockchain principles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hybrid Cloud NFS Setup</h3>
                  <p>
                    Simulated distributed storage using Docker and Kubernetes, ensuring redundancy and high availability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Responsive Portfolio Website</h3>
                  <p>
                    Built a portfolio site using React and TypeScript, focusing on component-based design and modern UI.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Text-Based RPG in C++</h3>
                  <p>
                    Created a console-based RPG with leveling, in-game currency, and randomized encounters for a dynamic gameplay experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}