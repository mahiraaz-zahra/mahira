"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/mahiraaz-zahra", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/cut.mahiraa", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      // Tambahkan class dark: agar background berubah saat mode gelap
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-pink-100 via-rose-50 to-pink-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-500 selection:bg-pink-300/50"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 animate-tilt"></div>
            <img
              src="/foto akun1.jpg"
              alt="hai, i'm mahira"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-zinc-800 shadow-xl"
            />
          </motion.div>

          <div className="max-w-xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                hai, i'm mahira
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-rose-900/60 dark:text-zinc-400 mb-8 font-medium leading-relaxed"
            >
              Saya membangun aplikasi web yang indah, fungsional, serta memberikan sentuhan interaktif dengan tampilan yang estetik.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-300/60 dark:shadow-none border border-pink-400/20 transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-pink-200 dark:border-zinc-700 text-pink-600 dark:text-pink-400 hover:bg-pink-100/50 dark:hover:bg-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-pink-100/60 dark:border-zinc-800 text-pink-500 dark:text-pink-400 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-pink-200/60 dark:border-zinc-800 shadow-md animate-bounce cursor-pointer text-pink-500 dark:text-pink-400"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}