"use client";

import { motion } from "framer-motion";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lightbulb, Award } from "lucide-react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-06-07",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

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

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project._id || project.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="flex group"
        >
          <Card className="flex flex-col w-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-400/40 transition-all duration-300 relative">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {project.image && (
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={typeof project.image === 'string' ? project.image : urlFor(project.image).width(600).height(400).url()}
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
            )}
            <CardHeader className="relative">
              <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors duration-300">{project.name}</CardTitle>
              {project.status && (
                <div className="flex items-center text-sm text-muted-foreground pt-1">
                  <Lightbulb className="mr-1.5 h-4 w-4 text-yellow-400" />
                  <span>{project.status}</span>
                </div>
              )}
              {project.awards && project.awards.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.awards.map(award => (
                    <Badge key={award} className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-400/30 text-xs">
                      <Award className="mr-1 h-3 w-3" /> {award}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow relative">
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags?.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-400/20">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t border-border/30 mt-auto relative">
              {project.githubLink && (
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-400" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 text-xs" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
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
