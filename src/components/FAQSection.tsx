"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Apa saja layanan pengembangan web yang kamu tawarkan?", a: "Aku bisa membangun website portofolio, sistem manajemen (LMS/Kasir), hingga integrasi AI untuk kebutuhan bisnis/akademik." },
  { q: "Apakah kamu menerima projek freelance?", a: "Tentu! Aku terbuka untuk kolaborasi projek kecil maupun menengah. Silakan hubungi aku melalui kontak di bawah." },
  { q: "Teknologi apa yang paling sering kamu gunakan?", a: "Aku ahli menggunakan React, Next.js, Tailwind CSS, dan Supabase untuk membangun aplikasi web yang modern dan responsif." },
  { q: "Berapa lama waktu pengerjaan sebuah projek?", a: "Waktu pengerjaan bergantung pada kompleksitas fitur, tapi biasanya projek standar selesai dalam 1-2 minggu." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-pink-50/30 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-3">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Pertanyaan Umum</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-pink-100 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-pink-50/50 transition-colors"
              >
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{faq.q}</span>
                {openIndex === index ? <Minus className="h-5 w-5 text-pink-500" /> : <Plus className="h-5 w-5 text-pink-500" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}