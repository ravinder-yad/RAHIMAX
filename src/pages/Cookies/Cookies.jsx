import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, HelpCircle, Shield, Award } from 'lucide-react';

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookies Policy - Rahimax</title>
        <meta name="description" content="Review the Cookies Policy of Rahimax. Learn how we utilize local storage data drafts and security telemetry sessions to maintain site performance." />
      </Helmet>

      <section className="pt-32 pb-24 bg-bg-light dark:bg-slate-950 px-6 text-left relative overflow-hidden">
        {/* Background glow vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-8 md:p-12 shadow-xl font-body text-xs md:text-sm leading-relaxed text-text-gray dark:text-zinc-400 space-y-8 relative z-10">
          
          <div className="border-b border-border-light dark:border-zinc-800 pb-6 mb-6">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Web Telemetry
            </span>
            <h1 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl mt-2">
              Cookies Policy
            </h1>
            <p className="text-[10px] text-zinc-550 dark:text-zinc-500 mt-2 font-bold uppercase tracking-wider">
              Last Updated: July 28, 2026
            </p>
          </div>

          <p className="font-medium text-primary dark:text-zinc-300">
            Welcome to the Cookies Policy of **Rahimax**. We believe in transparency and user data integrity. This document explains how we use local storage, session states, and telemetry markers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Shield className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Strictly Technical</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">We do not deploy marketing cookies or trackers. We only save technical settings to optimize layout execution.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Award className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">LocalStorage Drafts</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">Your Get Quote values are stored locally to prevent data loss upon browser refreshes.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">1. What cookies do we use?</h3>
              <p>
                We use strictly necessary functional cookies and HTML5 local storage:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Theme Configuration:</strong> Saves your dark or light mode preference toggle choice (`theme` parameter).</li>
                <li><strong>Quote Form Auto-Save:</strong> Caches your inputs in the quote estimator wizard locally (`rahimax_quote_draft`).</li>
                <li><strong>Telemetry Session:</strong> Restricts spam and verifies forms validation securely.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">2. Third-Party Trackers</h3>
              <p>
                Unlike standard sites, we do not integrate Google Analytics or Meta Pixel marketing trackers to compile demographic advertising lists. We believe in direct relationships with our developers and protect your privacy accordingly.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">3. Managing Preferences</h3>
              <p>
                You can wipe our functional drafts anytime by clearing your browser cache/cookies or using incognito private browsing. If you have inquiries, please email <a href="mailto:support@rahimax.com" className="text-secondary dark:text-blue-400 font-bold hover:underline">support@rahimax.com</a>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Cookies;
