import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

const COOKIE_KEY = 'skylumine_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-background/95 backdrop-blur-xl border border-darkPurple/15 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-0.5 font-montserrat">We use cookies</p>
              <p className="text-xs text-muted-foreground leading-relaxed font-poppins">
                We use cookies to enhance your browsing experience and analyse our traffic. By clicking "Accept", you consent to our use of cookies.{' '}
                <a href="/cookie-policy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground border border-border/20 rounded-full hover:border-foreground/30 hover:text-foreground transition-all duration-200 font-montserrat"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] bg-primary text-primary-foreground rounded-full hover:bg-darkPurple transition-all duration-200 shadow-[0_0_15px_rgba(46,16,101,0.25)] font-montserrat"
              >
                Accept
              </button>
              <button
                onClick={decline}
                aria-label="Close cookie banner"
                className="w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-200 ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
