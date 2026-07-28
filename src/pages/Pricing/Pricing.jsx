import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, X, HelpCircle, ArrowRight, Sparkles, ShieldCheck, 
  Clock, DollarSign, Plus, Calculator, Settings, Code, Sliders
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('website');
  const [openFaq, setOpenFaq] = useState(null);

  // Cost Estimator state
  const [estType, setEstType] = useState('business');
  const [estPages, setEstPages] = useState(5);
  const [estLogin, setEstLogin] = useState(false);
  const [estPayment, setEstPayment] = useState(false);
  const [estAdmin, setEstAdmin] = useState(false);
  const [estSeo, setEstSeo] = useState('basic');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Live Cost Estimator logic
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
    const seoExtra = estSeo === 'advanced' ? 2999 : 0;

    return base + pagesExtra + loginExtra + paymentExtra + adminExtra + seoExtra;
  };

  const estimatedPrice = calculateEstimate();

  // Dynamic Packages database matching active tab
  const getPackages = () => {
    switch (activeTab) {
      case 'website':
        return [
          {
            name: "Starter Website",
            price: "₹9,999",
            originalPrice: "₹14,999",
            desc: "Perfect for establishing a premium brand presence with clean layout and WhatsApp integration.",
            features: [
              "5 Custom React Pages",
              "100% Mobile-Responsive Design",
              "Contact & Inquiry Forms",
              "WhatsApp Click Chat Integration",
              "Basic On-Page SEO Setup",
              "Under 1.5s Loading Speed",
              "1 Month Post-Deploy Support"
            ],
            popular: false,
            cta: "Choose Plan"
          },
          {
            name: "Professional Website",
            price: "₹24,999",
            originalPrice: "₹34,999",
            desc: "Most popular tier featuring admin content dashboards, blogs, and advanced analytics.",
            features: [
              "10–15 Custom React Pages",
              "Premium UI & Motion Animations",
              "Admin Dashboard Panel",
              "Dynamic Blog / News Portal",
              "Advanced Technical SEO Suite",
              "Google Analytics Integration",
              "Speed Optimization (Lighthouse 95+)",
              "3 Months Dedicated Support"
            ],
            popular: true,
            cta: "Get Started"
          },
          {
            name: "Enterprise Website",
            price: "Custom Quote",
            originalPrice: "",
            desc: "For institutional systems requiring secure roles, user accounts, and databases.",
            features: [
              "Unlimited Dynamic Pages",
              "Secure User Logins & Dashboard",
              "Database Integration (MongoDB/SQL)",
              "Payment Checkout Gates Integration",
              "Admin Panels & Audit Logs",
              "Roles-Based Access Controls",
              "High-Grade Penetration Security",
              "12 Months Maintenance Support"
            ],
            popular: false,
            cta: "Contact Sales"
          }
        ];
      case 'ecommerce':
        return [
          {
            name: "Starter Store",
            price: "₹19,999",
            originalPrice: "₹27,999",
            desc: "Setup your brand on the world's most stable commerce platforms like WooCommerce.",
            features: [
              "WooCommerce/Shopify Core Setup",
              "Razorpay / Stripe Payments Integration",
              "Standard Shipping Rate Estimator",
              "Basic Products Catalog (Up to 50 items)",
              "Framer Motion Add-to-Cart Effects",
              "Invoices PDF Generators System",
              "1 Month Checkout Support"
            ],
            popular: false,
            cta: "Choose Plan"
          },
          {
            name: "Professional Store",
            price: "₹39,999",
            originalPrice: "₹49,999",
            desc: "Headless commerce architecture utilizing custom React for superior performance.",
            features: [
              "Headless Commerce React Engine",
              "Instant product catalog search filters",
              "Automated stock level alerts flags",
              "Promo Codes & Coupon Modules",
              "Cross-Device Cart Syncing",
              "Google Search Console Indexing",
              "3 Months Dedicated Support"
            ],
            popular: true,
            cta: "Get Started"
          },
          {
            name: "Enterprise Store",
            price: "Custom Quote",
            originalPrice: "",
            desc: "Multi-vendor marketplaces with seller dashboards and accounting portals.",
            features: [
              "Multi-Vendor Seller Dashboards",
              "Admin automatic commissions split",
              "Warehouse Stock Syncing APIs",
              "Multi-Currency Payment Gateways",
              "Customer Review & Ratings panels",
              "Integrated WhatsApp Logistics alerts",
              "12 Months Priority Support"
            ],
            popular: false,
            cta: "Contact Sales"
          }
        ];
      case 'software':
        return [
          {
            name: "Starter ERP/CRM",
            price: "₹49,999",
            originalPrice: "₹59,999",
            desc: "Centralize your pipeline database, manage client logs, and automate notifications.",
            features: [
              "Leads Pipeline CRM charts",
              "Auto WhatsApp Follow-up alerts",
              "Team task checklist assignment",
              "Secure client database vault",
              "Under 2s load dashboard speeds",
              "1 Month Deployment Support"
            ],
            popular: false,
            cta: "Choose Plan"
          },
          {
            name: "Professional ERP",
            price: "₹79,999",
            originalPrice: "₹99,999",
            desc: "Complete operational planners managing attendance, payrolls, and invoice receipts.",
            features: [
              "Centralized accounts ledger logs",
              "Staff biometric attendance check",
              "Automatic Payroll slip PDF builder",
              "Inventory warehouse batches monitor",
              "Role-based staff access dashboard",
              "3 Months Dedicated Support"
            ],
            popular: true,
            cta: "Get Started"
          },
          {
            name: "Enterprise ERP Suite",
            price: "Custom Quote",
            originalPrice: "",
            desc: "Multi-branch institutional systems integrated with custom cloud clusters.",
            features: [
              "Multi-Branch Administration panel",
              "Machinery maintenance telemetry charts",
              "Custom REST API integrations",
              "AWS Cloud server deployment",
              "Private encrypted data vault",
              "12 Months Priority Support"
            ],
            popular: false,
            cta: "Contact Sales"
          }
        ];
      case 'apps':
        return [
          {
            name: "Starter Application",
            price: "₹59,999",
            originalPrice: "₹69,999",
            desc: "Native application built specifically for Android Google Play Store.",
            features: [
              "Kotlin Native Android Codebase",
              "Google Play Store Compliance Audit",
              "Local SQL Data caching system",
              "Push notifications widget setup",
              "In-app feedback collection forms",
              "1 Month Launch Support"
            ],
            popular: false,
            cta: "Choose Plan"
          },
          {
            name: "Cross-Platform App",
            price: "₹89,999",
            originalPrice: "₹1,09,999",
            desc: "Deploy onto both Apple and Google play stores sharing one React Native codebase.",
            features: [
              "React Native Shared Architecture",
              "Apple App Store Listing Support",
              "Google Play Store Listing Support",
              "Biometrics lock screen sync",
              "GPS location tracking APIs",
              "3 Months Dedicated Support"
            ],
            popular: true,
            cta: "Get Started"
          },
          {
            name: "Custom Flutter Suite",
            price: "Custom Quote",
            originalPrice: "",
            desc: "Highly tailored canvas elements, charts, and animations running on Dart.",
            features: [
              "Flutter Canvas rendering engine",
              "Offline-first databases syncing APIs",
              "Apple Pay & Google Pay checkout gates",
              "Custom camera barcode scanner link",
              "Enterprise database scaling",
              "12 Months Maintenance Support"
            ],
            popular: false,
            cta: "Contact Sales"
          }
        ];
      default:
        return [];
    }
  };

  const activePackages = getPackages();

  const addOns = [
    { name: "Logo Design", price: "₹2,999" },
    { name: "UI/UX Figma Wireframes", price: "₹4,999" },
    { name: "Technical SEO Campaign Setup", price: "₹4,999" },
    { name: "Google Analytics & Tags Integration", price: "₹999" },
    { name: "Speed Optimization Audit (Lighthouse 95+)", price: "₹2,999" },
    { name: "Domain & DNS Setup", price: "₹999" },
    { name: "Hosting Deployment Setup", price: "₹1,999" },
    { name: "SSL Certificate Configuration", price: "Included" }
  ];

  const comparisonFeatures = [
    { name: "Mobile Responsiveness", starter: "✅", pro: "✅", ent: "✅" },
    { name: "SEO Optimizations", starter: "Basic", pro: "Advanced", ent: "Premium" },
    { name: "Admin Dashboard Control", starter: "❌", pro: "✅", ent: "✅" },
    { name: "Secure Database integrations", starter: "❌", pro: "Optional", ent: "✅" },
    { name: "Payment Checkout Gateways", starter: "❌", pro: "Optional", ent: "✅" },
    { name: "Dedicated Tech Support", starter: "1 Month", pro: "3 Months", ent: "12 Months" }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans & Project Cost Estimator - Rahimax</title>
        <meta name="description" content="Explore transparent web development pricing packages. Try our interactive Project Cost Estimator to calculate customized budgets instantly." />
      </Helmet>

      {/* ① Hero Section: Starts exactly below fixed navbar */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div 
          className="absolute inset-x-0 bottom-0 top-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/70 to-bg-light pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side */}
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Transparent Estimates
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Simple & Transparent <br />
              Pricing
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Choose the perfect tier for your business requirements. No hidden setup charges, no licensing overrides. Simply clean code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#packages"
                className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
              >
                View Packages
              </a>
              <a 
                href="#estimator"
                className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] dark:bg-bg-card"
              >
                Cost Calculator
              </a>
            </div>
          </div>

          {/* Right Side: Floating Price Visual */}
          <div className="lg:col-span-5 relative hidden lg:block h-[340px]">
            <div className="absolute top-6 left-6 bg-white/95 dark:bg-zinc-900/90 border border-border-light p-6 rounded-[28px] shadow-2xl w-64 text-left rotate-[-3deg] backdrop-blur-md">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <span className="text-[9px] uppercase tracking-wider text-text-gray font-bold">Premium Estimate</span>
                <span className="text-secondary font-heading font-black text-sm">₹24,999</span>
              </div>
              <h4 className="font-heading font-bold text-xs text-primary">⚡ Growth Professional</h4>
              <p className="text-text-gray text-[10px] mt-1 leading-normal font-body">10-15 React pages, custom admin panel, advanced SEO index, and speed caching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ② Pricing Toggle Category Bar */}
      <section id="packages" className="py-20 bg-bg-surface px-6 scroll-mt-24 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
            {[
              { id: 'website', label: 'Website' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'software', label: 'Custom Software' },
              { id: 'apps', label: 'Mobile Apps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ③ Popular Packages Grid (Swipes nicely on mobile, maps dynamically) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {activePackages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-[28px] border bg-bg-card flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 text-left ${
                  pkg.popular 
                    ? 'border-secondary ring-4 ring-secondary/5 shadow-2xl scale-102 z-10' 
                    : 'border-border-light/75 shadow-md hover:border-secondary/25'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-secondary text-white font-extrabold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md animate-pulse">
                    {t('popular')}
                  </span>
                )}

                <div>
                  <h4 className="font-heading font-black text-lg text-primary">{pkg.name}</h4>
                  <p className="text-text-gray text-[10px] font-body mt-2 leading-relaxed h-[40px] line-clamp-2">{pkg.desc}</p>
                  
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-heading font-black text-2xl lg:text-3xl text-primary">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-xs text-text-gray line-through font-semibold">{pkg.originalPrice}</span>
                    )}
                  </div>

                  <ul className="mt-8 space-y-3.5 border-t border-border-light/50 pt-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-text-gray">
                        <Check className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 mt-0.5 shrink-0" />
                        <span className="font-semibold font-body leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border-light/50">
                  <Link 
                    to="/contact"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center block transition-all ${
                      pkg.popular 
                        ? 'bg-secondary hover:bg-secondary/95 text-white shadow-md' 
                        : 'bg-bg-light border border-border-light hover:bg-slate-100 text-primary dark:bg-zinc-800'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 EXTRA PREMIUM: Project Cost Estimator Calculator Widget */}
      <section id="estimator" className="py-24 bg-bg-light border-b border-border-light px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Interactive Tools
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              Project Cost Estimator Calculator
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              Tweak our sliding options to compute your project budgets based on pages count, security protocols, and checkout integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 bg-bg-card border border-border-light p-6 md:p-8 rounded-[28px] shadow-lg text-left space-y-6">
              
              {/* Type Select */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-secondary" />
                  <span>Website Category</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'business', label: 'Business' },
                    { id: 'ecommerce', label: 'E-Commerce' },
                    { id: 'portal', label: 'Portal / ERP' }
                  ].map((t) => (
                    <button 
                      key={t.id}
                      onClick={() => setEstType(t.id)}
                      className={`py-2 px-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                        estType === t.id 
                          ? 'border-secondary bg-secondary/5 text-primary' 
                          : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pages Slider */}
              <div>
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-secondary" /> Pages Count</span>
                  <span className="text-secondary font-black">{estPages} Pages</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="5"
                  value={estPages} 
                  onChange={(e) => setEstPages(Number(e.target.value))}
                  className="w-full accent-secondary mt-3"
                />
              </div>

              {/* Checkbox Options */}
              <div className="space-y-3 pt-3 border-t border-border-light/50">
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-secondary" />
                  <span>Include Modules</span>
                </label>

                <div 
                  onClick={() => setEstLogin(!estLogin)}
                  className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                    estLogin ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                  }`}
                >
                  <span className="font-bold text-xs">User Accounts & Secure Login</span>
                  <span className="text-[11px] font-bold text-secondary">+ ₹4,999</span>
                </div>

                <div 
                  onClick={() => setEstPayment(!estPayment)}
                  className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                    estPayment ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                  }`}
                >
                  <span className="font-bold text-xs">Razorpay / Stripe Payment Gateway</span>
                  <span className="text-[11px] font-bold text-secondary">+ ₹3,999</span>
                </div>

                <div 
                  onClick={() => setEstAdmin(!estAdmin)}
                  className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                    estAdmin ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
                  }`}
                >
                  <span className="font-bold text-xs">Admin Control Panel Dashboard</span>
                  <span className="text-[11px] font-bold text-secondary">+ ₹4,999</span>
                </div>
              </div>

              {/* SEO level */}
              <div className="pt-3 border-t border-border-light/50">
                <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">Search Optimization Level</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setEstSeo('basic')}
                    className={`flex-1 py-2 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      estSeo === 'basic' 
                        ? 'border-secondary bg-secondary/5 text-primary' 
                        : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                    }`}
                  >
                    Basic Indexing (Free)
                  </button>
                  <button 
                    onClick={() => setEstSeo('advanced')}
                    className={`flex-1 py-2 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      estSeo === 'advanced' 
                        ? 'border-secondary bg-secondary/5 text-primary' 
                        : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                    }`}
                  >
                    Advanced Campaign (+ ₹2,999)
                  </button>
                </div>
              </div>

            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-bg-card border border-border-light p-6 md:p-8 rounded-[28px] shadow-2xl text-left flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Live Calculator Cost
                </span>

                <div className="mt-8 border-b pb-4">
                  <span className="text-[10px] text-text-gray font-bold block uppercase tracking-wider">Estimated Project Budget</span>
                  <span className="font-heading font-black text-3xl md:text-4xl text-primary block mt-2">
                    ₹{estimatedPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Estimate details breakdown */}
                <div className="mt-6 space-y-2 text-xs font-semibold text-text-gray border-b pb-4">
                  <div className="flex justify-between">
                    <span>Base Tier:</span>
                    <span>₹{estType === 'business' ? '4,999' : estType === 'ecommerce' ? '14,999' : '24,999'}</span>
                  </div>
                  {estPages > 5 && (
                    <div className="flex justify-between">
                      <span>Extra {estPages - 5} Pages:</span>
                      <span>+ ₹{((estPages - 5) * (estType === 'business' ? 1000 : estType === 'ecommerce' ? 1500 : 2000)).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {(estLogin || estPayment || estAdmin || estSeo === 'advanced') && (
                    <div className="flex justify-between text-secondary">
                      <span>Modules & Add-ons:</span>
                      <span>+ ₹{( (estLogin ? 4999 : 0) + (estPayment ? 3999 : 0) + (estAdmin ? 4999 : 0) + (estSeo === 'advanced' ? 2999 : 0) ).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact"
                  className="w-full bg-secondary hover:bg-secondary/95 text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center block shadow-lg transition-all"
                >
                  Request Blueprint for this Spec
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🎁 Free With Every Project checklist */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Bonus Features
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Free With Every Single Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              { title: "Free Consultation", desc: "No charge requirements analysis and database structure maps mapping." },
              { title: "Responsive Layouts", desc: "Slick rendering across Apple iPhones, Androids, and tablets by default." },
              { title: "Basic On-Page SEO", desc: "Meta tags integration, descriptions, titles configurations for Google ranking." },
              { title: "Security Best Practices", desc: "Secure SSL encryption locks setup, preventing database intrusion attempts." },
              { title: "Performance Optimized", desc: "Webpack bundling optimizations delivering speed loading under 1.5s." },
              { title: "Dashboard Training Session", desc: "Live zoom screens guidance training on how to use admin controls." }
            ].map((item, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-primary">{item.title}</h4>
                  <p className="text-text-gray text-[10px] font-body mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 Add-On Services Table */}
      <section className="py-20 bg-bg-light border-b border-border-light/50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Add-Ons
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Optional Add-On Services
            </h2>
          </div>

          <div className="bg-bg-card border border-border-light rounded-2xl overflow-hidden shadow-sm text-left">
            <table className="w-full text-xs sm:text-sm font-semibold">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-900 border-b border-border-light">
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px]">Service Description</th>
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px] text-right">Investment Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light/75 text-text-gray">
                {addOns.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4 font-body font-semibold">{item.name}</td>
                    <td className="p-4 font-heading font-black text-right text-primary">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 📊 Comparison Table */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Features Audit
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Detailed Plans Feature Grid
            </h2>
          </div>

          <div className="bg-bg-card border border-border-light rounded-2xl overflow-hidden shadow-sm text-left">
            <table className="w-full text-xs font-semibold">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-900 border-b border-border-light">
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px]">Plan Features</th>
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px] text-center">Starter</th>
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px] text-center">Professional</th>
                  <th className="p-4 text-primary font-heading font-bold uppercase tracking-wider text-[10px] text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light/75 text-text-gray text-center">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left">
                    <td className="p-4 font-bold text-primary text-left">{row.name}</td>
                    <td className="p-4 text-center font-bold">{row.starter}</td>
                    <td className="p-4 text-center font-bold text-secondary">{row.pro}</td>
                    <td className="p-4 text-center font-bold">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🚀 Development Timeline */}
      <section className="py-20 bg-bg-light border-b border-border-light/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Launch Days
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Average Project Timelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm text-center">
              <span className="text-secondary font-extrabold text-[10px] uppercase tracking-widest block mb-1">Websites</span>
              <span className="font-heading font-black text-xl text-primary block mt-1">5–10 Days</span>
              <p className="text-text-gray text-[9px] font-body mt-2 leading-relaxed">Basic landing pages and business marketing portal pages setups.</p>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm text-center">
              <span className="text-secondary font-extrabold text-[10px] uppercase tracking-widest block mb-1">E-Commerce Stores</span>
              <span className="font-heading font-black text-xl text-primary block mt-1">10–20 Days</span>
              <p className="text-text-gray text-[9px] font-body mt-2 leading-relaxed">Custom checkout shopping carts and dynamic products inventory filters.</p>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm text-center">
              <span className="text-secondary font-extrabold text-[10px] uppercase tracking-widest block mb-1">Custom Software</span>
              <span className="font-heading font-black text-xl text-primary block mt-1">30–90 Days</span>
              <p className="text-text-gray text-[9px] font-body mt-2 leading-relaxed">Enterprise resource planners, complex user portals, roles logins databases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 Why Choose Rahimax */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Highlights
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Engineered for Speed & Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {[
              "Premium Apple/Stripe UI Designs",
              "Super Fast Loading Speeds (lighthouse 95+)",
              "SEO Friendly code routes layout",
              "Slick mobile responsive checkouts",
              "End-to-End Database Cryptography",
              "Lifetime structural support assistance",
              "Clean React source code with zero template dependency",
              "Highly affordable transparent rates packages",
              "Dedicated account support managers availability"
            ].map((point, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light/65 p-4 rounded-xl flex items-center gap-2 text-xs font-semibold text-text-gray shadow-sm">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQs Accordion */}
      <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            FAQs
          </span>
          <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-left mt-8">
            {[
              { q: "Do you provide web hosting and domain services?", a: "Yes. We set up domains, DNS registers, and deploy code onto secure high-performance servers (AWS, Vercel). Hosting expenses are billed separately." },
              { q: "Can we redesign our existing website?", a: "Absolutely. We rewrite legacy websites into modern React codes, restoring loading speeds and adding responsive mobile menus." },
              { q: "Can I upgrade my plan features later?", a: "Yes. You can scale your starter site into an E-Commerce store or link dynamic admin dashboard panels later when needed." },
              { q: "Do you provide search engine optimization?", a: "Yes. Basic technical metadata is included free by default. We also offer advanced campaigns targeting specific keywords." },
              { q: "Do you provide dedicated technical support?", a: "Yes. Depending on the plan tier, we provide 1 to 12 months post-launch support, monitoring backups and database logs." }
            ].map((faq, idx) => {
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
                      {isOpen ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
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

      {/* 📞 Final CTA */}
      <section className="py-24 bg-bg-surface px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block">
            Build With Us
          </span>
          <h2 className="text-primary font-heading font-black text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto">
            Ready To Build Your Dream Project?
          </h2>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Get an enterprise-ready system built by expert custom engineers within weeks. Propose your requirements to our team.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs shadow-lg uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-xl text-xs shadow-sm uppercase tracking-wider transition-all hover:scale-[1.02] dark:bg-bg-card"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
