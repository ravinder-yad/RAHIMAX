import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Compass, CheckCircle } from 'lucide-react';

const TravelDemo = () => {
  const [pkg, setPkg] = useState('Kerala Paradise');
  const [includeFlights, setIncludeFlights] = useState(false);
  const [premiumHotel, setPremiumHotel] = useState(false);

  const packages = {
    'Kerala Paradise': { basePrice: 12999, desc: '5 Days in backwaters, houseboat cruise, and Munnar tea hills.' },
    'Goa Beach Carnival': { basePrice: 9999, desc: '4 Days in Calangute beach, water sports, and sunset cruises.' },
    'Ladakh Adventure': { basePrice: 18999, desc: '6 Days tour across Pangong Lake, Nubra Valley, and Khardung La.' }
  };

  const current = packages[pkg];
  const flightCost = includeFlights ? 6000 : 0;
  const hotelUpgrade = premiumHotel ? 4000 : 0;
  const total = current.basePrice + flightCost + hotelUpgrade;

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Compass className="w-5 h-5 text-secondary" />
        <span>Tour Package Configurator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Select Destination</label>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(packages).map(([name, p], idx) => (
              <button 
                key={idx}
                onClick={() => { setPkg(name); setIncludeFlights(false); setPremiumHotel(false); }}
                className={`p-3 rounded-xl border text-left flex justify-between items-center transition-all ${
                  pkg === name 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                <div>
                  <span className="font-bold block">{name}</span>
                  <span className="text-[10px] text-text-gray mt-0.5 leading-normal block font-body">{p.desc}</span>
                </div>
                <span className="font-heading font-black text-primary shrink-0">₹{p.basePrice}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Customize Add-Ons</label>
          
          <div 
            onClick={() => setIncludeFlights(!includeFlights)}
            className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
              includeFlights ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
            }`}
          >
            <span>Include Return Flights Add-on</span>
            <span className="font-bold">+ ₹6,000</span>
          </div>

          <div 
            onClick={() => setPremiumHotel(!premiumHotel)}
            className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
              premiumHotel ? 'border-secondary bg-secondary/5 text-primary' : 'border-border-light bg-bg-surface text-text-gray'
            }`}
          >
            <span>Upgrade to 5-Star Luxury Hotels</span>
            <span className="font-bold">+ ₹4,000</span>
          </div>
        </div>

        <div className="border-t pt-4 flex justify-between items-center text-sm font-extrabold text-primary border-dashed">
          <span>Estimated Total:</span>
          <span className="text-secondary font-heading font-black text-lg">₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};

const TravelSolution = () => {
  const features = [
    "Interactive Tour Package Feeds",
    "Real-time Holiday Booking Sliders",
    "Flight & Hotel API integrations",
    "Secure Payment Checkout systems",
    "Automated Travel Visa Checklist Portals",
    "Driver & Cab Tracking Ledgers",
    "Customer Support WhatsApp alerts",
    "Sales Commission Analytics reports"
  ];

  const benefits = [
    "Automate holiday reservation itineraries instantly",
    "Accept credit card payments & advance deposits online",
    "Unified agent portal coordinating multiple vendor bookings",
    "Increase online inquiries by 40%"
  ];

  const faqs = [
    { q: "Can we sync flights and hotels dynamically?", a: "Yes. We set up custom API integrations connecting with flight search aggregates (such as Amadeus) and hotel suppliers." },
    { q: "Is a customer booking wallet supported?", a: "Yes. We can design customized loyalty credit systems allowing buyers to redeem reward points on checkout." }
  ];

  const portfolio = [
    { name: "Kerala Explorer", desc: "Holiday booking portal with houseboat and cab tracking dashboards.", image: "/skyline-mock.jpg" },
    { name: "Goa Beach Escapes", desc: "Interactive water sports activities ticket booking and payments.", image: "/aura-mock.jpg" },
    { name: "Ladakh Adventures", desc: "High-altitude group trekking calendar and permits registration portal.", image: "/lens-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Travel & Logistics Solution"
      subtitle="Complete tour package reservation portals, fleet management software, booking engines, and custom visa portals."
      category="Travel"
      bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={TravelDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Digitalize Your Agency Bookings?"
    />
  );
};

export default TravelSolution;
