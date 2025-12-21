import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Code2, Cpu, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımda | Nurullah Kurnaz",
  description: "Yapay zeka mühendisi ve geliştirici Nurullah Kurnaz hakkında bilgiler, deneyimler ve eğitim geçmişi.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12 max-w-4xl">
      {/* --- GİRİŞ / BİYOGRAFİ KISMI --- */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Hakkımda</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Merhaba, ben <strong>Nurullah Kurnaz</strong>. Konya Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. 
          Özellikle <strong>Yapay Zeka</strong>, <strong>Otonom Sistemler</strong> ve <strong>Full-Stack Geliştirme</strong> alanlarında tutkulu bir mühendisim. 
          Karmaşık problemleri çözmek için derin öğrenme modelleri (LLM, RAG) ve modern web teknolojilerini bir araya getirmeyi seviyorum.
        </p>
      </section>

      <Separator />

      {/* --- İŞ DENEYİMİ --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">İş Deneyimi & Araştırma</h2>
        </div>

        <div className="grid gap-6">
          {/* ICED */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle className="text-xl">Yapay Zeka Mühendisi</CardTitle>
                  <p className="text-muted-foreground font-medium">ICED</p>
                </div>
                <Badge variant="secondary">Kasım 2024 - Kasım 2025</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Hukuk alanına özel, doğru içtihat bilgileri sunan RAG (Retrieval-Augmented Generation) mimarili bir chatbot projesine liderlik ettim.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Llama 3 ve Mistral modelleri üzerinde fine-tuning yaparak Türkçe hukuk metinlerinde başarıyı artırdım.</li>
                <li>Vektör veritabanı çözümleri ile anlamsal arama performansını iyileştirdim ve halüsinasyon oranlarını düşürdüm.</li>
                <li>Yapay zeka modellerini ürünün çekirdek yapısına entegre etmek için ölçeklenebilir API uç noktaları geliştirdim.</li>
              </ul>
            </CardContent>
          </Card>

          {/* TÜBİTAK */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle className="text-xl">Proje Yürütücüsü / Araştırmacı (TÜBİTAK 2209-A)</CardTitle>
                  <p className="text-muted-foreground font-medium">Konya Teknik Üniversitesi</p>
                </div>
                <Badge variant="secondary">Temmuz 2025 - Devam Ediyor</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                "Fizik-Bilgilendirilmiş Transformer VIO" projesi.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>GNSS (GPS) olmayan ortamlarda kümülatif sapma hatasını minimize eden özgün bir Derin Öğrenme yaklaşımı geliştirdim.</li>
                <li>PyTorch ile Transformer tabanlı bir Encoder-Decoder modeli tasarladım ve EuRoC testlerinde 0.025m hata oranı ile klasik ORB-SLAM3'ü geride bıraktım.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Scove Systems */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle className="text-xl">Yazılım Mühendisi Stajyeri</CardTitle>
                  <p className="text-muted-foreground font-medium">Scove Systems</p>
                </div>
                <Badge variant="secondary">Temmuz 2024 - Ağustos 2024</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Hayvan davranışlarının otomatik analizi için görüntü işleme çözümleri.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Python ve DeepLabCut kullanarak işaretsiz poz tahmini (markerless pose estimation) uygulaması geliştirdim.</li>
                <li>Video işleme süreçlerini multi-threading ile optimize ederek analiz süresini kısalttım.</li>
                <li>Linux tabanlı analiz sunucularının kurulumunu ve ağ yönetimini gerçekleştirdim.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* --- EĞİTİM --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Eğitim</h2>
        </div>
        <Card>
          <CardHeader>
             <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Bilgisayar Mühendisliği Lisans</CardTitle>
                  <p className="text-muted-foreground">Konya Teknik Üniversitesi</p>
                </div>
                <div className="text-right">
                    <Badge variant="outline">Eylül 2022 - Devam Ediyor</Badge>
                    <p className="text-sm text-muted-foreground mt-1">GPA: 2.98/4.00</p>
                </div>
              </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <strong>İlgili Dersler:</strong> İleri Algoritmalar, Yapay Zeka, Sayısal Görüntü İşleme, Gömülü Sistem Mimarisi, Veritabanı Yönetim Sistemleri, OOP.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* --- TEKNİK YETENEKLER --- */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Teknik Yetenekler</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            
            {/* AI & ML */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Yapay Zeka & ML</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "TensorFlow", "YOLO", "LLMs (Llama, Mistral, Qwen)", "RAG", "DeepLabCut", "OpenCV", "Hugging Face"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>

            {/* Development */}
             <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Geliştirme & Araçlar</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["React", "React Native", "Electron", "Next.js", "Node.js", "Flask", "FastAPI", "Docker", "Git", "Linux", "SQL", "C++"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>

             {/* Robotics */}
             <div className="space-y-3 md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Robotik & IoT</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["ROS / ROS2", "SLAM", "VIO", "Sensor Fusion", "Raspberry Pi", "Jetson Orin Nano", "Arduino", "Gömülü Sistemler"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}