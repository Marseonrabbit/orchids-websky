import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechVista Solutions",
    text: "Skylumine completely transformed our online presence. Their team delivered a stunning website that increased our leads by 300% in just three months.",
    rating: 5
  },
  {
    name: "Neha Kapoor",
      role: "Founder, StyleCraft Boutique",
    text: "The e-commerce store they built for us is flawless. Our sales doubled within the first quarter. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Marketing Director, GreenLeaf Organics",
    text: "Their SEO and PPC strategies took us from page 5 to page 1 on Google. The ROI on their digital marketing services has been phenomenal.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "COO, NextGen Fintech",
    text: "Working with Skylumine was a game-changer. Their WordPress development team built a complex platform that handles thousands of users daily without a hitch.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Owner, Singh & Associates Law Firm",
    text: "They redesigned our outdated website into a modern, professional platform. Our client inquiries increased by 200% and the site loads incredibly fast.",
    rating: 5
  },
  {
    name: "Ananya Reddy",
    role: "Head of Digital, CloudNine Media",
    text: "Their social media management has grown our following by 500% organically. The content strategy they implemented truly resonates with our audience.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-[500px] h-[500px] bg-darkPurple/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10px] font-bold uppercase tracking-[0.6em] text-muted-foreground mb-6"
          >
            Client Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight uppercase"
          >
            What Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-darkPurple">
              Clients Say
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-foreground/[0.02] border border-darkPurple/10 p-8 rounded-[2rem] relative group hover:border-primary/20 transition-all duration-500 flex flex-col"
            >
              <Quote className="w-7 h-7 text-primary/20 mb-5 flex-shrink-0" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-poppins flex-1">
                "{testimonial.text}"
              </p>

              <div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="font-bold font-montserrat text-sm">{testimonial.name}</div>
                <div className="text-[11px] text-muted-foreground tracking-wide mt-0.5">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
