

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''} max-w-[800px] ${className}`}>
      <h2 className="text-[32px] sm:text-[36px] md:text-[48px] lg:text-[53px] font-bold text-[#171717] leading-[1.1] tracking-tighter-heading mb-6 break-words">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[21px] text-[#5e5e5e] leading-[1.3] font-medium tracking-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
