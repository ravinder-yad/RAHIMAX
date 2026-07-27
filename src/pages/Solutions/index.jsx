import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, HeartPulse, GraduationCap, ShoppingBag, Briefcase, 
  Dumbbell, Utensils, Home as HomeIcon, Truck, Coins, 
  Map, Hotel as HotelIcon, Palette, Sprout, Factory, 
  Scale, Rocket, CheckCircle 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SolutionsCatalog = () => {
  const { t } = useLanguage();

  // 16 Premium Industries data
  const industries = [
    { id: "healthcare", title: "Healthcare", desc: "Hospital ERPs, clinic schedulers, secure patient records databases.", icon: <HeartPulse className="w-6 h-6 text-secondary" />, link: "/solutions/healthcare" },
    { id: "education", title: "Education", desc: "Student portals, school ERP billing, grading systems, and LMS panels.", icon: <GraduationCap className="w-6 h-6 text-secondary" />, link: "/solutions/education" },
    { id: "ecommerce", title: "E-Commerce", desc: "Shopify, WooCommerce, custom headless stores with payment checkouts.", icon: <ShoppingBag className="w-6 h-6 text-secondary" />, link: "/solutions/ecommerce" },
    { id: "corporate", title: "Corporate", desc: "HRMS payroll systems, recruitment portals, corporate company websites.", icon: <Briefcase className="w-6 h-6 text-secondary" />, link: "/solutions/corporate" },
    { id: "gym", title: "Gym", desc: "Gym memberships renewal calendars, trainer slots booking apps.", icon: <Dumbbell className="w-6 h-6 text-secondary" />, link: "/solutions/gym" },
    { id: "restaurant", title: "Restaurant", desc: "Contactless digital QR menus, online orders checkouts, table bookings.", icon: <Utensils className="w-6 h-6 text-secondary" />, link: "/solutions/restaurant" },
    { id: "real-estate", title: "Real Estate", desc: "Advanced property list search engines, interactive maps, CRM dashboards.", icon: <HomeIcon className="w-6 h-6 text-secondary" />, link: "/solutions/real-estate" },
    { id: "logistics", title: "Logistics", desc: "Truck fleet delivery trackers, custom warehouse supply chain ledgers.", icon: <Truck className="w-6 h-6 text-secondary" />, link: "/solutions/travel" }, // maps to travel/transport
    { id: "finance", title: "Finance", desc: "EMI loan calculators, financial tracking dashboards, secure KYC portals.", icon: <Coins className="w-6 h-6 text-secondary" />, link: "/solutions/finance" },
    { id: "travel", title: "Travel", desc: "Tour packages reservation systems, hotel booking and visa checkouts.", icon: <Map className="w-6 h-6 text-secondary" />, link: "/solutions/travel" },
    { id: "hotel", title: "Hotel", desc: "Room reservations calendars, billing, restaurant ordering integrations.", icon: <HotelIcon className="w-6 h-6 text-secondary" />, link: "/solutions/hotel" },
    { id: "agency", title: "Creative Agency", desc: "Case studies galleries, CRM client boards, automated invoice generators.", icon: <Palette className="w-6 h-6 text-secondary" />, link: "/solutions/agency" },
    { id: "agriculture", title: "Agriculture", desc: "Farmer market dashboard portals, weather logs telemetry checkers.", icon: <Sprout className="w-6 h-6 text-secondary" />, link: "/solutions/agriculture" },
    { id: "manufacturing", title: "Manufacturing", desc: "Warehouse inventory counts checkers, material batch list generators.", icon: <Factory className="w-6 h-6 text-secondary" />, link: "/solutions/manufacturing" },
    { id: "legal", title: "Legal", desc: "Law firm marketing pages, client portal, consultation appointment logs.", icon: <Scale className="w-6 h-6 text-secondary" />, link: "/solutions/legal" },
    { id: "startup", title: "Startup", desc: "High-converting SaaS landing pages, user authentication dashboards.", icon: <Rocket className="w-6 h-6 text-secondary" />, link: "/solutions/startup" }
  ];

  return (
    <>
      <Helmet>
        <title>Industry Solutions | Tailored Web & SaaS Engines - Rahimax</title>
        <meta name="description" content="Explore our catalog of 16 industry solutions. Custom portals, hospital and school ERPs, SaaS dashboards, and e-commerce checkouts." />
      </Helmet>

      {/* Hero Section: Glass details, starts below navbar */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        {/* Workspace meeting boardroom background image */}
        <div 
          className="absolute inset-x-0 bottom-0 top-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/70 to-bg-light pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Tailored Engineering
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Smart Digital Solutions <br />
              for Every Industry
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              We build custom websites, portals, and cloud applications tailored exactly to your industry standards and conversion goals. Hand-coded for speed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#industries"
                className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
              >
                Explore Solutions
              </a>
              <Link 
                to="/contact"
                className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] dark:bg-bg-card"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Right Layout: Mini floating dashboards concept */}
          <div className="lg:col-span-5 relative hidden lg:block h-[340px]">
            {/* Analytics card */}
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-zinc-900/90 border border-border-light p-5 rounded-2xl shadow-xl w-60 text-left rotate-[-3deg] backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-wider text-text-gray font-bold">CRM Telemetry</span>
              <h4 className="font-heading font-extrabold text-sm text-primary mt-1">📊 Leads Automated</h4>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-emerald-500 font-bold">+184% Daily</span>
                <span className="text-primary font-bold">14,289</span>
              </div>
            </div>

            {/* Mobile App mockup card */}
            <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-zinc-900/90 border border-border-light p-5 rounded-2xl shadow-2xl w-56 text-left rotate-[4deg] backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-wider text-text-gray font-bold">Hospital ERP</span>
              <h4 className="font-heading font-extrabold text-sm text-primary mt-1">🩺 Doctor Booking</h4>
              <div className="mt-4 space-y-2 text-[10px]">
                <div className="flex justify-between text-primary font-bold border-b pb-1">
                  <span>Dr. Roy (Cardio)</span>
                  <span className="text-secondary">Selected</span>
                </div>
                <div className="flex justify-between text-text-gray">
                  <span>Time Slot</span>
                  <span>10:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Industries Grid Section */}
      <section id="industries" className="py-24 bg-bg-surface px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Core Industries
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              Select Your Business Category
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              Click on your industry type to explore features checklist, case study portfolio, and try a live interactive software preview dashboard.
            </p>
          </div>

          {/* Grid of 16 Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link 
                key={ind.id}
                to={ind.link}
                className="group p-6 bg-bg-card border border-border-light/75 rounded-2xl flex flex-col justify-between h-[210px] text-left transition-all duration-300 hover:border-secondary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5 relative"
              >
                {/* Visual blue border glow indicator on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-secondary/30 rounded-2xl transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                    {ind.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-primary group-hover:text-secondary transition-colors duration-300">
                    {ind.title}
                  </h3>
                  <p className="text-text-gray text-[10px] leading-relaxed font-body mt-2 line-clamp-3">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[9px] font-extrabold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  <span>View Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Why Choose Rahimax */}
      <section className="py-20 bg-bg-light border-y border-border-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Why Choose Us
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Enterprise Grade Software Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
              <span className="text-secondary font-extrabold text-xs block mb-2">⚡ 24/7 SUPPORT</span>
              <p className="text-text-gray text-[10px] font-body leading-relaxed">Round-the-clock developer availability monitoring database server load logs.</p>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
              <span className="text-secondary font-extrabold text-xs block mb-2">✨ PREMIUM UI</span>
              <p className="text-text-gray text-[10px] font-body leading-relaxed">Apple/Stripe-level aesthetics utilizing glassmorphism cards and smooth custom micro-animations.</p>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
              <span className="text-secondary font-extrabold text-xs block mb-2">🚀 FAST DEPLOY</span>
              <p className="text-text-gray text-[10px] font-body leading-relaxed">Continuous delivery pipelines launching complete institutional systems in weeks, not months.</p>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
              <span className="text-secondary font-extrabold text-xs block mb-2">⚙️ LIFETIME SUPPORT</span>
              <p className="text-text-gray text-[10px] font-body leading-relaxed">Worry-free maintenance hosting checks, automated weekly file backups, and security patches.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsCatalog;
