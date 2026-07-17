
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { techStack } from '../../data/techStack';
import { motion } from 'framer-motion';

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-[#f9f9fb]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Dibangun dengan Teknologi Modern" 
            subtitle="EchoMind mengkombinasikan teknologi mobile, kecerdasan buatan, dan analisis data dalam satu ekosistem yang terintegrasi."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {techStack.map((tech, idx) => (
            <AnimatedSection key={tech.id} delay={idx * 100}>
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-6 bg-white rounded-[16px] border border-[#d2d2d7]/50 hover:border-[#2DBE60]/50 transition-colors hover:shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f0faf4] text-[#2DBE60] flex items-center justify-center">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#171717]">{tech.name}</h3>
                  <div className="text-[13px] text-[#2DBE60] font-medium mb-2">{tech.category}</div>
                  <p className="text-[14px] text-[#5e5e5e] leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
