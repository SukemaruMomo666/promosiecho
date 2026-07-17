
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  title?: string;
  className?: string;
}

export function PhoneMockup({ title = 'App Preview', className = '' }: PhoneMockupProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative w-full max-w-[280px] h-[580px] rounded-[36px] border-[8px] border-[#171717] bg-[#f5f5f7] overflow-hidden flex flex-col mx-auto shadow-2xl shadow-black/10 ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-32 h-6 bg-[#171717] rounded-b-[16px]"></div>
      </div>
      
      {/* Content Placeholder */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center mt-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#e6f7ed] flex items-center justify-center mb-6">
          <span className="text-[#2DBE60] font-bold text-2xl font-satoshi">e</span>
        </div>
        <h3 className="text-[18px] font-bold text-[#171717] mb-2">{title}</h3>
        <p className="text-[13px] text-[#5e5e5e] mb-8 leading-relaxed">
          Desain aplikasi sedang dalam tahap pengembangan. Screenshot akan segera tersedia.
        </p>
        
        {/* Wireframe lines */}
        <div className="w-full space-y-4">
          <div className="h-24 bg-white rounded-xl border border-[#d2d2d7]/50 shadow-sm"></div>
          <div className="h-16 bg-white rounded-xl border border-[#d2d2d7]/50 shadow-sm opacity-70"></div>
          <div className="h-16 bg-white rounded-xl border border-[#d2d2d7]/50 shadow-sm opacity-40"></div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </motion.div>
  );
}
