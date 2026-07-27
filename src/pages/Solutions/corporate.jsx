import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Briefcase, UserPlus, CheckCircle } from 'lucide-react';

const CorporateDemo = () => {
  const [candidates, setCandidates] = useState([
    { name: 'Kunal Sen', role: 'React Developer', status: 'Reviewing' },
    { name: 'Riya Gupta', role: 'UI/UX Designer', status: 'Interview' },
    { name: 'John Doe', role: 'DevOps Engineer', status: 'Hired' }
  ]);

  const updateStatus = (idx, newStatus) => {
    const updated = [...candidates];
    updated[idx].status = newStatus;
    setCandidates(updated);
  };

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-secondary" />
        <span>HRMS Candidate Recruitment Tracker (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <label className="block text-[10px] font-bold text-text-gray uppercase mb-1">Applicant Pipeline</label>
        <div className="space-y-3">
          {candidates.map((c, idx) => (
            <div key={idx} className="p-3 bg-bg-surface border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/20 transition-all">
              <div>
                <h4 className="font-bold text-primary">{c.name}</h4>
                <p className="text-[10px] text-text-gray mt-1 leading-normal font-semibold font-body">{c.role}</p>
              </div>
              <div className="flex gap-1.5">
                {['Reviewing', 'Interview', 'Hired'].map((st) => (
                  <button 
                    key={st}
                    onClick={() => updateStatus(idx, st)}
                    className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase transition-all ${
                      c.status === st 
                        ? st === 'Hired' ? 'bg-emerald-500 text-white' : st === 'Interview' ? 'bg-orange-500 text-white' : 'bg-secondary text-white'
                        : 'bg-slate-100 dark:bg-zinc-800 text-text-gray hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-text-gray mt-2 italic font-body text-center leading-normal">
          Clicking the buttons simulates status transitions in the company's internal HR recruiting pipeline.
        </p>
      </div>
    </div>
  );
};

const CorporateSolution = () => {
  const features = [
    "Corporate Brand Marketing Sites",
    "Internal Staff HRMS Suites",
    "Employee Attendance Portals",
    "CRM Sales Leads Pipelines",
    "Visual Analytics Telemetry Panels",
    "Secure Digital Document Storage",
    "Automated Payroll Calculations",
    "Multi-Branch Administration logs"
  ];

  const benefits = [
    "Increase employee operations efficiency by 40%",
    "Centralize internal files sharing securely",
    "95% accuracy in automatic biometric payroll tracking",
    "Clean visual branding building institutional value"
  ];

  const faqs = [
    { q: "Is local data hosted securely?", a: "Yes. All corporate applications are deployed on secure private servers (AWS or Azure) utilizing top-tier firewall configurations." },
    { q: "Can we integrate existing accounting software?", a: "Absolutely. We build custom API hooks linking the HRMS payroll direct with QuickBooks or Tally." }
  ];

  const portfolio = [
    { name: "Vanguard Corporate Suite", desc: "Corporate page featuring multi-lingual recruitment application flow.", image: "/skyline-mock.jpg" },
    { name: "Apex Staff Hub", desc: "Internal employee shift scheduler and digital compliance locker.", image: "/zenith-mock.jpg" },
    { name: "Orion Systems", desc: "Lead pipeline CRM dashboard automating corporate client bookings.", image: "/apex-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Corporate Solution"
      subtitle="Complete company websites, internal employee dashboards, HRMS systems, custom CRM trackers, and billing automation."
      category="Corporate"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={CorporateDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Looking to Build a Premium Corporate Platform?"
    />
  );
};

export default CorporateSolution;
