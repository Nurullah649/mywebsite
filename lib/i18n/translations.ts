// Tüm statik metinlerin TR/EN çevirileri
export type Language = "tr" | "en";

export const translations = {
    // === NAV ===
    nav: {
        home: { tr: "Ana Sayfa", en: "Home" },
        about: { tr: "Hakkımda", en: "About" },
        projects: { tr: "Projeler", en: "Projects" },
        contact: { tr: "İletişim", en: "Contact" },
        cta: { tr: "İletişime Geç", en: "Get in Touch" },
    },

    // === HERO ===
    hero: {
        badge: { tr: "Yapay Zeka Mühendisi & Full-Stack Geliştirici", en: "AI Engineer & Full-Stack Developer" },
        greeting: { tr: "Merhaba, ben", en: "Hi, I'm" },
        name: { tr: "Nurullah Kurnaz", en: "Nurullah Kurnaz" },
        description: {
            tr: "Derin öğrenme modelleri, otonom sistemler ve modern web teknolojileriyle karmaşık problemlere yenilikçi çözümler üretiyorum.",
            en: "I build innovative solutions to complex problems using deep learning models, autonomous systems, and modern web technologies."
        },
        projectsBtn: { tr: "Projelerimi İncele", en: "View My Projects" },
        contactBtn: { tr: "İletişime Geç", en: "Get in Touch" },
    },

    // === ACHIEVEMENTS ===
    achievements: {
        badge: { tr: "Başarı & Ödül", en: "Achievement & Award" },
        title: { tr: "Teknofest 2024 Finalisti", en: "Teknofest 2024 Finalist" },
        description: {
            tr: "\"Ulaşımda Yapay Zeka\" kategorisinde geliştirdiğimiz otonom İHA projesi ile finale kalarak Mansiyon Ödülü almaya hak kazandık.",
            en: "Our autonomous UAV project in the \"AI in Transportation\" category reached the finals and earned an Honorable Mention Award."
        },
        innovationAward: {
            tr: "Yarışmanın 2. aşaması olan konumlandırma kısmında en yüksek başarı elde edildiği için Yenilikçi Yazılım Ödülü verildi.",
            en: "The Innovative Software Award was given for achieving the highest success in the 2nd stage positioning phase of the competition."
        },
        detailsBtn: { tr: "Detayları Gör", en: "See Details" },
    },

    // === FEATURED PROJECTS ===
    featuredProjects: {
        title: { tr: "Öne Çıkan Projeler", en: "Featured Projects" },
        subtitle: { tr: "Son zamanlarda üzerinde çalıştığım bazı heyecan verici işler.", en: "Some exciting work I've been doing recently." },
        viewAll: { tr: "Tüm Projeleri Gör", en: "View All Projects" },
        projects: [
            {
                title: { tr: "Otonom İHA Vision", en: "Autonomous UAV Vision" },
                desc: {
                    tr: "Teknofest finalisti proje. YOLOv10 ve ROS kullanılarak iniş alanı tespiti ve otonom karar verme sistemi.",
                    en: "Teknofest finalist project. Landing zone detection and autonomous decision-making system using YOLOv10 and ROS."
                },
                tags: ["YOLO", "ROS", "Python"],
            },
            {
                title: { tr: "Hukuk AI Asistanı", en: "Legal AI Assistant" },
                desc: {
                    tr: "RAG mimarisi ile geliştirilmiş, Llama 3 tabanlı ve yüksek doğruluklu hukuk chatbotu.",
                    en: "High-accuracy legal chatbot built with RAG architecture and based on Llama 3."
                },
                tags: ["RAG", "LLM", "Vector DB"],
            },
            {
                title: { tr: "SiparisGo", en: "SiparisGo" },
                desc: {
                    tr: "Restoranlar için dijital QR menü ve sipariş yönetim platformu. Shopier ödeme entegrasyonu ve yönetici paneli.",
                    en: "Digital QR menu and order management platform for restaurants. Shopier payment integration and admin dashboard."
                },
                tags: ["Next.js", "Supabase", "Shopier"],
            },
        ],
    },

    // === SKILLS ===
    skills: {
        title: { tr: "Teknik Yetenekler", en: "Technical Skills" },
        categories: [
            {
                category: { tr: "Yapay Zeka & ML", en: "AI & ML" },
                icon: "🧠",
                skills: [
                    { name: "PyTorch", level: 90 },
                    { name: "TensorFlow", level: 85 },
                    { name: "YOLO", level: 90 },
                    { name: "LLMs (Qwen, GLM, Llama, Mistral)", level: 88 },
                    { name: "RAG", level: 85 },
                    { name: "DeepLabCut", level: 80 },
                    { name: "OpenCV", level: 85 },
                ],
            },
            {
                category: { tr: "Programlama Dilleri", en: "Programming Languages" },
                icon: "⚡",
                skills: [
                    { name: "Python", level: 95 },
                    { name: "JavaScript / TypeScript", level: 85 },
                    { name: "C++", level: 75 },
                    { name: "C", level: 70 },
                    { name: "SQL", level: 85 },
                    { name: "Java", level: 70 },
                ],
            },
            {
                category: { tr: "Geliştirme & Araçlar", en: "Development & Tools" },
                icon: "🛠️",
                skills: [
                    { name: "React / React Native", level: 88 },
                    { name: "Next.js", level: 85 },
                    { name: "Electron.js", level: 80 },
                    { name: "Flask / FastAPI", level: 82 },
                    { name: "Node.js", level: 80 },
                    { name: "Docker", level: 75 },
                    { name: "Git / Linux", level: 88 },
                ],
            },
            {
                category: { tr: "Robotik & IoT", en: "Robotics & IoT" },
                icon: "🤖",
                skills: [

                    { name: "SLAM / VIO", level: 82 },
                    { name: "Sensor Fusion", level: 80 },
                    { name: "Raspberry Pi / Jetson", level: 78 },
                    { name: "Arduino", level: 75 },
                ],
            },
        ],
    },

    // === ABOUT PAGE ===
    about: {
        title: { tr: "Hakkımda", en: "About Me" },
        bio: {
            tr: "Merhaba, ben Nurullah Kurnaz. Konya Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Özellikle Yapay Zeka, Otonom Sistemler ve Full-Stack Geliştirme alanlarında tutkulu bir mühendisim. Karmaşık problemleri çözmek için derin öğrenme modelleri (LLM, RAG) ve modern web teknolojilerini bir araya getirmeyi seviyorum.",
            en: "Hi, I'm Nurullah Kurnaz. I'm a Computer Engineering student at Konya Technical University. I'm a passionate engineer specializing in Artificial Intelligence, Autonomous Systems, and Full-Stack Development. I love combining deep learning models (LLM, RAG) with modern web technologies to solve complex problems."
        },
        experienceTitle: { tr: "İş Deneyimi & Araştırma", en: "Work Experience & Research" },
        educationTitle: { tr: "Eğitim", en: "Education" },
        skillsTitle: { tr: "Teknik Yetenekler", en: "Technical Skills" },
        languagesTitle: { tr: "Diller", en: "Languages" },
        languages: [
            { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Anadil", en: "Native" } },
            { name: { tr: "İngilizce", en: "English" }, level: { tr: "Orta Seviye (B1)", en: "Intermediate (B1)" } },
        ],
        // Experience entries
        experiences: [
            {
                title: { tr: "Yapay Zeka Mühendisi", en: "AI Engineer" },
                company: "ICED",
                period: { tr: "Kasım 2024 – Kasım 2025", en: "Nov 2024 – Nov 2025" },
                description: {
                    tr: "Hukuk alanına özel, doğru içtihat bilgileri sunan RAG mimarili bir chatbot projesine liderlik ettim.",
                    en: "Led the development of a domain-specific legal chatbot using RAG architecture for accurate case law information."
                },
                bullets: {
                    tr: [
                        "Llama 3 ve Mistral modelleri üzerinde fine-tuning yaparak Türkçe hukuk metinlerinde başarıyı artırdım.",
                        "Vektör veritabanı çözümleri ile anlamsal arama performansını iyileştirdim ve halüsinasyon oranlarını düşürdüm.",
                        "Yapay zeka modellerini ürünün çekirdek yapısına entegre etmek için ölçeklenebilir API uç noktaları geliştirdim.",
                    ],
                    en: [
                        "Improved accuracy on Turkish legal texts through fine-tuning Llama 3 and Mistral models.",
                        "Enhanced semantic search performance with vector database solutions, reducing hallucination rates.",
                        "Developed scalable API endpoints to integrate AI models into the core product.",
                    ],
                },
            },
            {
                title: { tr: "Lisans Araştırmacısı (TÜBİTAK 2209-A)", en: "Undergraduate Researcher (TÜBİTAK 2209-A)" },
                company: { tr: "Konya Teknik Üniversitesi", en: "Konya Technical University" },
                period: { tr: "Temmuz 2025 – Mevcut", en: "Jul 2025 – Present" },
                description: {
                    tr: "TÜBİTAK tarafından desteklenen \"Fizik Bilgili Transformer VIO\" projesinde Yürütücü olarak görev aldım.",
                    en: "Served as Principal Investigator on the TÜBİTAK-funded \"Physics-Informed Transformer VIO\" project."
                },
                bullets: {
                    tr: [
                        "GNSS olmayan ortamlarda kümülatif sapma hatasını minimize eden özgün bir Derin Öğrenme yaklaşımı geliştirdim.",
                        "PyTorch ile Transformer tabanlı Encoder-Decoder modeli tasarladım; EuRoC testlerinde 0.025m ATE ile ORB-SLAM3'ü geride bıraktım.",
                        "Sağlam konumlandırma için IMU verilerini görsel girdilerle birleştiren Sensör Füzyonu algoritmaları uyguladım.",
                    ],
                    en: [
                        "Developed a novel Deep Learning approach to minimize cumulative drift error in GNSS-denied environments.",
                        "Designed a Transformer-based Encoder-Decoder model with PyTorch; achieved 0.025m ATE on EuRoC, outperforming ORB-SLAM3.",
                        "Implemented Sensor Fusion algorithms combining IMU data with visual inputs for robust positioning.",
                    ],
                },
            },
            {
                title: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
                company: "Scove Systems",
                period: { tr: "Temmuz 2024 – Ağustos 2024", en: "Jul 2024 – Aug 2024" },
                description: {
                    tr: "Hayvan davranışlarının otomatik analizi için görüntü işleme çözümleri geliştirdim.",
                    en: "Developed image processing solutions for automatic animal behavior analysis."
                },
                bullets: {
                    tr: [
                        "Python ve DeepLabCut kullanarak işaretsiz poz tahmini uygulaması geliştirdim.",
                        "Video işleme süreçlerini multi-threading ile optimize ederek analiz süresini kısalttım.",
                        "Linux tabanlı analiz sunucularının kurulumunu ve ağ yönetimini gerçekleştirdim.",
                    ],
                    en: [
                        "Developed markerless pose estimation application using Python and DeepLabCut.",
                        "Optimized video processing pipelines with multi-threading, significantly reducing analysis time.",
                        "Managed deployment of Linux-based analysis servers and network administration.",
                    ],
                },
            },
        ],
        education: {
            degree: { tr: "Bilgisayar Mühendisliği Lisans", en: "B.Sc. in Computer Engineering" },
            school: { tr: "Konya Teknik Üniversitesi", en: "Konya Technical University" },
            period: { tr: "Eylül 2022 – Devam Ediyor", en: "Sep 2022 – Present" },
            gpa: "3.10/4.00",
            courses: {
                tr: "İleri Algoritmalar, Yapay Zeka, Sayısal Görüntü İşleme, Gömülü Sistem Mimarisi, Veritabanı Yönetim Sistemleri, OOP.",
                en: "Advanced Algorithms, Artificial Intelligence, Digital Image Processing, Embedded System Architecture, Database Management Systems, OOP."
            },
        },
        // Skill categories for about page
        skillCategories: {
            aiMl: {
                title: { tr: "Yapay Zeka & ML", en: "AI & ML" },
                skills: ["Python", "PyTorch", "TensorFlow", "YOLO", "LLMs (Llama, Mistral, Qwen, GLM)", "RAG", "DeepLabCut", "OpenCV", "Hugging Face"],
            },
            dev: {
                title: { tr: "Geliştirme & Araçlar", en: "Development & Tools" },
                skills: ["React", "React Native", "Electron", "Next.js", "Flask", "FastAPI", "PyQt5", "Node.js", "Docker", "Git", "Linux"],
            },
            robotics: {
                title: { tr: "Robotik & IoT", en: "Robotics & IoT" },
                skills: ["SLAM", "VIO", "Sensör Füzyonu", "Raspberry Pi", "Jetson Orin Nano", "Arduino", "Gömülü Sistemler"],
            },
            languages: {
                title: { tr: "Programlama Dilleri", en: "Programming Languages" },
                skills: ["Python (İleri Seviye)", "C++", "JavaScript", "TypeScript", "C", "SQL", "Java"],
            },
        },
    },

    // === PROJECTS PAGE ===
    projects: {
        title: { tr: "Projelerim", en: "My Projects" },
        subtitle: {
            tr: "Yapay zeka, otonom sistemler ve full-stack geliştirme üzerine çalışmalarım.",
            en: "My work on artificial intelligence, autonomous systems, and full-stack development."
        },
        githubCta: {
            tr: "Tüm kaynak kodları ve katkılarım için GitHub profilimi inceleyebilirsiniz.",
            en: "Check out my GitHub profile for all source code and contributions."
        },
        githubBtn: { tr: "GitHub Profilim", en: "My GitHub Profile" },
        statusLabels: {
            developing: { tr: "Geliştiriliyor", en: "In Development" },
            completed: { tr: "Tamamlandı", en: "Completed" },
            ongoing: { tr: "Devam Ediyor", en: "Ongoing" },
        },
        liveDemo: { tr: "Canlı Demo", en: "Live Demo" },
    },

    // === CONTACT PAGE ===
    contact: {
        title: { tr: "İletişime Geç", en: "Get in Touch" },
        subtitle: {
            tr: "Bir proje fikriniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Bana ulaşın!",
            en: "Have a project idea? Or just want to say hello? Reach out to me!"
        },
        infoTitle: { tr: "İletişim Bilgilerim", en: "Contact Information" },
        infoSubtitle: { tr: "Aşağıdaki kanallardan bana ulaşabilirsiniz.", en: "You can reach me through the channels below." },
        formTitle: { tr: "Bana Mesaj Gönderin", en: "Send Me a Message" },
        formSubtitle: { tr: "Formu doldurarak soru ve önerilerinizi iletebilirsiniz.", en: "Fill out the form to send your questions and suggestions." },
        nameLabel: { tr: "Adınız Soyadınız", en: "Your Name" },
        emailLabel: { tr: "E-posta Adresiniz", en: "Your Email" },
        subjectLabel: { tr: "Konu", en: "Subject" },
        messageLabel: { tr: "Mesajınız", en: "Your Message" },
        messagePlaceholder: { tr: "Mesajınızı buraya yazın...", en: "Type your message here..." },
        submitBtn: { tr: "Mesajı Gönder", en: "Send Message" },
        submitting: { tr: "Gönderiliyor...", en: "Sending..." },
        successMsg: { tr: "Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.", en: "Your message was sent successfully! I'll get back to you soon." },
        errorMsg: { tr: "Mesajınız gönderilirken bir hata oluştu.", en: "An error occurred while sending your message." },
        networkError: { tr: "Ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.", en: "A network error occurred. Please check your connection and try again." },
        location: { tr: "Selçuklu/Konya, Türkiye", en: "Selçuklu/Konya, Turkey" },
    },

    // === FOOTER ===
    footer: {
        copyright: { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
    },
} as const;

// Helper type for accessing translations
export type TranslationKey = keyof typeof translations;
