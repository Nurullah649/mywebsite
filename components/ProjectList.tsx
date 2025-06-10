// components/ProjectList.tsx

// 'use client' ve framer-motion'ı geçici olarak kaldırıyoruz.
import Image from "next/image";
import Link from "next/link";

// Proje verilerinin tipini daha belirgin hale getirelim.
interface Project {
  slug: string;
  name: string;
  imageUrl: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Animasyon mantığı olmadan proje kartlarını doğrudan render ediyoruz. */}
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="block h-full"
        >
          <div className="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
