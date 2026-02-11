"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, FormEvent } from 'react';
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/mjkwqpdd", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(t("contact", "successMsg"));
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setSubmitMessage(data.errors ? data.errors.map((error: any) => error.message).join(", ") : t("contact", "errorMsg"));
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(t("contact", "networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: "nurullahkurnaz47@gmail.com", href: "mailto:nurullahkurnaz47@gmail.com", color: "from-red-400 to-pink-400" },
    { icon: Github, label: "GitHub", href: "https://github.com/Nurullah649", color: "from-gray-400 to-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nurullah-kurnaz-49393924a/", color: "from-blue-400 to-blue-600" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12">
      {/* Hero */}
      <section className="container text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6">
            {t("contact", "title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("contact", "subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-400/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{t("contact", "infoTitle")}</CardTitle>
                <CardDescription>{t("contact", "infoSubtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="text-blue-400 shrink-0" size={20} />
                  <span>{t("contact", "location")}</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-blue-400/40 transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20`}>
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-400/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{t("contact", "formTitle")}</CardTitle>
                <CardDescription>{t("contact", "formSubtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">{t("contact", "nameLabel")}</Label>
                    <Input id="name" name="name" type="text" placeholder={t("contact", "nameLabel")} required value={formData.name} onChange={handleChange} className="bg-background/50 border-border/50 focus:border-blue-400/50" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t("contact", "emailLabel")}</Label>
                    <Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required value={formData.email} onChange={handleChange} className="bg-background/50 border-border/50 focus:border-blue-400/50" />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t("contact", "subjectLabel")}</Label>
                    <Input id="subject" name="subject" type="text" placeholder={t("contact", "subjectLabel")} required value={formData.subject} onChange={handleChange} className="bg-background/50 border-border/50 focus:border-blue-400/50" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t("contact", "messageLabel")}</Label>
                    <Textarea id="message" name="message" placeholder={t("contact", "messagePlaceholder")} required rows={5} value={formData.message} onChange={handleChange} className="bg-background/50 border-border/50 focus:border-blue-400/50 resize-none" />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0" disabled={isSubmitting}>
                      {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("contact", "submitting")}</>) : (<><Send className="mr-2 h-4 w-4" /> {t("contact", "submitBtn")}</>)}
                    </Button>
                  </div>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center p-3 rounded-lg text-sm ${submitStatus === 'success' ? 'bg-green-500/10 text-green-400 border border-green-400/20' : 'bg-red-500/10 text-red-400 border border-red-400/20'}`}
                    >
                      {submitStatus === 'success' ? <CheckCircle2 className="mr-2 h-5 w-5 shrink-0" /> : <AlertTriangle className="mr-2 h-5 w-5 shrink-0" />}
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
