import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "animation"> {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-right' | 'slide-left';
  delay?: number;
  duration?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  ...props
}: AnimatedSectionProps) {
  
  const getVariants = () => {
    switch(animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={getVariants()}
      transition={{ 
        duration, 
        delay: delay / 1000, // delay is in ms, convert to seconds
        type: "spring",
        stiffness: 70,
        damping: 20
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
