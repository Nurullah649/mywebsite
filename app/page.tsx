"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Trophy, ArrowRight, Cpu, Code2, Globe } from "lucide-react";
import DinoGame from "@/components/DinoGame";

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
  // CV'nizdeki en güçlü yetenekler
  const skills = [
    "Python", "Yapay Zeka (AI)", "RAG",
    "Computer Vision", "React Native", "Electron.js", "Next.js",
    "PyTorch", "SLAM", "IoT", "Docker"
  ];

  // Ana sayfada görünecek vitrin projeler
  const featuredProjects = [
    {
      title: "Otonom İHA Vision",
      desc: "Teknofest finalisti proje. YOLOv10 ve ROS kullanılarak iniş alanı tespiti ve otonom karar verme sistemi.",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      tags: ["YOLO", "ROS", "Python"]
    },
    {
      title: "Hukuk AI Asistanı",
      desc: "RAG mimarisi ile geliştirilmiş, Llama 3 tabanlı ve yüksek doğruluklu hukuk chatbotu.",
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
      tags: ["RAG", "LLM", "Vector DB"]
    },
    {
      title: "NPC-AI ERP",
      desc: "Electron.js ile geliştirilmiş, çevrimdışı çalışabilen ve lisanslama sistemine sahip masaüstü ERP yazılımı.",
      icon: <Code2 className="h-6 w-6 text-orange-500" />,
      tags: ["Electron", "React", "SQLite"]
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center p-4">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-indigo-50 to-fuchsia-50 dark:from-teal-950/30 dark:via-indigo-950/30 dark:to-fuchsia-950/30 animate-background-pan" style={{ backgroundSize: '400% 400%' }} />

        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="container grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Sol Taraf: Metin ve Butonlar */}
          <motion.div variants={itemFadeInUp} className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div>
              <Badge variant="outline" className="mb-4 border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-1">
                Yapay Zeka Mühendisi & Full-Stack Geliştirici
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-fuchsia-600 dark:from-teal-400 dark:via-indigo-400 dark:to-fuchsia-400 leading-tight">
                Merhaba, ben <br /> Nurullah Kurnaz
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Derin öğrenme modelleri, otonom sistemler (ROS) ve modern web teknolojileriyle karmaşık problemlere yenilikçi çözümler üretiyorum.
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-4 justify-center lg:justify-start">
               <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-teal-600 transition-colors">
                  <Github className="h-6 w-6" />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
               </a>
               <a href="mailto:nurullahkurnaz47@gmail.com" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-red-500 transition-colors">
                  <Mail className="h-6 w-6" />
               </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white border-0 shadow-lg" asChild>
                <a href="/projects">Projelerimi İncele <ArrowRight className="ml-2 h-4 w-4"/></a>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <a href="/contact">İletişime Geç</a>
              </Button>
            </div>
          </motion.div>

          {/* Sağ Taraf: Dino Game (Eğlenceli Dokunuş) */}
          <motion.div variants={itemFadeInUp} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-background rounded-lg border shadow-xl overflow-hidden">
                    <DinoGame />
                </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto p-4 md:p-8 space-y-24 pb-20">

        {/* --- BAŞARILAR SECTION (TEKNOFEST) --- */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy className="h-32 w-32" />
                </div>
                <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white border-0">Başarı & Ödül</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknofest 2024 Finalisti</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                    "Ulaşımda Yapay Zeka" kategorisinde geliştirdiğimiz otonom İHA projesi ile finale kalarak <strong>Mansiyon Ödülü</strong> almaya hak kazandık.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900" asChild>
                    <a href="/projects">Detayları Gör</a>
                </Button>
            </div>
        </motion.section>

        {/* --- ÖNE ÇIKAN PROJELER --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Öne Çıkan Projeler</h2>
            <p className="text-muted-foreground">Son zamanlarda üzerinde çalıştığım bazı heyecan verici işler.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
               >
                 <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-teal-500">
                    <CardHeader>
                        <div className="mb-2 p-2 bg-slate-100 dark:bg-slate-800 w-fit rounded-lg">
                            {project.icon}
                        </div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.desc}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </CardFooter>
                 </Card>
               </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="ghost" className="text-teal-600" asChild>
                <a href="/projects">Tüm Projeleri Gör <ArrowRight className="ml-2 h-4 w-4"/></a>
            </Button>
          </div>
        </section>

        {/* --- YETENEKLER SECTION --- */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Teknik Yetenekler</h2>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div key={skill} variants={itemFadeInUp}>
                <Badge className="text-base px-5 py-2 rounded-full cursor-default hover:scale-105 transition-transform bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
};

export default HomePage;