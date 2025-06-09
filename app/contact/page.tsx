"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, FormEvent } from 'react';

export default function ContactPage() {
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
        setSubmitMessage("Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setSubmitMessage(data.errors ? data.errors.map((error: any) => error.message).join(", ") : "Mesajınız gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-fuchsia-50 to-blue-50 dark:from-teal-900/20 dark:via-fuchsia-900/20 dark:to-blue-900/20 animate-background-pan" style={{ backgroundSize: '400% 400%' }} />

      {/* Hero Section */}
      <section className="container text-center mb-16">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animated-gradient-text mb-6">İletişime Geç</h1>
            <p className="text-xl text-muted-foreground">
              Bir proje fikriniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Bana ulaşın!
            </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle>İletişim Bilgilerim</CardTitle>
                <CardDescription>Aşağıdaki kanallardan bana ulaşabilirsiniz.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="mailto:nurullahkurnaz47@gmail.com" className="flex items-center group gap-3"><Mail className="text-primary" /><span>nurullahkurnaz47@gmail.com</span></a>
                <div className="flex items-center gap-3"><MapPin className="text-primary" /><span>Selçuklu/Konya, Türkiye</span></div>
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="icon" asChild><a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a></Button>
                  <Button variant="outline" size="icon" asChild><a href="https://linkedin.com/in/nurullah-kurnaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardHeader><CardTitle>Bana Mesaj Gönderin</CardTitle><CardDescription>Formu doldurarak soru ve önerilerinizi iletebilirsiniz.</CardDescription></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div><Label htmlFor="name">Adınız Soyadınız</Label><Input id="name" name="name" type="text" placeholder="Adınız Soyadınız" required value={formData.name} onChange={handleChange} /></div>
                  <div><Label htmlFor="email">E-posta Adresiniz</Label><Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required value={formData.email} onChange={handleChange} /></div>
                  <div><Label htmlFor="subject">Konu</Label><Input id="subject" name="subject" type="text" placeholder="Konu" required value={formData.subject} onChange={handleChange} /></div>
                  <div><Label htmlFor="message">Mesajınız</Label><Textarea id="message" name="message" placeholder="Mesajınızı buraya yazın..." required rows={5} value={formData.message} onChange={handleChange} /></div>
                  <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gönderiliyor...</>) : (<><Send className="mr-2 h-4 w-4" /> Mesajı Gönder</>)}
                    </Button>
                  </div>
                  {submitStatus && (
                    <div className={`flex items-center p-3 rounded-md text-sm ${submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {submitStatus === 'success' ? <CheckCircle2 className="mr-2 h-5 w-5" /> : <AlertTriangle className="mr-2 h-5 w-5" />}
                        {submitMessage}
                    </div>
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
