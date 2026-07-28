import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Cpu, Key, HelpCircle } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Rahimax</title>
        <meta name="description" content="Review the Terms and Conditions for project contracts, milestones delivery, and intellectual ownership with Rahimax." />
      </Helmet>

      <section className="pt-32 pb-24 bg-bg-light dark:bg-slate-950 px-6 text-left relative overflow-hidden">
        {/* Background glow vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-8 md:p-12 shadow-xl font-body text-xs md:text-sm leading-relaxed text-text-gray dark:text-zinc-400 space-y-8 relative z-10">
          
          <div className="border-b border-border-light dark:border-zinc-800 pb-6 mb-6">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Contract Terms
            </span>
            <h1 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl mt-2">
              Terms & Conditions
            </h1>
            <p className="text-[10px] text-zinc-550 dark:text-zinc-500 mt-2 font-bold uppercase tracking-wider">
              Last Updated: July 28, 2026
            </p>
          </div>

          <p className="font-medium text-primary dark:text-zinc-300">
            Welcome to **Rahimax Pro Agency**. By accessing our web development services, templates, or consulting portals, you agree to comply with the terms and conditions outlined below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Cpu className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Tailored Execution</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">All projects are executed strictly based on SOW blueprints. Additions require revised scope estimates.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <Key className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">100% Repository Transfer</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">Upon final clearance of project invoices, full GitHub codebase ownership is transferred directly to you.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">1. Scope of Work</h3>
              <p>
                We deliver custom React web application design, database engineering, ERP development, and SEO campaign management as outlined in the signed Statement of Work (SOW). Any additions to the initial design brief will require updated estimation.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">2. Payments & Milestones</h3>
              <p>
                All custom projects require a 40% upfront deposit to initiate UI/UX wireframes. The remaining balance is split across milestone deliverables (e.g. frontend dev completion, staging check, and final production handoff).
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">3. Code Ownership</h3>
              <p>
                Upon full payment clearance of the project invoice, Rahimax transfers 100% intellectual property ownership of the custom code repositories to the client. We do not restrict code usage, reselling, or self-hosting.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">4. Service Warranties</h3>
              <p>
                We provide a complimentary 30-day support period after deployment to address compilation bugs or design mismatches. Continued modifications are billed under our Website Maintenance plans.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Terms;
