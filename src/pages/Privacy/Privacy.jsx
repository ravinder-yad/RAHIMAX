import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Rahimax</title>
        <meta name="description" content="Read our privacy policy to understand how we protect user data, client databases, and dashboard integrations." />
      </Helmet>

      <section className="pt-32 pb-24 bg-bg-light dark:bg-slate-950 px-6 text-left relative overflow-hidden">
        {/* Background glow vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-8 md:p-12 shadow-xl font-body text-xs md:text-sm leading-relaxed text-text-gray dark:text-zinc-400 space-y-8 relative z-10">
          
          <div className="border-b border-border-light dark:border-zinc-800 pb-6 mb-6">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Legal Compliance
            </span>
            <h1 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl mt-2">
              Privacy Policy
            </h1>
            <p className="text-[10px] text-zinc-550 dark:text-zinc-500 mt-2 font-bold uppercase tracking-wider">
              Last Updated: July 28, 2026
            </p>
          </div>

          <p className="font-medium text-primary dark:text-zinc-300">
            At **Rahimax**, we prioritize the confidentiality and safety of our client databases, SaaS telemetry, and personal communications. This Privacy Policy describes how we collect, use, and process data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Lock className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Encrypted Sessions</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">We utilize SSL certificates, password hashing, and encrypted JWT tokens for dashboard logins.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Database className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Zero Third-Party Shares</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">We do not lease, trade, or distribute your email addresses or database specifications to anyone.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">1. Information We Collect</h3>
              <p>
                We collect information you directly submit via our contact requests or review inputs. This includes your name, company name, email address, phone number, budget range, and project brief requirements.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">2. How We Use Information</h3>
              <p>
                We use the collected metadata to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Provide estimated pricing quotes and consult proposals.</li>
                <li>Send notifications regarding system maintenance or support requests.</li>
                <li>Improve landing page speed layouts and user experience metrics.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">3. Data Integrity & Security</h3>
              <p>
                We deploy secure architectures, SSL configurations, and database credentials policies to ensure client ERP portals are isolated and protected against malicious vulnerabilities. We do not sell or lease client contact information.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">4. Contacting Us</h3>
              <p>
                If you have questions about our data security or wish to remove your user review inputs, please contact us at <a href="mailto:privacy@rahimax.com" className="text-secondary dark:text-blue-400 font-bold hover:underline">privacy@rahimax.com</a>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Privacy;
