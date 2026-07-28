import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart2, Download } from 'lucide-react';

const IndustryReports = () => {
  const reports = [
    { title: "2026 E-Commerce Optimization Audit", size: "3.5 MB", desc: "A conversion telemetry report studying the impact of loading speed drops on checkouts cart drops." },
    { title: "State of Serverless DB Telemetry", size: "2.9 MB", desc: "Analyzing load scalability and queries response latency rates in globally cached databases." }
  ];

  return (
    <>
      <Helmet>
        <title>Market Reports & Conversion Audits | Rahimax</title>
        <meta name="description" content="Read our industry reports assessing loading speeds benchmarks, checkout analytics, and database latency logs." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 text-left relative z-10">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Market Data
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Industry Analytics <br />
            & Reports
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
            Market reports reviewing checkout metrics, conversion triggers, loading speed drops, and modern mobile app downloads.
          </p>
        </div>
      </section>

      {/* Lists */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-5xl mx-auto space-y-6">
          {reports.map((r, idx) => (
            <div key={idx} className="bg-bg-card border border-border-light p-6 rounded-2xl flex justify-between items-center hover:border-secondary/20 transition-all">
              <div className="max-w-[80%]">
                <span className="text-[9px] bg-secondary/10 text-secondary font-extrabold px-2.5 py-0.5 rounded">
                  Analytical Report
                </span>
                <h4 className="font-heading font-bold text-xs md:text-sm text-primary mt-3 flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>{r.title}</span>
                </h4>
                <p className="text-text-gray text-[10px] font-body mt-1 leading-relaxed">{r.desc}</p>
              </div>

              <button 
                onClick={() => alert(`Starting download for ${r.title} PDF!`)}
                className="bg-secondary hover:bg-secondary/95 text-white font-bold p-3 rounded-xl transition-all cursor-pointer hover:scale-[1.02] flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndustryReports;
