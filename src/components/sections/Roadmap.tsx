
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { roadmap } from '../../data/roadmap';
import { CheckCircle2, Clock, CircleDashed } from 'lucide-react';
import { motion } from 'framer-motion';

export function Roadmap() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'done': return <CheckCircle2 className="text-[#2DBE60] w-6 h-6 bg-white rounded-full" />;
      case 'in-progress': return <Clock className="text-[#f59e0b] w-6 h-6 bg-white rounded-full" />;
      case 'planned': return <CircleDashed className="text-[#d2d2d7] w-6 h-6 bg-white rounded-full" />;
      default: return null;
    }
  };

  return (
    <section id="roadmap" className="py-24 md:py-32 bg-[#f0faf4] overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Roadmap Pengembangan" 
            subtitle="EchoMind dikembangkan secara iteratif menggunakan metodologi Scrum selama 10–12 minggu."
          />
        </AnimatedSection>

        <div className="mt-20 lg:mt-24">
          <div className="relative border-l-2 border-[#d2d2d7] ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex md:justify-between md:pt-10 space-y-12 md:space-y-0">
            {/* Animated Line for Desktop */}
            <div className="hidden md:block absolute top-[-2px] left-0 h-[2px] bg-[#2DBE60] z-0" style={{ width: '0%' }}>
               <motion.div 
                 initial={{ width: '0%' }}
                 whileInView={{ width: '30%' }} // Represents sprint 1 progress
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                 className="h-full bg-[#2DBE60]"
               />
            </div>

            {roadmap.map((sprint, idx) => (
              <AnimatedSection key={sprint.id} delay={idx * 150} className="relative pl-8 md:pl-0 md:w-[15%]">
                {/* Dot */}
                <div className="absolute left-[-13px] md:left-1/2 md:-top-[54px] md:-translate-x-1/2 bg-[#f0faf4] p-1 z-10">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring" }}>
                    {getStatusIcon(sprint.status)}
                  </motion.div>
                </div>
                
                <div className="md:text-center mt-[-4px] md:mt-0">
                  <h4 className="text-[18px] font-bold text-[#171717] mb-2">{sprint.name}</h4>
                  <p className="text-[14px] text-[#5e5e5e] leading-relaxed">{sprint.focus}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
