
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white border border-[#171717] rounded-[16px] p-8 hover:shadow-lg hover:shadow-black/5 transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
