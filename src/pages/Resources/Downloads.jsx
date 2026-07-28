import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText, Palette, Archive } from 'lucide-react';

const Downloads = () => {
  const assets = [
    { title: "Company Profile Brochure", format: "PDF", size: "4.2 MB", desc: "Our complete agency deck outlining development processes and pricing charts.", icon: <FileText className="w-5 h-5 text-secondary" /> },
    { title: "Vector Brand Logos Kit", format: "SVG / PNG", size: "1.8 MB", desc: "High-resolution Rahimax brand logos for press releases or partnership audits.", icon: <Palette className="w-5 h-5 text-secondary" /> },
    { title: "Standard Development Proposal", format: "DOCX", size: "1.1 MB", desc: "Editable requirements scope sheet proposals templates for bidding tasks.", icon: <Archive className="w-5 h-5 text-secondary" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Downloads Kit & Media Assets | Rahimax</title>
        <meta name="description" content="Download company profile brochures, SVG brand asset logos, and editable contract proposals templates from Rahimax." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Downloads Kit
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Media & Asset <br />
              Downloads
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Quickly download vector brand files, agency slides, and proposal templates files required for collaborative digital operations.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
              alt="Vector downloads kit branding assets" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Lists Section */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-5xl mx-auto space-y-4">
          {assets.map((item, idx) => (
            <div key={idx} className="p-6 bg-bg-card border border-border-light rounded-2xl flex justify-between items-center hover:border-secondary/20 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs md:text-sm text-primary">{item.title}</h4>
                  <p className="text-text-gray text-[10px] mt-1 font-body leading-relaxed">{item.desc}</p>
                  <span className="text-[9px] text-text-gray font-bold block mt-2">Format: {item.format} • Size: {item.size}</span>
                </div>
              </div>

              <button 
                onClick={() => alert(`Starting download for ${item.title} archive!`)}
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

export default Downloads;
