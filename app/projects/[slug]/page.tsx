"use client"
import { useParams } from 'next/navigation';
//import Link from 'next/link';
import { projects } from '@/config/projects';
import { useEffect, useState } from 'react';
import { getRepoContents } from '@/lib/github';
import { marked } from 'marked';
import BackButton from '@/components/layout/BackButton';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [files, setFiles] = useState([]);
  const [readmeContent, setReadmeContent] = useState("");
  const [loading, setLoading] = useState(true);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      const fetchFilesAndReadme = async () => {
        setLoading(true);
        const repoName = project.link.split('/').pop();
        
        try {
          const contents = await getRepoContents(repoName);
          const sortedContents = contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'dir' ? -1 : 1;
          });
          setFiles(sortedContents);

          const readmeFile = contents.find((file) => file.name.toLowerCase() === "readme.md");
          if (readmeFile) {
            const response = await fetch(readmeFile.download_url);
            const readmeText = await response.text();
            setReadmeContent(marked(readmeText));
          }
        } catch (error) {
          console.error("Error fetching repo contents:", error);
          setFiles([]);
        }
        setLoading(false);
      };
      fetchFilesAndReadme();
    }
  }, [project]);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="p-8 bg-neon-paleBlue min-h-screen">
      {/* Centered Back Button */}
      <div className="flex justify-center mb-4">
        <BackButton className="text-neon-hotPink font-medium text-sm" />
      </div>

      {/* Project Info */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-neon-hotPink">{project.name}</h1>
          <button 
            onClick={() => window.open(project.link, "_blank")} 
            className="text-blue-500 underline"
          >
            View on GitHub
          </button>
        </header>
        
        <p className="text-lg text-slate-700 mb-4">{project.description}</p>
      </div>

      {/* Repository Files */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Repository Files</h2>
        {loading ? (
          <p>Loading files...</p>
        ) : (
          <ul className="list-none space-y-2">
            {files.map((file) => (
              <li key={file.path} className="flex items-center gap-2 text-slate-700">
                {file.type === 'dir' ? '📁' : '📄'}{' '}
                <a 
                  href={file.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-lg"
                >
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* README Content */}
      {readmeContent && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">README</h2>
          <div 
            className="prose max-w-none text-slate-700" 
            dangerouslySetInnerHTML={{ __html: readmeContent }}
          />
        </div>
      )}
    </div>
  );
}