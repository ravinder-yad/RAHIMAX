import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileSignature, Download } from 'lucide-react';

const WhitePapers = () => {
  const whitepapers = [
    { title: "The Future of Web Automation", release: "June 2026", size: "2.4 MB", desc: "Analyzing head-less browser automated scripts and serverless database syncing speeds." },
    { title: "Securing React Dashboard Architectures", release: "March 2026", size: "3.1 MB", desc: "A technical manual outlining JWT roles logs access tokens verification security benchmarks." }
  ];

  return (
    <>
      <Helmet>
        <title>Technical White Papers library | Rahimax</title>
        <meta name="description" content="Explore advanced tech white papers analyzing GraphQL cache architectures, server-side database setups, and JWT tokens security." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Engineering Logs
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Technical <br />
              White Papers
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Detailed reports exploring database sanitization protocols, server-side rendering pipelines, and microservice benchmarks.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80" 
              alt="Technical research white papers documentation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-5xl mx-auto space-y-6">
          {whitepapers.map((paper, idx) => (
            <div key={idx} className="bg-bg-card border border-border-light p-6 rounded-2xl flex justify-between items-center hover:border-secondary/20 transition-all">
              <div className="max-w-[80%]">
                <span className="text-[9px] bg-secondary/10 text-secondary font-extrabold px-2.5 py-0.5 rounded">
                  Released {paper.release}
                </span>
                <h4 className="font-heading font-bold text-xs md:text-sm text-primary mt-3 flex items-center gap-1.5">
                  <FileSignature className="w-4 h-4 text-secondary shrink-0" />
                  <span>{paper.title}</span>
                </h4>
                <p className="text-text-gray text-[10px] font-body mt-1 leading-relaxed">{paper.desc}</p>
              </div>

              <button 
                onClick={() => alert(`Starting download for ${paper.title} PDF!`)}
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

export default WhitePapers;
