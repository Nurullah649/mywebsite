// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Shadcn/ui Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn/ui Textarea
import { Label } from "@/components/ui/label"; // Shadcn/ui Label
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage(null);

    try {
      // Formspree endpoint URL'si sizin verdiğiniz link ile güncellendi.
      const response = await fetch("https://formspree.io/f/mjkwqpdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Formu temizle
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setSubmitMessage(data.errors ? data.errors.map((error: any) => error.message).join(", ") : "Mesajınız gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitStatus("error");
      setSubmitMessage("Mesajınız gönderilirken bir ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-900 mb-6">İletişime Geç</h1>
            <p className="text-xl text-blue-700 mb-8">
              Bir proje fikriniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Bana ulaşın!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>İletişim Bilgilerim</CardTitle>
                  <CardDescription>Aşağıdaki kanallardan bana ulaşabilirsiniz.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href="mailto:nurullahkurnaz47@gmail.com" className="flex items-center group">
                    <Mail className="mr-3 h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">nurullahkurnaz47@gmail.com</span>
                  </a>
                  <a href="tel:5550265947" className="flex items-center group">
                    <Phone className="mr-3 h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">+90 555 026 5947</span>
                  </a>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">Selçuklu/Konya, Türkiye</span>
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/Nurullah649" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/nurullah-kurnaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Bana Mesaj Gönderin</CardTitle>
                  <CardDescription>Sorularınız, önerileriniz veya işbirliği teklifleriniz için formu doldurabilirsiniz.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Adınız Soyadınız</Label>
                      <Input id="name" name="name" type="text" placeholder="Adınız Soyadınız" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="email">E-posta Adresiniz</Label>
                      <Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="subject">Konu</Label>
                      <Input id="subject" name="subject" type="text" placeholder="Konu" required value={formData.subject} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea id="message" name="message" placeholder="Mesajınızı buraya yazın..." required rows={5} value={formData.message} onChange={handleChange} />
                    </div>
                    <div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Mesajı Gönder
                          </>
                        )}
                      </Button>
                    </div>
                    {submitStatus === "success" && (
                      <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-md">
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        {submitMessage}
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-md">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
