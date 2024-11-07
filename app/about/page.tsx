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
              in computer science, cybersecurity, and client-focused project management. With 3 years 
              of hands-on experience, I am skilled at adapting to fast-paced environments and committed 
              to leveraging technology for effective problem-solving.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside">
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <ul className="list-disc list-inside">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Backend & DevOps</h3>
                  <ul className="list-disc list-inside">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Linux</li>
                  </ul>
                </div>
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                  <ul className="list-disc list-inside">
                    <li>Git</li>
                    <li>VirtualBox</li>
                    <li>Visual Studio</li>
                  </ul>
                </div>
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Operating Systems</h3>
                  <ul className="list-disc list-inside">
                    <li>Linux</li>
                    <li>macOS</li>
                    <li>Windows</li>
                  </ul>
                </div>
                <div className="p-4 bg-neon-paleBlue rounded-lg">
                  <h3 className="font-semibold mb-2">Scripting & Documentation</h3>
                  <ul className="list-disc list-inside">
                    <li>Markdown</li>
                    <li>Bash</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Portfolio Website</h3>
                  <p>
                    Designed and built a personal portfolio website using React, Next.js, TypeScript, and Tailwind CSS to showcase projects and technical skills. This website emphasizes a responsive and visually appealing UI. 
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mock Hybrid Cloud NFS Setup</h3>
                  <p>
                    Developed a mock hybrid cloud setup using Docker and Kubernetes for distributed storage, 
                    demonstrating redundancy and self-healing capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mock Blockchain</h3>
                  <p>
                    Built a foundational blockchain in C++ implementing key features like transaction management, 
                    block mining, and chain validation to explore cryptographic security principles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Text-Based RPG</h3>
                  <p>
                    Collaborated on a console-based RPG in C++ with in-game currency, progression, and item acquisition, 
                    offering a multi-level player experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Professional Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Freestyle Snowboard Coach</h3>
                  <p className="text-slate-700">
                    <span className="italic">Big Bear Mountain Resort | Oct 2022 - Present</span>
                    <br />
                    Taught snowboard techniques while ensuring safety and enjoyment for athletes. Developed 
                    group management skills within a fast-paced environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Life Scout</h3>
                  <p className="text-slate-700">
                    <span className="italic">Boy Scouts of America | Mar 2009 - Jan 2017</span>
                    <br />
                    Progressed to Life Scout rank, leading various initiatives and participating in 
                    community-focused activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Education</h2>
              <p>
                <span className="font-semibold">CSU San Bernardino</span> — BA in Computer Systems (Expected Jun 2024)
                <br />
                <span className="font-semibold">CU Boulder</span> — Coursework in Computer Science (Sep 2022 - Jun 2023)
                <br />
                <span className="font-semibold">Long Beach CC</span> — General Studies (Sep 2023 - Jun 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}