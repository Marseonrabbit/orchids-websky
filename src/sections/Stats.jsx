import { motion } from 'framer-motion';

const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "7500+", label: "Projects Completed" },
  { value: "150+", label: "Experts" },
  { value: "10+", label: "Years Excellence" },
];

const Stats = () => {
  return (
    <div className="py-20 bg-foreground/[0.02] border-y border-border/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground/[0.02] opacity-50" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="text-4xl md:text-6xl font-extrabold text-foreground mb-3 tracking-tighter font-montserrat">
              {stat.value}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground font-montserrat leading-tight">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
