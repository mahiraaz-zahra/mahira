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

  // Hanya menyisakan GitHub dan Instagram milikmu saja, sisanya sudah dihapus bersih
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mahiraaz-zahra", 
      label: "GitHub",
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/cut.mahiraa", 
      label: "Instagram" 
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-pink-100 via-rose-50 to-pink-200 selection:bg-pink-300/50"
    >
      {/* Background Element Effect */}
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* FOTO KIRI (Persis layout asli dengan efek border pink menyala) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="/foto akun1.jpg"
              alt="hai, i'm mahira"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>

          {/* TEXT KANAN */}
          <div className="max-w-xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                hai,     i'm mahira
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-rose-900/60 mb-8 font-medium leading-relaxed"
            >
              Saya membangun aplikasi web yang indah, fungsional, serta 
              memberikan sentuhan interaktif dengan tampilan yang estetik.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-300/60 border border-pink-400/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
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
                className="rounded-full px-8 border-pink-200 text-pink-600 hover:bg-pink-100/50 bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* SOSIAL MEDIA (Hanya Github & Instagram dengan gaya transparan) */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-pink-100/60 text-pink-500 hover:text-pink-600 hover:bg-white hover:border-pink-300 shadow-sm transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TOMBOL PANAH BAWAH */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/70 backdrop-blur-md border border-pink-200/60 shadow-md animate-bounce cursor-pointer text-pink-500 hover:text-pink-600"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}