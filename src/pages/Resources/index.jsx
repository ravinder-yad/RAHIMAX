import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, FileText, HelpCircle, Code2, Download, 
  Video, FileSignature, BarChart2, GraduationCap, Sparkles, Brain
} from 'lucide-react';

const ResourcesCatalog = () => {
  const directories = [
    { id: "blog", title: "Tech Blog", desc: "Insights, guides, and tech analysis regarding React, SEO, and coding standards.", icon: <FileText className="w-6 h-6 text-secondary" />, link: "/resources/blog" },
    { id: "case-studies", title: "Case Studies", desc: "Detailed audits and reports explaining real-world business engineering solutions.", icon: <BookOpen className="w-6 h-6 text-secondary" />, link: "/resources/case-studies" },
    { id: "pricing-guide", title: "Pricing Guide", desc: "Transparent price sheets and interactive project calculators guidelines.", icon: <DollarSign className="w-6 h-6 text-secondary" />, link: "/resources/pricing-guide" },
    { id: "faq", title: "General FAQs", desc: "Answers to frequently asked questions on timelines, custom hosting, and support.", icon: <HelpCircle className="w-6 h-6 text-secondary" />, link: "/resources/faq" },
    { id: "templates", title: "Free Templates", desc: "Open-source boilerplate layouts, UI dashboards, and login pages for developers.", icon: <Code2 className="w-6 h-6 text-secondary" />, link: "/resources/templates" },
    { id: "documentation", title: "Developer Docs", desc: "Integrate with our custom REST API endpoints using complete code sheets.", icon: <BookOpen className="w-6 h-6 text-secondary" />, link: "/resources/documentation" },
    { id: "tutorials", title: "Video Tutorials", desc: "Video guidelines explaining how to run dashboard systems and deploy projects.", icon: <Video className="w-6 h-6 text-secondary" />, link: "/resources/tutorials" },
    { id: "downloads", title: "Downloads Kit", desc: "Download vector brand logos, pricing brochures, and corporate PDF proposals.", icon: <Download className="w-6 h-6 text-secondary" />, link: "/resources/downloads" },
    { id: "whitepapers", title: "White Papers", desc: "Technical analysis analyzing the future of AI automation and cloud clusters.", icon: <FileSignature className="w-6 h-6 text-secondary" />, link: "/resources/whitepapers" },
    { id: "industry-reports", title: "Industry Reports", desc: "E-Commerce conversion telemetry and local search engine optimization audits.", icon: <BarChart2 className="w-6 h-6 text-secondary" />, link: "/resources/industry-reports" },
    { id: "learning-center", title: "Learning Center", desc: "Step-by-step developer learning roadmaps for React, Next, and MERN stacks.", icon: <GraduationCap className="w-6 h-6 text-secondary" />, link: "/resources/learning-center" },
    { id: "ai-planner", title: "AI Project Planner", desc: "[Exclusive] Estimate timelines, choose tech stacks, and generate blueprints.", icon: <Brain className="w-6 h-6 text-secondary" />, link: "/resources/ai-planner" }
  ];

  return (
    <>
      <Helmet>
        <title>Developer Resources & Guides Hub | Rahimax</title>
        <meta name="description" content="Explore our library of free templates, blog guides, developer API documentation, and interactive AI project planners." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-bg-light pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-left relative z-10">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Resources & Tools
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Developer Documentation <br />
            & Knowledge Hub
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
            Browse our library of open-source boilerplates, tech articles, API guides, and tools engineered to accelerate your digital growth.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {directories.map((item) => (
              <Link 
                key={item.id}
                to={item.link}
                className="group p-6 bg-bg-card border border-border-light/75 rounded-2xl flex flex-col justify-between h-[210px] text-left transition-all duration-300 hover:border-secondary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-primary group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-gray text-[10px] leading-relaxed font-body mt-2 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[9px] font-extrabold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Simple DollarSign helper icon
const DollarSign = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default ResourcesCatalog;
