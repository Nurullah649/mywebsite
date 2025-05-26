// app/projects/page.tsx
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lightbulb } from "lucide-react";

// GitHub profilinizden ve CV'nizden alınan projeler
// Bu listeyi kendi projelerinizle detaylı bir şekilde güncelleyin.
const projects = [
  {
    name: "Ulaşımda Yapay Zeka (Teknofest Projesi)",
    description: "Teknofest Ulaşımda Yapay Zeka yarışması kapsamında geliştirilen bu proje, drone ile çekilen videolardan iniş alanları, araçlar ve insanların tespit edilmesini ve bir aracın sadece videolara dayanarak konumunun tahmin edilmesini amaçlamaktadır. Görüntü işleme ve derin öğrenme teknikleri kullanılmıştır.",
    tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Tespiti", "Lokalizasyon", "Derin Öğrenme", "Python", "OpenCV", "PyTorch/TensorFlow"],
    githubLink: "https://github.com/Nurullah649/Teknofest-Ulasimda-Yapay-Zeka", // Güncelleyin
    liveLink: null, // Varsa canlı demo linki
    image: "https://placehold.co/600x400/3b82f6/white?text=Ulaşımda+Yapay+Zeka", // Proje görseli ekleyin
    status: "Tamamlandı",
    awards: ["Teknofest Yenilikçi Yazılım Mansiyon Ödülü", "Teknofest Finalisti"]
  },
  {
    name: "Hukuk Alanında Chatbot (LLM Projesi)",
    description: "ICED bünyesinde, hukuk alanında kullanılmak üzere geliştirilen bir chatbot projesi. Bu projede, büyük dil modellerinin (LLM) eğitimi ve optimizasyonu üzerine çalışılmaktadır. Amaç, hukuki sorulara doğru ve hızlı yanıtlar verebilen bir yapay zeka asistanı oluşturmaktır.",
    tags: ["Yapay Zeka", "Doğal Dil İşleme", "LLM", "Chatbot", "Python"],
    liveLink: "https://icedlaw.com/",
    image: "https://icedlaw.com/images/iced%20avukat%20as%20logo%20.png",
    status: "Geliştiriliyor",
  },
  {
    name: "Pose Estimation Analiz Sistemi",
    description: "Scove System'deki stajım sırasında, pose estimation (duruş tahmini) için geliştirilen analiz sisteminin geliştirilmesi ve performansının artırılması üzerine çalıştım. Bu sistem, insan vücudu eklem noktalarını tespit ederek hareket analizi yapmaktadır.",
    tags: ["Görüntü İşleme", "Pose Estimation", "Performans Optimizasyonu", "Python"],
    liveLink: null,
    image: "https://placehold.co/600x400/8b5cf6/white?text=Pose+Estimation",
    status: "Tamamlandı (Staj Projesi)",
  },
  {
      name: "Hava Savunma Sistemleri (Teknofest)",
      description: "Teknofest Hava Savunma Sistemleri Yarışması. Yapay Zeka destekli nesne tespit, takip ve imha",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Tespiti", "Nesne Takibi","Hedef İmha"],
      githubLink:: "https://github.com/Nurullah649/NPC_AI_HavaSavunma", // Örnek link, güncellenmeli
      image: "https://placehold.co/600x400/f97316/white?text=Hava+Savunma+Sistemleri",
      status: "Geliştiriliyor",
    },

   {
    name: "Kişisel Web Sitesi (Bu Site)",
    description: "Next.js, TypeScript ve Tailwind CSS (Shadcn/UI ile) kullanılarak oluşturulmuş kişisel portfolyo web sitesi. Hakkımda, projelerim ve iletişim bilgilerimi içerir.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Portfolyo"],
    githubLink: "https://github.com/Nurullah649/mywebsite", // Güncelleyin
    liveLink: "https://nurullahkurnaz.dev", // Yayınladıktan sonraki adresiniz
    image: "https://placehold.co/600x400/f97316/white?text=Kişisel+Web+Sitesi",
    status: "Tamamlandı",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projelerim</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Yapay zeka, web geliştirme ve daha fazlası üzerine çalıştığım projeler.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image || `https://placehold.co/600x400/gray/white?text=${encodeURIComponent(project.name)}`}
                alt={project.name}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // sonsuz döngüyü engelle
                  target.src = `https://placehold.co/600x400/gray/white?text=${encodeURIComponent(project.name)}`;
                }}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.name}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground pt-1">
                <Lightbulb className="mr-1 h-4 w-4 text-yellow-500" />
                <span>{project.status}</span>
              </div>
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
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-muted/50">
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

export default ProjectsPage;
