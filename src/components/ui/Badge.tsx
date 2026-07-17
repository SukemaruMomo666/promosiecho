

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-[9999px] bg-white border border-[#d2d2d7] text-[13px] text-[#5e5e5e] font-medium ${className}`}>
      {children}
    </span>
  );
}
