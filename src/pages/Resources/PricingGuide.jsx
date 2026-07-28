import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, Clock, Settings, Sliders, CheckCircle } from 'lucide-react';

const PricingGuide = () => {
  const [estType, setEstType] = useState('business');
  const [estPages, setEstPages] = useState(5);
  const [estLogin, setEstLogin] = useState(false);
  const [estPayment, setEstPayment] = useState(false);
  const [estAdmin, setEstAdmin] = useState(false);

  const calculateEstimate = () => {
    let base = 4999;
    let pageCost = 1000;

    if (estType === 'ecommerce') {
      base = 14999;
      pageCost = 1500;
    } else if (estType === 'portal') {
      base = 24999;
      pageCost = 2000;
    }

    const pagesExtra = estPages > 5 ? (estPages - 5) * pageCost : 0;
    const loginExtra = estLogin ? 4999 : 0;
    const paymentExtra = estPayment ? 3999 : 0;
    const adminExtra = estAdmin ? 4999 : 0;

    return base + pagesExtra + loginExtra + paymentExtra + adminExtra;
  };

  const estimatedPrice = calculateEstimate();

  const sections = [
    { title: "Website Cost", desc: "Starter website packages start at ₹9,999. Growth tiers with dynamic CMS blogs average ₹24,999.", range: "₹9,999 - ₹24,999" },
    { title: "E-Commerce Cost", desc: "WooCommerce setups start at ₹19,999. Premium headless React storefronts range from ₹39,999.", range: "₹19,999 - ₹49,999" },
    { title: "Custom Software & ERPs", desc: "Tailored leads CRM, custom staff payroll HRMS, or clinic calendar booking schedulers.", range: "Starting ₹49,999" },
    { title: "Mobile Apps", desc: "Kotlin Android or Swift iOS apps. Shared cross-platform React Native apps run from ₹89,999.", range: "Starting ₹59,999" },
    { title: "Maintenance Support", desc: "Monthly checks of database speed logs, automated weekly backups, and security patches.", range: "₹999 - ₹2,499 / mo" }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Guide & Estimator Calculator | Rahimax</title>
        <meta name="description" content="View transparent project pricing guides for custom React websites, school ERPs, clinic schedulers, and mobile applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Pricing Frameworks
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Transparent Pricing <br />
              Guide
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Detailed calculations and estimation frameworks explaining standard web development costs, developer timelines, and cloud hosting guidelines.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" 
              alt="Pricing Calculators workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50 text-left">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16">
            <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-secondary" />
              <span>Standard Cost Frameworks</span>
            </h3>
            
            <div className="space-y-4">
              {sections.map((sec, idx) => (
                <div key={idx} className="p-5 bg-bg-card border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/20 transition-all">
                  <div className="max-w-[70%]">
                    <h4 className="font-bold text-primary">{sec.title}</h4>
                    <p className="text-[10px] text-text-gray mt-1 leading-normal font-body">{sec.desc}</p>
                  </div>
                  <span className="font-heading font-black text-secondary shrink-0">{sec.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Section */}
          <div id="calculator" className="bg-bg-card border border-border-light p-6 md:p-8 rounded-[24px] shadow-lg relative overflow-hidden">
            <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-secondary" />
              <span>Interactive Cost Calculator</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6">
              <div className="space-y-4 text-xs font-semibold text-text-gray">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Select Project Category</label>
                  <select 
                    value={estType} 
                    onChange={(e) => setEstType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-border-light bg-transparent focus:outline-none focus:border-secondary font-bold text-xs"
                  >
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="portal">Custom Portal / ERP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Scale Pages Count: {estPages}</label>
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    step="5"
                    value={estPages} 
                    onChange={(e) => setEstPages(Number(e.target.value))}
                    className="w-full accent-secondary"
                  />
                </div>

                <div className="space-y-2.5 pt-2">
                  <div 
                    onClick={() => setEstLogin(!estLogin)}
                    className={`p-2.5 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                      estLogin ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                    }`}
                  >
                    <span>User Logins & Accounts Module</span>
                    <span>+ ₹4,999</span>
                  </div>

                  <div 
                    onClick={() => setEstPayment(!estPayment)}
                    className={`p-2.5 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                      estPayment ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                    }`}
                  >
                    <span>Razorpay / Stripe Gateways</span>
                    <span>+ ₹3,999</span>
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-bg-light border border-border-light p-6 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
                <div>
                  <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">Estimated Budget</span>
                  <span className="font-heading font-black text-2xl md:text-3xl text-primary block mt-4">
                    ₹{estimatedPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/contact"
                    className="w-full bg-secondary hover:bg-secondary/95 text-white py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center block shadow-md transition-all cursor-pointer"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingGuide;
