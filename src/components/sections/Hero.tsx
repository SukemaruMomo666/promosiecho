
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PhoneMockup } from '../ui/PhoneMockup';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Hero() {
  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('how-it-works');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2DBE60] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          <div className="flex-1 text-center lg:text-left z-10 w-full">
            <AnimatedSection animation="fade-up" delay={100}>
              <Badge className="mb-8 bg-[#f0faf4] border-[#5CD88A]/30 text-[#2DBE60] px-4 py-1.5 text-[14px]">
                🎵 Music-Based Emotional Analytics
              </Badge>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-[36px] sm:text-[42px] md:text-[54px] lg:text-[72px] xl:text-[84px] font-bold text-[#000000] leading-[1.05] tracking-tighter-display mb-8 break-words">
                Pahami Emosimu Melalui Musik yang Kamu Dengarkan
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-[18px] md:text-[21px] text-[#5e5e5e] leading-[1.5] max-w-2xl mx-auto lg:mx-0 mb-12 font-medium">
                EchoMind menganalisis kebiasaan mendengarkan musikmu dari platform favorit — mengungkap pola emosional yang tersembunyi di balik playlist harianmu.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/app-release.apk" download="EchoMind-App.apk" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto shadow-lg shadow-[#2DBE60]/20 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Aplikasi (APK)
                </Button>
              </a>
              <a href="#how-it-works" onClick={handleScrollToHowItWorks} className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto shadow-lg shadow-[#2DBE60]/20">
                  Lihat Cara Kerja
                </Button>
              </a>
            </AnimatedSection>
          </div>

          <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-none relative">
            <AnimatedSection animation="fade-up" delay={500} className="lg:translate-x-12 xl:translate-x-20">
              <PhoneMockup 
                imageSrc="/images/first-look.png" 
                isAutoScroll={false} 
              />
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
