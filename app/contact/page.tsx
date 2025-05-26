// app/contact/page.tsx
"use client"; // Form etkileşimi için

import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast"; // Eğer toast kullanmak isterseniz

const ContactPage = () => {
  // const { toast } = useToast(); // Eğer toast kullanmak isterseniz
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    // Burada bir backend'e (örneğin Netlify Functions, Vercel Serverless Functions, Formspree, vb.)
    // veya bir e-posta gönderme servisine (EmailJS vb.) istek yapmanız gerekecek.
    // Bu örnekte sadece bir gecikme simüle edilmiştir.
    try {
      // ÖRNEK: Gerçek bir API çağrısı yerine simülasyon
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Mesaj gönderilemedi.');
      // const result = await response.json();

      await new Promise(resolve => setTimeout(resolve, 2000)); // Simülasyon
      console.log("Form verileri:", formData); // Konsola yazdırma

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Formu temizle
      // toast({ title: "Mesajınız başarıyla gönderildi!", description: "En kısa sürede geri dönüş yapacağım." });
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitError("Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      // toast({ title: "Hata!", description: "Mesajınız gönderilemedi.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">İletişim</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Benimle iletişime geçmekten çekinmeyin!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-6">
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
                  {/* LinkedIn profil linkinizi buraya ekleyin */}
                  <a href="https://www.linkedin.com/in/nurullah-kurnaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
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
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
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
                {submitSuccess && (
                  <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-md">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.
                  </div>
                )}
                {submitError && (
                  <div className="text-red-600 bg-red-100 p-3 rounded-md">
                    {submitError}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
