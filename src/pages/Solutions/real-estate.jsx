import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Home as HomeIcon, Search, CheckCircle } from 'lucide-react';

const RealEstateDemo = () => {
  const [filter, setFilter] = useState('All');
  const [maxPrice, setMaxPrice] = useState(80); // in Lakhs

  const listings = [
    { name: 'Skyline Premium Villa', type: 'Villa', price: 95, location: 'Sector 62, Noida' },
    { name: 'Orion Cosy Flat', type: 'Apartment', price: 45, location: 'Whitefield, Bangalore' },
    { name: 'Luxe Smart Suite', type: 'Apartment', price: 75, location: 'Gurugram, Phase 3' },
    { name: 'Prime Meadows Estate', type: 'Villa', price: 120, location: 'Thane, Mumbai' }
  ];

  const filtered = listings.filter(item => {
    const matchType = filter === 'All' || item.type === filter;
    const matchPrice = item.price <= maxPrice;
    return matchType && matchPrice;
  });

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <HomeIcon className="w-5 h-5 text-secondary" />
        <span>Property Listing Filter Panel (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Property Type</label>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-border-light bg-transparent focus:outline-none focus:border-secondary font-bold text-xs"
            >
              <option value="All">All Types</option>
              <option value="Villa">Villas</option>
              <option value="Apartment">Apartments</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Max Price: {maxPrice}L</label>
            <input 
              type="range" 
              min="40" 
              max="130" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-secondary mt-3"
            />
          </div>
        </div>

        <label className="block text-[10px] font-extrabold text-text-gray uppercase mt-2">Matching Listings ({filtered.length})</label>
        <div className="space-y-2.5">
          {filtered.map((item, idx) => (
            <div key={idx} className="p-3 bg-bg-surface border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/20 transition-all">
              <div>
                <h4 className="font-bold text-primary">{item.name}</h4>
                <p className="text-[10px] text-text-gray mt-1 leading-normal font-body font-semibold">{item.location} • {item.type}</p>
              </div>
              <span className="font-heading font-black text-secondary shrink-0">₹{item.price} Lakhs</span>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-[10px] text-text-gray italic text-center p-4">No properties match your filter requirements.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const RealEstateSolution = () => {
  const features = [
    "Interactive Property Listing Feeds",
    "Advanced Property Search & Filter Map",
    "Agent Dashboard portals",
    "Property CRM & Leads Management",
    "Interactive virtual tours layouts",
    "Google Maps SDK Location Pins",
    "Admin Property Upload Forms",
    "Contact & Appointment Schedulers"
  ];

  const benefits = [
    "Increase lead response rates by 55%",
    "Allow agents to publish properties within 1 minute",
    "Engaging visual map pins boosting click CTRs",
    "Fully integrated client database systems"
  ];

  const faqs = [
    { q: "Can we support custom maps integration?", a: "Yes. We integrate Leaflet.js or official Google Maps API routes to render location markers directly on your pages." },
    { q: "Do you build custom CRM for agencies?", a: "Absolutely. We build internal dashboards letting agents monitor client calls, property visits, and deals closure rates." }
  ];

  const portfolio = [
    { name: "Skyline Meadows", desc: "Real estate listing directory featuring multi-factor location searches.", image: "/skyline-mock.jpg" },
    { name: "Aura Greens Properties", desc: "Agent CRM dashboard system monitoring corporate buyer leads.", image: "/aura-mock.jpg" },
    { name: "Apex Landlords Board", desc: "Property upload page with automated layout and maps listings.", image: "/lens-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Real Estate Solution"
      subtitle="Complete real estate listing portals, agency CRM trackers, interactive maps, and lead management dashboards."
      category="Real Estate"
      bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={RealEstateDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Need a Premium Real Estate Listing Portal?"
    />
  );
};

export default RealEstateSolution;
