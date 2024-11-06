// app/projects/[slug]/page.tsx

import { projects } from '@/config/projects';
import { getRepoContents } from '@/lib/github';
import { marked } from 'marked';
import BackButton from '@/components/layout/BackButton';


interface RepoFile {
  type: 'dir' | 'file';
  name: string;
  download_url?: string;
  path?: string;
  html_url?: string;
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Await if params is a Promise

  // Now use `resolvedParams.slug` instead of `params.slug`
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) {
    // Redirect to 404 if the project is not found
    return <div>Project not found.</div>;
  }

  // Fetch files and README content for the project on the server
  const repoName = project.link.split('/').pop()!;
  let files: RepoFile[] = [];
  let readmeContent = "";

  try {
    const contents: RepoFile[] = await getRepoContents(repoName);
    files = contents.sort((a, b) => {
      if (a.type === b.type) return a.name.localeCompare(b.name);
      return a.type === 'dir' ? -1 : 1;
    });

    const readmeFile = contents.find((file) => file.name.toLowerCase() === "readme.md");
    if (readmeFile && readmeFile.download_url) {
      const response = await fetch(readmeFile.download_url);
      const readmeText = await response.text();
      readmeContent = marked(readmeText) as string;
    }
  } catch (error) {
    console.error("Error fetching repo contents:", error);
  }

  return (
    <div className="p-8 bg-neon-paleBlue min-h-screen">
      <div className="flex justify-center mb-4">
        <BackButton className="text-neon-hotPink font-medium text-sm" />
      </div>

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
        <h2 className="text-2xl font-semibold text-neon-hotPink mb-4">Repository Files</h2>
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
      </div>

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

// Define generateStaticParams to export all possible slugs for static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}