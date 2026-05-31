"use client";

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      // BG sekarang berubah: dari gradient pink jadi gelap saat dark mode aktif
      className="relative py-20 md:py-32 bg-gradient-to-tr from-pink-100 via-rose-50 to-pink-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-500 overflow-hidden selection:bg-pink-300/50"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* SISI KIRI: Efek Glassmorphism yang beradaptasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center relative min-h-[300px] md:min-h-[400px]"
          >
            <div className="relative p-12 rounded-[40px] bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md border border-pink-200/60 dark:border-zinc-800 shadow-xl shadow-pink-300/30 dark:shadow-black/20 text-center max-w-sm w-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-300 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-pink-100/80 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-pink-200 dark:border-zinc-700"
              >
                <Heart className="h-12 w-12 text-pink-500 fill-pink-400/30" />
              </motion.div>
              
              <h3 className="font-display font-bold text-xl text-pink-600 dark:text-pink-400 mb-2">Creative & Passionate</h3>
              <p className="text-sm text-rose-900/60 dark:text-zinc-400 font-medium">Terus mengasah kreativitas dan belajar hal baru setiap hari.</p>
            </div>
          </motion.div>

          {/* SISI KANAN: Teks Intro */}
          <div className="space-y-6 text-left">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white mb-2">
              Mimpi Besar & <br />
              <span className="text-pink-600 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Semangat Belajar
              </span>
            </h2>

            <div className="space-y-4 text-rose-900/70 dark:text-zinc-300 font-medium leading-relaxed">
              <p>
                Halo, aku <span className="text-pink-600 font-bold dark:text-pink-400">Cut Mahira Az-Zahra 🎀</span>. 
                Lahir pada 08 Januari 2010 dan saat ini sedang menempuh pendidikan di <span className="text-pink-600 font-bold dark:text-pink-400">MAN 1 Banda Aceh</span>.
              </p>
              <p>
                Aku adalah pribadi yang aktif dan suka mencoba hal-hal baru. Menari dan jalan-jalan adalah caraku untuk berekspresi dan mencari inspirasi.
              </p>
            </div>

            {/* Quote Box */}
            <div className="pl-4 border-l-4 border-pink-400 my-6 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm py-3 pr-3 rounded-r-xl shadow-sm">
              <p className="italic text-pink-700 dark:text-pink-300 font-semibold leading-relaxed">
                "Setiap pengalaman adalah bekal berharga untuk masa depan. 🎀✨️"
              </p>
            </div>

            {/* Grid Bawah */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-pink-100/80 dark:border-zinc-800 rounded-2xl text-center shadow-sm">
                <GraduationCap className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <p className="font-display text-xl font-bold text-gray-800 dark:text-white">Kelas 10</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500 mt-1">MAN 1 Banda Aceh</p>
              </div>

              <div className="p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-pink-100/80 dark:border-zinc-800 rounded-2xl text-center shadow-sm">
                <MapPin className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <p className="font-display text-xl font-bold text-gray-800 dark:text-white">Aceh</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500 mt-1">Tempat Tinggal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}