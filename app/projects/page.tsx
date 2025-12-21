import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ProjectList } from "@/components/ProjectList";

// --- ESKİ & YENİ PROJELERİNİZ (GÜNCELLENMİŞ LİSTE) ---
const staticProjects = [
  {
    name: "Cyber Agent (Otonom Ajan Mimarisi)",
    description: "Karmaşık akıl yürütme ve çok adımlı görevleri yerine getirebilen otonom bir ajan mimarisi. 'Beyin-Kas' yapısına sahip ikili model sistemi (GLM-4 & Qwen 2.5) kullanılarak, JSON çıktılarını işleyen ve bağlam geçişlerini yöneten güçlü bir orkestrasyon katmanı geliştirildi.",
    tags: ["Python", "Qwen 2.5", "GLM-4.6v-Flash", "Autonomous Agents", "Orchestration", "LLM", "Tool-Use"],
    githubLink: "https://github.com/Nurullah649/Cyber-Agent", // Varsa linki kontrol edin
    liveLink: null,
    image: "https://placehold.co/600x400/10b981/white?text=Cyber+Agent+AI",
    status: "Geliştiriliyor",
  },
  {
    name: "Otonom İHA Görüntü İşleme (Teknofest)",
    description: "Teknofest 'Ulaşımda Yapay Zeka' yarışması finalisti. İHA görüntülerinden iniş alanlarını ve araçları gerçek zamanlı tespit etmek için YOLOv10 modelleri eğitildi. ROS düğümleri ile görüntü işleme çıktıları otonom navigasyon sistemine entegre edildi.",
    tags: ["Python", "YOLOv10", "ROS", "OpenCV", "ORB-SLAM", "DPVO", "PyTorch", "Görüntü İşleme"],
    githubLink: "https://github.com/Nurullah649/NPC-AI",
    liveLink: null,
    image: "https://placehold.co/600x400/3b82f6/white?text=Otonom+IHA+Vision",
    status: "Tamamlandı",
    awards: ["Teknofest 2024 Finalist", "Mansiyon Ödülü"]
  },
  {
    name: "Fizik-Bilgilendirilmiş Transformer VIO (TÜBİTAK 2209-A)",
    description: "GPS olmayan ortamlarda kümülatif sapma hatasını minimize etmek için özgün bir Derin Öğrenme yaklaşımı. Anlık hız vektörlerini tahmin eden Transformer tabanlı Encoder-Decoder modeli ile EuRoC testlerinde klasik ORB-SLAM3'ü geride bırakan sonuçlar elde edildi.",
    tags: ["PyTorch", "Deep Learning", "Transformer", "VIO", "SLAM", "Sensor Fusion", "Araştırma"],
    githubLink: "https://github.com/Nurullah649",
    liveLink: null,
    image: "https://placehold.co/600x400/8b5cf6/white?text=Transformer+VIO",
    status: "Devam Ediyor",
  },
  {
    name: "NPC-AI ERP Sistemi",
    description: "İşletme yönetimi için Electron.js kullanılarak geliştirilen modern masaüstü ERP çözümü. Otomatik güncelleme sistemi, sunucu doğrulamalı lisanslama, fatura oluşturma ve çevrimdışı çalışabilen yerel SQL veritabanı mimarisi içerir.",
    tags: ["Electron.js", "React", "Node.js", "SQLite", "Python", "Masaüstü Uygulama"],
    githubLink: "https://github.com/Nurullah649",
    liveLink: null,
    image: "https://placehold.co/600x400/f59e0b/white?text=ERP+Sistemi",
    status: "Tamamlandı",
  },
  {
    name: "CiftciApp (Çiftçi Asistanı)",
    description: "Tarımsal danışmanlığı dijitalleştiren çapraz platform mobil uygulama. Python Flask backend üzerinde çalışan, özel olarak eğitilmiş (fine-tuned) bir LLM ile çiftçilere anlık tavsiyeler sunar. Dinamik harita ve hava durumu entegrasyonu içerir.",
    tags: ["React Native", "Python (Flask)", "PostgreSQL", "LLM", "Redux", "Mobile App"],
    githubLink: "https://github.com/Nurullah649",
    liveLink: null,
    image: "https://placehold.co/600x400/22c55e/white?text=CiftciApp",
    status: "Geliştiriliyor",
  },
  {
    name: "Hukuk Alanında RAG Chatbot",
    description: "ICED bünyesinde geliştirilen, Llama 3 ve Mistral modellerinin fine-tune edildiği RAG mimarili chatbot. Vektör veritabanları ile anlamsal arama yapılarak hukuk metinlerindeki halüsinasyon oranları düşürülmüş ve doğru içtihat bilgisi sunulması sağlanmıştır.",
    tags: ["RAG", "Llama 3", "Mistral", "Vector DB", "LLM", "Python", "FastAPI"],
    liveLink: "https://icedlaw.com/",
    image: "https://icedlaw.com/images/iced%20avukat%20as%20logo%20.png",
    status: "Yayında",
  },
  {
    name: "Hayvan Davranış Analizi (Pose Estimation)",
    description: "Scove Systems staj projesi. DeepLabCut ve Python kullanılarak işaretsiz poz tahmini (markerless pose estimation) yapan masaüstü analiz uygulaması. Video işleme süreçleri multi-threading ile optimize edilerek analiz süresi kısaltıldı.",
    tags: ["DeepLabCut", "Python", "Computer Vision", "Multi-threading", "Linux"],
    liveLink: null,
    image: "https://placehold.co/600x400/a855f7/white?text=Pose+Estimation",
    status: "Tamamlandı",
  },
  {
      name: "Hava Savunma Sistemleri (Teknofest)",
      description: "Teknofest Hava Savunma Sistemleri Yarışması için geliştirilen yapay zeka destekli otonom sistem. Nesne tespit, takip ve imha süreçlerini içerir.",
      tags: ["Yapay Zeka", "Görüntü İşleme", "Nesne Takibi", "Python"],
      githubLink: "https://github.com/Nurullah649/NPC_AI_HavaSavunma",
      image: "https://placehold.co/600x400/ef4444/white?text=Hava+Savunma",
      status: "Geliştiriliyor",
    },
   {
    name: "Kişisel Web Sitesi (Portfolyo)",
    description: "Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilen, Sanity CMS altyapılı modern portfolyo sitesi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Shadcn/UI"],
    githubLink: "https://github.com/Nurullah649/mywebsite",
    liveLink: "https://nurullahkurnaz.com",
    image: "https://placehold.co/600x400/64748b/white?text=Portfolio+Website",
    status: "Tamamlandı",
  },
];
// --- BİTİŞ ---

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-06-07",
  useCdn: false,
});

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

async function getSanityProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc)`;
    const projects = await client.fetch<Project[]>(query);
    return projects;
  } catch (error) {
    console.error("Failed to fetch Sanity projects:", error);
    return []; // Hata durumunda boş bir dizi döndür
  }
}

export default async function ProjectsPage() {
  const sanityProjects = await getSanityProjects();
  // Static projeleri öne, CMS'den gelenleri arkaya veya tam tersi şekilde sıralayabilirsiniz.
  // Burada static projeler en üstte görünecek şekilde ayarlandı:
  const allProjects: Project[] = [...staticProjects, ...sanityProjects];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projelerim</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Yapay zeka, otonom sistemler ve full-stack geliştirme üzerine çalışmalarım.
        </p>
      </header>

      <ProjectList projects={allProjects} />

      <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
                Tüm kaynak kodları ve katkılarım için GitHub profilimi inceleyebilirsiniz.
            </p>
            <Button variant="default" className="mt-4" asChild>
                <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub Profilim
                </a>
            </Button>
        </div>
    </div>
  );
}

export const revalidate = 10;