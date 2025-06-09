// app/page.tsx
"use client"; // Animasyonlar için bu gerekli

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// Tekrarlanan animasyonlar için merkezi variant'lar
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HomePage = () => {
  const skills = [
    "Python", "C#", "C++", "SQL",
    "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn",
    "LLM", "Git", "Linux"
  ];

  const projects = [
    {
      name: "Ulaşımda Yapay Zeka (Teknofest)",
      description: "Teknofest Ulaşımda Yapay Zeka yarışması projesi. Drone videolarından iniş alanları, araçlar ve insanların tespiti ve bir aracın sadece videolara dayanarak konumunun tahmin edilmesi.",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Tespiti", "Lokalizasyon"],
      link: "https://github.com/Nurullah649/Teknofest-Ulasimda-Yapay-Zeka"
    },
    {
      name: "Hava Savunma Sistemleri (Teknofest)",
      description: "Teknofest Hava Savunma Sistemleri Yarışması. Yapay Zeka destekli nesne tespit, takip ve imha",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Tespiti", "Nesne Takibi","Hedef İmha"],
      link: "https://github.com/Nurullah649/NPC_AI_HavaSavunma"
    },
     {
    name: "Kişisel Web Sitesi (Bu Site)",
    description: "Next.js, TypeScript ve Tailwind CSS (Shadcn/UI ile) kullanılarak oluşturulmuş kişisel portfolyo web sitesi. Hakkımda, projelerim ve iletişim bilgilerimi içerir.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    link: "https://github.com/Nurullah649/mywebsite"
  },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      {/* Hero Section */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 py-20 min-h-[calc(100vh-4rem)] hero-bg"
      >
        <motion.div variants={itemFadeInUp} className="md:w-2/3 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animated-gradient-text">
            Merhaba, ben Nurullah Kurnaz
          </h1>
          <p className="text-xl text-muted-foreground">
            Konya Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yapay zeka, görüntü işleme, robotik kodlama ve dil modelleri üzerine çalışıyorum. Teknofest gibi yarışmalarda aktif rol alıyor, yenilikçi çözümler geliştirmeye odaklanıyorum.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="/projects">Projelerimi Gör</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">İletişime Geç</a>
            </Button>
          </div>
        </motion.div>
        <motion.div variants={itemFadeInUp} className="md:w-1/3 flex justify-center">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary animate-float">
            <AvatarImage src="https://github.com/Nurullah649.png" alt="Nurullah Kurnaz" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.section>

      {/* Sections with scroll animations */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-secondary rounded-lg p-8"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Kısaca Hakkımda</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          Yapay zeka eğitimleri alıyor, Teknofest yarışması için görüntü işleme, nesne tespiti, nesne takibi ve robotik kodlama gibi alanlarda kendimi geliştiriyorum. Oyun ve mobil programlama konusunda temel deneyimlerim bulunmakta. Çalıştığım şirket aracılığıyla dil modelleri (GPT, LLaMA, Mistral vb.) üzerine çalışmalara katılıyorum.
        </p>
        <div className="text-center mt-6">
            <Button variant="link" asChild>
                <a href="/about">Daha Fazla Bilgi</a>
            </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-12"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Yeteneklerim</h2>
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={itemFadeInUp}>
              <Badge variant="default" className="text-sm px-4 py-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-12"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Öne Çıkan Projelerim</h2>
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project.name} variants={itemFadeInUp}>
              <Card className="flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="h-20 overflow-hidden">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      GitHub'da Gör <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
            <Button variant="outline" asChild>
                <a href="/projects">Tüm Projelerim</a>
            </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-muted rounded-lg p-8"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">İletişim</h2>
        <div className="max-w-md mx-auto space-y-4 text-center">
            <p className="text-lg">
                Benimle çalışmak veya bir proje hakkında konuşmak isterseniz, lütfen iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex justify-center space-x-4">
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="mailto:nurullahkurnaz47@gmail.com" aria-label="Email">
                  <Button variant="ghost" size="icon"><Mail className="h-6 w-6" /></Button>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Button variant="ghost" size="icon"><Github className="h-6 w-6" /></Button>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://www.linkedin.com/in/nurullah-kurnaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                   <Button variant="ghost" size="icon"><Linkedin className="h-6 w-6" /></Button>
                </motion.a>
            </div>
            <Button asChild className="mt-4">
                <a href="/contact">İletişim Formu</a>
            </Button>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;
