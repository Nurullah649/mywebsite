// app/about/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Star, Languages, Users, Code, Brain, Rocket } from "lucide-react";

const AboutPage = () => {
  const education = [
    {
      institution: "KONYA TEKNİK ÜNİVERSİTESİ",
      degree: "Lisans",
      field: "BİLGİSAYAR MÜHENDİSLİĞİ",
      years: "2022 - Devam Ediyor (3. Sınıf)",
      gpa: "2.89",
    },
  ];

  const experience = [
    {
      company: "ICED",
      role: "Yapay Zeka Mühendisi",
      duration: "Kasım 2024 - Devam Ediyor", // CV'deki tarih belirsizliği nedeniyle tahmini
      description: "Hukuk alanında bir chatbot yapmak amacıyla LLM eğitimi ve optimizasyonları üstünde çalışmaktayım.",
    },
    {
      company: "Scove System",
      role: "Stajyer Yazılım Mühendisi",
      duration: "Temmuz 2024 - Ağustos 2024", // CV'deki tarih belirsizliği nedeniyle tahmini
      description: "Pose estimation için analiz sisteminin geliştirilmesi ve hızlandırılması üzerine çalıştım.",
    },
  ];

  const skills = {
    programming: ["Python", "C#", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL"],
    aiMl: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "LLM"],
    tools: ["Git", "Linux"],
  };

  const achievements = [
    {
      title: "Yenilikçi Yazılım Ödülü",
      event: "Teknofest - Ulaşımda Yapay Zeka Kategorisi",
      description: "Görüntü işleme kullanarak bir hava aracının konumunu ve hareket haritasını belirleyen algoritmamızla mansiyon ödülü aldık. Yarışmanın ikinci etabında en başarılı takım olarak bu takdiri kazandık.",
      year: "2024", // CV'de belirtilmese de sertifika yılına göre tahmin
    },
    {
      title: "TEKNOFEST BAŞARI SERTİFİKASI",
      event: "Teknofest - Ulaşımda Yapay Zeka Yarışması",
      description: "2024 yılında Teknofest Ulaşımda Yapay Zeka yarışması finallerine katılmaya hak kazandığım için elde ettiğim sertifika.",
      year: "2024",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hakkımda</h1>
        <p className="mt-4 text-xl text-muted-foreground">Nurullah Kurnaz</p>
      </header>

      {/* Profile Overview */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-lg shadow-lg">
        <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary">
          <AvatarImage src="https://github.com/Nurullah649.png" alt="Nurullah Kurnaz" />
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold">Nurullah Kurnaz</h2>
          <p className="text-lg text-primary">Bilgisayar Mühendisliği Öğrencisi & Yapay Zeka Geliştiricisi</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Yapay zeka eğitimleri alıyor, Teknofest yarışması için görüntü işleme, nesne tespiti, nesne takibi ve robotik kodlama gibi alanlarda kendimi geliştiriyorum. Oyun ve mobil programlama konusunda temel deneyimlerim bulunmakta. Çalıştığım şirket aracılığıyla dil modelleri (GPT, LLaMA, Mistral vb.) üzerine çalışmalara katılıyorum. Amacım, teknolojiyle insanlığa faydalı çözümler üretmek ve bu alanda sürekli öğrenerek kendimi geliştirmektir.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <GraduationCap className="mr-3 h-8 w-8 text-primary" /> Eğitim Bilgilerim
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.institution}</CardTitle>
                <CardDescription>{edu.degree} - {edu.field}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Yıl:</strong> {edu.years}</p>
                <p><strong>Not Ortalaması:</strong> {edu.gpa}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Briefcase className="mr-3 h-8 w-8 text-primary" /> İş Deneyimlerim
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.role} - {exp.company}</CardTitle>
                <CardDescription>{exp.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 flex items-center">
          <Star className="mr-3 h-8 w-8 text-primary" /> Yeteneklerim
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            <Card>
                <CardHeader><CardTitle className="flex items-center"><Code className="mr-2 h-6 w-6 text-blue-500"/> Programlama Dilleri</CardTitle></CardHeader>
                <CardContent className="space-y-1">
                    {skills.programming.map(skill => <p key={skill}>{skill}</p>)}
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="flex items-center"><Brain className="mr-2 h-6 w-6 text-green-500"/> Yapay Zeka & Makine Öğrenimi</CardTitle></CardHeader>
                <CardContent className="space-y-1">
                    {skills.aiMl.map(skill => <p key={skill}>{skill}</p>)}
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="flex items-center"><Rocket className="mr-2 h-6 w-6 text-purple-500"/> Araçlar & Teknolojiler</CardTitle></CardHeader>
                <CardContent className="space-y-1">
                    {skills.tools.map(skill => <p key={skill}>{skill}</p>)}
                </CardContent>
            </Card>
        </div>
         <Card className="mt-6">
            <CardHeader><CardTitle className="flex items-center"><Languages className="mr-2 h-6 w-6 text-red-500"/> Yabancı Dil</CardTitle></CardHeader>
            <CardContent>
                <p><strong>İngilizce:</strong> B1 (Okuma, Dinleme, Konuşma, Yazma)</p>
            </CardContent>
        </Card>
      </section>

      {/* Achievements and Certificates Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Award className="mr-3 h-8 w-8 text-primary" /> Başarılarım ve Sertifikalarım
        </h2>
        <div className="space-y-6">
          {achievements.map((ach, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{ach.title}</CardTitle>
                <CardDescription>{ach.event} - {ach.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{ach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
