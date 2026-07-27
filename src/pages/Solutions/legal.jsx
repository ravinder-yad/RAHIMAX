import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Scale, Calendar, CheckCircle } from 'lucide-react';

const LegalDemo = () => {
  const [caseType, setCaseType] = useState('Corporate Advisory');
  const [booked, setBooked] = useState(false);

  const consultations = {
    'Corporate Advisory': { fee: '₹3,500 / hr', lawyer: 'Adv. Sameer Roy' },
    'Criminal Defense': { fee: '₹5,000 / hr', lawyer: 'Adv. Priya Malhotra' },
    'Intellectual Property': { fee: '₹4,000 / hr', lawyer: 'Adv. Amit Sharma' }
  };

  const current = consultations[caseType];

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Scale className="w-5 h-5 text-secondary" />
        <span>Legal Counsel Schedulers (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Select Legal Specialty</label>
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(consultations).map((name, idx) => (
              <button 
                key={idx}
                onClick={() => { setCaseType(name); setBooked(false); }}
                className={`p-3 rounded-xl border text-left flex justify-between items-center transition-all ${
                  caseType === name 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                <span>{name}</span>
                <span className="font-heading font-black text-primary shrink-0">{consultations[name].fee}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setBooked(true)}
          className="w-full bg-secondary hover:bg-secondary/95 text-white py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Request Counsel Booking</span>
        </button>

        {booked && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl flex items-start gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Consultation Slot Requested!</span>
              <span className="text-[10px] text-emerald-500/80 leading-normal block mt-1">
                Your request is assigned to <strong>{current.lawyer}</strong>. 
                A secure Zoom link will be sent to your email after verification.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LegalSolution = () => {
  const features = [
    "Law Firm Marketing Webpages",
    "Digital Case Schedules Calendars",
    "Secure Client Portals logins",
    "Documents & Case Study Vaults",
    "Hourly Billing Invoicing Engines",
    "Consultation Booking Widgets",
    "Lawyers Profile Directory blocks",
    "GDPR & Client Confidentiality logs"
  ];

  const benefits = [
    "Reduce appointment scheduling friction by 60%",
    "Allow clients to download case documents securely",
    "Professional Apple-standard corporate design layouts",
    "Integrated online consult billing checkout gates"
  ];

  const faqs = [
    { q: "Is the client portal secure?", a: "Yes. All law firm client portal pages utilize end-to-end encrypted folders to guarantee document privacy." },
    { q: "Can we track billing by the hour?", a: "Absolutely. The digital invoicing module supports adding billable hours and generating dynamic PDF invoices." }
  ];

  const portfolio = [
    { name: "Malhotra & Partners", desc: "Corporate law firm web portal with integrated case slot scheduling.", image: "/skyline-mock.jpg" },
    { name: "IP Law Counselors", desc: "Intellectual property consultation booking and trademark lockers.", image: "/lens-mock.jpg" },
    { name: "LegalCare Portal", desc: "Client secure portal letting corporate teams download legal filings.", image: "/prime-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Legal Solution"
      subtitle="Complete law firm marketing websites, secure client file lockers, consultation appointment schedules, and billing engines."
      category="Legal"
      bgImage="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={LegalDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Looking for a Professional Law Firm Portal?"
    />
  );
};

export default LegalSolution;
