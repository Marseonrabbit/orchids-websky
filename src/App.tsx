import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetAQuote from './components/GetAQuote';
import About from './sections/About';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import ServiceDetail from './sections/ServiceDetail';
import AboutPage from './sections/AboutPage';
import BlogPage from './sections/BlogPage';
import BlogDetailPage from './sections/BlogDetailPage';
import LegalPage from './sections/LegalPage';
import CookieConsent from './components/CookieConsent';

const queryClient = new QueryClient();

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 5) {
          setTimeout(() => tryScroll(attempts + 1), 150);
        }
      };
      tryScroll();
    }
  }, [location.search]);

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-poppins">
        <Navbar />
        
      {/* Optimized 2D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-darkPurple/[0.01] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/[0.01] rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-darkPurple/[0.01] rounded-full blur-[100px]" />
      </div>

      {/* Content Layer */}
      <main className="relative z-10 w-full flex flex-col overflow-x-hidden">
        {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
          
          <div className="z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-muted-foreground mb-8 font-montserrat"
            >
              Future-Forward Digital Studio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] font-montserrat"
            >
              BEYOND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">
                VISIONS
              </span>
            </motion.h1>
          
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 text-base md:text-lg text-muted-foreground max-w-xl text-center leading-relaxed font-light font-poppins"
            >
              We craft premium digital experiences that combine high-end visuals with strategic marketing excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#services" className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_30px_rgba(46,16,101,0.3)] hover:bg-darkPurple hover:text-white transition-all duration-300 text-center">
                Explore Services
              </a>
              <a href="#about" className="px-10 py-4 border border-foreground/10 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:border-primary hover:bg-primary/10 transition-all duration-300 text-center">
                Our Story
              </a>
            </motion.div>
          </div>
        </section>

        <About />
        <Services />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="bottom-right" />
        <BrowserRouter>
          {/* GetAQuote floating button lives here so it persists on ALL pages */}
          <GetAQuote />
          {/* Cookie consent banner persists on ALL pages */}
          <CookieConsent />
          <Routes>
            <Route path="/" element={<Home />} />
              {/* Named routes MUST come before the catch-all /:id */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />

              {/* Legal pages */}
              <Route path="/privacy-policy" element={<LegalPage />} />
              <Route path="/terms-of-service" element={<LegalPage />} />
              <Route path="/cookie-policy" element={<LegalPage />} />

              {/* Services - catch-all for service slugs (must be last) */}
              <Route path="/:id" element={<ServiceDetail />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
