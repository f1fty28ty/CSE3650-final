import Link from 'next/link';
//import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project",
    image: "/projects/project1.png", // Add your image path
    tags: ["React", "Next.js", "Tailwind"],
    link: "/projects/project-one"
  },
  // Add more projects as needed
];

export default function ProjectsShowcase() {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Link href={project.link} key={project.id}
                className="group block">
            <div className="border rounded-lg overflow-hidden transition-all duration-300 
                          hover:shadow-lg hover:scale-[1.02]">
              <div className="relative h-48 bg-gray-100">
                {/* Uncomment when you have images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} 
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 