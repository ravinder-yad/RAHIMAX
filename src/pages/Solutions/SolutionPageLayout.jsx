import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, Sparkles, ShieldCheck, Clock, Layers, 
  ArrowRight, Code2, Cpu, Database, Cloud, ChevronDown, Plus, Minus
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SolutionPageLayout = ({
  title,
  subtitle,
  category,
  bgImage,
  features = [],
  benefits = [],
  demoComponent: DemoComponent,
  portfolio = [],
  techStack = {},
  faqs = [],
  ctaTitle = "Ready to Build Your Solution?"
}) => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Default Fallback Process steps
  const processSteps = [
    { step: "01", name: "Discover", desc: "Define industry pain points and software features specs." },
    { step: "02", name: "Planning", desc: "Design data flow architecture and integrations maps." },
    { step: "03", name: "Design", desc: "Wireframe responsive layouts matching brand aesthetics." },
    { step: "04", name: "Development", desc: "Clean React code engineering built for performance." },
    { step: "05", name: "Testing", desc: "Automated speed loading audits and secure penetration tests." },
    { step: "06", name: "Deployment", desc: "Deploy onto high-performance cloud networks (AWS/Vercel)." },
    { step: "07", name: "Support", desc: "Ongoing maintenance patches and databases scaling." }
  ];

  return (
    <>
      <Helmet>
        <title>{`${title} Solutions | Custom Software Engineering - Rahimax`}</title>
        <meta name="description" content={subtitle} />
      </Helmet>

      {/* 1️⃣ Hero Section: 250px height, direct text, starts below fixed navbar */}
      <section 
        className="h-[250px] mt-[88px] relative overflow-hidden bg-zinc-950 text-white bg-fixed bg-cover bg-center flex items-center justify-center border-b border-zinc-800"
        style={{ 
          backgroundImage: `url("${bgImage}")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center select-none">
          <span className="text-secondary text-[10px] uppercase tracking-[0.25em] font-extrabold mb-2 block">
            {category} SOLUTION
          </span>
          <h1 className="text-white font-heading font-black text-2xl md:text-3xl lg:text-4xl tracking-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-zinc-300 font-body text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed drop-shadow">
            {subtitle}
          </p>
        </div>
      </section>

      {/* 2️⃣ Interactive Demo Section: Full Width High Impact Preview */}
      {DemoComponent && (
        <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col items-center mb-10">
              <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
                Interactive Preview
              </span>
              <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight max-w-xl">
                Test-Drive the Live System Demo
              </h2>
              <p className="text-text-gray font-body text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
                Interact with our modular micro-dashboard below to see how we automate operations.
              </p>
            </div>

            <div className="bg-bg-card border border-border-light rounded-[32px] shadow-2xl p-6 md:p-8 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
              <DemoComponent />
            </div>
          </div>
        </section>
      )}

      {/* 3️⃣ Features & Benefits Section */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Features */}
          <div className="lg:col-span-7 bg-bg-card border border-border-light/60 p-8 rounded-[28px] shadow-md">
            <h3 className="font-heading font-extrabold text-lg text-primary mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span>Features Included</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-xs text-primary">{feat}</h4>
                    <p className="text-text-gray text-[10px] font-body mt-1 leading-normal">
                      Bespoke implementation verified for compliance and speed standards.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-5 bg-bg-card border border-border-light/60 p-8 rounded-[28px] shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-primary mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>Key Benefits</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <p className="text-text-gray text-xs font-semibold font-body leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border-light/50">
              <Link 
                to="/contact"
                className="inline-flex w-full items-center justify-between bg-secondary hover:bg-secondary/95 text-white py-3.5 px-5 rounded-xl font-bold text-xs shadow-lg transition-all"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Featured Case Studies */}
      {portfolio.length > 0 && (
        <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
                Featured Case Studies
              </span>
              <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
                Projects Showcase
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {portfolio.map((proj, idx) => (
                <div key={idx} className="group bg-bg-card border border-border-light rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-left">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border-light">
                    <img 
                      src={proj.image} 
                      alt={proj.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-primary group-hover:text-secondary transition-colors">{proj.name}</h4>
                      <p className="text-text-gray text-xs font-body mt-2 leading-relaxed">{proj.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-light/50 flex items-center justify-between text-[10px] font-bold text-secondary uppercase tracking-wider">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5️⃣ Development Process Section */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Our Flow
          </span>
          <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight mb-12">
            Dynamic Engineering Timeline
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 text-left mt-8">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light/75 rounded-2xl p-5 hover:border-secondary/30 transition-all flex flex-col justify-between h-[180px] shadow-sm">
                <div>
                  <span className="text-xs font-heading font-black text-secondary tracking-widest block mb-2">{p.step}</span>
                  <h4 className="font-heading font-extrabold text-xs text-primary mb-1">{p.name}</h4>
                  <p className="text-text-gray text-[9px] leading-relaxed font-body">{p.desc}</p>
                </div>
                <div className="h-[2px] bg-secondary/20 w-full mt-4 relative">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Tech Stack Grid */}
      <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Tech Stack
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Engineered with Core Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left mt-8">
            <div className="bg-bg-card border border-border-light/60 p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 border border-blue-500/15">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-3">Frontend</h4>
              <ul className="space-y-1 text-xs text-text-gray font-body font-semibold">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border-light/60 p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4 border border-green-500/15">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-3">Backend</h4>
              <ul className="space-y-1 text-xs text-text-gray font-body font-semibold">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Firebase Functions</li>
                <li>Restful APIs</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border-light/60 p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 border border-amber-500/15">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-3">Database</h4>
              <ul className="space-y-1 text-xs text-text-gray font-body font-semibold">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase Firestore</li>
                <li>Redis Caching</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border-light/60 p-6 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 border border-purple-500/15">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-3">Cloud</h4>
              <ul className="space-y-1 text-xs text-text-gray font-body font-semibold">
                <li>AWS Cloud</li>
                <li>Vercel Deployments</li>
                <li>Google Cloud Platform</li>
                <li>Docker Containers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ FAQs Accordion */}
      {faqs.length > 0 && (
        <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              FAQs
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-left mt-8">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`rounded-xl border transition-all duration-300 bg-bg-card overflow-hidden ${
                    isOpen ? 'border-secondary/40 shadow-md' : 'border-border-light/75'
                  }`}>
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group"
                    >
                      <span className={`font-heading font-bold text-xs md:text-sm transition-colors ${
                        isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                      }`}>{faq.q}</span>
                      <span className={`p-1 rounded-full border transition-all ${
                        isOpen ? 'bg-secondary text-white border-secondary' : 'bg-bg-surface border-border-light text-primary'
                      }`}>
                        {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-text-gray font-body leading-relaxed border-t border-border-light pt-3 bg-bg-surface/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8️⃣ Final CTA Section */}
      <section className="py-24 bg-bg-light px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block">
            Build With Us
          </span>
          <h2 className="text-primary font-heading font-black text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto">
            {ctaTitle}
          </h2>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Get an enterprise-ready visual system engineered with direct clean React code within weeks.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs shadow-lg uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-xl text-xs shadow-sm uppercase tracking-wider transition-all hover:scale-[1.02] dark:bg-bg-card dark:border-border-light/75"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionPageLayout;
