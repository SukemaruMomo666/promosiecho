import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#d2d2d7] py-6">
      <button 
        className="flex w-full items-center justify-between text-left focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-[18px] md:text-[21px] font-bold text-[#171717] pr-8">{question}</span>
        <span className="flex-shrink-0 text-[#2DBE60]">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[15px] text-[#5e5e5e] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
