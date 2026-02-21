import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Search, BarChart3, Share2, PenTool, ShoppingBag } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Systems",
    desc: "Architecting immersive digital experiences with high-performance frameworks and optimized interfaces.",
    tags: ["Next.js", "React", "Node.js"],
    href: "/website-development-services",
    color: "from-blue-500/10 to-purple-500/10",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "Website Development", href: "/website-development-services" },
      { label: "Full-Stack Solutions", href: "/website-development-services" },
      { label: "Web Design", href: "/web-design-company" },
      { label: "UI/UX Design", href: "/ui-ux-design" },
      { label: "Website Redesign", href: "/website-redesign" },
      { label: "Page Speed Optimization", href: "/page-speed-optimization" },
      { label: "Website Maintenance", href: "/website-maintenance" },
      { label: "Business Hosting", href: "/business-hosting" },
    ]
  },
  {
    id: 2,
    icon: Search,
    title: "Search Intelligence",
    desc: "Harnessing algorithmic precision to elevate your brand's authority and organic reach.",
    tags: ["Data Audit", "Semantics", "Authority"],
    href: "/seo-services",
    color: "from-emerald-500/10 to-teal-500/10",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "SEO Audit", href: "/seo-audit-services" },
      { label: "Local SEO", href: "/local-seo-services" },
      { label: "Enterprise SEO", href: "/enterprise-seo-services" },
      { label: "E-Commerce SEO", href: "/ecommerce-seo-services" },
    ]
  },
  {
    id: 3,
    icon: BarChart3,
      title: "PPC Management",
    desc: "Precision-targeted paid media campaigns engineered for exponential conversion and ROI.",
    tags: ["Quantum Bidding", "Retargeting", "Analytics"],
    href: "/ppc-management-services",
    color: "from-orange-500/10 to-rose-500/10",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "PPC Management", href: "/ppc-management-services" },
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "Facebook Ads", href: "/facebook-ads-management" },
    ]
  },
  {
    id: 4,
    icon: Share2,
    title: "Social Synthesis",
    desc: "Creating resonant brand narratives that thrive across the evolving social landscape.",
    tags: ["Brand Voice", "Viral Loops", "Engagement"],
    href: "/social-media-marketing",
    color: "from-pink-500/10 to-violet-500/10",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "Social Media Marketing", href: "/social-media-marketing" },
      { label: "Social Media Optimization", href: "/social-media-optimization" },
    ]
  },
  {
    id: 5,
    icon: PenTool,
    title: "Narrative Design",
    desc: "Strategic content that bridges the gap between technical complexity and human connection.",
    tags: ["Storytelling", "SEO Copy", "Strategy"],
    href: "/content-writing-services",
    color: "from-amber-500/10 to-orange-500/10",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "Content Writing", href: "/content-writing-services" },
    ]
  },
  {
    id: 6,
    icon: ShoppingBag,
    title: "Infinite Commerce",
    desc: "Fluid, frictionless shopping experiences that redefine the boundaries of digital retail.",
    tags: ["Headless", "UX Flow", "Scale"],
    href: "/e-commerce-development",
    color: "from-indigo-500/10 to-blue-500/10",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80",
    subServices: [
      { label: "E-Commerce Development", href: "/e-commerce-development" },
      { label: "WooCommerce", href: "/woocommerce-development" },
      { label: "WordPress Development", href: "/wordpress-development" },
      { label: "WordPress Themes", href: "/wordpress-theme-development" },
      { label: "WordPress Plugins", href: "/wordpress-plugin-development" },
      { label: "WordPress Migration", href: "/wordpress-migration" },
      { label: "Theme Integration", href: "/wordpress-theme-integration" },
    ]
  }
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <SectionWrapper id="services" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/[0.01] rounded-full blur-[100px] will-change-transform" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-darkPurple/[0.01] rounded-full blur-[100px] will-change-transform" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground mb-8"
            >
              Technological Artistry
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight uppercase"
            >
              Digital Ecosystems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/90 via-foreground/40 to-foreground/10 font-light italic lowercase">
                Crafted for Impact
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-darkPurple/10">
          {services.map((service, idx) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="group relative bg-background overflow-hidden border-r border-b border-darkPurple/10 transition-colors duration-700 hover:bg-foreground/[0.01] flex flex-col"
              >
                {/* Hover glow */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.05 : 0.95 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-[40px] z-0 pointer-events-none will-change-[opacity,transform] transform-gpu`}
                />

                  <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
                    {/* Header row: number + icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-black text-muted-foreground/60 tracking-[0.5em]">0{service.id}</span>
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 5 : 0,
                          backgroundColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--muted))",
                          color: isHovered ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                        }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="w-10 h-10 border border-foreground/10 rounded-full flex items-center justify-center will-change-[transform,background-color] transform-gpu"
                      >
                        <service.icon className="w-4 h-4 stroke-[1.5px]" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <a href={service.href}>
                      <motion.h4
                        animate={{ x: isHovered ? 8 : 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight leading-snug will-change-transform transform-gpu hover:text-primary transition-colors"
                      >
                        {service.title}
                      </motion.h4>
                    </a>

                    <motion.p
                      animate={{ color: isHovered ? "hsl(var(--foreground) / 0.8)" : "hsl(var(--muted-foreground))" }}
                      className="mb-6 text-[13px] leading-loose max-w-[90%]"
                    >
                      {service.desc}
                    </motion.p>

                    {/* Tags */}
                    <div className="flex gap-4 flex-wrap mb-6">
                      {service.tags.map(tag => (
                        <motion.span
                          key={tag}
                          animate={{ color: isHovered ? "hsl(var(--foreground) / 0.6)" : "hsl(var(--muted-foreground) / 0.4)" }}
                          className="text-[9px] font-black uppercase tracking-[0.3em]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Sub-services as clickable chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.subServices.map((sub) => (
                        <a
                          key={sub.href + sub.label}
                          href={sub.href}
                          onClick={e => e.stopPropagation()}
                          className="px-3 py-1.5 rounded-full border border-foreground/10 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>

                    {/* Explore CTA — pinned to bottom */}
                    <div className="mt-auto pt-6 border-t border-foreground/5">
                      <a href={service.href}>
                        <motion.div
                          animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
                          className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em]"
                        >
                          <motion.span
                            animate={{ x: isHovered ? 8 : 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="will-change-transform transform-gpu"
                          >
                            Discover the Flow
                          </motion.span>
                          <motion.div
                            animate={{ backgroundColor: isHovered ? "hsl(var(--primary) / 0.2)" : "hsl(var(--border) / 0.1)" }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="h-[1px] flex-grow will-change-[background-color]"
                          />
                        </motion.div>
                      </a>
                    </div>
                  </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
