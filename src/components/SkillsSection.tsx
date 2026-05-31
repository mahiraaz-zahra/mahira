import { motion } from 'framer-motion';

const skills = {
  socialStudies: [
    { name: 'Sosiologi', level: 95 },
    { name: 'Geografi', level: 92 },
    { name: 'Sejarah', level: 90 },
    { name: 'Ekonomi', level: 88 },
  ],
  languages: [
    { name: 'Bahasa Indonesia', level: 95 },
    { name: 'Bahasa Inggris', level: 88 },
    { name: 'Sastra', level: 85 },
  ],
  general: [
    { name: 'Matematika (Wajib)', level: 80 },
    { name: 'PPKn', level: 92 },
    { name: 'Seni Budaya', level: 85 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
        <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">{level}%</span>
      </div>
      <div className="h-2 bg-pink-100 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    /* Perubahan Utama: Menambahkan bg-pink-50 di tag <section> paling luar */
    <section id="skills" className="py-20 md:py-32 bg-pink-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-500 font-medium mb-2 block uppercase tracking-wider text-sm">Akademik</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            Kuasai Mata Pelajaran
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Kelompok IPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all border border-pink-200/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">Ilmu Pengetahuan Sosial</h3>
            </div>
            <div className="space-y-4">
              {skills.socialStudies.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kelompok Bahasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all border border-pink-200/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">Bahasa & Sastra</h3>
            </div>
            <div className="space-y-4">
              {skills.languages.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kelompok Umum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all border border-pink-200/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">Pelajaran Umum</h3>
            </div>
            <div className="space-y-4">
              {skills.general.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}