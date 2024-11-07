// app/projects/[slug]/page.tsx

import { projects } from '@/config/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Export the page as an async function to handle the promise
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await to resolve params as a Promise
  const resolvedParams = await params;

  // Now we can use `resolvedParams.slug`
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="p-8 bg-neon-paleBlue min-h-screen">
      <ProjectDetailClient project={project} />
    </div>
  );
}