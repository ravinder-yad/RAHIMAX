import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, Check, Briefcase, ShoppingBag, 
  GraduationCap, HeartPulse, Dumbbell, Utensils, 
  Home as HomeIcon, Layers, LayoutDashboard, Code2, 
  Palette, ShieldAlert, SearchCode 
} from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  // Handle anchor link scrolling to service ID
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  // Categories list
  const categories = ['All', 'Web Design', 'Development', 'ERP & Systems', 'SEO & Support'];

  const filteredServices = filter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-secondary" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-secondary" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-secondary" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-secondary" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8 text-secondary" />;
      case 'Utensils': return <Utensils className="w-8 h-8 text-secondary" />;
      case 'Home': return <HomeIcon className="w-8 h-8 text-secondary" />;
      case 'Layers': return <Layers className="w-8 h-8 text-secondary" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-8 h-8 text-secondary" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-secondary" />;
      case 'Palette': return <Palette className="w-8 h-8 text-secondary" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 text-secondary" />;
      case 'SearchCode': return <SearchCode className="w-8 h-8 text-secondary" />;
      default: return <Palette className="w-8 h-8 text-secondary" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services | 14 Custom Web & Software Solutions - Rahimax</title>
        <meta name="description" content="Explore our catalog of 14 tailored digital services: Custom school and hospital ERPs, SaaS dashboards, headless e-commerce, high-converting landing pages, SEO, and UI/UX design." />
      </Helmet>

      <section className="py-28 relative overflow-hidden bg-bg-light border-b border-border-light">
        {/* Boardroom meeting background image (starts below fixed navbar at top-20 / 80px) */}
        <div 
          className="absolute inset-x-0 bottom-0 top-[80px] bg-cover bg-center opacity-15 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80")' }}
        />
        {/* Soft light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-bg-light pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            What We Build
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            Our Full Catalog of Digital Services
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Choose from our 14 professional solutions built from scratch to empower and automate your operations.
          </p>

          {/* Filter Categories: Styled to be boxy and theme-aware */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-btn-primary-bg border-btn-primary-bg text-btn-primary-text shadow-lg'
                    : 'bg-btn-secondary-bg border-btn-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-8 md:p-12 rounded-[32px] bg-bg-card border border-border-light premium-shadow flex flex-col lg:flex-row gap-10 items-stretch"
              >
                {/* Visual Header - Upgraded with custom meeting background for Business Website */}
                <div className={`lg:w-2/5 flex flex-col justify-between rounded-[24px] relative overflow-hidden transition-all duration-300 ${
                  service.id === 'business-website' 
                    ? 'p-6 bg-zinc-950 text-white border border-zinc-800 shadow-2xl min-h-[360px] lg:min-h-auto' 
                    : 'p-0 text-primary'
                }`}>
                  {/* Meeting Background Image Layer */}
                  {service.id === 'business-website' && (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
                        style={{ backgroundImage: 'url("/stats-meeting.jpg")' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-transparent pointer-events-none" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
                      service.id === 'business-website' 
                        ? 'bg-white/10 border border-white/20 text-white' 
                        : 'bg-secondary/10'
                    }`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className={`font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                      service.id === 'business-website' 
                        ? 'bg-white/15 text-white border border-white/10 backdrop-blur-md' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {service.category}
                    </span>
                    <h3 className={`font-heading font-extrabold text-2xl md:text-3xl mt-4 ${
                      service.id === 'business-website' ? 'text-white' : 'text-primary'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`font-body text-sm mt-4 leading-relaxed ${
                      service.id === 'business-website' ? 'text-zinc-200' : 'text-text-gray'
                    }`}>
                      {service.longDesc}
                    </p>
                  </div>
                  
                  <div className={`mt-8 pt-6 border-t space-y-2 text-xs font-semibold relative z-10 ${
                    service.id === 'business-website' 
                      ? 'border-white/15 text-white' 
                      : 'border-border-light text-primary'
                  }`}>
                    <div className="flex justify-between">
                      <span className={service.id === 'business-website' ? 'text-zinc-400' : 'text-text-gray'}>INVESTMENT:</span>
                      <span className="font-bold">{service.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={service.id === 'business-website' ? 'text-zinc-400' : 'text-text-gray'}>DELIVERY:</span>
                      <span className="font-bold">{service.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                {/* Features & Benefits */}
                <div className="lg:w-3/5 bg-bg-light rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-primary text-base mb-6 tracking-wide uppercase">
                      Features Included
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-success shrink-0 mt-1" />
                          <span className="text-sm font-medium text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-heading font-bold text-primary text-base mb-4 mt-8 tracking-wide uppercase">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-text-gray flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a 
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center space-x-2 bg-btn-primary-bg text-btn-primary-text border border-transparent font-semibold px-6 py-3 rounded-xl hover:bg-btn-primary-hover text-sm group"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
