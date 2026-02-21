import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      // Hide while scrolling
      setIsVisible(false);
      
      // Clear previous timeout
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }

      // Re-show after scroll stops
      scrollTimeout = setTimeout(() => {
        // Only show if not at the bottom
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Check if we are near the bottom (within 50px)
        const isNearBottom = scrollTop + windowHeight >= documentHeight - 50;
        
        setIsAtBottom(isNearBottom);
        if (!isNearBottom) {
          setIsVisible(true);
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check for bottom
    const checkBottom = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 50);
    };
    checkBottom();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout !== null) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isAtBottom && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 pointer-events-none"
          >
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Scroll</div>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-foreground/30 to-transparent" />
          </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
