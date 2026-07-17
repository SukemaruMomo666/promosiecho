import { useEffect, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc?: string;
  isActive?: boolean;
  isAutoScroll?: boolean;
  onSequenceComplete?: () => void;
  className?: string;
}

export function PhoneMockup({ 
  imageSrc, 
  isActive = false, 
  isAutoScroll = false, 
  onSequenceComplete,
  className = '' 
}: PhoneMockupProps) {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeAnimationRef = useRef<any>(null);
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Function to clear all timeouts
  const clearTimeouts = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  };

  // Function to add a timeout
  const addTimeout = (fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timeoutRefs.current.push(id);
    return id;
  };

  useEffect(() => {
    // If not active or not auto-scroll, just ensure it's at the top
    if (!isAutoScroll) {
      if (scope.current) {
         animate(scope.current, { y: 0 }, { duration: 0 });
      }
      return;
    }

    if (!isActive) {
      // If it becomes inactive, reset position immediately and clear everything
      clearTimeouts();
      if (activeAnimationRef.current) {
        activeAnimationRef.current.stop();
        activeAnimationRef.current = null;
      }
      if (scope.current) {
        animate(scope.current, { y: 0 }, { duration: 0.3, ease: 'easeOut' });
      }
      return;
    }

    // Sequence for active auto-scroll
    let isCancelled = false;

    const runSequence = async () => {
      // Wait for image to be fully rendered to get accurate heights
      addTimeout(async () => {
        if (isCancelled) return;
        
        const container = containerRef.current;
        const inner = scope.current;
        
        if (!container || !inner) {
          if (onSequenceComplete) onSequenceComplete();
          return;
        }

        const maxScroll = inner.scrollHeight - container.clientHeight;
        
        // If the image is smaller than the container, don't scroll
        if (maxScroll <= 0) {
          addTimeout(() => {
            if (!isCancelled && onSequenceComplete) onSequenceComplete();
          }, 4000);
          return;
        }

        // 1. Wait 2 seconds at the top
        addTimeout(async () => {
          if (isCancelled) return;

          // 2. Scroll down over 9 seconds
          activeAnimationRef.current = animate(inner, { y: -maxScroll }, { duration: 9, ease: 'linear' });
          await activeAnimationRef.current;
          if (isCancelled) return;

          // 3. Wait 2 seconds at the bottom
          addTimeout(async () => {
            if (isCancelled) return;

            // 4. Scroll back up smoothly over 0.7 seconds
            activeAnimationRef.current = animate(inner, { y: 0 }, { duration: 0.7, ease: 'easeInOut' });
            await activeAnimationRef.current;
            if (isCancelled) return;

            // 5. Wait 500ms before finishing
            addTimeout(() => {
              if (!isCancelled && onSequenceComplete) onSequenceComplete();
            }, 500);

          }, 2000);

        }, 2000);

      }, 100); // short initial delay to ensure DOM layout
    };

    runSequence();

    return () => {
      isCancelled = true;
      clearTimeouts();
      if (activeAnimationRef.current) {
        activeAnimationRef.current.stop();
      }
    };
  }, [isActive, isAutoScroll, animate, onSequenceComplete, scope]);

  const handleMouseEnter = () => {
    if (activeAnimationRef.current) {
      activeAnimationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (activeAnimationRef.current) {
      activeAnimationRef.current.play();
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative w-full max-w-[280px] h-[580px] rounded-[36px] border-[8px] border-[#171717] bg-[#f5f5f7] overflow-hidden flex flex-col mx-auto shadow-2xl shadow-black/10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20 pointer-events-none">
        <div className="w-32 h-6 bg-[#171717] rounded-b-[16px]"></div>
      </div>
      
      {/* Content Area */}
      <div 
        ref={containerRef} 
        className="flex-1 w-full h-full overflow-hidden relative z-10 bg-white"
      >
        {imageSrc ? (
          <motion.img 
            ref={scope}
            src={imageSrc} 
            alt="App Preview" 
            className="w-full h-auto block"
            draggable={false}
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center mt-6 h-full">
            <div className="w-16 h-16 rounded-full bg-[#e6f7ed] flex items-center justify-center mb-6">
              <span className="text-[#2DBE60] font-bold text-2xl font-satoshi">e</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#171717] mb-2">App Preview</h3>
            <p className="text-[13px] text-[#5e5e5e] mb-8 leading-relaxed">
              Screenshot akan segera tersedia.
            </p>
          </div>
        )}
      </div>

      {/* Decorative gradient mask (optional, removed if you want full image visibility at bottom) */}
    </motion.div>
  );
}
