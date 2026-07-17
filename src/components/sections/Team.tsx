
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { team } from '../../data/team';
import { motion } from 'framer-motion';

export function Team() {
  // Background colors that match EchoMind's visual identity (light greens and grays)
  const bgColors = ['bg-[#f0faf4]', 'bg-[#f5f5f7]', 'bg-[#e6f7ed]'];

  return (
    <section id="team" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Tim di Balik EchoMind" 
            subtitle="Dikembangkan oleh mahasiswa Politeknik Negeri Subang sebagai solusi inovatif di bidang affective computing."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
          {team.map((member, idx) => (
            <AnimatedSection key={member.id} delay={idx * 150}>
              <div className="flex flex-col group cursor-default">
                {/* Photo Container */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-full aspect-square md:aspect-[4/5] ${bgColors[idx % bgColors.length]} overflow-hidden mb-6 flex items-end justify-center`}
                >
                  {member.photoUrl ? (
                    <img 
                      src={member.photoUrl} 
                      alt={member.name} 
                      className="w-[90%] h-[90%] object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[64px] text-[#2DBE60]/20 font-bold">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </motion.div>
                
                {/* Info Container */}
                <div>
                  <h3 className="text-[21px] md:text-[24px] font-bold text-[#171717] mb-1 leading-snug">{member.name}</h3>
                  <div className="text-[14px] md:text-[15px] text-[#5e5e5e] uppercase tracking-wider font-semibold">{member.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
