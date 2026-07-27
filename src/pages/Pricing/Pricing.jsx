import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: "Startup Launch",
      price: "₹4,999",
      originalPrice: "₹19,999",
      desc: "Perfect for establishing a premium brand presence with smooth layouts and animations.",
      features: [
        "Up to 5 Custom React Pages",
        "Fully Mobile-Responsive Layout",
        "Tailwind CSS / MUI Styling",
        "Contact Form with Zod Validation",
        "Speed Optimized (Under 2s)",
        "Basic Technical SEO Setup",
        "1 Month Deployment Support"
      ],
      popular: false,
      cta: "Choose Startup"
    },
    {
      name: "Growth Professional",
      price: "₹12,999",
      originalPrice: "₹49,999",
      desc: "Ideal for growing businesses requiring CMS integration, dynamic blogs, and e-commerce.",
      features: [
        "Up to 10 Custom React Pages",
        "CMS Integration (Strapi/WordPress)",
        "Premium Framer Motion Effects",
        "Stripe or Razorpay Payments",
        "Dynamic Blog or Store Pages",
        "Full SEO & Analytics Suite",
        "3 Months Dedicated Support",
        "WhatsApp Live Chat Widget"
      ],
      popular: true,
      cta: "Go Pro"
    },
    {
      name: "Enterprise ERP",
      price: "Custom Quote",
      originalPrice: "",
      desc: "For institutional systems requiring secure roles management, school/hospital ERPs, and portals.",
      features: [
        "Unlimited Custom Dashboard Panels",
        "Custom Database Structure",
        "Role-Based Access Control",
        "Complex Charts & Telemetry",
        "Automated PDF Invoice Generators",
        "Hospital/School Management Modules",
        "Priority Uptime Maintenance",
        "Custom APIs & Integrations"
      ],
      popular: false,
      cta: "Contact Architect"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans | Custom Web & ERP Tiers - Rahimax</title>
        <meta name="description" content="View our transparent web engineering pricing tiers. From premium brand landing pages to complex school ERP systems and dashboards." />
      </Helmet>

      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('pr_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('pr_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('pr_desc')}
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 mt-12">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-[28px] border bg-bg-card flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular 
                    ? 'border-secondary ring-4 ring-secondary/5 shadow-2xl scale-105 z-10' 
                    : 'border-border-light/75 shadow-md hover:border-secondary/20 hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-secondary text-white font-extrabold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md animate-pulse">
                    {t('popular')}
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-gray text-xs leading-relaxed mb-6 font-body">
                    {pkg.desc}
                  </p>
                  
                  {/* Slashed value pricing display block */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="font-heading font-black text-3xl md:text-4xl text-primary tracking-tight">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-text-gray line-through font-body select-none">
                        {pkg.originalPrice}
                      </span>
                    )}
                    {pkg.price !== 'Custom Quote' && (
                      <span className="text-text-gray text-[9px] font-bold uppercase tracking-widest ml-1 select-none">
                        {t('pr_one_time')}
                      </span>
                    )}
                  </div>

                  <hr className="border-border-light/40 mb-6" />

                  <ul className="space-y-4 text-xs font-semibold text-primary">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a 
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    className={`block w-full text-center py-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover shadow-lg hover:scale-[1.02]'
                        : 'bg-btn-secondary-bg border border-btn-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover hover:scale-[1.02]'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Standard inclusions */}
          <div className="max-w-4xl mx-auto bg-bg-surface border border-border-light rounded-[32px] p-8 md:p-12 text-center">
            <h4 className="font-heading font-bold text-xl text-primary mb-6">{t('pr_included_all')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-semibold text-primary">
              <div className="space-y-1">
                <span className="block text-secondary">100%</span>
                <span className="text-text-gray text-xs uppercase font-extrabold tracking-wider">{t('pr_custom_code')}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-secondary">SSL</span>
                <span className="text-text-gray text-xs uppercase font-extrabold tracking-wider">{t('pr_secure_setup')}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-secondary">GTM</span>
                <span className="text-text-gray text-xs uppercase font-extrabold tracking-wider">{t('pr_analytics')}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-secondary">99.9%</span>
                <span className="text-text-gray text-xs uppercase font-extrabold tracking-wider">{t('pr_mobile')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
