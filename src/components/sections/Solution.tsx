
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Activity, Smartphone, BarChart3 } from 'lucide-react';

export function Solution() {
  const values = [
    {
      title: "Analisis Pasif",
      desc: "Tidak perlu input manual berlebihan, cukup dengarkan musik seperti biasa.",
      icon: <Activity className="w-8 h-8 text-[#2DBE60] mb-6" />
    },
    {
      title: "Multi-Platform",
      desc: "Bekerja secara universal dengan Spotify, YouTube Music, dan pemutar lokal.",
      icon: <Smartphone className="w-8 h-8 text-[#2DBE60] mb-6" />
    },
    {
      title: "Insight Berbasis Data",
      desc: "Pola emosi divisualisasikan secara objektif, bukan sekadar tebakan.",
      icon: <BarChart3 className="w-8 h-8 text-[#2DBE60] mb-6" />
    }
  ];

  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            title="EchoMind: Teman Analisis Emosional Berbasis Musik" 
            subtitle="Bukan platform streaming. Bukan alat diagnosis. EchoMind adalah emotional analytics companion yang bekerja di atas platform musik favoritmu."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {values.map((value, idx) => (
            <AnimatedSection key={idx} delay={idx * 150}>
              <Card className="h-full bg-[#f0faf4] border-[#e6f7ed] hover:border-[#2DBE60] group transition-colors flex flex-col justify-center text-center items-center md:items-start md:text-left">
                {value.icon}
                <h3 className="text-[21px] font-bold text-[#171717] mb-3">{value.title}</h3>
                <p className="text-[15px] text-[#5e5e5e] leading-relaxed">{value.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-24 overflow-x-auto pb-6">
          <div className="min-w-[700px] max-w-[900px] mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#171717]">
                  <th className="py-4 px-6 text-[16px] font-bold text-[#171717] w-[25%]">Aspek</th>
                  <th className="py-4 px-6 text-[16px] font-bold text-[#5e5e5e] w-[37.5%]">Tanpa EchoMind</th>
                  <th className="py-4 px-6 text-[16px] font-bold text-[#2DBE60] w-[37.5%]">Dengan EchoMind</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/50">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-6 text-[15px] font-bold text-[#171717]">Analisis Emosi</td>
                  <td className="py-6 px-6 text-[15px] text-[#5e5e5e] leading-relaxed">Subjektif, tidak terstruktur</td>
                  <td className="py-6 px-6 text-[15px] text-[#171717] font-medium leading-relaxed">Visualisasi pola emosi berkelanjutan</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-6 text-[15px] font-bold text-[#171717]">Pemilihan Musik</td>
                  <td className="py-6 px-6 text-[15px] text-[#5e5e5e] leading-relaxed">Berdasarkan preferensi atau pencarian manual</td>
                  <td className="py-6 px-6 text-[15px] text-[#171717] font-medium leading-relaxed">Rekomendasi adaptif sesuai kondisi emosional</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-6 text-[15px] font-bold text-[#171717]">Self-Awareness</td>
                  <td className="py-6 px-6 text-[15px] text-[#5e5e5e] leading-relaxed">Dilakukan secara mandiri dan sering terlewatkan</td>
                  <td className="py-6 px-6 text-[15px] text-[#171717] font-medium leading-relaxed">Mood journal + emotional insight harian otomatis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
