import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const t = {
    title: "Our Story",
    subtitle: "Crafting Digital Futures",
    mission: "Mission",
    vision: "Vision",
    missionText: "To empower businesses with innovative digital solutions that drive growth and create meaningful connections.",
    visionText: "To be the global leader in future-forward digital production, setting new standards for creativity and tech.",
    stats: [
      { value: "5000+", label: "Clients" },
      { value: "7500+", label: "Projects" },
      { value: "150+", label: "Experts" },
      { value: "10+", label: "Years" }
    ],
    teamTitle: "Our Leadership",
    team: [
      { name: "Vikash Poonia", role: "CEO & Founder", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f59a8900-a3af-43cc-9b3b-2f3fe55ece16/WhatsApp-Image-2026-02-20-at-9.59.20-PM-1771604994365.jpeg?width=8000&height=8000&resize=contain" },
      { name: "Priya Sharma", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80" },
      { name: "Rahul Verma", role: "Technical Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80" },
      { name: "Ananya Iyer", role: "Marketing Strategist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
        <main className="pt-24 pb-0">
        <SectionWrapper>
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight mb-6 leading-tight"
            >
              {t.title}
            </motion.h1>
            <p className="text-primary font-bold uppercase tracking-[0.4em] text-xs">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-foreground/[0.02] border border-border/5 p-12 rounded-[3rem]">
              <Target className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6">{t.mission}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">{t.missionText}</p>
            </div>
            <div className="bg-foreground/[0.02] border border-border/5 p-12 rounded-[3rem]">
              <Eye className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6">{t.vision}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">{t.visionText}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 text-center">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-extrabold font-montserrat mb-2 text-primary">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight mb-16 text-center leading-tight">{t.teamTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.team.map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-foreground/5 rounded-[2rem] mb-6 overflow-hidden relative">
                    {member.image && (
                        <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: '50% 0%'}} />
                    )}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat mb-1">{member.name}</h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
