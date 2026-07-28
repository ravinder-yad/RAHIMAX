import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, RefreshCw, AlertTriangle, ShieldAlert } from 'lucide-react';

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund Policy - Rahimax</title>
        <meta name="description" content="Review the Refund Policy guidelines for bespoke software, custom web deployments, and retainer contracts with Rahimax." />
      </Helmet>

      <section className="pt-32 pb-24 bg-bg-light dark:bg-slate-950 px-6 text-left relative overflow-hidden">
        {/* Background glow vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-8 md:p-12 shadow-xl font-body text-xs md:text-sm leading-relaxed text-text-gray dark:text-zinc-400 space-y-8 relative z-10">
          
          <div className="border-b border-border-light dark:border-zinc-800 pb-6 mb-6">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Pricing Protection
            </span>
            <h1 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl mt-2">
              Refund Policy
            </h1>
            <p className="text-[10px] text-zinc-550 dark:text-zinc-500 mt-2 font-bold uppercase tracking-wider">
              Last Updated: July 28, 2026
            </p>
          </div>

          <p className="font-medium text-primary dark:text-zinc-300">
            Thank you for choosing **Rahimax Pro Agency**. Because we deliver custom digital products, database architectures, and design briefs, we structure our payment agreements based on clear stages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <RefreshCw className="w-5 h-5 text-secondary shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Stage Clearances</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">Once a development milestone is completed, staged, and approved by you, that payment is final and non-refundable.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-50/50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-850 rounded-2xl flex gap-3">
              <ShieldAlert className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider mb-1">Mutual Termination</h4>
                <p className="text-[10px] text-zinc-550 dark:text-zinc-500 leading-normal">For future milestones cancellation, client has the right to abort contracts with a written 7-day notice.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">1. Bespoke Development Scope</h3>
              <p>
                All development contracts (including websites, SaaS dashboards, school management ERP setups, and clinical systems) are custom-scoped. Due to the high allocation of engineering hours and resource mobilization, refunds are not issued for hours already expended.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">2. Retainer Cancellations</h3>
              <p>
                For recurring services (such as monthly hosting, server backups, support retainer setups, and technical SEO monitoring campaigns), you can cancel at any time. Cancellations will apply to the next billing cycle, and no partial refunds will be given for current monthly cycles.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-sm md:text-base text-primary dark:text-white border-b border-border-light dark:border-zinc-800 pb-2 mb-3">3. Dispute Resolutions</h3>
              <p>
                We strive for absolute client happiness. If you have any concerns regarding milestone outputs, please connect with Ravinder, Himesh, or Mayant directly at <a href="mailto:billing@rahimax.com" className="text-secondary dark:text-blue-400 font-bold hover:underline">billing@rahimax.com</a> to work out custom support remedies.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Refund;
