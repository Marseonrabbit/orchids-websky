import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/skylumine/", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com/skylumine", label: "Twitter" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/skylumine/", label: "LinkedIn" },
  { Icon: Facebook, href: "https://www.facebook.com/skylumine", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7ab42e8b-56b1-4c66-a956-f3cf6448c6c8/Picsart_26-01-09_10-46-39-372-resized-1768022457001.webp?width=8000&height=8000&resize=contain"
              alt="Skylumine Logo"
                className="h-14 w-auto object-contain mix-blend-normal"
            />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed font-poppins">
            Skylumine is a future-forward digital production studio specializing in premium web experiences and strategic digital marketing.
          </p>
          <div className="flex gap-3 flex-wrap">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 font-montserrat">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-poppins">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 font-montserrat">Our Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-poppins">
            <li><a href="/web-design-company" className="hover:text-primary transition-colors">Web Design</a></li>
            <li><a href="/wordpress-development" className="hover:text-primary transition-colors">WordPress Development</a></li>
            <li><a href="/seo-services" className="hover:text-primary transition-colors">SEO Services</a></li>
            <li><a href="/google-ads-management" className="hover:text-primary transition-colors">Google Ads</a></li>
            <li><a href="/social-media-marketing" className="hover:text-primary transition-colors">Social Media Marketing</a></li>
            <li><a href="/ui-ux-design" className="hover:text-primary transition-colors">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 font-montserrat">Contact Info</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground font-poppins">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <a href="mailto:hello@skylumine.com" className="hover:text-primary transition-colors break-all">hello@skylumine.com</a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">54 A, 80 Feet Rd, Aayodhya Nagar,<br />Jaipur, RJ 302015, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground font-montserrat">
        <div>&copy; 2026 SKYLUMINE. All rights reserved.</div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
