import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      // BG INI SUDAH SAMA PERSIS 100% DENGAN CODES DI HERO SECTION KAMU
      className="relative py-20 md:py-32 bg-gradient-to-tr from-pink-100 via-rose-50 to-pink-200 overflow-hidden selection:bg-pink-300/50"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* SISI KIRI: Elemen Kaca & Heart (Bukan Foto Muka) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center relative min-h-[300px] md:min-h-[400px]"
          >
            {/* Box transparan dengan efek kaca bening (Glassmorphism) */}
            <div className="relative p-12 rounded-[40px] bg-white/70 backdrop-blur-md border border-pink-200/60 shadow-xl shadow-pink-300/30 text-center max-w-sm w-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-300 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-pink-100/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-pink-200"
              >
                <Heart className="h-12 w-12 text-pink-500 fill-pink-400/30" />
              </motion.div>
              
              <h3 className="font-display font-bold text-xl text-pink-600 mb-2">Creative & Passionate</h3>
              <p className="text-sm text-rose-900/60 font-medium">Terus mengasah kreativitas dan belajar hal baru setiap hari.</p>
            </div>

            {/* Dekorasi Bulatan Blur */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* SISI KANAN: Teks Intro, Quotes, dan Info Cards */}
          <div className="space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-gray-950 mb-2">
                Mimpi Besar & <br />
                <span className="text-pink-600 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Semangat Belajar
                </span>
              </h2>
            </motion.div>

            {/* Paragraf Perkenalan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-rose-900/70 font-medium leading-relaxed"
            >
              <p>
                Halo, aku <span className="text-pink-600 font-bold">Cut Mahira Az-Zahra</span>. Lahir pada 08 Januari 2010 dan saat ini sedang menempuh pendidikan dengan penuh semangat di <span className="text-pink-600 font-bold">MAN 1 Banda Aceh</span>, kelas 10.
              </p>
              <p>
                Aku adalah pribadi yang aktif dan suka mencoba hal-hal baru. Jalan-jalan adalah hobiku karena membuatku bisa melihat tempat baru, menambah pengalaman, dan mendapatkan banyak inspirasi. Selain itu, aku juga sangat menyukai menari, karena melalui tarian aku bisa mengekspresikan diri, melatih kepercayaan diri, dan mengembangkan kreativitas.
              </p>
            </motion.div>

            {/* Kutipan Cita-Cita (Blockquote) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pl-4 border-l-4 border-pink-400 my-6 bg-white/80 backdrop-blur-sm py-3 pr-3 rounded-r-xl shadow-sm"
            >
              <p className="italic text-pink-700 font-semibold leading-relaxed">
                "Aku percaya bahwa setiap pengalaman yang aku dapatkan hari ini akan menjadi bekal berharga untuk meraih cita-cita di masa depan. 🎀✨️"
              </p>
            </motion.div>

            {/* Bagian Grid Bawah */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Card 1: Pendidikan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-5 bg-white/80 backdrop-blur-sm border border-pink-100/80 rounded-2xl text-center shadow-sm hover:shadow-md hover:shadow-pink-300/30 transition-all duration-300"
              >
                <GraduationCap className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <p className="font-display text-xl font-bold text-gray-800">Kelas 10</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500 mt-1">MAN 1 Banda Aceh</p>
              </motion.div>

              {/* Card 2: Tempat Tinggal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-5 bg-white/80 backdrop-blur-sm border border-pink-100/80 rounded-2xl text-center shadow-sm hover:shadow-md hover:shadow-pink-300/30 transition-all duration-300"
              >
                <MapPin className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                <p className="font-display text-xl font-bold text-gray-800">Aceh</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500 mt-1">Tempat Tinggal</p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}