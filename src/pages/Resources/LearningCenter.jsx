import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, ArrowRight, Check } from 'lucide-react';

const LearningCenter = () => {
  const [activeTrack, setActiveTrack] = useState('react');

  const tracks = {
    react: [
      { step: "1. Core Javascript Basics", desc: "Understand ES6 syntax, array maps filtering operations, and asynchronous promise fetches." },
      { step: "2. React State Hooks & Context", desc: "Learn useState, useEffect, and custom context hooks to share telemetry globally." },
      { step: "3. Vite Bundler Setup", desc: "Optimize packages compression files and handle router structures." },
      { step: "4. State Managers API Caching", desc: "Integrate libraries like TanStack Query (React Query) or Redux Toolkit." }
    ],
    mern: [
      { step: "1. MongoDB Database Schemas", desc: "Design flexible JSON collections, configure database indexes, and sanitize data." },
      { step: "2. Express REST API Server", desc: "Setup CORS headers, secure endpoints routers, and authenticate requests." },
      { step: "3. JWT Authentication tokens", desc: "Generate secure double-encrypted JSON Web Tokens and parse cookie lockers." },
      { step: "4. Deployment Staging", desc: "Deploy frontend onto Vercel and backend servers onto AWS EC2 clusters." }
    ],
    next: [
      { step: "1. File System dynamic routing", desc: "Configure app folder templates, link query parameters, and structure folders." },
      { step: "2. Server-side Rendering (SSR)", desc: "Fetch databases variables on servers before sending HTML assets to client browser." },
      { step: "3. Dynamic Metadata SEO optimization", desc: "Generate dynamic metadata headers based on item databases lookups." },
      { step: "4. Vercel Cloud CDNs Edge caching", desc: "Configure incremental static regeneration (ISR) to cache landing pages." }
    ]
  };

  const currentSteps = tracks[activeTrack];

  return (
    <>
      <Helmet>
        <title>Developer Learning Roadmaps & Center | Rahimax</title>
        <meta name="description" content="Master web engineering with our interactive roadmap tracks. Step-by-step guides for React, MERN stack, and Next.js." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Developer Academy
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Developer Learning <br />
              Center
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Review detailed learning tracks and modular developer roadmaps explaining frameworks setup, API routing systems, and database indexes configurations.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
              alt="Developer Learning roadmaps center" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timelines Section */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-4xl mx-auto">
          {/* Tracks select */}
          <div className="flex gap-2.5 mb-12 border-b pb-6 border-border-light/50">
            {[
              { id: 'react', label: 'React.js Roadmap' },
              { id: 'mern', label: 'MERN Stack Roadmap' },
              { id: 'next', label: 'Next.js SSR Roadmap' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === t.id 
                    ? 'bg-secondary text-white shadow-sm' 
                    : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {currentSteps.map((item, idx) => (
              <div key={idx} className="p-6 bg-bg-card border border-border-light rounded-2xl flex items-start gap-4 hover:border-secondary/20 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx+1}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs md:text-sm text-primary">{item.step}</h4>
                  <p className="text-text-gray text-[10px] md:text-xs font-body mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningCenter;
