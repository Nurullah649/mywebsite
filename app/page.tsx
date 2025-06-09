"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import DinoGame from "@/components/DinoGame"; // Dino oyununu import ediyoruz

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
  const skills = [
    "Python", "C#", "C++", "SQL",
    "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn",
    "LLM", "Next.js", "React", "Git"
  ];

  return (
    <div className="overflow-x-hidden"> {/* Yatay taşmaları engellemek için */}
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center p-4">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-fuchsia-50 to-blue-50 dark:from-teal-900/20 dark:via-fuchsia-900/20 dark:to-blue-900/20 animate-background-pan" style={{ backgroundSize: '400% 400%' }} />

        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="container grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemFadeInUp} className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-fuchsia-600 dark:from-teal-400 dark:to-fuchsia-400">
              Merhaba, ben Nurullah Kurnaz
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Yapay zeka ve robotik teknolojileriyle yenilikçi çözümler üreten bir bilgisayar mühendisliği öğrencisiyim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600">
                <a href="/projects">Projelerimi Gör</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">İletişime Geç</a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemFadeInUp}>
            <DinoGame />
          </motion.div>
        </motion.div>
      </section>

      {/* Diğer section'lar */}
      <div className="container mx-auto p-4 md:p-8 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Yeteneklerim</h2>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill} variants={itemFadeInUp}>
                <Badge className="text-base px-5 py-2 rounded-lg cursor-pointer hover:scale-110 transition-transform bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-200 border-fuchsia-200 dark:border-fuchsia-800">
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
