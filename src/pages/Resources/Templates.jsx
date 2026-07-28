import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Code2, ArrowRight } from 'lucide-react';

const Templates = () => {
  const [downloaded, setDownloaded] = useState({});

  const categories = ['All', 'React', 'Node', 'Dashboard', 'Landing Page'];

  const templates = [
    { title: "SaaS Admin Dashboard", desc: "A dashboard template complete with charts, login credentials, and user data models.", tags: ["React", "Tailwind"], type: "Dashboard" },
    { title: "Agency Landing Page", desc: "A premium dark mode landing page layout with full scroll animations.", tags: ["React", "Framer Motion"], type: "Landing Page" },
    { title: "React Boilerplate", desc: "Pre-configured Vite + Tailwind React boilerplate ready for deploy.", tags: ["React", "Vite"], type: "React" },
    { title: "Express REST API Boilerplate", desc: "Clean Node.js Express directory with pre-setup authentication layers.", tags: ["Node", "Express"], type: "Node" }
  ];

  const triggerDownload = (title) => {
    setDownloaded(prev => ({ ...prev, [title]: true }));
    setTimeout(() => {
      setDownloaded(prev => ({ ...prev, [title]: false }));
      alert(`Starting download for ${title} boilerplate archive!`);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Free Developer Templates & Boilerplates | Rahimax</title>
        <meta name="description" content="Download free React boilerplates, dark-mode landing pages, and Tailwind admin dashboard UI templates." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Free Open Source
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Free Resources <br />
              for Developers
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Download our free boilerplates, login layouts, pricing pages grids, and responsive admin dashboard templates to kickstart your next React app.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80" 
              alt="Developer templates canvas" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((tpl, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light p-6 rounded-2xl flex flex-col justify-between h-[220px] hover:border-secondary/20 hover:shadow-lg transition-all">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] bg-secondary/10 text-secondary font-extrabold px-2.5 py-1 rounded">
                      {tpl.type}
                    </span>
                    <Code2 className="w-5 h-5 text-text-gray" />
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-primary mt-4">{tpl.title}</h4>
                  <p className="text-text-gray text-[10px] leading-relaxed font-body mt-2">{tpl.desc}</p>
                </div>

                <div className="flex items-center justify-between border-t border-border-light/50 pt-4 mt-4">
                  <div className="flex gap-1">
                    {tpl.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] text-text-gray bg-bg-light border px-2 py-0.5 rounded font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => triggerDownload(tpl.title)}
                    className="bg-secondary hover:bg-secondary/95 text-white font-bold px-4 py-2 rounded-xl text-[10px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloaded[tpl.title] ? "Downloading..." : "Free Download"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
