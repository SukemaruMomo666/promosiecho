
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-[#e6f7ed]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Musik Memengaruhi Emosimu, Tapi Siapa yang Membantu Kamu Memahaminya?" 
          />
        </AnimatedSection>
        
        <div className="space-y-8 text-[18px] md:text-[21px] text-[#171717] leading-relaxed font-medium mt-12">
          <AnimatedSection delay={100}>
            <p>
              Musik telah menjadi bagian yang tak terpisahkan dari kehidupan sehari-hari. Kita menggunakannya untuk menenangkan diri, meningkatkan semangat, menemani kesedihan, atau sekadar meningkatkan fokus saat bekerja.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p>
              Namun, platform streaming saat ini hanya fokus pada <span className="text-[#2DBE60] font-bold">apa yang ingin kamu dengar</span>, bukan pada <span className="text-[#2DBE60] font-bold">bagaimana perasaanmu</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p>
              Padahal, lagu-lagu yang kamu dengarkan setiap hari membentuk sebuah peta emosional yang berharga. Sebagian besar orang tidak menyadari pola ini, kehilangan kesempatan untuk merefleksikan diri dan memahami perubahan emosi mereka sendiri.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400} className="mt-20 pt-16 border-t border-[#5CD88A]/30 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <div className="text-[53px] md:text-[72px] font-bold text-[#2DBE60] leading-none mb-6 tracking-tighter-heading">
                1 dari 7
              </div>
              <p className="text-[15px] md:text-[18px] text-[#5e5e5e] uppercase tracking-wider font-bold">
                Remaja mengalami gangguan kesehatan mental<br/><span className="text-[13px] text-[#5e5e5e]/70 mt-2 block">(WHO, 2024)</span>
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
