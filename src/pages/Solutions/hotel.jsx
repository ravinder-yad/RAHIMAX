import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Bed, PlusCircle, CheckCircle } from 'lucide-react';

const HotelDemo = () => {
  const [roomType, setRoomType] = useState('Standard Room');
  const [nights, setNights] = useState(2);

  const rooms = {
    'Standard Room': { price: 1999, desc: 'Cozy queen bed with high-speed Wi-Fi and city view.' },
    'Deluxe Suite': { price: 3499, desc: 'Spacious king bed with private balcony and minibar.' },
    'Presidential Suite': { price: 6999, desc: 'Luxury penthouse suite with private jacuzzi and pool access.' }
  };

  const selected = rooms[roomType];
  const total = selected.price * nights;

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Bed className="w-5 h-5 text-secondary" />
        <span>Room Booking Bill Estimator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Select Room Type</label>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(rooms).map(([name, r], idx) => (
              <button 
                key={idx}
                onClick={() => setRoomType(name)}
                className={`p-3 rounded-xl border text-left flex justify-between items-center transition-all ${
                  roomType === name 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                <div>
                  <span className="font-bold block">{name}</span>
                  <span className="text-[10px] text-text-gray mt-0.5 leading-normal block font-body">{r.desc}</span>
                </div>
                <span className="font-heading font-black text-primary shrink-0">₹{r.price}/night</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Number of Nights: {nights}</label>
          <input 
            type="range" 
            min="1" 
            max="14" 
            value={nights} 
            onChange={(e) => setNights(Number(e.target.value))}
            className="w-full accent-secondary mt-3"
          />
        </div>

        <div className="border-t pt-4 flex justify-between items-center text-sm font-extrabold text-primary border-dashed">
          <span>Estimated Total:</span>
          <span className="text-secondary font-heading font-black text-lg">₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};

const HotelSolution = () => {
  const features = [
    "Room Reservation Calendars",
    "Digital Billing & POS Integrations",
    "Housekeeping Task Tracking Boards",
    "Guest Check-in ID Scanners Syncs",
    "Restaurant & Food Ordering links",
    "Automated Invoice PDF Builders",
    "Integrated WhatsApp Notifications",
    "Dynamic Seasonal Prices Managers"
  ];

  const benefits = [
    "Increase direct bookings by 30%, saving OTA commissions",
    "Reduce guest check-in processing time by 60%",
    "Unified dashboard coordinating room status",
    "Automated feedback alerts sent post-checkout"
  ];

  const faqs = [
    { q: "Can we connect existing channel managers?", a: "Yes. We design APIs connecting direct with channel managers (such as Staah or AxisRooms) syncing prices across Booking.com and Agoda." },
    { q: "Is mobile web check-in supported?", a: "Absolutely. Guests receive a link to submit their IDs and checkout online directly from their phone." }
  ];

  const portfolio = [
    { name: "Aura Grand Resort", desc: "Luxury resort website featuring custom room booking calendars and POS sync.", image: "/aura-mock.jpg" },
    { name: "Skyline Suites", desc: "Urban hotel reservation engine managing 80 rooms check-ins.", image: "/skyline-mock.jpg" },
    { name: "Zenith Boutique Hotel", desc: "Digital booking portal integrating local restaurant menus.", image: "/zenith-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Hotel Solution"
      subtitle="Complete room reservation portals, billing POS dashboards, guest portals, and automated checkout engines."
      category="Hotel"
      bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={HotelDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Automate Your Hotel Bookings?"
    />
  );
};

export default HotelSolution;
