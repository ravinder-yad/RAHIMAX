import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Video, ArrowRight } from 'lucide-react';

const Tutorials = () => {
  const videoGuides = [
    { title: "React Router v7 Configurations", length: "15:20 mins", difficulty: "Intermediate", desc: "Setting up custom dynamic sub-routing hooks inside modular project architectures." },
    { title: "Node.js REST API Caching", length: "22:45 mins", difficulty: "Advanced", desc: "Setting up Redis databases caches keys to scale database response times." },
    { title: "Next.js Tailwind v4 Compilation", length: "10:15 mins", difficulty: "Starter", desc: "Auditing styles compilation files setups inside Vite frameworks configurations." },
    { title: "Git Push & Deploy Operations", length: "08:30 mins", difficulty: "Starter", desc: "Committing local code repositories branches and synchronizing with VPS staging servers." }
  ];

  return (
    <>
      <Helmet>
        <title>Video Tutorials & Guides library | Rahimax</title>
        <meta name="description" content="Watch developer tutorials explaining how to build dashboard calendars, connect SQLite databases, and configure CSS frameworks." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Video Guides
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Developer Video <br />
              Tutorials
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Watch our step-by-step developer guidelines explaining REST API routes setup, local node servers configuration, and React router templates.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" 
              alt="Video Tutorials streams Workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoGuides.map((item, idx) => (
            <div key={idx} className="group bg-bg-card border border-border-light p-6 rounded-2xl flex flex-col justify-between h-[210px] hover:border-secondary/20 hover:shadow-lg transition-all">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2.5 py-1 rounded">
                    {item.difficulty}
                  </span>
                  <span className="text-[10px] text-text-gray font-bold">{item.length}</span>
                </div>
                <h4 className="font-heading font-extrabold text-sm text-primary mt-4 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-text-gray text-[10px] leading-relaxed font-body mt-2">{item.desc}</p>
              </div>

              <button 
                onClick={() => alert(`Launching Video Tutorial: ${item.title}!`)}
                className="mt-6 flex items-center gap-1.5 text-[9px] font-extrabold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Watch Guide</span>
                <Play className="w-3 h-3 fill-current text-secondary" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tutorials;
