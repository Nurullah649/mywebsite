"use client";

import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ProjectList } from "@/components/ProjectList";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const staticProjects = {
  tr: [
    {
      name: "SiparisGo (Dijital QR Menü & Sipariş SaaS)",
      description: "Restoranlar için dijital bir sipariş platformu. Gerçek zamanlı sipariş yönetimi, menü özelleştirme için kapsamlı yönetici paneli ve Shopier ödeme altyapısı entegrasyonu.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Shopier API"],
      liveLink: "https://npcengineering.com/products/siparisgo",
      image: "https://placehold.co/600x400/3b82f6/white?text=SiparisGo",
      status: "Geliştiriliyor",
    },
    {
      name: "Cyber Agent (Çok Modelli Otonom Sistem)",
      description: "Karmaşık akıl yürütme ve çok adımlı görev yürütme yeteneğine sahip otonom ajan mimarisi. GLM-4.6v-Flash bilişsel çekirdek görevi görürken, Qwen 2.5 1.5B fonksiyonel yürütme katmanı olarak çalışan \"Beyin-Kas\" ikili model sistemi.",
      tags: ["Python", "Qwen 2.5", "GLM-4.6v-Flash", "Otonom Ajan", "Orkestrasyon", "LLM"],
      image: "https://placehold.co/600x400/10b981/white?text=Cyber+Agent+AI",
      status: "Geliştiriliyor",
    },
    {
      name: "Havacılıkta Yapay Zeka (Teknofest)",
      description: "\"Ulaşımda Yapay Zeka\" yarışması finalisti. Havadan drone görüntülerinden iniş bölgelerini tespit ve araçları gerçek zamanlı takip için özel YOLO modelleri. DPVO ve Native zoom algoritmaları ile otonom navigasyon.",
      tags: ["Python", "YOLOv11", "OpenCV", "PyTorch", "DPVO", "ORB-SLAM"],
      githubLink: "https://github.com/Nurullah649/NPC-AI",
      image: "https://placehold.co/600x400/3b82f6/white?text=Otonom+IHA+Vision",
      status: "Tamamlandı",
      awards: ["Teknofest 2024 Finalist", "Yenilikçi Yazılım Ödülü"],
    },
    {
      name: "Fizik-Bilgilendirilmiş Transformer VIO (TÜBİTAK 2209-A)",
      description: "GPS olmayan ortamlarda kümülatif sapma hatasını minimize etmek için özgün bir Derin Öğrenme yaklaşımı. Transformer tabanlı Encoder-Decoder modeli ile EuRoC testlerinde 0.025m ATE, klasik ORB-SLAM3'ü geride bıraktı.",
      tags: ["PyTorch", "Deep Learning", "Transformer", "VIO", "SLAM", "Sensör Füzyonu"],
      image: "https://placehold.co/600x400/8b5cf6/white?text=Transformer+VIO",
      status: "Devam Ediyor",
    },
    {
      name: "NPC-AI ERP Sistemi",
      description: "Electron.js ile geliştirilen masaüstü ERP çözümü. Otomatik güncelleme, sunucu doğrulamalı lisanslama sistemi, fatura oluşturma ve çevrimdışı çalışabilen yerel SQL veritabanı mimarisi.",
      tags: ["Electron.js", "React", "Node.js", "SQLite", "Python"],
      githubLink: "https://github.com/Nurullah649/NPC-AI-ERP",
      image: "https://placehold.co/600x400/f59e0b/white?text=ERP+Sistemi",
      status: "Geliştiriliyor",
    },
    {
      name: "CiftciApp (Çiftçi Asistanı)",
      description: "Tarımsal danışmanlığı dijitalleştiren çapraz platform mobil uygulama. Python Flask REST API backend, özel olarak eğitilmiş LLM ile anlık tarımsal tavsiyeler, dinamik harita ve hava durumu entegrasyonu.",
      tags: ["React Native", "Python (Flask)", "PostgreSQL", "LLM", "Redux"],
      githubLink: "https://github.com/Nurullah649/CiftciApp",
      image: "https://placehold.co/600x400/22c55e/white?text=CiftciApp",
      status: "Geliştiriliyor",
    },
    {
      name: "Hukuk Alanında RAG Chatbot",
      description: "Llama 3 ve Mistral modellerinin fine-tune edildiği RAG mimarili chatbot. Vektör veritabanları ile anlamsal arama, düşürülmüş halüsinasyon oranları, doğru içtihat bilgisi.",
      tags: ["RAG", "Llama 3", "Mistral", "Vector DB", "LLM", "Python", "FastAPI"],
      liveLink: "https://icedlaw.com/",
      image: "https://placehold.co/600x400/06b6d4/white?text=Hukuk+AI",
      status: "Geliştiriliyor",
    },
    {
      name: "Hayvan Davranış Analizi",
      description: "DeepLabCut ve Python kullanılarak işaretsiz poz tahmini yapan masaüstü analiz uygulaması. Multi-threading ile optimize edilmiş video işleme.",
      tags: ["DeepLabCut", "Python", "Computer Vision", "Multi-threading"],
      image: "https://placehold.co/600x400/a855f7/white?text=Pose+Estimation",
      status: "Tamamlandı",
    },
    {
      name: "Hava Savunma Sistemleri (Teknofest)",
      description: "Yapay zeka destekli otonom hava savunma sistemi. Nesne tespit, takip ve imha süreçleri.",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Takibi", "Python"],
      githubLink: "https://github.com/Nurullah649/NPC_AI_HavaSavunma",
      image: "https://placehold.co/600x400/ef4444/white?text=Hava+Savunma",
      status: "Geliştiriliyor",
    },
    {
      name: "Kişisel Web Sitesi (Portfolyo)",
      description: "Next.js, TypeScript ve Tailwind CSS ile geliştirilen, Sanity CMS altyapılı modern portfolyo sitesi.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
      githubLink: "https://github.com/Nurullah649/mywebsite",
      liveLink: "https://nurullahkurnaz.com",
      image: "https://placehold.co/600x400/64748b/white?text=Portfolio",
      status: "Tamamlandı",
    },
  ],
  en: [
    {
      name: "SiparisGo (Digital QR Menu & Order SaaS)",
      description: "A digital ordering platform for restaurants. Real-time order management, comprehensive admin dashboard for menu customization, and Shopier payment infrastructure integration.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Shopier API"],
      liveLink: "https://npcengineering.com/products/siparisgo",
      image: "https://placehold.co/600x400/3b82f6/white?text=SiparisGo",
      status: "In Development",
    },
    {
      name: "Cyber Agent (Multi-Model Autonomous System)",
      description: "Advanced autonomous agent architecture with complex reasoning and multi-step task execution. \"Brain-Muscle\" dual model system: GLM-4.6v-Flash as cognitive core, Qwen 2.5 1.5B as functional execution layer.",
      tags: ["Python", "Qwen 2.5", "GLM-4.6v-Flash", "Autonomous Agent", "Orchestration", "LLM"],
      image: "https://placehold.co/600x400/10b981/white?text=Cyber+Agent+AI",
      status: "In Development",
    },
    {
      name: "AI in Aviation (Teknofest)",
      description: "Finalist in \"AI in Transportation\" competition. Custom YOLO models for real-time landing zone detection and vehicle tracking from aerial drone imagery. DPVO and Native zoom algorithms for autonomous navigation.",
      tags: ["Python", "YOLOv11", "OpenCV", "PyTorch", "DPVO", "ORB-SLAM"],
      githubLink: "https://github.com/Nurullah649/NPC-AI",
      image: "https://placehold.co/600x400/3b82f6/white?text=Autonomous+UAV+Vision",
      status: "Completed",
      awards: ["Teknofest 2024 Finalist", "Innovative Software Award"],
    },
    {
      name: "Physics-Informed Transformer VIO (TÜBİTAK 2209-A)",
      description: "A novel Deep Learning approach to minimize cumulative drift error in GNSS-denied environments. Transformer-based Encoder-Decoder model achieving 0.025m ATE on EuRoC, outperforming classical ORB-SLAM3.",
      tags: ["PyTorch", "Deep Learning", "Transformer", "VIO", "SLAM", "Sensor Fusion"],
      image: "https://placehold.co/600x400/8b5cf6/white?text=Transformer+VIO",
      status: "Ongoing",
    },
    {
      name: "NPC-AI ERP System",
      description: "Desktop ERP solution built with Electron.js. Auto-update mechanism, server-validated licensing system, invoice generation, and offline-capable local SQL database architecture.",
      tags: ["Electron.js", "React", "Node.js", "SQLite", "Python"],
      githubLink: "https://github.com/Nurullah649/NPC-AI-ERP",
      image: "https://placehold.co/600x400/f59e0b/white?text=ERP+System",
      status: "In Development",
    },
    {
      name: "CiftciApp (Farmer Assistant)",
      description: "Cross-platform mobile app digitalizing agricultural consulting. Python Flask REST API backend, fine-tuned LLM for real-time farming advice, dynamic maps and weather integration.",
      tags: ["React Native", "Python (Flask)", "PostgreSQL", "LLM", "Redux"],
      githubLink: "https://github.com/Nurullah649/CiftciApp",
      image: "https://placehold.co/600x400/22c55e/white?text=CiftciApp",
      status: "In Development",
    },
    {
      name: "Legal RAG Chatbot",
      description: "RAG-based chatbot with fine-tuned Llama 3 and Mistral models. Semantic search with vector databases, reduced hallucination rates, accurate case law information.",
      tags: ["RAG", "Llama 3", "Mistral", "Vector DB", "LLM", "Python", "FastAPI"],
      liveLink: "https://icedlaw.com/",
      image: "https://placehold.co/600x400/06b6d4/white?text=Legal+AI",
      status: "In Development",
    },
    {
      name: "Animal Behavior Analysis",
      description: "Desktop analysis app for markerless pose estimation using DeepLabCut and Python. Video processing optimized with multi-threading.",
      tags: ["DeepLabCut", "Python", "Computer Vision", "Multi-threading"],
      image: "https://placehold.co/600x400/a855f7/white?text=Pose+Estimation",
      status: "Completed",
    },
    {
      name: "Air Defense Systems (Teknofest)",
      description: "AI-powered autonomous air defense system. Object detection, tracking, and engagement processes.",
      tags: ["AI", "Image Processing", "Object Tracking", "Python"],
      githubLink: "https://github.com/Nurullah649/NPC_AI_HavaSavunma",
      image: "https://placehold.co/600x400/ef4444/white?text=Air+Defense",
      status: "In Development",
    },
    {
      name: "Personal Website (Portfolio)",
      description: "Modern portfolio site built with Next.js, TypeScript, and Tailwind CSS, powered by Sanity CMS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
      githubLink: "https://github.com/Nurullah649/mywebsite",
      liveLink: "https://nurullahkurnaz.com",
      image: "https://placehold.co/600x400/64748b/white?text=Portfolio",
      status: "Completed",
    },
  ],
};

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

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const [sanityProjects, setSanityProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
      if (!projectId || !dataset) return;
      try {
        const client = createClient({ projectId, dataset, apiVersion: "2024-06-07", useCdn: false });
        const query = `*[_type == "project"] | order(_createdAt desc)`;
        const projects = await client.fetch<Project[]>(query);
        setSanityProjects(projects);
      } catch (error) {
        console.error("Failed to fetch Sanity projects:", error);
      }
    }
    fetchProjects();
  }, []);

  const currentProjects = staticProjects[lang];
  const allProjects: Project[] = [...currentProjects, ...sanityProjects];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12 pb-20">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t("projects", "title")}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {t("projects", "subtitle")}
        </p>
      </motion.header>

      <ProjectList projects={allProjects} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-lg text-muted-foreground">
          {t("projects", "githubCta")}
        </p>
        <Button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0" asChild>
          <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> {t("projects", "githubBtn")}
          </a>
        </Button>
      </motion.div>
    </div>
  );
}