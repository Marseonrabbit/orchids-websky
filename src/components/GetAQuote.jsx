import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X, ArrowRight, Loader2 } from 'lucide-react';
import { submitForm } from '../lib/formSubmit';

const GetAQuote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

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
      setTimeout(() => { setIsOpen(false); setStatus(null); }, 4000);
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(46,16,101,0.4)] hover:scale-110 transition-transform"
        aria-label="Get a Quote"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-[70] w-[90vw] max-w-md bg-background border border-darkPurple/10 rounded-3xl p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold font-montserrat mb-1">Get A Free Quote</h3>
              <p className="text-sm text-muted-foreground mb-6">Tell us about your project and we'll get back to you within 1 hour.</p>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Your Name *" required
                  className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins" />
                <input name="email" type="email" placeholder="Email Address *" required
                  className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins" />
                <input name="phone" type="tel" placeholder="Phone Number"
                  className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins" />
                <input name="company" type="text" placeholder="Company Name"
                  className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins" />
                  <select name="service"
                    className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins text-foreground">
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
                  <select name="budget"
                    className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins text-foreground">
                  <option value="">Select Budget Range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
                  <select name="industry"
                    className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins text-foreground">
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
                <textarea name="message" placeholder="Tell us about your project..." rows={3}
                  className="w-full bg-foreground/5 border border-border/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-poppins resize-none" />

                {status === 'success' && (
                  <div className="text-sm text-green-500 font-medium bg-green-500/10 rounded-xl px-4 py-3">
                    ✅ Your request has been sent! We'll contact you within 1 hour.
                  </div>
                )}
                {status === 'error' && (
                  <div className="text-sm text-red-500 font-medium bg-red-500/10 rounded-xl px-4 py-3">
                    ❌ Something went wrong. Please try again or WhatsApp us directly.
                  </div>
                )}

                <button type="submit" disabled={sending}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-darkPurple transition-all shadow-[0_0_20px_rgba(46,16,101,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>Send Request <ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GetAQuote;
