
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { features } from '../../data/features';

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#f0faf4]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="Fitur yang Dirancang untuk Memahami Dirimu" 
            subtitle="Setiap fitur EchoMind dirancang untuk membantu kamu mengenali pola emosi, bukan sekadar memutar musik."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {features.map((feature, idx) => (
            <AnimatedSection key={feature.id} delay={idx * 100}>
              <Card className="h-full group hover:border-[#2DBE60] bg-white flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-14 h-14 rounded-full bg-[#e6f7ed] flex items-center justify-center mb-6 group-hover:bg-[#2DBE60] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#2DBE60] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[21px] font-bold text-[#171717] mb-3">{feature.title}</h3>
                <p className="text-[15px] text-[#5e5e5e] leading-relaxed">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
