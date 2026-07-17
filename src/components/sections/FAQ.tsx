
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { AccordionItem } from '../ui/AccordionItem';
import { faq } from '../../data/faq';

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#f9f9fb]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Pertanyaan Umum" />
        </AnimatedSection>

        <div className="mt-16 bg-white rounded-[24px] p-6 md:p-10 border border-[#d2d2d7]/50 shadow-sm">
          {faq.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 100}>
              <AccordionItem question={item.question} answer={item.answer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
