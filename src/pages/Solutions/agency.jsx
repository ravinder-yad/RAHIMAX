import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Palette, CheckSquare, CheckCircle } from 'lucide-react';

const AgencyDemo = () => {
  const [milestones, setMilestones] = useState([
    { name: 'Figma Design Blueprint', cost: 15000, completed: true },
    { name: 'React Frontend Development', cost: 35000, completed: true },
    { name: 'Database & API Integrations', cost: 25000, completed: false }
  ]);

  const toggleMilestone = (idx) => {
    const updated = [...milestones];
    updated[idx].completed = !updated[idx].completed;
    setMilestones(updated);
  };

  const getCompletedCount = () => milestones.filter(m => m.completed).length;
  const getSubtotal = () => milestones.reduce((sum, m) => sum + (m.completed ? m.cost : 0), 0);

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Palette className="w-5 h-5 text-secondary" />
        <span>Client Project Milestone Ledger (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Select Completed Milestones</label>
        <div className="space-y-3">
          {milestones.map((m, idx) => (
            <div 
              key={idx}
              onClick={() => toggleMilestone(idx)}
              className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                m.completed 
                  ? 'border-secondary bg-secondary/5 text-primary' 
                  : 'border-border-light bg-bg-surface text-text-gray hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                  m.completed ? 'bg-secondary border-secondary text-white' : 'border-border-light bg-white'
                }`}>
                  {m.completed && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                </div>
                <span className="font-bold">{m.name}</span>
              </div>
              <span className="font-heading font-black text-primary">₹{m.cost.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2 text-xs font-semibold">
          <div className="flex justify-between text-text-gray">
            <span>Milestones Completed:</span>
            <span>{getCompletedCount()} / {milestones.length}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-extrabold text-primary border-t pt-2 border-dashed">
            <span>Milestones Bill:</span>
            <span className="text-secondary font-heading font-black text-lg">₹{getSubtotal().toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgencySolution = () => {
  const features = [
    "Portfolio Case Studies Galleries",
    "Clients lead onboarding pipelines",
    "Digital Invoices & Ledger panels",
    "Services Pricing Configurator",
    "Admin Content CMS Integration",
    "Interactive Project Milestones checklist",
    "Newsletter & lead capture forms",
    "Agency Performance Analytics charts"
  ];

  const benefits = [
    "Increase lead bookings by up to 50%",
    "Allow clients to track project milestone progress",
    "Display case study portfolios in interactive grid sheets",
    "Automate invoice receipts dispatch on milestone completion"
  ];

  const faqs = [
    { q: "Can clients check their project status?", a: "Yes. We build custom client portal cards where buyers can check off which development milestones are completed." },
    { q: "Is multiple service invoicing supported?", a: "Absolutely. The administrative dashboard allows adding different custom services and generating unified PDF reports." }
  ];

  const portfolio = [
    { name: "Apex Creative Agency", desc: "Interactive portfolio showcase portal with integrated billing panels.", image: "/skyline-mock.jpg" },
    { name: "Aura Design Studio", desc: "Minimal design wireframes gallery and style guidings library.", image: "/aura-mock.jpg" },
    { name: "Zenith Marketing Group", desc: "Automated digital invoice compiler and newsletter funnel page.", image: "/zenith-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Creative Agency Solution"
      subtitle="Complete agency portfolio websites, client milestone trackers, invoicing ledgers, and interactive price estimators."
      category="Agency"
      bgImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={AgencyDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Automate Your Client Billing & Portfolios?"
    />
  );
};

export default AgencySolution;
