// components/ProjectList.tsx
'use client';

// Gerekli animasyon modüllerini doğrudan bu dosyaya aktarıyoruz.
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Proje verilerinin tipini daha belirgin hale getirelim.
interface Project {
  slug: string;
  name: string;
  imageUrl: string;
}

// Animasyon varyantlarını doğrudan bu bileşenin içinde tanımlıyoruz.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Harici AnimationWrapper bileşeni yerine doğrudan motion.div kullanıyoruz. */}
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full" // motion.div'in de Link gibi tam yüksekliği kaplamasını sağlıyoruz.
        >
          <Link href={`/projects/${project.slug}`} className="block h-full">
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
        </motion.div>
      ))}
    </div>
  );
}
