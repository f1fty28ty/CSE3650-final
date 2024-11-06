export interface Project {
  name: string;
  description: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    name: "nfs-server",
    description: "Mock Hybrid Cloud NFS setup using Docker + Kubernetes",
    link: "https://github.com/f1fty28ty/nfs-server",
    slug: "project-1"
  },
  {
    name: "CSCI1300_Project",
    description: "Text based RPG",
    link: "https://github.com/f1fty28ty/CSCI1300_Project3",
    slug: "project-2"
  },
 {
    name: "CSCI2270_Project",
    description: "Mock Block Chain implementation",
    link: "https://github.com/f1fty28ty/CSCI-2270-Final-Project",
    slug: "project-3"
  }
]; 