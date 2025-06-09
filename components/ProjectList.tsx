"use client"; // Bu bileşenin bir istemci bileşeni olduğunu belirtir

import { motion } from "framer-motion";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lightbulb } from "lucide-react";
import { createClient } from "next-sanity";

// Resim URL'leri için yardımcı fonksiyonlar
// Bu client kurulumu sadece resim URL'leri için kullanılır,
// veri çekme işlemi sunucu tarafında yapılır.
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-06-07",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Proje tipi
interface Project {
  _id?: string;
  name: string;
  description: string;
  image?: SanityImageSource | string;
  tags?: string[];
  githubLink?: string | null;
  liveLink?: string | null;
  status?: string;
  awards?: string[];
}

// Bileşenin prop'u olarak projeleri alacağız
interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project._id || project.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="flex"
        >
          <Card className="flex flex-col w-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {project.image && (
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={typeof project.image === 'string' ? project.image : urlFor(project.image).width(600).height(400).url()}
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
        </motion.div>
      ))}
    </div>
  );
}
