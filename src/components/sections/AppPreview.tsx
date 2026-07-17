
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { PhoneMockup } from '../ui/PhoneMockup';
import { motion } from 'framer-motion';

export function AppPreview() {
  return (
    <section id="preview" className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#2DBE60] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading 
            title="Lihat EchoMind dalam Aksi" 
            subtitle="Desain antarmuka intuitif yang mengedepankan fungsionalitas dan kenyamanan."
          />
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 lg:gap-10 mt-20">
          <AnimatedSection delay={100} animation="fade-up" className="md:translate-y-12 w-full md:w-auto flex justify-center">
            <PhoneMockup title="Dashboard Emosional" />
          </AnimatedSection>
          
          <AnimatedSection delay={300} animation="fade-up" className="z-10 w-full md:w-auto flex justify-center">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }}>
              <PhoneMockup title="Klasifikasi Mood" className="md:scale-105" />
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection delay={500} animation="fade-up" className="md:translate-y-12 w-full md:w-auto flex justify-center">
            <PhoneMockup title="Rekomendasi Musik" />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={700}>
          <p className="text-center text-[13px] md:text-[14px] text-[#5e5e5e] mt-24 max-w-lg mx-auto">
            * Area di atas adalah ruang *placeholder* (App Preview). Desain aplikasi sedang dalam tahap pengembangan dan dapat berubah sewaktu-waktu.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
