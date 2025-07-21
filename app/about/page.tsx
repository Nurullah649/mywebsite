"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Eksik olan import eklendi
import { Briefcase, GraduationCap, Award, Star, Languages, Code, Brain, Rocket } from "lucide-react";

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

const AboutPage = () => {
  const education = [
    {
      institution: "KONYA TEKNİK ÜNİVERSİTESİ",
      degree: "Lisans",
      field: "BİLGİSAYAR MÜHENDİSLİĞİ",
      years: "2022 - Devam Ediyor (4. Sınıf)",
      gpa: "2.98",
    },
  ];

  const experience = [
    {
      company: "ICED",
      role: "Yapay Zeka Mühendisi",
      duration: "Kasım 2024 - Devam Ediyor",
      description: "Hukuk alanında bir chatbot yapmak amacıyla LLM eğitimi ve optimizasyonları üstünde çalışmaktayım. Ayrıca büyük dil modellerini beslemek için RAG sistemleri üzerine çalışıyorum.",
    },
    {
      company: "Scove System",
      role: "Stajyer Yazılım Mühendisi",
      duration: "Temmuz 2024 - Ağustos 2024",
      description: "Pose estimation için analiz sisteminin geliştirilmesi ve hızlandırılması üzerine çalıştım.",
    },
  ];

  const skills = {
    programming: ["Python", "C++", "Java", "SQL"],
    aiMl: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "LLM"],
    tools: ["Git", "Linux"],
  };

  const achievements = [
    {
      title: "Yenilikçi Yazılım Ödülü",
      event: "Teknofest - Ulaşımda Yapay Zeka Kategorisi",
      description: "Görüntü işleme kullanarak bir hava aracının konumunu ve hareket haritasını belirleyen algoritmamızla mansiyon ödülü aldık.",
      year: "2024",
    },
    {
      title: "TEKNOFEST BAŞARI SERTİFİKASI",
      event: "Teknofest - Ulaşımda Yapay Zeka Yarışması",
      description: "2024 yılında Teknofest Ulaşımda Yapay Zeka yarışması finallerine katılmaya hak kazandığım için elde ettiğim sertifika.",
      year: "2024",
    },
  ];

  return (
    <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-fuchsia-50 to-blue-50 dark:from-teal-900/20 dark:via-fuchsia-900/20 dark:to-blue-900/20 animate-background-pan" style={{ backgroundSize: '400% 400%' }} />
        <div className="container mx-auto p-4 md:p-8 space-y-12">
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
        >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animated-gradient-text">Hakkımda</h1>
        </motion.header>

        <motion.div variants={containerStagger} initial="hidden" animate="visible" className="space-y-12 md:space-y-20">
            {/* Profile Overview */}
            <motion.section variants={itemFadeInUp} className="grid md:grid-cols-5 items-center gap-8 p-8 bg-card/80 backdrop-blur-sm rounded-lg shadow-lg border">
                <Avatar className="w-40 h-40 md:w-full md:h-auto md:col-span-1 border-4 border-primary mx-auto">
                    <AvatarImage src="https://github.com/Nurullah649.png" alt="Nurullah Kurnaz" />
                    <AvatarFallback>NK</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left md:col-span-4">
                    <h2 className="text-3xl font-semibold">Nurullah Kurnaz</h2>
                    <p className="text-lg text-primary">Bilgisayar Mühendisliği Öğrencisi & Yapay Zeka Geliştiricisi</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        Yapay zeka eğitimleri alıyor, Teknofest yarışması için görüntü işleme, nesne tespiti, nesne takibi ve robotik kodlama gibi alanlarda kendimi geliştiriyorum. Oyun ve mobil programlama konusunda temel deneyimlerim bulunmakta. Çalıştığım şirket aracılığıyla dil modelleri (GPT, LLaMA, Mistral vb.) üzerine çalışmalar yapmaktayım ayrıca RAG sistemleri üzerine çalışmaktayım. Amacım, teknolojiyle insanlığa faydalı çözümler üretmek ve bu alanda sürekli öğrenerek kendimi geliştirmektir.
                    </p>
                </div>
            </motion.section>

            {/* Experience & Education */}
             <motion.div variants={itemFadeInUp} className="grid md:grid-cols-2 gap-12">
                <section>
                    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3"><Briefcase className="h-8 w-8 text-primary" /> İş Deneyimlerim</h2>
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <Card key={index}><CardHeader><CardTitle>{exp.role} - {exp.company}</CardTitle><CardDescription>{exp.duration}</CardDescription></CardHeader><CardContent><p>{exp.description}</p></CardContent></Card>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary" /> Eğitim Bilgilerim</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Card key={index}><CardHeader><CardTitle>{edu.institution}</CardTitle><CardDescription>{edu.degree} - {edu.field}</CardDescription></CardHeader><CardContent><p><strong>Yıl:</strong> {edu.years}</p><p><strong>Not Ortalaması:</strong> {edu.gpa}</p></CardContent></Card>
                        ))}
                    </div>
                </section>
            </motion.div>

            {/* Skills Section */}
            <motion.section variants={itemFadeInUp}>
                <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center gap-3"><Star className="h-8 w-8 text-primary" /> Yeteneklerim</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Code className="text-teal-500"/> Programlama Dilleri</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-2">{skills.programming.map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}</CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Brain className="text-fuchsia-500"/> Yapay Zeka & ML</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-2">{skills.aiMl.map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}</CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Rocket className="text-indigo-500"/> Araçlar & Teknolojiler</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-2">{skills.tools.map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}</CardContent></Card>
                </div>
                 <Card className="mt-6"><CardHeader><CardTitle className="flex items-center gap-2"><Languages className="text-red-500"/> Yabancı Dil</CardTitle></CardHeader><CardContent><p><strong>İngilizce:</strong> B1 (Okuma, Dinleme, Konuşma, Yazma)</p></CardContent></Card>
            </motion.section>

            {/* Achievements Section */}
            <motion.section variants={itemFadeInUp}>
                <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center gap-3"><Award className="h-8 w-8 text-primary" /> Başarılarım ve Sertifikalarım</h2>
                <div className="space-y-6">
                    {achievements.map((ach, index) => (
                        <Card key={index}><CardHeader><CardTitle>{ach.title}</CardTitle><CardDescription>{ach.event} - {ach.year}</CardDescription></CardHeader><CardContent><p>{ach.description}</p></CardContent></Card>
                    ))}
                </div>
            </motion.section>
        </motion.div>
        </div>
    </div>
  );
};

export default AboutPage;
