
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Play, Activity, Brain, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Putar Musik',
      desc: 'Dengarkan musik dari platform favoritmu seperti biasa — Spotify, YouTube Music, atau pemutar lokal.',
      icon: <Play className="w-6 h-6" />
    },
    {
      num: '02',
      title: 'Deteksi Otomatis',
      desc: 'EchoMind mendeteksi lagu yang sedang diputar melalui notification system dalam waktu kurang dari 3 detik.',
      icon: <Activity className="w-6 h-6" />
    },
    {
      num: '03',
      title: 'Analisis AI',
      desc: 'Mood Classification Engine menganalisis karakter emosional lagu menggunakan rule-based mapping dan ML.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      num: '04',
      title: 'Dapatkan Insight',
      desc: 'Dashboard diperbarui real-time. Lihat pola emosimu, terima rekomendasi musik, dan catat refleksi harianmu.',
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Bagaimana EchoMind Bekerja" 
            subtitle="Dari memutar musik hingga memahami emosimu — hanya 4 langkah sederhana."
          />
        </AnimatedSection>

        <div className="mt-24 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-[#d2d2d7] z-0 overflow-hidden">
             <motion.div 
               initial={{ x: '-100%' }}
               whileInView={{ x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="w-full h-full bg-[#2DBE60]"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <AnimatedSection key={idx} animation="slide-left" delay={idx * 200}>
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-36 h-36 rounded-full bg-[#f0faf4] border-2 border-[#e6f7ed] flex items-center justify-center relative mb-8 hover:border-[#5CD88A] transition-colors bg-white cursor-default"
                  >
                    <span className="text-[64px] font-bold text-[#2DBE60] opacity-[0.08] absolute font-satoshi transition-opacity">
                      {step.num}
                    </span>
                    <div className="text-[#2DBE60] relative z-10">
                      {step.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-[21px] font-bold text-[#171717] mb-3">{step.title}</h3>
                  <p className="text-[15px] text-[#5e5e5e] leading-relaxed max-w-[280px]">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
