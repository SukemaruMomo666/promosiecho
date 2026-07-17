import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-[15px] font-medium transition-colors duration-200 rounded-[9999px] outline-none cursor-pointer select-none';
  
  const variants = {
    primary: 'bg-[#2DBE60] text-white hover:bg-[#26A854] shadow-sm shadow-[#2DBE60]/20',
    secondary: 'bg-white text-[#171717] border border-[#171717] hover:bg-gray-50'
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
