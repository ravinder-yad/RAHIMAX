import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Sprout, Sun, CloudRain, CheckCircle } from 'lucide-react';

const AgricultureDemo = () => {
  const [crop, setCrop] = useState('Premium Basmati Rice');

  const mandiPrices = {
    'Premium Basmati Rice': { rate: '₹4,200 / Quintal', demand: 'High', weather: 'Sunny (32°C)' },
    'Sonalika Organic Wheat': { rate: '₹2,650 / Quintal', demand: 'Moderate', weather: 'Light Rain (24°C)' },
    'Long-Staple Cotton': { rate: '₹7,100 / Quintal', demand: 'Very High', weather: 'Humid (30°C)' }
  };

  const current = mandiPrices[crop];

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Sprout className="w-5 h-5 text-secondary" />
        <span>Mandi Crop Price Telemetry (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Select Crop Category</label>
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(mandiPrices).map((name, idx) => (
              <button 
                key={idx}
                onClick={() => setCrop(name)}
                className={`p-3 rounded-xl border text-left flex justify-between items-center transition-all ${
                  crop === name 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                <span>{name}</span>
                <span className="text-[9px] uppercase tracking-wider bg-emerald-500/10 text-emerald-500 px-2.5 py-0.5 rounded">Check Rates</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 bg-bg-surface border border-border-light rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
          <h4 className="font-heading font-black text-xs text-primary border-b pb-2 flex justify-between uppercase tracking-wider">
            <span>Market Mandi Summary</span>
            <span className="text-secondary">{crop}</span>
          </h4>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between text-text-gray">
              <span>Avg Mandi Rate:</span>
              <span className="text-primary font-bold">{current.rate}</span>
            </div>
            <div className="flex justify-between text-text-gray">
              <span>Buyer Demand Index:</span>
              <span className="text-secondary font-bold">{current.demand}</span>
            </div>
            <div className="flex justify-between text-text-gray">
              <span>Recommended Farm Conditions:</span>
              <span className="text-primary font-bold">{current.weather}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgricultureSolution = () => {
  const features = [
    "Farmer Marketplace Portals",
    "Live Mandi Pricing Dashboards",
    "Crop Cycle Forecast Planners",
    "Weather API Telemetry Boards",
    "Organic Fertilizer Stocks Ledger",
    "Bulk Buyer Inquiries Pipeline",
    "Secure Digital Invoicing PDF Engines",
    "Integrated WhatsApp Mandi Alerts"
  ];

  const benefits = [
    "Connect farmers directly with wholesalers, skipping brokers",
    "95% accuracy in crop mandi price estimates",
    "Provide real-time soil/weather logs data sync",
    "Automate crop scheduling alerts sent to farmers"
  ];

  const faqs = [
    { q: "Can we support localized regional languages?", a: "Yes. Our systems feature multi-language togglers allowing translations across Hindi, Punjabi, Telugu, and more." },
    { q: "How is weather info pulled?", a: "We connect the dashboard directly with OpenWeatherMap APIs to fetch temperature, rainfall, and moisture metrics." }
  ];

  const portfolio = [
    { name: "Kisan Mandi Connect", desc: "Wholesaler bidding portal connecting organic grains farmers.", image: "/skyline-mock.jpg" },
    { name: "FarmTech Telemetry", desc: "Soil metrics dashboard displaying real-time weather and crop calendars.", image: "/lens-mock.jpg" },
    { name: "Organic Produce Hub", desc: "Bulk grains checkout portal integrating payment gateway APIs.", image: "/prime-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Agriculture Solution"
      subtitle="Complete farmer market portals, mandi pricing boards, weather monitors, and logistics dispatch trackers."
      category="Agriculture"
      bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={AgricultureDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Digitalize Agri-Business Operations?"
    />
  );
};

export default AgricultureSolution;
