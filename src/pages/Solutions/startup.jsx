import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Rocket, Sparkles, CheckCircle } from 'lucide-react';

const StartupDemo = () => {
  const [users, setUsers] = useState(250);

  const getTierInfo = () => {
    if (users <= 100) return { name: 'Starter Tier', cost: 'Free', features: ['Up to 100 users', 'Core dashboard access', 'Email Support'] };
    if (users <= 500) return { name: 'Growth Tier', cost: '₹1,499 / mo', features: ['Up to 500 users', 'Custom API integration', 'Priority Support'] };
    return { name: 'Enterprise Tier', cost: '₹4,999 / mo', features: ['Unlimited users', 'Role-based access controls', '24/7 dedicated support'] };
  };

  const tier = getTierInfo();

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-secondary" />
        <span>SaaS Pricing Tier Calculator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Scale Monthly Users: {users}</label>
          <input 
            type="range" 
            min="10" 
            max="1000" 
            value={users} 
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full accent-secondary mt-3"
          />
        </div>

        <div className="p-5 bg-bg-surface border border-border-light rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <span className="text-secondary uppercase tracking-wider text-[10px] font-extrabold">{tier.name}</span>
            <span className="font-heading font-black text-primary text-sm">{tier.cost}</span>
          </div>
          <ul className="space-y-1.5 text-xs text-text-gray">
            {tier.features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const StartupSolution = () => {
  const features = [
    "Slick High-Converting Landing Pages",
    "SaaS Administration Dashboards",
    "User Secure Auth (JWT/OAuth) Modules",
    "Tailored API Gateways Syncing",
    "Stripe Subscription Checkout setups",
    "Integrated Leads CRM Pipelines",
    "Product Analytics Telemetry charts",
    "Email & Slack Notification Hooks"
  ];

  const benefits = [
    "Build beautiful, functional MVPs in 4-6 weeks",
    "Secure databases compliant with GDPR guidelines",
    "High-converting landing page layouts boosting signups by 45%",
    "Total ownership of source code with zero licensing fees"
  ];

  const faqs = [
    { q: "How long does it take to launch an MVP?", a: "Most custom SaaS MVP dashboards are ready for user onboarding within 4 to 8 weeks, depending on database complex routes." },
    { q: "Do you integrate billing gateways?", a: "Yes. We set up Stripe or Razorpay subscription webhooks that handle renewals and invoice downloads automatically." }
  ];

  const portfolio = [
    { name: "Apex SaaS Platform", desc: "Interactive customer database and lead tracking pipeline portal.", image: "/apex-mock.jpg" },
    { name: "Aura Workspace", desc: "Collaborative project cards tracker running offline sync features.", image: "/aura-mock.jpg" },
    { name: "Zenith Booking Flow", desc: "Automated event scheduling wizard with calendar integration.", image: "/zenith-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Startup Solution"
      subtitle="Launch custom SaaS MVPs, beautiful high-converting campaign landing pages, secure user dashboards, and subscription checkouts."
      category="Startup"
      bgImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={StartupDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Engineer Your Startup MVP?"
    />
  );
};

export default StartupSolution;
