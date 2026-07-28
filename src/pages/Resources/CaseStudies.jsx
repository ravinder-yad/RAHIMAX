import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Clock, Users, X, Check, Star, MessageSquare 
} from 'lucide-react';

const CaseStudies = () => {
  const [filter, setFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = ['All', 'Healthcare', 'Education', 'Restaurant', 'Real Estate', 'CRM', 'ERP', 'E-Commerce'];

  const caseStudies = [
    {
      id: 'apollo-healthcare',
      title: 'Apollo Clinic Schedulers & ERP',
      category: 'Healthcare',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      client: 'Apollo Health Care',
      duration: '60 Days',
      teamSize: 3,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      problem: 'Clinic staff had no real-time way to book slots. Appointments overlapped, patient records were manually paper-logged, and client wait times exceeded 2 hours.',
      solution: 'We engineered a HIPAA compliant React portal automating schedule calendars, integrating payment checkout gateways, and sending auto-notifications on WhatsApp.',
      results: ['65% decrease in check-in queues', '99.9% booking database accuracy', 'Zero patient chart overlaps'],
      features: ['Doctor availability grids', 'E-Rx prescription lockers', 'Secure double-access JWT login'],
      timeline: ['Week 1: UX design & HIPAA checks', 'Week 2-3: Core Node API routes', 'Week 4-5: Frontend React integration', 'Week 6-8: Testing & Staging launch']
    },
    {
      id: 'zenith-education',
      title: 'Zenith School Billing ERP',
      category: 'Education',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Firebase'],
      client: 'Zenith Group of Academies',
      duration: '45 Days',
      teamSize: 3,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      problem: 'Administrative accountants manually calculated fees receipts for 4,000+ kids, resulting in significant delays and accounting leaks.',
      solution: 'We built a secure school ERP automating invoice collections tracking, biometric attendance, and report card generators.',
      results: ['90% reduction in administration files', 'Instant WhatsApp invoice alerts', '100% accounting audit transparency'],
      features: ['Fee invoices billing portal', 'Attendance tracker log', 'Exam grades compiled transcript'],
      timeline: ['Week 1: Schema design', 'Week 2-3: Billing system APIs coding', 'Week 4-5: Parents dashboards', 'Week 6: Launch & Staff training']
    },
    {
      id: 'truffle-restaurant',
      title: 'Truffle Bistro Contactless QR Order',
      category: 'Restaurant',
      tags: ['React', 'Firebase', 'Websockets', 'Tailwind'],
      client: 'Truffle Bistro Chain',
      duration: '21 Days',
      teamSize: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      problem: 'Rush hour ordering delays caused significant guest cart drops and bad reviews regarding table wait times.',
      solution: 'We launched a mobile QR ordering system. Patrons scan the table QR code, browse menus, and order direct to kitchen screens.',
      results: ['25% increase in table turnover speeds', 'Saved 3rd-party delivery commission fees', 'Average wait time reduced to 10 mins'],
      features: ['Table QR codes parser', 'Live kitchen KDS display', 'In-browser UPI checkout'],
      timeline: ['Week 1: QR links database maps', 'Week 2: Cart logic & UPI gate', 'Week 3: Kitchen sync & Launch']
    }
  ];

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter(c => c.category === filter);

  return (
    <>
      <Helmet>
        <title>Case Studies & Audits Portfolio | Rahimax</title>
        <meta name="description" content="View detailed case studies of custom clinic ERPs, school databases, and contactless ordering portals built by Rahimax." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 text-left relative z-10">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Engineering Audits
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Real Problems. <br />
            Real Solutions.
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
            Detailed case studies and engineering audits illustrating how we build custom software dashboards to solve operational business bottlenecks.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-secondary text-white shadow-sm' 
                    : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div 
                key={item.id}
                className="group bg-bg-card border border-border-light rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border-light">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-[10px] text-text-gray font-bold">
                    <span>{item.category}</span>
                    <span>Client: {item.client}</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-primary mt-3">
                    {item.title}
                  </h4>
                  <p className="text-text-gray text-[11px] font-body mt-2 leading-relaxed line-clamp-3">
                    {item.problem}
                  </p>

                  <div className="flex gap-4 mt-4 text-[10px] text-text-gray font-semibold">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-secondary" /> {item.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-secondary" /> Team: {item.teamSize}</span>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-light/50 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedCase(item)}
                      className="text-secondary font-bold text-xs uppercase tracking-wider hover:text-secondary/85 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-text-gray text-xs italic py-16">No case studies match the selected categories filter.</p>
          )}
        </div>
      </section>

      {/* Case Study Modal Popup */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in select-none">
          <div className="bg-bg-card border border-border-light rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10 relative text-left">
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-primary rounded-full cursor-pointer transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedCase.category} Walkthrough
              </span>
              <h2 className="font-heading font-black text-xl md:text-3xl text-primary mt-4 mb-6 leading-tight">
                {selectedCase.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">The Challenge</h4>
                    <p className="text-text-gray text-xs sm:text-sm font-body leading-relaxed">{selectedCase.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">Our Custom Solution</h4>
                    <p className="text-text-gray text-xs sm:text-sm font-body leading-relaxed">{selectedCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">Key Features Built</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {selectedCase.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-text-gray">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-bg-light border border-border-light p-5 rounded-2xl text-xs font-semibold text-text-gray">
                    <h5 className="font-heading font-bold text-xs text-primary uppercase mb-3 border-b pb-2">Specs</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>Timeline:</span><span className="text-primary">{selectedCase.duration}</span></div>
                      <div className="flex justify-between"><span>Client:</span><span className="text-primary">{selectedCase.client}</span></div>
                      <div className="flex justify-between"><span>Team Size:</span><span className="text-primary">{selectedCase.teamSize} Developers</span></div>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/15 p-5 rounded-2xl text-xs font-semibold text-emerald-600 dark:text-emerald-500">
                    <h5 className="font-heading font-bold text-xs uppercase mb-3 border-b pb-2 border-emerald-500/20">Delivered KPIs</h5>
                    <ul className="space-y-2">
                      {selectedCase.results.map((r, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-bg-light border border-border-light p-6 rounded-2xl mb-8 text-xs">
                <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-4">Development Timeline Steps</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedCase.timeline.map((step, idx) => (
                    <div key={idx} className="p-3 bg-bg-card border border-border-light rounded-xl flex items-start gap-2">
                      <span className="font-heading font-black text-secondary">{idx+1}</span>
                      <span className="text-text-gray font-semibold leading-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedCase(null)}
                className="w-full bg-secondary text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;
