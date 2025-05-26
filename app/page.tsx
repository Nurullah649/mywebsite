// app/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";

// CV'den ve GitHub'dan alınan bilgilerle güncellenmiş içerik
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
      link: "https://github.com/Nurullah649/NPC-AI" // Örnek link, güncellenmeli
    },
    {
      name: "Hava Savunma Sistemleri (Teknofest)",
      description: "Teknofest Hava Savunma Sistemleri Yarışması. Yapay Zeka destekli nesne tespit, takip ve imha",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Tespiti", "Nesne Takibi","Hedef İmha"],
      link: "https://github.com/Nurullah649/NPC_AI_HavaSavunma" // Örnek link, güncellenmeli
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 py-12">
        <div className="md:w-2/3 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
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
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary">
            <AvatarImage src="https://github.com/Nurullah649.png" alt="Nurullah Kurnaz" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-12 bg-secondary rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Kısaca Hakkımda</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          Yapay zeka eğitimleri alıyor, Teknofest yarışması için görüntü işleme, nesne tespiti, nesne takibi ve robotik kodlama gibi alanlarda kendimi geliştiriyorum. Oyun ve mobil programlama konusunda temel deneyimlerim bulunmakta. Çalıştığım şirket aracılığıyla dil modelleri (GPT, LLaMA, Mistral vb.) üzerine çalışmalara katılıyorum.
        </p>
        <div className="text-center mt-6">
            <Button variant="link" asChild>
                <a href="/about">Daha Fazla Bilgi</a>
            </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Yeteneklerim</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="default" className="text-sm px-4 py-2 rounded-full">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Öne Çıkan Projelerim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => ( // İlk 3 projeyi göster
            <Card key={project.name} className="flex flex-col">
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
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    GitHub'da Gör <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
            <Button variant="outline" asChild>
                <a href="/projects">Tüm Projelerim</a>
            </Button>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="py-12 bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">İletişim</h2>
        <div className="max-w-md mx-auto space-y-4 text-center">
            <p className="text-lg">
                Benimle çalışmak veya bir proje hakkında konuşmak isterseniz, lütfen iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:nurullahkurnaz47@gmail.com" aria-label="Email">
                        <Mail className="h-6 w-6" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-6 w-6" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                     {/* LinkedIn profil linkinizi buraya ekleyin */}
                    <a href="https://www.linkedin.com/in/nurullah-kurnaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                    </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="tel:5550265947" aria-label="Phone">
                        <Phone className="h-6 w-6" />
                    </a>
                </Button>
            </div>
            <Button asChild className="mt-4">
                <a href="/contact">İletişim Formu</a>
            </Button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
