"use client";

import React from "react";
import { getRepoContents } from "@/lib/github";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import BackButton from "./layout/BackButton";

interface RepoFile {
  type: "dir" | "file";
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
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const repoName = project.link.split("/").pop();

    if (!repoName) {
      setError("Invalid repository link.");
      return;
    }

    async function fetchRepoData() {
      const repoName = project.link.split("/").pop();
    
      if (!repoName) {
        setError("Invalid repository link: no repository name found.");
        return;
      }
    
      try {
        const contents: RepoFile[] = await getRepoContents(repoName);
    
        // Handle empty or invalid contents
        if (!contents || contents.length === 0) {
          console.warn("No contents fetched for repository:", repoName);
          setFiles([]); // Fallback to empty
          return;
        }
    
        // Sort and update files
        setFiles(
          contents.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === "dir" ? -1 : 1;
          })
        );
    
        // Check for README file
        const readmeFile = contents.find(
          (file) => file.name.toLowerCase() === "readme.md"
        );
    
        if (readmeFile?.download_url) {
          const response = await fetch(readmeFile.download_url);
          if (!response.ok) {
            console.error("Failed to fetch README file:", response.statusText);
            return;
          }
          const readmeText = await response.text();
          setReadmeContent(readmeText);
        } else {
          console.warn("No README file found.");
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
        setError("Failed to fetch repository data. Please try again later.");
      }
    }

    fetchRepoData();
  }, [project.link]);

  return (
    <>
      <div className="flex justify-center mb-4">
        <BackButton className="text-neon-hotPink font-medium text-sm" />
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

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

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">
          Repository Files
        </h2>
        {files.length > 0 ? (
          <ul className="list-none space-y-2">
            {files.map((file) => (
              <li key={`${file.type}-${file.name}`} className="flex items-center gap-2 text-slate-700">
                {file.type === "dir" ? "📁" : "📄"}{" "}
                <a
                  href={file.html_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-lg"
                >
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500">No files available.</p>
        )}
      </div>

      {readmeContent && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 prose prose-custom max-w-none text-slate-700">
          <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">README</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {readmeContent}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default ProjectDetailClient;