"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, Cpu, Terminal, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const aboutData = translations.about;

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-16 max-w-4xl pb-20">
      {/* --- GİRİŞ --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("about", "title")}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t("about", "bio")}
        </p>
      </motion.section>

      {/* --- İŞ DENEYİMİ (Timeline) --- */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="p-2 bg-blue-500/20 rounded-full">
            <Briefcase className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t("about", "experienceTitle")}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="space-y-8">
            {aboutData.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute left-2.5 top-6 w-3.5 h-3.5 bg-blue-400 rounded-full border-4 border-background z-10"
                />

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-400/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title[lang]}</CardTitle>
                        <p className="text-blue-400 font-medium">{typeof exp.company === 'string' ? exp.company : exp.company[lang]}</p>
                      </div>
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300 shrink-0">
                        {exp.period[lang]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{exp.description[lang]}</p>
                    <ul className="list-disc list-inside text-sm space-y-1.5 ml-1 text-muted-foreground">
                      {exp.bullets[lang].map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EĞİTİM --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-full">
            <GraduationCap className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {t("about", "educationTitle")}
          </h2>
        </div>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-green-400/30 transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-start flex-col md:flex-row gap-2">
              <div>
                <CardTitle className="text-xl">{aboutData.education.degree[lang]}</CardTitle>
                <p className="text-green-400 font-medium">{aboutData.education.school[lang]}</p>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="border-green-400/30 text-green-300">{aboutData.education.period[lang]}</Badge>
                <p className="text-sm text-muted-foreground mt-1">GPA: {aboutData.education.gpa}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <strong>{lang === "tr" ? "İlgili Dersler:" : "Related Courses:"}</strong> {aboutData.education.courses[lang]}
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* --- TEKNİK YETENEKLER --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-full">
            <Code2 className="h-6 w-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("about", "skillsTitle")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(aboutData.skillCategories).map(([key, category], catIndex) => {
            const icons: Record<string, React.ReactNode> = {
              aiMl: <Cpu className="h-5 w-5 text-blue-400" />,
              dev: <Terminal className="h-5 w-5 text-green-400" />,
              robotics: <Cpu className="h-5 w-5 text-purple-400" />,
              languages: <Code2 className="h-5 w-5 text-pink-400" />,
            };

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className={`space-y-3 ${key === "robotics" ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {icons[key]}
                  <h3 className="font-medium text-foreground">{category.title[lang]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                      <Badge variant="secondary" className="bg-card/80 border border-border/50 hover:border-purple-400/30 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* --- DİLLER --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/20 rounded-full">
            <Globe2 className="h-6 w-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("about", "languagesTitle")}
          </h2>
        </div>

        <div className="flex gap-4">
          {aboutData.languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-400/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-foreground">{language.name[lang]}</p>
                  <p className="text-sm text-cyan-400">{language.level[lang]}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}