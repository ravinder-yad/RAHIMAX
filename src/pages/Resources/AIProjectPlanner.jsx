import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Sliders, CheckCircle, Clock, DollarSign, ArrowRight,
  Database, ShieldCheck, Mail, Send
} from 'lucide-react';

const AIProjectPlanner = () => {
  const [bizType, setBizType] = useState('startup');
  const [projGoal, setProjGoal] = useState('website');
  const [features, setFeatures] = useState([]);
  const [timelineSpeed, setTimelineSpeed] = useState('standard');
  const [budgetTier, setBudgetTier] = useState('pro');
  const [generated, setGenerated] = useState(false);

  const toggleFeature = (feat) => {
    if (features.includes(feat)) {
      setFeatures(features.filter(f => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
    setGenerated(false);
  };

  // Automated Blueprint Calculation
  const calculatePlan = () => {
    let basePrice = 9999;
    let baseDays = 12;
    let stack = ['React', 'Tailwind CSS'];

    // Category overrides
    if (projGoal === 'ecommerce') {
      basePrice = 19999;
      baseDays = 20;
      stack.push('Shopify API / WooCommerce', 'Redux Store');
    } else if (projGoal === 'portal') {
      basePrice = 29999;
      baseDays = 45;
      stack.push('Node.js', 'Express', 'MongoDB / SQL');
    } else {
      // static site
      stack.push('Framer Motion', 'Vite Bundler');
    }

    // Feature additions
    if (features.includes('multi_lang')) {
      basePrice += 2999;
      baseDays += 2;
    }
    if (features.includes('payments')) {
      basePrice += 3999;
      baseDays += 4;
    }
    if (features.includes('blog')) {
      basePrice += 1999;
      baseDays += 3;
    }
    if (features.includes('login')) {
      basePrice += 4999;
      baseDays += 5;
    }

    // Timeline calculations
    if (timelineSpeed === 'fast') {
      basePrice = Math.round(basePrice * 1.15); // +15% rush fee
      baseDays = Math.max(5, Math.round(baseDays * 0.7)); // -30% days speedup
    } else if (timelineSpeed === 'flexible') {
      basePrice = Math.round(basePrice * 0.95); // -5% early bird discount
      baseDays = Math.round(baseDays * 1.25); // +25% days buffer
    }

    let packageName = "Starter Custom Brand Package";
    if (basePrice >= 45000) {
      packageName = "Enterprise Scalable Platform Package";
    } else if (basePrice >= 20000) {
      packageName = "Professional Custom Operations Package";
    }

    return {
      price: basePrice,
      days: baseDays,
      techStack: stack,
      packageName: packageName
    };
  };

  const plan = calculatePlan();

  return (
    <>
      <Helmet>
        <title>AI Project Planner & Blueprint Builder - Rahimax</title>
        <meta name="description" content="Use our interactive AI Project Planner tool to define specifications, select frameworks, calculate timelines, and output budget estimates." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Rahimax Exclusive
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              AI Automated <br />
              Project Planner
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Outline your digital objectives, select features modules, and let our automated calculator compile your development roadmap, tech stack, and budgets instantly.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80" 
              alt="AI project planners computational networks" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Planner Grid */}
      <section className="py-24 bg-bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Left Options Controls */}
            <div className="lg:col-span-7 bg-bg-card border border-border-light p-6 md:p-8 rounded-[28px] shadow-lg text-left space-y-6">
              
              {/* 1. Business Category */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">1. Your Business Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'startup', label: '🚀 Startup' },
                    { id: 'ecommerce', label: '🛒 E-Commerce' },
                    { id: 'corporate', label: '🏢 Corporate' },
                    { id: 'school', label: '🏫 School' },
                    { id: 'hospital', label: '🏥 Hospital' }
                  ].map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => { setBizType(cat.id); setGenerated(false); }}
                      className={`py-2.5 px-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                        bizType === cat.id 
                          ? 'border-secondary bg-secondary/5 text-primary' 
                          : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Project Goal */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">2. Primary Project Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'website', label: 'Landing Page' },
                    { id: 'ecommerce', label: 'E-Store' },
                    { id: 'portal', label: 'ERP / Portal' }
                  ].map((goal) => (
                    <button 
                      key={goal.id}
                      onClick={() => { setProjGoal(goal.id); setGenerated(false); }}
                      className={`py-2 px-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                        projGoal === goal.id 
                          ? 'border-secondary bg-secondary/5 text-primary' 
                          : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Include Feature Modules */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">3. Selected Modules</label>
                <div className="space-y-2">
                  {[
                    { id: 'multi_lang', label: 'Multi-Language Translation Support', extra: '+₹2,999' },
                    { id: 'payments', label: 'Integrated Payment Checkout Gateways', extra: '+₹3,999' },
                    { id: 'blog', label: 'Dynamic Blog / CMS Publishing Board', extra: '+₹1,999' },
                    { id: 'login', label: 'Secure User Accounts & Logins Module', extra: '+₹4,999' }
                  ].map((f) => {
                    const active = features.includes(f.id);
                    return (
                      <div 
                        key={f.id}
                        onClick={() => toggleFeature(f.id)}
                        className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                          active ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                        }`}
                      >
                        <span className="font-bold text-xs">{f.label}</span>
                        <span className="text-[10px] font-bold text-secondary">{f.extra}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Target Timeline */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">4. Desired Development Speed</label>
                <div className="flex gap-2">
                  {[
                    { id: 'flexible', label: 'Flexible (-5% Cost)' },
                    { id: 'standard', label: 'Standard (On Time)' },
                    { id: 'fast', label: 'Fast Track (+15% Rush)' }
                  ].map((t) => (
                    <button 
                      key={t.id}
                      onClick={() => { setTimelineSpeed(t.id); setGenerated(false); }}
                      className={`flex-1 py-2 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                        timelineSpeed === t.id 
                          ? 'border-secondary bg-secondary/5 text-primary' 
                          : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setGenerated(true)}
                className="w-full bg-secondary hover:bg-secondary/95 text-white py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Brain className="w-4 h-4 animate-pulse" />
                <span>Compile Plan Blueprint</span>
              </button>

            </div>

            {/* Right Side Outputs */}
            <div className="lg:col-span-5 bg-bg-card border border-border-light p-6 md:p-8 rounded-[28px] shadow-2xl text-left h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  AI Output Blueprint
                </span>

                {generated ? (
                  <div className="mt-8 space-y-6 animate-scale-up">
                    <div className="border-b pb-4">
                      <span className="text-[9px] text-text-gray font-bold uppercase tracking-wider block">Recommended Package</span>
                      <h4 className="font-heading font-black text-sm text-primary mt-1">{plan.packageName}</h4>
                    </div>

                    <div className="border-b pb-4">
                      <span className="text-[9px] text-text-gray font-bold uppercase tracking-wider block">Suggested Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {plan.techStack.map((tech, idx) => (
                          <span key={idx} className="bg-bg-light border border-border-light text-[9px] font-bold px-2 py-0.5 rounded text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b pb-4">
                      <div>
                        <span className="text-[9px] text-text-gray font-bold uppercase tracking-wider block">Est. Timeline</span>
                        <span className="font-heading font-black text-base text-primary block mt-1 flex items-center gap-1">
                          <Clock className="w-4 h-4 text-secondary" /> {plan.days} Days
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-text-gray font-bold uppercase tracking-wider block">Est. Budget</span>
                        <span className="font-heading font-black text-base text-primary block mt-1">
                          ₹{plan.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/15 text-emerald-500 rounded-xl text-[10px] leading-normal font-bold">
                      📋 Your blueprint details have been calculated. Click below to submit this config sheet straight to our developers.
                    </div>
                  </div>
                ) : (
                  <div className="py-20 text-center text-text-gray font-body text-xs italic">
                    Configure options on the left and click "Compile Plan Blueprint" to generate your custom project estimate details.
                  </div>
                )}
              </div>

              {generated && (
                <div className="mt-8">
                  <Link 
                    to="/contact"
                    className="w-full bg-secondary hover:bg-secondary/95 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center block shadow-lg transition-all"
                  >
                    Submit Blueprint to Developers
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AIProjectPlanner;
