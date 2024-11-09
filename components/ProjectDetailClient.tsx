"use client"
import React from 'react';
import { getRepoContents } from '@/lib/github';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import BackButton from './layout/BackButton';

interface RepoFile {
  type: 'dir' | 'file';
  name: string;
  download_url?: string;
  path?: string;
  html_url?: string;
}

interface ProjectDetailClientProps {
  project: {
    name: string;
    description: string;
    link: string;
  };
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({ project }) => {
  const [files, setFiles] = React.useState<RepoFile[]>([]);
  const [readmeContent, setReadmeContent] = React.useState<string>("");

  React.useEffect(() => {
    const repoName = project.link.split('/').pop()!;

    async function fetchRepoData() {
      try {
        const contents: RepoFile[] = await getRepoContents(repoName);
        setFiles(contents.sort((a, b) => {
          if (a.type === b.type) return a.name.localeCompare(b.name);
          return a.type === 'dir' ? -1 : 1;
        }));

        const readmeFile = contents.find((file) => file.name.toLowerCase() === "readme.md");
        if (readmeFile?.download_url) {
          const response = await fetch(readmeFile.download_url);
          const readmeText = await response.text();
          setReadmeContent(readmeText);
        }
      } catch (error) {
        console.error("Error fetching repo contents:", error);
      }
    }

    fetchRepoData();
  }, [project.link]);

  return (
    <>
      <div className="flex justify-center mb-4">
        <BackButton className="text-neon-hotPink font-medium text-sm" />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-neon-hotPink">{project.name}</h1>
          <button onClick={() => window.open(project.link, "_blank")} className="text-blue-500 underline">
            View on GitHub
          </button>
        </header>
        <p className="text-lg text-slate-700 mb-4">{project.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Repository Files</h2>
        <ul className="list-none space-y-2">
          {files.map((file) => (
            <li key={`${file.type}-${file.name}`} className="flex items-center gap-2 text-slate-700">
              {file.type === 'dir' ? '📁' : '📄'}{' '}
              <a href={file.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {readmeContent && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 prose prose-custom max-w-none text-slate-700">
          <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">README</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              a({ href, children, ...props }) {
                return (
                  <a
                    href={href}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
              code({ node, className, children, ...props }) {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-green-200 text-black px-1 rounded" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-green-100 p-4 rounded text-black overflow-x-auto">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
            }}
          >
            {readmeContent}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default ProjectDetailClient;