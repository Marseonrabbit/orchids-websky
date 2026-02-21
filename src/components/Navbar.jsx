import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { name: "Web Design", href: "/web-design-company" },
  { name: "Website Development", href: "/website-development-services" },
  { name: "SEO Services", href: "/seo-services" },
  { name: "PPC Management", href: "/ppc-management-services" },
  { name: "Social Media Marketing", href: "/social-media-marketing" },
  { name: "Content Writing", href: "/content-writing-services" },
  { name: "E-Commerce Development", href: "/e-commerce-development" },
  { name: "WordPress Development", href: "/wordpress-development" },
  { name: "WooCommerce Development", href: "/woocommerce-development" },
  { name: "UI/UX Design", href: "/ui-ux-design" },
  { name: "Website Redesign", href: "/website-redesign" },
  { name: "Google Ads Management", href: "/google-ads-management" },
  { name: "Facebook Ads Management", href: "/facebook-ads-management" },
  { name: "Page Speed Optimization", href: "/page-speed-optimization" },
  { name: "Website Maintenance", href: "/website-maintenance" },
  { name: "Business Hosting", href: "/business-hosting" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const goToContact = (e) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const goToAnchor = (anchor) => {
    const id = anchor.replace('#', '');
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/?scrollTo=${id}`);
    }
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', anchor: 'services', dropdown: serviceLinks },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', anchor: 'contact' },
  ];

  const handleMouseEnter = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/10 shadow-sm'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="/" className="block overflow-hidden">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7ab42e8b-56b1-4c66-a956-f3cf6448c6c8/Picsart_26-01-09_10-46-39-372-resized-1768022457001.webp?width=8000&height=8000&resize=contain"
                alt="Skylumine Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
          </a>
        </div>

        {/* Desktop nav */}
        <div
          className="hidden lg:flex gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] font-montserrat text-muted-foreground"
          ref={dropdownRef}
        >
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={link.dropdown ? () => handleMouseEnter(link.name) : undefined}
              onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
            >
              {link.dropdown ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  className="hover:text-foreground transition-colors relative group flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : link.anchor ? (
                <button
                  onClick={() => goToAnchor(link.anchor)}
                  className="hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <a href={link.href} className="hover:text-foreground transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )}

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {link.dropdown && openDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 mt-4 w-64 bg-background/95 backdrop-blur-xl border border-darkPurple/10 rounded-2xl shadow-2xl py-3 max-h-[70vh] overflow-y-auto"
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
            onClick={goToContact}
            className="hidden sm:block px-8 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-darkPurple transition-all duration-500 uppercase text-[10px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(46,16,101,0.2)]"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-foreground p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[100] flex flex-col lg:hidden overflow-y-auto"
          >
              <div className="flex justify-between items-center px-8 pt-8 pb-4">
                <button
                onClick={() => setMobileMenuOpen(false)}
                className="ml-auto w-11 h-11 flex items-center justify-center rounded-full border border-border/20 text-foreground hover:bg-foreground/10 hover:rotate-90 transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-6 py-10 px-8">
              {navLinks.map((link, i) => (
                <div key={link.name} className="w-full max-w-sm text-center">
                  {link.dropdown ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                        }
                        className="text-2xl font-bold uppercase tracking-widest font-montserrat hover:text-primary transition-colors flex items-center gap-2 mx-auto"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileExpanded === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-3"
                          >
                            <div className="flex flex-col gap-2 py-2">
                              {link.dropdown.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.anchor ? (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        goToAnchor(link.anchor);
                      }}
                      className="text-2xl font-bold uppercase tracking-widest font-montserrat hover:text-primary transition-colors block w-full"
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-bold uppercase tracking-widest font-montserrat hover:text-primary transition-colors block"
                    >
                      {link.name}
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
