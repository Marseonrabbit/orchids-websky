import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitForm } from '../lib/formSubmit';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const t = {
    tag: "Get in Touch",
    title: "Let's Build the",
    subtitle: "Future Together",
    name: "Your Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company Name",
    service: "Service Interested In",
    budget: "Budget Range",
    industry: "Industry",
    message: "Message",
    send: "Send Message",
    address: "54 A, 80 Feet Rd, Aayodhya Nagar, Jaipur, RJ 302015",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const fd = new FormData(e.target);
    const data = {
      from_name: fd.get('name'),
      from_email: fd.get('email'),
      phone: fd.get('phone'),
      company: fd.get('company'),
      service: fd.get('service'),
      budget: fd.get('budget'),
      industry: fd.get('industry'),
      message: fd.get('message'),
    };
    try {
      await submitForm(data);
      setStatus('success');
      e.target.reset();
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const inputClass = "bg-foreground/[0.03] border border-border/40 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground text-sm placeholder:text-muted-foreground w-full";
  const selectClass = `${inputClass} text-foreground`;

  return (
    <SectionWrapper id="contact" className="bg-background relative">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="flex-1 lg:max-w-[40%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-5 font-montserrat"
          >
            {t.tag}
          </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-10 leading-tight">
            {t.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground font-light italic font-playfair">
              {t.subtitle}
            </span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-5 group">
              <div className="w-11 h-11 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                <a href="mailto:hello@skylumine.com" className="text-lg font-light hover:text-primary transition-colors">hello@skylumine.com</a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="w-11 h-11 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                <a href="tel:+919876543210" className="text-lg font-light hover:text-primary transition-colors">+91 98765 43210</a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="w-11 h-11 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Address</div>
                <p className="text-base font-light text-muted-foreground max-w-xs group-hover:text-foreground transition-colors leading-relaxed">{t.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              className="bg-foreground/[0.02] border border-border/30 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.name} *</label>
                <input name="name" type="text" required className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.email} *</label>
                <input name="email" type="email" required className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.phone}</label>
                <input name="phone" type="tel" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.company}</label>
                <input name="company" type="text" className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.service}</label>
                <select name="service" className={selectClass}>
                  <option value="">Select a Service</option>
                  <option>Web Design & Development</option>
                  <option>Full Stack Development</option>
                  <option>SEO Services</option>
                  <option>PPC Management</option>
                  <option>Social Media Marketing</option>
                  <option>WordPress Development</option>
                  <option>E-Commerce Development</option>
                  <option>UI/UX Design</option>
                  <option>Content Writing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.budget}</label>
                <select name="budget" className={selectClass}>
                  <option value="">Select Budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.industry}</label>
              <select name="industry" className={selectClass}>
                <option value="">Select Industry</option>
                <option>E-Commerce</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Real Estate</option>
                <option>Technology</option>
                <option>Hospitality</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.message} *</label>
              <textarea name="message" rows={5} required className={`${inputClass} rounded-3xl resize-none`}></textarea>
            </div>

            {status === 'success' && (
              <div className="mb-6 text-sm text-green-500 font-medium bg-green-500/10 rounded-2xl px-6 py-4">
                ✅ Your request has been sent! We'll contact you within 1 hour.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 text-sm text-red-500 font-medium bg-red-500/10 rounded-2xl px-6 py-4">
                ❌ Something went wrong. Please try again or WhatsApp us directly.
              </div>
            )}

            <button type="submit" disabled={sending}
              className="w-full py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-darkPurple hover:text-white transition-all shadow-[0_0_30px_rgba(46,16,101,0.3)] disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>{t.send} <Send className="w-4 h-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
