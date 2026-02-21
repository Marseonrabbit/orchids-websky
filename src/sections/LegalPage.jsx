import { useLocation, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const legalContent = {
  'privacy-policy': {
    title: 'Privacy Policy',
    lastUpdated: 'February 21, 2026',
    sections: [
      {
        heading: '1. Introduction',
        body: `Skylumine Digital Agency ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website skylumine.com and use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
      },
      {
        heading: '2. Information We Collect',
        body: `We may collect information about you in a variety of ways:

Personal Data: Name, email address, phone number, company name, and any other identifiers you voluntarily provide when submitting our contact or quote forms.

Usage Data: IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages — collected automatically via analytics tools.

Cookies & Tracking Technologies: We use cookies, web beacons, and similar tracking technologies to improve your experience on our site. See our Cookie Policy for details.`,
      },
      {
        heading: '3. How We Use Your Information',
        body: `We use the information we collect to:
• Respond to your inquiries and deliver requested services
• Send promotional communications (where you have opted in)
• Analyze site usage to improve our website and services
• Comply with legal obligations
• Prevent fraud and abuse`,
      },
      {
        heading: '4. Sharing Your Information',
        body: `We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website (e.g., email platforms, analytics providers) under strict confidentiality agreements. We may also disclose information when required by law.`,
      },
      {
        heading: '5. Data Retention',
        body: `We retain personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact form submissions are retained for up to 2 years.`,
      },
      {
        heading: '6. Your Rights',
        body: `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; object to or restrict processing; and withdraw consent at any time. To exercise these rights, contact us at hello@skylumine.com.`,
      },
      {
        heading: '7. Security',
        body: `We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure. We encourage you to take precautions to protect your own information.`,
      },
      {
        heading: '8. Third-Party Links',
        body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any site you visit.`,
      },
      {
        heading: '9. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our site following changes constitutes your acceptance of those changes.`,
      },
      {
        heading: '10. Contact Us',
        body: `If you have questions about this Privacy Policy, please contact us at:\nSkylumine Digital Agency\n54 A, 80 Feet Rd, Aayodhya Nagar, Jaipur, RJ 302015\nEmail: hello@skylumine.com\nPhone: +91 98765 43210`,
      },
    ],
  },

  'terms-of-service': {
    title: 'Terms of Service',
    lastUpdated: 'February 21, 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: `By accessing or using the Skylumine website (skylumine.com) and any services offered therein, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website or services.`,
      },
      {
        heading: '2. Services',
        body: `Skylumine provides digital agency services including, but not limited to, web design, web development, SEO, PPC management, social media marketing, and content writing. The scope, pricing, and deliverables for any specific project will be outlined in a separate service agreement or proposal.`,
      },
      {
        heading: '3. User Obligations',
        body: `By using our website you agree to:
• Provide accurate, current, and complete information when submitting forms
• Not use our site for any unlawful purpose
• Not attempt to gain unauthorized access to any part of our systems
• Not transmit any harmful, offensive, or disruptive content`,
      },
      {
        heading: '4. Intellectual Property',
        body: `All content on this website — including text, graphics, logos, images, and software — is the property of Skylumine or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
      },
      {
        heading: '5. Project Work & Deliverables',
        body: `Upon full payment, clients receive ownership of final deliverables as specified in the project agreement. Skylumine retains the right to display completed work in its portfolio unless otherwise agreed in writing.`,
      },
      {
        heading: '6. Payment & Billing',
        body: `Payment terms are specified in individual project proposals or agreements. Skylumine reserves the right to suspend services for overdue accounts. All fees are non-refundable unless otherwise stated in the project agreement.`,
      },
      {
        heading: '7. Limitation of Liability',
        body: `To the fullest extent permitted by law, Skylumine shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the relevant service.`,
      },
      {
        heading: '8. Disclaimer of Warranties',
        body: `Our website and services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
      },
      {
        heading: '9. Governing Law',
        body: `These Terms shall be governed by and construed in accordance with the laws of Rajasthan, India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan.`,
      },
      {
        heading: '10. Changes to Terms',
        body: `We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Your continued use of the site after any changes constitutes acceptance of the new Terms.`,
      },
      {
        heading: '11. Contact',
        body: `For questions about these Terms, contact us at hello@skylumine.com.`,
      },
    ],
  },

  'cookie-policy': {
    title: 'Cookie Policy',
    lastUpdated: 'February 21, 2026',
    sections: [
      {
        heading: '1. What Are Cookies?',
        body: `Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and to provide information to website owners. Cookies cannot harm your device or files.`,
      },
      {
        heading: '2. How We Use Cookies',
        body: `Skylumine uses cookies to:
• Remember your preferences and settings
• Understand how you use our website (analytics)
• Improve site performance and user experience
• Serve relevant content`,
      },
      {
        heading: '3. Types of Cookies We Use',
        body: `Strictly Necessary Cookies: Essential for the website to function properly. They cannot be disabled.

Performance & Analytics Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).

Functional Cookies: Allow the website to remember choices you make (such as language preference) and provide enhanced, personalized features.

Targeting / Advertising Cookies: Used to deliver relevant advertisements on our website or other sites. We do not currently use advertising cookies.`,
      },
      {
        heading: '4. Third-Party Cookies',
        body: `Some cookies on our site are set by third-party services such as Google Analytics, Google Tag Manager, and social media platforms. These third parties have their own privacy policies and cookie policies, which we encourage you to review.`,
      },
      {
        heading: '5. Managing Cookies',
        body: `You can control and manage cookies in your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.

To manage cookies in your browser:
• Chrome: Settings > Privacy and Security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Cookies and Site Permissions`,
      },
      {
        heading: '6. Cookie Consent',
        body: `By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw consent at any time by adjusting your browser settings or clearing your cookies.`,
      },
      {
        heading: '7. Changes to This Policy',
        body: `We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.`,
      },
      {
        heading: '8. Contact Us',
        body: `For questions about our use of cookies, contact us at hello@skylumine.com.`,
      },
    ],
  },
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const slug = pathname.replace(/^\//, ''); // strip leading slash
  const content = legalContent[slug];

  if (!content) {
    return (
      <div className="min-h-screen bg-background text-foreground font-poppins">
        <Navbar />
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
            <h1 className="text-4xl font-bold font-montserrat">Page not found.</h1>
            <Link to="/" className="text-primary hover:underline text-sm font-bold uppercase tracking-widest">
              ← Back to Home
            </Link>
          </div>
          <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mb-12 block">
              ← Back
            </button>

            <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight mb-4 leading-tight">
            {content.title}
          </h1>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-16">
            Last Updated: {content.lastUpdated}
          </p>

          <div className="space-y-12">
            {content.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <h2 className="text-xl font-bold font-montserrat tracking-tight mb-4 text-foreground">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-[15px] whitespace-pre-line">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-foreground/[0.02] border border-border/5 rounded-3xl">
            <p className="text-sm text-muted-foreground font-poppins">
              Questions about this policy? Contact us at{' '}
              <a href="mailto:hello@skylumine.com" className="text-primary hover:underline">
                hello@skylumine.com
              </a>
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
