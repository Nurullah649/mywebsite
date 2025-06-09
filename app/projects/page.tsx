// app/projects/page.tsx
import { createClient } from "next-sanity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lightbulb } from "lucide-react";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity Client Kurulumu
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false, // development'ta false olması daha iyi
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Proje verisi için TypeScript tipi
interface Project {
  _id: string;
  name: string;
  description: string;
  image?: any;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  status?: string;
  awards?: string[];
}

// Sanity'den verileri çekmek için fonksiyon
async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
  return projects;
}

// Sayfa artık bir async component
export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projelerim</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Yapay zeka, web geliştirme ve daha fazlası üzerine çalıştığım projeler.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project._id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
             {project.image && (
                <div className="aspect-w-16 aspect-h-9">
                    <img
                    src={urlFor(project.image).width(600).height(400).url()}
                    alt={project.name}
                    className="object-cover w-full h-full"
                    />
                </div>
              )}
            <CardHeader>
              <CardTitle className="text-2xl">{project.name}</CardTitle>
              {project.status && (
                <div className="flex items-center text-sm text-muted-foreground pt-1">
                  <Lightbulb className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>{project.status}</span>
                </div>
              )}
              {project.awards && project.awards.length > 0 && (
                <div className="pt-2">
                    {project.awards.map(award => (
                        <Badge key={award} variant="destructive" className="mr-1 mb-1">{award}</Badge>
                    ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed h-24 overflow-y-auto">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-muted/50 mt-auto">
              {project.githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Canlı Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
                Daha fazla projem için GitHub profilimi ziyaret edebilirsiniz.
            </p>
            <Button variant="default" className="mt-4" asChild>
                <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub Profilim
                </a>
            </Button>
        </div>
    </div>
  );
};

// Bu satırı ekleyerek sitenin her istekte güncel verileri çekmesini sağlayabilirsiniz.
export const revalidate = 10; // Her 10 saniyede bir verileri yeniden çek