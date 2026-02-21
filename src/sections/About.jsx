import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <SectionWrapper id="about">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left: Heading */}
        <div className="flex-1 lg:max-w-[45%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-montserrat"
          >
            Who We Are
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-montserrat tracking-tight"
          >
              Connecting Ideas to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-muted-foreground italic font-playfair font-normal">
              Uniquely Crafted Experiences
            </span>
          </motion.h2>
        </div>

        {/* Right: Body */}
        <div className="flex-1 space-y-6 font-poppins">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-foreground font-light leading-relaxed"
          >
            Skylumine is a premium digital production studio that brings your ideas to life through visually captivating designs and interactive experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-muted-foreground leading-relaxed text-sm md:text-base font-light"
          >
            We specialize in comprehensive digital solutions, offering high-end web development, advanced SEO strategies, and performance-driven social marketing. Our expertise ensures a seamless online presence tailored to the future of digital interaction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4"
          >
            <a href="/about" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">
              <span className="border-b border-foreground/20 pb-1 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                Learn More About Our Journey
              </span>
              <div className="w-8 h-[1px] bg-foreground/20 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
