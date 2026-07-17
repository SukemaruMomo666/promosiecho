
import { motion } from 'framer-motion';

export function Footer() {
  const footerLinks = [
    { name: 'Fitur', href: '#features' },
    { name: 'Cara Kerja', href: '#how-it-works' },
    { name: 'Teknologi', href: '#tech-stack' },
    { name: 'Tim', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-white border-t border-[#d2d2d7]/50 pt-16 pb-8 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand & Description */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/echomind-logo.png" alt="EchoMind Icon" className="h-6 w-auto grayscale opacity-70" />
            <span className="text-[#171717] font-bold tracking-tight text-[16px]">echomind</span>
          </div>
          <p className="text-[14px] text-[#5e5e5e] leading-relaxed">
            Membantu Anda memahami pola emosional melalui analisis kebiasaan mendengarkan musik sehari-hari.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[14px] font-bold text-[#171717] uppercase tracking-wider mb-2">Navigasi</h4>
          {footerLinks.map((link) => (
            <motion.a 
              whileHover={{ x: 2 }}
              key={link.name}
              href={link.href}
              className="text-[14px] text-[#5e5e5e] hover:text-[#2DBE60] transition-colors w-max"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Contact/Institution Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[14px] font-bold text-[#171717] uppercase tracking-wider mb-2">Institusi</h4>
          <p className="text-[14px] text-[#5e5e5e] leading-relaxed">
            Politeknik Negeri Subang<br />
            Subang, Jawa Barat<br />
            Indonesia
          </p>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-[#d2d2d7]/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[13px] text-[#5e5e5e] text-center md:text-left">
          &copy; 2026 EchoMind Project. Hak cipta dilindungi.
        </div>
        <div className="text-[13px] text-[#5e5e5e]">
          Desain & Pengembangan untuk keperluan akademis.
        </div>
      </div>
    </footer>
  );
}
