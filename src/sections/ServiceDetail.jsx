import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CheckCircle2, ArrowRight, Code2, Search, BarChart3, Share2,
  PenTool, ShoppingBag, Zap, ShieldCheck, Gauge, Globe, Layers,
  Palette, RefreshCw, Monitor, Server
} from 'lucide-react';

// ─── Tab content builder ──────────────────────────────────────────────────────
const TabSection = ({ tabs }) => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <div className="mt-20 border-t border-border/10 pt-16">
              <h2 className="text-2xl md:text-3xl font-extrabold font-montserrat tracking-tight mb-10 leading-snug">
          Explore In Detail
        </h2>
      {/* Tab bar */}
      <div className="flex gap-2 flex-wrap mb-10">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              active === i
                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(46,16,101,0.4)]'
                : 'bg-foreground/5 text-muted-foreground hover:bg-foreground/10'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold font-montserrat tracking-tight mb-5 leading-snug">{tab.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">{tab.desc}</p>
          <ul className="space-y-3">
            {tab.points.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-border/10">
            <img src={tab.img} alt={tab.title} className="w-full h-60 object-cover" loading="lazy" />
          </div>
          {tab.extraImages && (
            <div className="grid grid-cols-3 gap-3">
              {tab.extraImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-border/10 group">
                  <img src={img.src} alt={img.caption} className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <p className="text-[10px] text-muted-foreground text-center py-2 font-bold uppercase tracking-widest">{img.caption}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Per-service tab definitions ─────────────────────────────────────────────

const tabs = {
  'website-development-services': [
    {
      label: 'Frontend',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80',
      title: 'Pixel-Perfect Frontend Engineering',
      desc: 'Blazing-fast, visually stunning interfaces using React, Next.js, and modern CSS. Every component built mobile-first with accessibility baked in.',
      points: ['React / Next.js 14', 'Tailwind CSS & Design Systems', 'Framer Motion Animations', 'Core Web Vitals Optimized', 'Responsive & Accessible'],
    },
    {
      label: 'Backend',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80',
      title: 'Robust Backend Architecture',
      desc: 'Scalable server-side systems built with Node.js, Express, and cloud-native patterns — secure, fast, and easy to maintain.',
      points: ['Node.js / Express / Fastify', 'RESTful & GraphQL APIs', 'Authentication (JWT / OAuth)', 'Rate Limiting & Caching', 'CI/CD Pipelines'],
    },
    {
      label: 'Database',
      img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&auto=format&fit=crop&q=80',
      title: 'Smart Data Layer Design',
      desc: 'From relational databases to NoSQL and real-time engines — we model data structures that scale effortlessly as your business grows.',
      points: ['PostgreSQL / MySQL', 'MongoDB / Redis', 'Supabase & Firebase', 'Database Migrations', 'Query Optimization'],
    },
    {
      label: 'Microservices',
      img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&auto=format&fit=crop&q=80',
      title: 'Cloud-Native Microservices',
      desc: 'Break monoliths into independently deployable services. We architect microservice ecosystems on AWS, GCP, or Azure with Docker & Kubernetes.',
      points: ['Docker & Kubernetes', 'AWS / GCP / Azure', 'Service Mesh (Istio)', 'Event-Driven (Kafka / RabbitMQ)', 'Observability & Logging'],
      extraImages: [
        { src: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=80', caption: 'Container Orchestration' },
        { src: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format&fit=crop&q=80', caption: 'Event Streaming' },
        { src: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=80', caption: 'Cloud Infrastructure' },
      ],
    },
    {
      label: 'DevOps',
      img: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=900&auto=format&fit=crop&q=80',
      title: 'End-to-End DevOps & Deployment',
      desc: 'From code to production in minutes. Automated pipelines, monitoring dashboards, and zero-downtime deployment strategies.',
      points: ['GitHub Actions / GitLab CI', 'Vercel / Netlify / AWS Amplify', 'Uptime Monitoring', 'Error Tracking (Sentry)', 'Auto-Scaling Infrastructure'],
    },
  ],

  'web-design-company': [
    {
      label: 'UI Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'World-Class UI Design',
      desc: 'We design stunning, on-brand interfaces that captivate users from the first pixel. Every screen is crafted with intention and visual precision.',
      points: ['Figma & Adobe XD Prototypes', 'Design System Creation', 'Typography & Color Systems', 'Iconography & Illustration', 'Brand-aligned Visual Language'],
    },
    {
      label: 'UX Strategy',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&auto=format&fit=crop&q=80',
      title: 'UX Strategy & Research',
      desc: 'Data-driven UX decisions based on real user research, journey mapping, and behavioural analytics to maximise conversion and retention.',
      points: ['User Interviews & Surveys', 'Journey Mapping', 'Heatmap & Session Analysis', 'Conversion Rate Optimization', 'A/B Testing Frameworks'],
    },
    {
      label: 'Animations',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&auto=format&fit=crop&q=80',
      title: 'Micro-Animations & Motion',
      desc: 'Delight users with smooth, purposeful animations that guide attention and add a premium feel to every interaction.',
      points: ['Framer Motion / GSAP', 'Lottie Animations', 'Page Transitions', 'Scroll-triggered Effects', 'Loading State Designs'],
    },
    {
      label: 'Responsive',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
      title: 'Fully Responsive & Accessible',
      desc: 'Your site looks and feels flawless on every device — from large desktop monitors to small mobile screens.',
      points: ['Mobile-First Approach', 'WCAG 2.1 AA Compliance', 'Cross-Browser Testing', 'Touch Gesture Support', 'Fluid Grid Layouts'],
    },
  ],

  'seo-services': [
    {
      label: 'On-Page SEO',
      img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&auto=format&fit=crop&q=80',
      title: 'On-Page SEO Mastery',
      desc: 'Optimise every element of your pages — from meta tags to content structure — to signal relevance to search engines and delight users.',
      points: ['Title & Meta Optimisation', 'Header Hierarchy (H1-H6)', 'Schema Markup / Structured Data', 'Internal Linking Strategy', 'Content Keyword Mapping'],
    },
    {
      label: 'Technical SEO',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'Technical SEO Foundation',
      desc: 'Fix the hidden issues that block Google from properly crawling and indexing your site, ensuring maximum discoverability.',
      points: ['Core Web Vitals Optimisation', 'XML Sitemaps & Robots.txt', 'Canonicalisation & Hreflang', 'Crawl Budget Management', 'HTTPS & Security Audit'],
    },
    {
      label: 'Link Building',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=80',
      title: 'Authority Link Building',
      desc: 'Earn high-quality backlinks from authoritative domains to build your site\'s trust score and skyrocket organic rankings.',
      points: ['Digital PR Outreach', 'Guest Posting', 'HARO / Journalist Queries', 'Broken Link Reclamation', 'Competitor Backlink Analysis'],
    },
    {
      label: 'Content SEO',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&q=80',
      title: 'SEO Content Strategy',
      desc: 'Build topical authority with a strategic content calendar. We research, plan, and produce content that ranks and converts.',
      points: ['Topical Cluster Mapping', 'Long-Tail Keyword Targeting', 'Content Gap Analysis', 'Blog & Article Production', 'Featured Snippet Optimisation'],
    },
  ],

  'ppc-management-services': [
    {
      label: 'Campaign Setup',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'Precision Campaign Architecture',
      desc: 'We structure campaigns with laser-focused ad groups, match types, and targeting settings that maximise Quality Score and minimise wasted spend.',
      points: ['Account Structure Audit', 'Keyword Research & Match Types', 'Negative Keyword Lists', 'Ad Group Segmentation', 'Audience Targeting Setup'],
    },
    {
      label: 'Ad Creatives',
      img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&auto=format&fit=crop&q=80',
      title: 'High-Converting Ad Creatives',
      desc: 'Compelling ad copy and visuals engineered to stop the scroll, earn clicks, and drive action.',
      points: ['Responsive Search Ads', 'Dynamic Ad Copy', 'Display & Banner Design', 'Video Ad Scripts', 'Call-to-Action Optimisation'],
    },
    {
      label: 'Bid Strategy',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80',
      title: 'Smart Bidding & Budget Control',
      desc: 'Deploy intelligent bid strategies that automatically optimise for your goals — whether ROAS, CPA, or conversions.',
      points: ['Target ROAS / Target CPA', 'Portfolio Bid Strategies', 'Dayparting & Geo-Bid Adjustments', 'Device Bid Modifiers', 'Budget Pacing Alerts'],
    },
    {
      label: 'Analytics',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      title: 'Reporting & Continuous Optimisation',
      desc: 'Real-time dashboards and weekly optimisation cycles to keep performance trending upward month after month.',
      points: ['Google Analytics 4 Integration', 'Conversion Tracking Setup', 'Custom Dashboard Reporting', 'Monthly Strategy Reviews', 'Competitor Ad Intelligence'],
    },
  ],

  'social-media-marketing': [
    {
      label: 'Strategy',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80',
      title: 'Social Media Strategy',
      desc: 'Build a bulletproof social strategy aligned with your brand goals, audience insights, and platform-specific trends.',
      points: ['Audience Persona Development', 'Platform Selection Strategy', 'Competitor Benchmarking', 'Content Pillar Framework', 'KPI & Goal Setting'],
    },
    {
      label: 'Content Creation',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80',
      title: 'Scroll-Stopping Content',
      desc: 'From Reels to carousels, we create platform-native content that generates engagement and builds loyal communities.',
      points: ['Branded Graphic Design', 'Short-Form Video Editing', 'Reels & TikTok Content', 'Stories & Highlights', 'Caption Copywriting'],
    },
    {
      label: 'Community',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
      title: 'Community Management',
      desc: 'We actively engage your audience — responding to comments, managing DMs, and nurturing your community to build brand loyalty.',
      points: ['Daily Comment Moderation', 'DM Response Management', 'Crisis Response Protocols', 'Brand Voice Consistency', 'Influencer Collaboration'],
    },
    {
      label: 'Analytics',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      title: 'Social Analytics & Reporting',
      desc: 'Monthly performance reports with actionable insights — reach, impressions, engagement rate, follower growth, and more.',
      points: ['Monthly Performance Reports', 'Engagement Rate Tracking', 'Audience Growth Analysis', 'Post Performance Breakdown', 'Competitor Share of Voice'],
    },
  ],

  'content-writing-services': [
    {
      label: 'Blog Writing',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&auto=format&fit=crop&q=80',
      title: 'SEO Blog Writing',
      desc: 'Long-form articles that rank on Google and keep readers engaged. Every blog is researched, keyword-mapped, and written to convert.',
      points: ['Keyword Research Integration', '1500–4000 Word Articles', 'Internal Linking Strategy', 'E-E-A-T Compliant', 'Call-to-Action Placement'],
    },
    {
      label: 'Copywriting',
      img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&auto=format&fit=crop&q=80',
      title: 'Conversion Copywriting',
      desc: 'Persuasive website copy, landing pages, and ad copy crafted to generate clicks, leads, and sales.',
      points: ['Homepage & Service Pages', 'Landing Page Copy', 'Google & Meta Ad Copy', 'Product Descriptions', 'Email Sequences'],
    },
    {
      label: 'Technical Writing',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=80',
      title: 'Technical & Industry Writing',
      desc: 'Complex topics made accessible. We write white papers, case studies, and technical docs that establish authority.',
      points: ['White Papers & Reports', 'Case Studies', 'API & Product Documentation', 'Industry Research Articles', 'SaaS & Tech Content'],
    },
    {
      label: 'Social Copy',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80',
      title: 'Social Media & Email Copy',
      desc: 'Snappy, platform-native captions and email newsletters that build relationships and drive engagement.',
      points: ['Instagram & LinkedIn Captions', 'Twitter / X Thread Writing', 'Email Newsletter Copy', 'Subject Line Optimisation', 'Drip Campaign Sequences'],
    },
  ],

  'e-commerce-development': [
    {
      label: 'Store Design',
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80',
      title: 'Conversion-Optimised Store Design',
      desc: 'Beautiful, intuitive storefronts designed to reduce friction and guide shoppers from discovery to checkout.',
      points: ['Custom Product Page Design', 'Mobile-First Shopping Experience', 'Wishlist & Compare Features', 'Quick View & Sticky Cart', 'Trust Badge Integration'],
    },
    {
      label: 'Checkout',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
      title: 'Frictionless Checkout Flow',
      desc: 'Optimised multi-step and one-page checkouts that reduce cart abandonment and maximise order completion rates.',
      points: ['Guest Checkout Option', 'Multi-Step & One-Page Checkout', 'Payment Gateway Integration', 'Abandoned Cart Recovery', 'Upsell & Cross-sell Modules'],
    },
    {
      label: 'Payments',
      img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&auto=format&fit=crop&q=80',
      title: 'Secure Payment Solutions',
      desc: 'Support every payment method your customers prefer — from credit cards to crypto — with PCI-compliant processing.',
      points: ['Stripe / PayPal / Razorpay', 'Buy Now Pay Later (BNPL)', 'Multi-Currency Support', 'PCI DSS Compliance', 'Fraud Detection Tools'],
    },
    {
      label: 'Inventory',
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop&q=80',
      title: 'Inventory & Order Management',
      desc: 'End-to-end inventory tracking, order processing automation, and shipping integrations that scale with your business.',
      points: ['Real-Time Stock Tracking', 'Multi-Warehouse Support', 'Automated Reorder Alerts', 'Shipping & Fulfillment APIs', 'Returns & Refunds Management'],
    },
    {
      label: 'SEO & Speed',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'E-Commerce SEO & Performance',
      desc: 'Optimise every product and category page to rank and convert, with page speeds that pass Core Web Vitals every time.',
      points: ['Product Schema Markup', 'Category Page Optimisation', 'Image Compression & Lazy Loading', 'CDN Integration', '95+ PageSpeed Scores'],
    },
  ],

  'page-speed-optimization': [
    {
      label: 'Audit',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'Deep Performance Audit',
      desc: 'We run a comprehensive audit using Lighthouse, WebPageTest, and Chrome DevTools to identify every bottleneck.',
      points: ['Lighthouse Score Analysis', 'Core Web Vitals Baseline', 'Render-Blocking Resource Identification', 'Third-Party Script Audit', 'Waterfall Analysis'],
    },
    {
      label: 'Images',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80',
      title: 'Image & Media Optimisation',
      desc: 'Compress, convert, and lazy-load every image so your pages load instantly without sacrificing visual quality.',
      points: ['WebP / AVIF Conversion', 'Responsive Image Srcset', 'Lazy Loading Implementation', 'Image CDN Integration', 'Video Optimisation'],
    },
    {
      label: 'Code',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=80',
      title: 'Code & Asset Optimisation',
      desc: 'Minify, bundle, and tree-shake your JS, CSS, and HTML to drastically reduce payload sizes.',
      points: ['JS / CSS Minification', 'Code Splitting & Tree Shaking', 'Critical CSS Inlining', 'Unused CSS Removal', 'HTTP/2 & Compression'],
    },
    {
      label: 'Server',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80',
      title: 'Server & CDN Optimisation',
      desc: 'From hosting configuration to global CDN caching, we ensure your server responds in under 200ms worldwide.',
      points: ['CDN Setup & Configuration', 'Browser Caching Policies', 'GZIP / Brotli Compression', 'TTFB Reduction', 'Edge Network Deployment'],
    },
  ],

  'website-maintenance': [
    {
      label: 'Security',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: '24/7 Security Monitoring',
      desc: 'Continuous scanning for malware, vulnerabilities, and intrusion attempts — with instant alerts and rapid remediation.',
      points: ['Malware Scanning & Removal', 'Firewall Configuration', 'SSL Certificate Management', 'Vulnerability Patching', 'DDoS Protection'],
    },
    {
      label: 'Updates',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80',
      title: 'Platform & Plugin Updates',
      desc: 'We keep your CMS, themes, and plugins up-to-date to ensure compatibility, security, and peak performance.',
      points: ['WordPress Core Updates', 'Plugin / Theme Updates', 'PHP Version Management', 'Compatibility Testing', 'Staging Environment Testing'],
    },
    {
      label: 'Backups',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=80',
      title: 'Automated Backups & Recovery',
      desc: 'Daily offsite backups with one-click restore capability — so your data is always safe no matter what.',
      points: ['Daily Automated Backups', 'Offsite Cloud Storage', 'One-Click Restore', 'Database Backups', 'Disaster Recovery Plan'],
    },
    {
      label: 'Support',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=80',
      title: 'On-Demand Support & Emergency Fix',
      desc: 'Dedicated support tickets, monthly performance reviews, and priority emergency response for critical issues.',
      points: ['Dedicated Support Portal', 'Emergency 4-Hour Response', 'Monthly Performance Report', 'Content Updates (on request)', 'Uptime Monitoring'],
    },
  ],

  'seo-audit-services': [
    {
      label: 'Technical',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'Technical SEO Audit',
      desc: 'A forensic crawl of your site to uncover indexation issues, duplicate content, broken links, and Core Web Vitals failures.',
      points: ['Full Site Crawl (Screaming Frog)', 'Indexation & Crawl Issues', 'Duplicate Content Detection', 'Core Web Vitals Review', 'Structured Data Validation'],
    },
    {
      label: 'On-Page',
      img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&auto=format&fit=crop&q=80',
      title: 'On-Page Content Audit',
      desc: 'Analyse every page for keyword alignment, content quality, meta data, and internal linking opportunities.',
      points: ['Meta Title & Description Review', 'Content Quality Scoring', 'Keyword Cannibalisation Check', 'Internal Link Audit', 'Thin Content Identification'],
    },
    {
      label: 'Backlinks',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=80',
      title: 'Backlink Profile Analysis',
      desc: 'Assess the health and quality of your existing backlink profile, identify toxic links, and map link-building opportunities.',
      points: ['Domain Authority Analysis', 'Toxic Link Identification', 'Disavow File Preparation', 'Competitor Backlink Gap', 'Anchor Text Distribution'],
    },
    {
      label: 'Roadmap',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80',
      title: 'Actionable SEO Roadmap',
      desc: 'A prioritised, step-by-step action plan delivered in a clear report with quick wins and long-term strategy.',
      points: ['Priority-Ranked Issue List', 'Quick Win Opportunities', '90-Day Action Plan', 'Estimated Traffic Impact', 'Executive Summary Report'],
    },
  ],

  'local-seo-services': [
    {
      label: 'Google Business',
      img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=900&auto=format&fit=crop&q=80',
      title: 'Google Business Profile Optimisation',
      desc: 'Fully optimise your GBP listing to appear in the Local Pack and Google Maps for high-intent local searches.',
      points: ['Category & Attribute Optimisation', 'Photo & Video Upload Strategy', 'Q&A Management', 'Post & Offer Publishing', 'Review Response Management'],
    },
    {
      label: 'Citations',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=80',
      title: 'Local Citations & NAP Consistency',
      desc: 'Build and clean citations across 100+ local directories to establish NAP consistency and local authority.',
      points: ['100+ Directory Submissions', 'NAP Audit & Correction', 'Industry-Specific Citations', 'Data Aggregator Submissions', 'Duplicate Listing Removal'],
    },
    {
      label: 'Reviews',
      img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&auto=format&fit=crop&q=80',
      title: 'Reputation & Review Management',
      desc: 'Generate more 5-star reviews and manage your online reputation to build trust and improve local rankings.',
      points: ['Review Generation Campaigns', 'Multi-Platform Monitoring', 'Negative Review Strategy', 'Review Schema Markup', 'Star Rating Improvement'],
    },
    {
      label: 'Local Content',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&q=80',
      title: 'Localised Content Strategy',
      desc: 'Location-specific landing pages and blog content that targets high-intent local keywords to drive foot traffic and calls.',
      points: ['Location Page Creation', 'Local Keyword Targeting', 'Neighbourhood Content', 'Local News & Events Coverage', 'Schema LocalBusiness Markup'],
    },
  ],

  'enterprise-seo-services': [
    {
      label: 'Strategy',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'Enterprise SEO Strategy',
      desc: 'A bespoke, board-level SEO strategy aligned with your business objectives, market position, and competitive landscape.',
      points: ['Multi-Site Management', 'International SEO (Hreflang)', 'Stakeholder Reporting Frameworks', 'SEO Governance & Guidelines', 'Cross-Department Collaboration'],
    },
    {
      label: 'Technical',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'Enterprise Technical SEO',
      desc: 'Handle JavaScript rendering, large-scale crawl budget management, and complex infrastructure challenges at scale.',
      points: ['JavaScript SEO (React/Angular)', 'Log File Analysis', 'Crawl Budget Optimisation', 'Edge SEO (CDN-level)', 'Faceted Navigation Management'],
    },
    {
      label: 'Content at Scale',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&q=80',
      title: 'Content Production at Scale',
      desc: 'A content factory model — research, brief, produce, and publish hundreds of optimised pages per month.',
      points: ['Programmatic SEO Pages', 'Content Brief Templates', 'Writer Management', 'Editorial Calendar', 'Content Performance Tracking'],
    },
    {
      label: 'Reporting',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      title: 'Enterprise-Grade Reporting',
      desc: 'Custom dashboards integrating Search Console, GA4, and third-party tools — delivering insights that drive decisions.',
      points: ['Executive KPI Dashboards', 'Custom Looker Studio Reports', 'Rank Tracking (10,000+ Keywords)', 'ROI Modelling', 'Quarterly Business Reviews'],
    },
  ],

  'ecommerce-seo-services': [
    {
      label: 'Product Pages',
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80',
      title: 'Product Page SEO',
      desc: 'Optimise thousands of product pages to rank for buyer-intent keywords and drive organic sales.',
      points: ['Unique Product Descriptions', 'Product Schema Markup', 'Image Alt Text Optimisation', 'Review Schema Integration', 'Canonical Tag Management'],
    },
    {
      label: 'Categories',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
      title: 'Category Page Optimisation',
      desc: 'Turn category pages into SEO powerhouses — often the highest-traffic and highest-converting pages on an e-commerce site.',
      points: ['Category Page Content', 'Faceted Navigation SEO', 'Pagination & Canonicalisation', 'Filter Parameter Management', 'Internal Linking Architecture'],
    },
    {
      label: 'Technical',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'E-Commerce Technical SEO',
      desc: 'Resolve the unique technical challenges of large product catalogues — duplicate content, crawl efficiency, and index bloat.',
      points: ['Duplicate Content Elimination', 'XML Sitemap for Products', 'Out-of-Stock Page Handling', 'Crawl Budget for Large Catalogs', 'International E-Commerce Hreflang'],
    },
    {
      label: 'Conversion',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'SEO + CRO Integration',
      desc: 'We align SEO and conversion optimisation — attracting the right traffic and converting them into buyers.',
      points: ['Buyer Intent Keyword Focus', 'Landing Page A/B Testing', 'Trust Signal Optimisation', 'Checkout Funnel Analysis', 'Revenue Attribution Reporting'],
    },
  ],

  'social-media-optimization': [
    {
      label: 'Profile Audit',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80',
      title: 'Social Profile Audit & Branding',
      desc: 'A complete audit of your social profiles — optimising bios, visuals, and settings for maximum discovery and first impressions.',
      points: ['Bio & About Section Optimisation', 'Profile & Cover Image Redesign', 'Link-in-Bio Strategy', 'Username & Vanity URL Optimisation', 'Platform Setting Reviews'],
    },
    {
      label: 'Hashtags',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80',
      title: 'Hashtag & Keyword Strategy',
      desc: 'Platform-specific hashtag research to maximise organic reach and connect your content with the right audience.',
      points: ['Platform-Specific Research', 'Hashtag Grouping Strategy', 'Trending vs. Niche Balance', 'Branded Hashtag Creation', 'Performance Tracking'],
    },
    {
      label: 'Consistency',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80',
      title: 'Cross-Platform Brand Consistency',
      desc: 'Ensure your brand voice, visuals, and messaging are cohesive across every social platform.',
      points: ['Brand Voice Guide', 'Visual Identity Templates', 'Cross-Platform Sync', 'Content Repurposing Strategy', 'Tone & Messaging Audit'],
    },
  ],

  'wordpress-development': [
    {
      label: 'Custom Themes',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'Custom WordPress Theme Development',
      desc: 'Bespoke WordPress themes built from scratch — pixel-perfect, fast, and fully customisable for your brand.',
      points: ['From Figma/XD to Code', 'Block Editor (Gutenberg) Ready', 'ACF & CPT Integration', 'WPML Multilingual Ready', 'Child Theme Architecture'],
    },
    {
      label: 'Plugins',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: 'Custom Plugin Development',
      desc: 'Build any feature not available off-the-shelf. Our custom plugins are lightweight, secure, and deeply integrated with WordPress core.',
      points: ['Custom Post Types & Taxonomies', 'REST API Endpoints', 'Admin Dashboard Panels', 'WooCommerce Extensions', 'Cron Job Automation'],
    },
    {
      label: 'Performance',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'WordPress Speed Optimisation',
      desc: 'Achieve 90+ PageSpeed scores with caching, CDN, database optimisation, and code cleanup.',
      points: ['WP Rocket / LiteSpeed Cache Setup', 'Database Cleanup & Optimisation', 'CDN Integration', 'Image Optimisation (Smush / ShortPixel)', 'PHP 8.x Upgrade'],
    },
    {
      label: 'Security',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: 'WordPress Security Hardening',
      desc: 'Protect your WordPress site from hackers with industry-best security practices, firewalls, and monitoring.',
      points: ['Wordfence / Sucuri Setup', 'Login Protection & 2FA', 'File Integrity Monitoring', 'Brute Force Prevention', 'Regular Security Audits'],
    },
  ],

  'wordpress-theme-development': [
    {
      label: 'Design to Theme',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'Design to WordPress Theme',
      desc: 'We take your Figma, XD, or PSD designs and hand-code them into a pixel-perfect WordPress theme.',
      points: ['Figma / XD / PSD to Theme', 'Pixel-Perfect Implementation', 'Responsive at All Breakpoints', 'Cross-Browser Compatible', 'W3C Validated Markup'],
    },
    {
      label: 'Customizer',
      img: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&auto=format&fit=crop&q=80',
      title: 'WordPress Customizer Options',
      desc: 'Give your team full control with a rich theme options panel — no coding required to update colours, fonts, or layouts.',
      points: ['Live Theme Customizer Panel', 'Custom Colour Palettes', 'Font & Typography Controls', 'Header & Footer Builder', 'Page Layout Options'],
    },
    {
      label: 'Gutenberg',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: 'Custom Gutenberg Blocks',
      desc: 'Build rich page layouts with custom Gutenberg blocks — reusable, intuitive, and perfectly on-brand.',
      points: ['Custom Block Development', 'Block Patterns & Templates', 'Full Site Editing (FSE)', 'ACF Blocks Integration', 'Reusable Block Library'],
    },
  ],

  'wordpress-migration': [
    {
      label: 'Pre-Migration',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80',
      title: 'Pre-Migration Planning',
      desc: 'A detailed migration plan that maps every URL, asset, and database record before a single file moves.',
      points: ['Full Site Inventory', 'URL Structure Mapping', 'Redirect Planning (301 Map)', 'Staging Environment Setup', 'Rollback Plan'],
    },
    {
      label: 'Migration',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=80',
      title: 'Seamless Zero-Downtime Migration',
      desc: 'We migrate all content, media, users, and settings — live within minutes using atomic deployment techniques.',
      points: ['Full Database Migration', 'Media Library Transfer', 'User Accounts & Permissions', 'Plugin Configuration Transfer', 'DNS Cutover Coordination'],
    },
    {
      label: 'SEO Preservation',
      img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&auto=format&fit=crop&q=80',
      title: 'SEO Preservation',
      desc: 'Protect your hard-earned rankings with a comprehensive redirect strategy and post-migration SEO monitoring.',
      points: ['301 Redirect Implementation', 'Canonical Tag Review', 'Google Search Console Setup', 'Sitemap Resubmission', '30-Day Post-Migration Monitoring'],
    },
  ],

  'wordpress-plugin-development': [
    {
      label: 'Architecture',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: 'Plugin Architecture & Planning',
      desc: 'We architect plugins that are modular, secure, and future-proof — following WordPress coding standards throughout.',
      points: ['OOP Plugin Architecture', 'WordPress Coding Standards', 'Security Best Practices', 'Performance Profiling', 'Unit Testing Setup'],
    },
    {
      label: 'Integrations',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80',
      title: 'Third-Party API Integrations',
      desc: 'Connect your WordPress site to any external service — CRMs, payment gateways, ERPs, and more.',
      points: ['Salesforce / HubSpot CRM', 'Stripe / PayPal Payments', 'Mailchimp / ActiveCampaign', 'Custom REST API Endpoints', 'Webhook Handling'],
    },
    {
      label: 'Admin UI',
      img: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&auto=format&fit=crop&q=80',
      title: 'Custom Admin Interface',
      desc: 'Build intuitive admin dashboards and meta boxes your team will love using every day.',
      points: ['Custom Admin Pages', 'Settings API Usage', 'Meta Boxes & Custom Fields', 'Bulk Actions & Filters', 'Role-Based Access Control'],
    },
  ],

  'wordpress-theme-integration': [
    {
      label: 'Setup',
      img: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&auto=format&fit=crop&q=80',
      title: 'Theme Installation & Configuration',
      desc: 'Full theme setup from demo import to custom configuration — every widget, menu, and setting properly configured.',
      points: ['Demo Content Import', 'Menu & Widget Setup', 'Homepage Template Configuration', 'Plugin Activation & Setup', 'License Activation'],
    },
    {
      label: 'Customisation',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'Theme Customisation',
      desc: 'We go beyond the out-of-the-box experience — customising colours, fonts, layouts, and adding custom CSS/JS.',
      points: ['Brand Colour Integration', 'Font & Typography Updates', 'Custom CSS / JS Injection', 'Child Theme Creation', 'Layout Adjustments'],
    },
    {
      label: 'Testing',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
      title: 'Quality Assurance & Testing',
      desc: 'Rigorous cross-browser and cross-device testing to ensure everything looks and works perfectly before launch.',
      points: ['Cross-Browser Testing', 'Mobile & Tablet Review', 'Form & CTA Testing', 'Speed Benchmark Post-Setup', 'Broken Link Check'],
    },
  ],

  'woocommerce-development': [
    {
      label: 'Store Setup',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
      title: 'WooCommerce Store Setup',
      desc: 'End-to-end WooCommerce configuration — products, shipping, tax, and payment gateways all properly set up from day one.',
      points: ['Product Catalogue Setup', 'Shipping Zone Configuration', 'Tax Rules Setup', 'Payment Gateway Integration', 'Email Notification Configuration'],
    },
    {
      label: 'Custom Features',
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80',
      title: 'Custom WooCommerce Features',
      desc: 'Build unique shopping experiences with custom product types, pricing rules, and checkout flows.',
      points: ['Custom Product Types', 'Pricing Rules & Discounts', 'Subscription Products', 'Composite & Bundle Products', 'Custom Checkout Fields'],
    },
    {
      label: 'Performance',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'WooCommerce Performance',
      desc: 'Optimise your WooCommerce store for speed — critical for reducing cart abandonment and improving SEO.',
      points: ['Database Query Optimisation', 'Cart Fragment Caching', 'Product Image Optimisation', 'Hosting Recommendation', 'Redis Object Caching'],
    },
  ],

  'ui-ux-design': [
    {
      label: 'Research',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&auto=format&fit=crop&q=80',
      title: 'User Research & Discovery',
      desc: 'Uncover what your users truly need through interviews, surveys, and behavioural analysis.',
      points: ['User Interviews', 'Survey Design & Analysis', 'Persona Development', 'Jobs-to-be-Done Framework', 'Empathy Mapping'],
    },
    {
      label: 'Wireframes',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80',
      title: 'Wireframing & Prototyping',
      desc: 'Translate insights into low and high-fidelity wireframes and interactive prototypes for rapid validation.',
      points: ['Low-Fidelity Sketches', 'High-Fidelity Wireframes', 'Interactive Figma Prototypes', 'User Flow Diagrams', 'Clickable Demo for Stakeholders'],
    },
    {
      label: 'Visual Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'Visual Design System',
      desc: 'A scalable design system with components, tokens, and guidelines that ensures consistency across your entire product.',
      points: ['Component Library (Figma)', 'Design Tokens (Colours, Spacing)', 'Typography Scale', 'Icon System', 'Brand Style Guide'],
    },
    {
      label: 'Usability Testing',
      img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&auto=format&fit=crop&q=80',
      title: 'Usability Testing & Iteration',
      desc: 'Validate designs with real users before development begins — saving time, money, and rework.',
      points: ['Moderated User Testing', 'Heatmap & Session Recording', 'Task Success Rate Analysis', 'SUS Score Measurement', 'Iterative Design Refinement'],
    },
  ],

  'website-redesign': [
    {
      label: 'Audit',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
      title: 'Existing Site Audit',
      desc: 'A full audit of your current site — performance, UX, SEO, and conversion — to identify what to keep and what to overhaul.',
      points: ['Heatmap & Click Analysis', 'Conversion Funnel Review', 'SEO Baseline Audit', 'Page Speed Benchmark', 'User Feedback Analysis'],
    },
    {
      label: 'Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80',
      title: 'Modern Visual Redesign',
      desc: 'A fresh, modern look that maintains your brand equity while dramatically improving usability and first impressions.',
      points: ['Mood Board & Direction', 'New Design System', 'Homepage & Key Page Designs', 'Mobile-First Layouts', 'Accessibility Compliance'],
    },
    {
      label: 'Development',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80',
      title: 'Redesign Development',
      desc: 'We build the redesigned site on a staging environment, test thoroughly, then launch with zero downtime.',
      points: ['Staging Environment Build', 'Cross-Browser Testing', 'Performance Optimisation', 'SEO Migration', 'Zero-Downtime Launch'],
    },
  ],

  'google-ads-management': [
    {
      label: 'Search Ads',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'Google Search Ads',
      desc: 'Capture high-intent buyers at the moment they search with laser-targeted search campaigns.',
      points: ['Keyword Research & Mapping', 'Responsive Search Ads', 'Ad Extensions Setup', 'Quality Score Optimisation', 'SKAG / STAG Structure'],
    },
    {
      label: 'Display & YouTube',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80',
      title: 'Display & YouTube Ads',
      desc: 'Build brand awareness and retarget past visitors with visually compelling display and video ads.',
      points: ['Display Network Campaigns', 'YouTube In-Stream Ads', 'Custom Audience Targeting', 'Remarketing Lists (RLSA)', 'Responsive Display Ads'],
    },
    {
      label: 'Shopping Ads',
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80',
      title: 'Google Shopping & Performance Max',
      desc: 'Drive e-commerce sales with Shopping campaigns and AI-powered Performance Max asset groups.',
      points: ['Product Feed Optimisation', 'Shopping Campaign Setup', 'Performance Max Campaigns', 'Merchant Centre Management', 'ROAS Bid Strategy'],
    },
    {
      label: 'Optimisation',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      title: 'Continuous Optimisation',
      desc: 'Weekly optimisation cycles powered by data — so your ads get better, cheaper, and more profitable every month.',
      points: ['Weekly Performance Reviews', 'Search Term Pruning', 'Ad Copy A/B Testing', 'Bid Adjustment Optimisation', 'Conversion Tracking Audits'],
    },
  ],

  'facebook-ads-management': [
    {
      label: 'Audience',
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80',
      title: 'Precision Audience Targeting',
      desc: 'Reach your ideal customers using Facebook\'s powerful targeting — interests, behaviours, lookalikes, and custom audiences.',
      points: ['Interest & Behaviour Targeting', 'Custom Audience Upload', 'Lookalike Audience Creation', 'Retargeting Website Visitors', 'Meta Pixel Setup & Verification'],
    },
    {
      label: 'Ad Creatives',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80',
      title: 'Scroll-Stopping Ad Creatives',
      desc: 'We design and write compelling static, carousel, and video ad creatives that stop the scroll and earn clicks.',
      points: ['Static Image Ads', 'Carousel Ad Design', 'Reels / Video Ad Editing', 'Ad Copy Variations', 'Branded Creative Templates'],
    },
    {
      label: 'Funnels',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      title: 'Full-Funnel Campaign Strategy',
      desc: 'A complete TOFU → MOFU → BOFU funnel to build awareness, nurture interest, and convert buyers.',
      points: ['Awareness (TOFU) Campaigns', 'Consideration (MOFU) Campaigns', 'Conversion (BOFU) Campaigns', 'Retargeting Sequences', 'Post-Purchase Retention Ads'],
    },
    {
      label: 'Analytics',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      title: 'Reporting & Optimisation',
      desc: 'Weekly reporting with ROAS, CPA, CTR, and CPM breakdowns — plus ongoing A/B testing to maximise returns.',
      points: ['Custom Ads Manager Dashboard', 'ROAS & CPA Tracking', 'Creative Performance Analysis', 'Weekly Optimisation Report', 'Budget Reallocation Strategy'],
    },
  ],

  'business-hosting': [
    {
      label: 'Infrastructure',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80',
      title: 'Enterprise Cloud Infrastructure',
      desc: 'SSD-powered cloud hosting on top-tier providers with global CDN distribution for ultra-fast load times worldwide.',
      points: ['SSD NVMe Cloud Servers', 'Global CDN (100+ PoPs)', '99.9% Uptime SLA', 'Auto-Scaling Resources', 'Dedicated IP Options'],
    },
    {
      label: 'Security',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
      title: 'Advanced Security Features',
      desc: 'Multi-layer security to keep your site and customer data safe from threats 24/7.',
      points: ['Free SSL Certificates', 'DDoS Protection', 'Web Application Firewall', 'Malware Scanning', 'Brute Force Protection'],
    },
    {
      label: 'Backups',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=80',
      title: 'Automated Backups & Recovery',
      desc: 'Daily automated backups stored offsite with one-click restoration to protect your data.',
      points: ['Daily Automated Backups', 'Offsite Backup Storage', 'One-Click Restore', '30-Day Backup Retention', 'Database Backup Scheduling'],
    },
    {
      label: 'Support',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=80',
      title: '24/7 Managed Support',
      desc: 'Round-the-clock expert support for server issues, configuration changes, and performance queries.',
      points: ['24/7 Ticket & Chat Support', 'Server Monitoring & Alerts', 'Managed Updates', 'Domain Management', 'Migration Assistance'],
    },
  ],
};

// ─── Service data ─────────────────────────────────────────────────────────────
const serviceData = {
  'web-design-company': {
    icon: Code2,
    title: "Web Design Company",
    desc: "We create future-forward, interactive web designs that captivate and convert.",
    features: ["Interactive 3D Elements", "Mobile-First Design", "UX/UI Excellence", "Premium Animations", "Custom Branding"],
    detailedDesc: "Our web design process focuses on creating a unique digital identity for your brand. We combine high-end aesthetics with functional user experiences to ensure your website stands out in the crowded digital landscape.",
    heroImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80",
  },
  'website-development-services': {
    icon: Code2,
    title: "Website Development Services",
    desc: "Scalable, high-performance web development solutions using modern tech stacks.",
    features: ["Full-Stack Solutions", "Custom CMS Development", "API Integrations", "Scalable Architecture", "Ongoing Maintenance"],
    detailedDesc: "From simple landing pages to complex enterprise systems, we deliver robust web solutions tailored to your business goals. We use Next.js, React, and Node.js to ensure speed and reliability.",
    heroImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
  },
  'seo-services': {
    icon: Search,
    title: "SEO Services",
    desc: "Dominate search results with our comprehensive white-hat SEO strategies.",
    features: ["Technical SEO Audit", "Keyword Research", "Quality Backlink Building", "Content Strategy", "Competitor Analysis"],
    detailedDesc: "Our SEO services are designed to improve your organic visibility and drive targeted traffic. We stay ahead of algorithm updates to ensure sustainable growth for your business.",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
  },
  'ppc-management-services': {
    icon: BarChart3,
    title: "PPC Management Services",
    desc: "Drive immediate results and high ROI with expertly managed paid campaigns.",
    features: ["Google Ads Management", "Social Media Ads", "Conversion Tracking", "Ad Copy Optimization", "A/B Testing"],
    detailedDesc: "We manage your PPC budget effectively to ensure maximum conversions for every dollar spent. Our data-driven approach ensures your ads reach the right audience at the right time.",
    heroImg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80",
  },
  'social-media-marketing': {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and boost brand awareness on all major social platforms.",
    features: ["Content Calendar", "Influencer Marketing", "Community Engagement", "Platform Management", "Analytics Reporting"],
    detailedDesc: "Our social media strategies are tailored to your brand's voice and goals. We create engaging content that sparks conversations and drives customer loyalty.",
    heroImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80",
  },
  'content-writing-services': {
    icon: PenTool,
    title: "Content Writing Services",
    desc: "Persuasive and SEO-friendly content that speaks directly to your audience.",
    features: ["Blog Post Writing", "Technical Writing", "Copywriting", "SEO Content", "Email Newsletters"],
    detailedDesc: "We believe content is king. Our expert writers craft high-quality, research-based content that establishes your brand as an authority in your industry.",
    heroImg: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=80",
  },
  'e-commerce-development': {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "Powerful online stores designed to handle high traffic and seamless transactions.",
    features: ["Shopify & WooCommerce", "Secure Payment Gateways", "Inventory Management", "Custom Checkout Flow", "Mobile Shopping"],
    detailedDesc: "We build e-commerce platforms that are not just beautiful but also optimized for sales. We focus on speed, security, and a seamless user journey from product discovery to checkout.",
    heroImg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
  },
  'page-speed-optimization': {
    icon: Gauge,
    title: "Page Speed Optimization",
    desc: "Ensure your website loads instantly to reduce bounce rates and improve SEO.",
    features: ["Core Web Vitals Fix", "Image Optimization", "Code Minification", "Server Optimization", "CDN Integration"],
    detailedDesc: "Speed is a critical factor for both user experience and search rankings. We optimize every aspect of your site to achieve 95+ PageSpeed scores.",
    heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
  },
  'website-maintenance': {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Keep your website secure, updated, and performing at its best 24/7.",
    features: ["Security Monitoring", "Regular Backups", "Software Updates", "Performance Checks", "Emergency Support"],
    detailedDesc: "Our maintenance packages give you peace of mind. We handle the technical details so you can focus on running your business without worrying about downtime or security threats.",
    heroImg: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80",
  },
  'seo-audit-services': {
    icon: Search,
    title: "SEO Audit Services",
    desc: "Identify hidden issues and discover growth opportunities with a deep-dive audit.",
    features: ["Comprehensive Reports", "On-Page Analysis", "Backlink Audit", "Competitor Benchmarking", "Actionable Insights"],
    detailedDesc: "Our SEO audit is more than just a checklist. We provide a strategic roadmap to improve your rankings based on a thorough analysis of your site's health and competition.",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
  },
  'local-seo-services': {
    icon: Globe,
    title: "Local SEO Services",
    desc: "Connect with local customers and dominate local search maps in your area.",
    features: ["GMB Optimization", "Local Citations", "Review Management", "Geo-Targeted Ads", "Map Visibility"],
    detailedDesc: "If you have a local business, you need local SEO. We help you appear in the 'Local Pack' on Google to drive more foot traffic and local calls.",
    heroImg: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1200&auto=format&fit=crop&q=80",
  },
  'enterprise-seo-services': {
    icon: Zap,
    title: "Enterprise SEO Services",
    desc: "Scalable SEO strategies for large organizations with complex digital footprints.",
    features: ["Massive Keyword Tracking", "Inter-Departmental SEO", "Complex Migrations", "International SEO", "ROI Modeling"],
    detailedDesc: "Enterprise SEO requires a different approach. We focus on scalability, stakeholder management, and technical infrastructure to drive results for large-scale websites.",
    heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
  },
  'ecommerce-seo-services': {
    icon: Search,
    title: "E-Commerce SEO Services",
    desc: "Optimize thousands of product pages to drive organic sales and conversions.",
    features: ["Product Schema", "Category Optimization", "Faceted Search SEO", "Internal Linking", "Conversion-Centric SEO"],
    detailedDesc: "We understand the unique challenges of e-commerce SEO. We optimize your product and category pages to ensure they appear for buyers at every stage of the funnel.",
    heroImg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80",
  },
  'social-media-optimization': {
    icon: Share2,
    title: "Social Media Optimization",
    desc: "Fine-tune your social profiles to improve engagement and organic reach.",
    features: ["Profile Branding", "Bio Optimization", "Hashtag Strategy", "Cross-Platform Sync", "Engagement Audit"],
    detailedDesc: "SMO is about making your social media presence work harder for you. We optimize your profiles to ensure consistent branding and maximum visibility across all channels.",
    heroImg: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=1200&auto=format&fit=crop&q=80",
  },
  'wordpress-development': {
    icon: Layers,
    title: "WordPress Development",
    desc: "Custom WordPress websites built for performance, scalability, and ease of management.",
    features: ["Custom Theme Development", "Plugin Development", "Speed Optimization", "Security Hardening", "Gutenberg Block Development"],
    detailedDesc: "We build powerful WordPress websites tailored to your exact needs. From custom themes to complex plugin architecture, our WordPress solutions are secure, fast, and built to scale with your business.",
    heroImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&auto=format&fit=crop&q=80",
  },
  'wordpress-theme-development': {
    icon: Palette,
    title: "WordPress Theme Development",
    desc: "Pixel-perfect, fully responsive custom WordPress themes designed for your brand.",
    features: ["Custom Design to Theme", "Responsive Layouts", "Theme Customizer Options", "WooCommerce Compatible", "SEO-Optimized Markup"],
    detailedDesc: "Our custom WordPress themes go beyond templates. We design and code bespoke themes that reflect your brand identity, load fast, and provide an intuitive editing experience for your team.",
    heroImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=80",
  },
  'wordpress-migration': {
    icon: RefreshCw,
    title: "WordPress Migration",
    desc: "Seamless, zero-downtime migration of your website to or from WordPress.",
    features: ["Full Data Migration", "SEO Preservation", "URL Redirect Mapping", "Database Migration", "Post-Migration Testing"],
    detailedDesc: "Migrating a website can be risky without expert handling. We ensure your content, SEO rankings, and user experience are fully preserved during the transition to WordPress.",
    heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
  },
  'wordpress-plugin-development': {
    icon: Code2,
    title: "WordPress Plugin Development",
    desc: "Custom WordPress plugins to extend functionality and automate your workflows.",
    features: ["Custom Plugin Architecture", "REST API Integration", "Admin Panel Development", "WooCommerce Extensions", "Multisite Support"],
    detailedDesc: "When off-the-shelf plugins don't cut it, we build custom solutions. Our plugins are lightweight, secure, and fully integrated with the WordPress ecosystem.",
    heroImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
  },
  'wordpress-theme-integration': {
    icon: Layers,
    title: "WordPress Theme Integration",
    desc: "Expert integration of purchased or custom themes with full functionality setup.",
    features: ["Theme Installation & Setup", "Plugin Configuration", "Content Population", "Speed Optimization", "Cross-Browser Testing"],
    detailedDesc: "We take your chosen theme and transform it into a fully functional website. From demo import to custom configuration, we ensure everything works perfectly across all devices.",
    heroImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80",
  },
  'woocommerce-development': {
    icon: ShoppingBag,
    title: "WooCommerce Development",
    desc: "Feature-rich WooCommerce stores built for high-volume online selling.",
    features: ["Store Setup & Configuration", "Payment Gateway Integration", "Custom Product Pages", "Inventory & Shipping Setup", "Multi-Currency Support"],
    detailedDesc: "WooCommerce powers millions of online stores, and we know how to make yours stand out. We build optimized, conversion-focused WooCommerce solutions that scale with your business.",
    heroImg: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=80",
  },
  'ui-ux-design': {
    icon: Palette,
    title: "UI/UX Design Services",
    desc: "Human-centered design that turns complex workflows into intuitive digital experiences.",
    features: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing", "Interaction Design"],
    detailedDesc: "Great design is invisible. Our UI/UX team creates interfaces that feel natural and delightful, reducing friction and increasing engagement at every touchpoint of the user journey.",
    heroImg: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop&q=80",
  },
  'website-redesign': {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernize your outdated website with a fresh, conversion-optimized redesign.",
    features: ["UX Audit & Analysis", "Modern Visual Refresh", "Mobile Responsiveness", "SEO Migration", "Performance Boost"],
    detailedDesc: "A redesign is more than a facelift. We analyze your existing site's strengths and weaknesses, then rebuild it with modern standards to improve user engagement, conversions, and search performance.",
    heroImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80",
  },
  'google-ads-management': {
    icon: BarChart3,
    title: "Google Ads Management",
    desc: "Maximize your ROI with expert Google Ads campaign management and optimization.",
    features: ["Search & Display Campaigns", "Shopping Ads", "Remarketing Campaigns", "Conversion Tracking", "Bid Strategy Optimization"],
    detailedDesc: "Google Ads is the fastest way to reach customers actively searching for your services. We create, manage, and continuously optimize your campaigns to deliver maximum returns on your ad spend.",
    heroImg: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&auto=format&fit=crop&q=80",
  },
  'facebook-ads-management': {
    icon: Monitor,
    title: "Facebook Ads Management",
    desc: "Targeted Facebook & Instagram ad campaigns that drive engagement and conversions.",
    features: ["Audience Targeting", "Creative Ad Design", "A/B Split Testing", "Retargeting Funnels", "Performance Analytics"],
    detailedDesc: "With billions of active users, Facebook and Instagram offer unparalleled reach. Our team crafts compelling ad creatives and precision-targets your ideal audience to maximize every dollar of your ad budget.",
    heroImg: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80",
  },
  'business-hosting': {
    icon: Server,
    title: "Business Hosting",
    desc: "Reliable, high-speed hosting solutions with 99.9% uptime guarantee.",
    features: ["SSD Cloud Hosting", "SSL Certificates", "Daily Backups", "24/7 Server Monitoring", "Domain Management"],
    detailedDesc: "Your website deserves a hosting environment that's as powerful as your business. We provide enterprise-grade hosting with blazing-fast speeds, rock-solid security, and round-the-clock support.",
    heroImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
  },
};

// ─── Main Component ──────────────────────────────────────────────────────────
const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id];
  const serviceTabs = tabs[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground font-poppins">
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
            <h1 className="text-4xl font-bold font-montserrat">Service not found.</h1>
            <Link to="/" className="text-primary hover:underline text-sm font-bold uppercase tracking-widest">
                ← Back to Home
              </Link>
          </div>
          <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-poppins">
      <Navbar />

      {/* Hero image banner */}
      <div className="relative w-full h-[45vh] min-h-[300px] overflow-hidden">
        <img
          src={service.heroImg}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
        <div className="absolute inset-0 flex items-end px-6 md:px-16 pb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg">
              <Icon className="w-7 h-7" />
            </div>
              <h1 className="text-2xl md:text-4xl font-extrabold font-montserrat tracking-tight text-white drop-shadow leading-tight">
              {service.title}
            </h1>
          </div>
        </div>
      </div>

      <main className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mt-10 mb-10 block">
            <ArrowRight className="w-3 h-3 rotate-180" /> Back
          </button>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed">
              {service.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,16,101,0.3)]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1">
            <div className="bg-foreground/[0.02] border border-border/5 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
              <h3 className="text-2xl font-bold font-montserrat mb-8">Service Overview</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed font-poppins font-light text-lg">
                <p>{service.detailedDesc}</p>
                <p>
                  Our team of experts works closely with you to understand your specific needs and deliver solutions that exceed expectations. We focus on measurable results and sustainable long-term growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed deep-dive section */}
        {serviceTabs && <TabSection tabs={serviceTabs} />}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
