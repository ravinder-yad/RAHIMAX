import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Terminal, ShieldCheck, Play } from 'lucide-react';

const Documentation = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('contact');

  const endpoints = {
    contact: {
      method: "POST",
      path: "/api/contact",
      desc: "Submit client inquiry details and query descriptions straight into our lead capture system.",
      payload: `{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Interested in building a medical schedulers portal.",
  "company": "Apollo Clinics"
}`,
      response: `{
  "status": "success",
  "message": "Inquiry recorded",
  "id": "lead_917283"
}`
    },
    projects: {
      method: "GET",
      path: "/api/projects",
      desc: "Fetch our latest projects metadata, tags, and delivered metrics.",
      payload: `{} // No payload required`,
      response: `[
  {
    "id": "apollo-healthcare",
    "title": "Apollo Clinic ERP",
    "duration": "60 Days",
    "kpis": ["65% queue reduction"]
  }
]`
    },
    blog: {
      method: "GET",
      path: "/api/blog",
      desc: "Retrieve technical articles categories and readtimes.",
      payload: `{} // No payload required`,
      response: `[
    { "title": "React 2026 Guide", "readTime": "8 min" }
]`
    },
    quote: {
      method: "POST",
      path: "/api/quote",
      desc: "Submit detailed custom calculator specs to request a quote proposal.",
      payload: `{
  "projectType": "ecommerce",
  "pages": 15,
  "adminPanel": true
}`,
      response: `{
  "status": "success",
  "estimatedBudget": "₹39,999",
  "proposalId": "prop_8239"
}`
    }
  };

  const curr = endpoints[activeEndpoint];

  return (
    <>
      <Helmet>
        <title>Developer REST API Documentation | Rahimax</title>
        <meta name="description" content="Explore REST API routes for database integrations, project queries, and lead captures. Clean React and Node integration guides." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 text-left relative z-10">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            REST API Schema
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Developer <br />
            Documentation
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
            Integrate Rahimax databases into your systems. Review REST API routes schemas, authentication standards, and sample responses.
          </p>
        </div>
      </section>

      {/* API Console Grid */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation */}
          <div className="lg:col-span-4 bg-bg-card border border-border-light p-5 rounded-2xl space-y-2">
            <h4 className="font-heading font-extrabold text-[10px] text-text-gray uppercase tracking-widest border-b pb-2 mb-3">
              API Reference
            </h4>
            {Object.keys(endpoints).map((key) => {
              const item = endpoints[key];
              const isActive = activeEndpoint === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveEndpoint(key)}
                  className={`w-full p-3 rounded-xl flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-secondary/10 border border-secondary/20 text-secondary' 
                      : 'bg-transparent border border-transparent text-text-gray hover:bg-slate-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span>{item.path}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-black ${
                    item.method === 'POST' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                  }`}>{item.method}</span>
                </button>
              );
            })}
          </div>

          {/* Right Shell Details */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-zinc-800/80 px-6 py-4 flex items-center justify-between border-b border-zinc-700">
              <span className="text-[10px] font-bold text-zinc-400 font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-secondary" />
                <span>Console API Endpoint</span>
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-zinc-700 text-zinc-300 uppercase">JSON</span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-white font-heading font-bold text-sm">Description</h4>
                <p className="text-zinc-400 text-xs mt-1.5 font-body leading-relaxed">{curr.desc}</p>
              </div>

              {/* Payload code block */}
              <div>
                <h5 className="text-zinc-400 font-bold text-[10px] uppercase tracking-wider">Request Payload</h5>
                <pre className="mt-2 bg-black/50 p-4 rounded-xl text-[10px] md:text-xs font-mono text-emerald-400 overflow-x-auto text-left leading-relaxed">
                  {curr.payload}
                </pre>
              </div>

              {/* Response code block */}
              <div>
                <h5 className="text-zinc-400 font-bold text-[10px] uppercase tracking-wider">Server Response</h5>
                <pre className="mt-2 bg-black/50 p-4 rounded-xl text-[10px] md:text-xs font-mono text-sky-400 overflow-x-auto text-left leading-relaxed">
                  {curr.response}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Documentation;
