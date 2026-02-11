"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Trophy, ArrowRight, Cpu, Code2, Globe, Brain, Zap, Award } from "lucide-react";
import DinoGame from "@/components/DinoGame";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemFadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const HomePage = () => {
  const { t, lang } = useLanguage();

  const featuredProjects = translations.featuredProjects.projects;
  const skillCategories = translations.skills.categories;

  const projectIcons = [
    <Cpu key="cpu" className="h-6 w-6 text-blue-400" />,
    <Globe key="globe" className="h-6 w-6 text-purple-400" />,
    <Code2 key="code" className="h-6 w-6 text-pink-400" />,
  ];

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center p-4">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="container grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Sol Taraf */}
          <motion.div variants={itemFadeInUp} className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div>
              <Badge variant="outline" className="mb-4 border-blue-500/50 text-blue-400 px-4 py-1 backdrop-blur-sm">
                {t("hero", "badge")}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-foreground">{t("hero", "greeting")}</span>
                <br />
                {"NURULLAH KURNAZ".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                    className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                    style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.15, rotateY: 360, transition: { duration: 0.4 } }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero", "description")}
            </p>

            {/* Animated Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[Brain, Cpu, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                >
                  <Icon size={28} className="text-blue-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Social */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/50 border border-border/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300">
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/nurullah-kurnaz-49393924a/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-card/50 border border-border/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="mailto:nurullahkurnaz47@gmail.com" className="p-2.5 rounded-full bg-card/50 border border-border/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25" asChild>
                <a href="/projects">{t("hero", "projectsBtn")} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 hover:border-blue-400/50 backdrop-blur-sm" asChild>
                <a href="/contact">{t("hero", "contactBtn")}</a>
              </Button>
            </div>
          </motion.div>

          {/* Sağ Taraf: Dino Game */}
          <motion.div variants={itemFadeInUp} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 animate-glow-pulse"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-xl overflow-hidden">
                <DinoGame />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto p-4 md:p-8 space-y-24 pb-20">

        {/* --- BAŞARILAR / SERTİFİKALAR --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-400/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy className="h-32 w-32" />
            </div>
            <div className="flex justify-center gap-3 mb-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">{t("achievements", "badge")}</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t("achievements", "title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              {t("achievements", "description")}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="h-5 w-5 text-yellow-400" />
              <p className="text-sm text-yellow-400/80">{t("achievements", "innovationAward")}</p>
            </div>
            <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10" asChild>
              <a href="/projects">{t("achievements", "detailsBtn")}</a>
            </Button>
          </div>
        </motion.section>

        {/* --- ÖNE ÇIKAN PROJELER --- */}
        <section>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {t("featuredProjects", "title")}
            </motion.h2>
            <p className="text-muted-foreground">{t("featuredProjects", "subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <div className="mb-2 p-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 w-fit rounded-lg">
                      {projectIcons[index]}
                    </div>
                    <CardTitle className="text-foreground group-hover:text-blue-400 transition-colors duration-300">
                      {project.title[lang]}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.desc[lang]}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2 relative">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-400/20">
                        {tag}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="ghost" className="text-blue-400 hover:text-blue-300" asChild>
              <a href="/projects">{t("featuredProjects", "viewAll")} <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </section>

        {/* --- TEKNİK YETENEKLER (Skill Bars) --- */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {t("skills", "title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-5 text-center flex items-center justify-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  {category.category[lang]}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.08 + 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-purple-400 to-pink-400 h-1.5 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;