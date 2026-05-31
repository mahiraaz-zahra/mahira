"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100, 'Nama terlalu panjang'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email terlalu panjang'),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200, 'Subjek terlalu panjang'),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000, 'Pesan terlalu panjang'),
});

// Memperbarui data kontak sesuai request Mahira
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mahiraazzahra00@gmail.com',
    href: 'mailto:mahiraazzahra00@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 851-8417-7255',
    href: 'tel:+6285184177255',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih telah menghubungi saya. Saya akan membalas secepatnya.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* Mengubah background section utama menjadi pink-50/50 agar menyatu dengan section lainnya */
    <section id="contact" className="py-20 md:py-32 bg-pink-50/50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block uppercase tracking-wider text-sm">Kontak</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
                Mari Berkolaborasi!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk 
                menghubungi saya. Saya selalu terbuka untuk diskusi tentang project 
                baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>
            </div>

            {/* List Info Kontak dengan warna hover pink */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-pink-200/30 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-500 group-hover:bg-pink-100 transition-colors">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Form Box - Ditambahkan kecocokan border pink tipis */}
            <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-pink-200/30 rounded-2xl shadow-md">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Nama
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className={`focus-visible:ring-pink-500 ${errors.name ? 'border-destructive' : 'border-zinc-200 dark:border-zinc-800'}`}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={`focus-visible:ring-pink-500 ${errors.email ? 'border-destructive' : 'border-zinc-200 dark:border-zinc-800'}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subjek
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subjek pesan"
                  className={`focus-visible:ring-pink-500 ${errors.subject ? 'border-destructive' : 'border-zinc-200 dark:border-zinc-800'}`}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda..."
                  rows={5}
                  className={`focus-visible:ring-pink-500 ${errors.message ? 'border-destructive' : 'border-zinc-200 dark:border-zinc-800'}`}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Tombol Kirim - Diubah penuh menjadi warna Pink */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-200 shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}