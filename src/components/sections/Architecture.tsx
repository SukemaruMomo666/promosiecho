
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export function Architecture() {
  const layers = [
    { name: 'Presentation Layer', desc: 'React Native + Android Module', bg: 'bg-[#5CD88A]' },
    { name: 'Music Detection Layer', desc: 'Notification Listener + MediaSession', bg: 'bg-[#40CB73]' },
    { name: 'AI Analytics Layer', desc: 'Python + Scikit-learn (Hybrid)', bg: 'bg-[#2DBE60]' },
    { name: 'Data Layer', desc: 'PostgreSQL', bg: 'bg-[#26A854]' },
  ];

  return (
    <section id="architecture" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        <div className="flex-1 w-full max-w-[500px] mx-auto lg:mx-0">
          <div className="flex flex-col gap-3">
            {layers.map((layer, idx) => (
              <AnimatedSection key={idx} animation="fade-up" delay={idx * 150}>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`p-6 rounded-xl text-white shadow-sm flex flex-col justify-center items-center text-center h-24 ${layer.bg} cursor-default`}
                >
                  <div className="font-bold text-[18px]">{layer.name}</div>
                  <div className="text-[14px] opacity-90 mt-1 font-medium">{layer.desc}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left w-full">
          <AnimatedSection animation="slide-left">
            <SectionHeading 
              title="Arsitektur Sistem" 
              subtitle="Dirancang dengan arsitektur 4-layer yang modular agar setiap komponen dapat dikembangkan, diuji, dan diskalakan secara independen."
              centered={false}
              className="lg:mb-0 mx-auto lg:mx-0"
            />
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
