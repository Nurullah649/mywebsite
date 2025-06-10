// components/ProjectList.tsx

// Oluşturduğumuz animasyon bileşenini import ediyoruz.
import { AnimationWrapper } from "./AnimationWrapper";
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
      {/* Proje listesini map ile dönerken her bir kartı AnimationWrapper ile sarıyoruz. */}
      {projects.map((project, index) => (
        // `delay` prop'u ile her bir kartın animasyonunu kademeli olarak başlatıyoruz.
        <AnimationWrapper key={project.slug} delay={index * 0.1}>
          <Link href={`/projects/${project.slug}`} className="block h-full">
            {/* Kartın tamamının tıklanabilir olması ve stil tutarlılığı için bazı iyileştirmeler yapıldı. */}
            <div className="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              {/* Görselin kapsayıcısına göre boyutlanması için relative bir parent ekliyoruz */}
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill // `fill` prop'u görselin parent elementini doldurmasını sağlar.
                  className="object-cover" // Görselin orantısını bozmadan alanı kaplamasını sağlar.
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold">{project.name}</h2>
              </div>
            </div>
          </Link>
        </AnimationWrapper>
      ))}
    </div>
  );
}
