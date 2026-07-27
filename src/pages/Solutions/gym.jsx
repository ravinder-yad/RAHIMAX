import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Dumbbell, PlusCircle, CheckCircle } from 'lucide-react';

const GymDemo = () => {
  const [members, setMembers] = useState([
    { name: 'Karan Sharma', plan: 'Gold Membership', active: true },
    { name: 'Sameer Verma', plan: 'Trainer Personal Pack', active: false },
    { name: 'Rohan Deshmukh', plan: 'Silver Membership', active: true }
  ]);

  const toggleStatus = (idx) => {
    const updated = [...members];
    updated[idx].active = !updated[idx].active;
    setMembers(updated);
  };

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Dumbbell className="w-5 h-5 text-secondary" />
        <span>Fitness Center Member Tracker (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <label className="block text-[10px] font-bold text-text-gray uppercase mb-1">Active Gym Check-In List</label>
        <div className="space-y-3">
          {members.map((m, idx) => (
            <div key={idx} className="p-3 bg-bg-surface border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/20 transition-all">
              <div>
                <h4 className="font-bold text-primary">{m.name}</h4>
                <p className="text-[10px] text-text-gray mt-1 leading-normal font-semibold font-body">{m.plan}</p>
              </div>
              <button 
                onClick={() => toggleStatus(idx)}
                className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase transition-all flex items-center gap-1 ${
                  m.active 
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                <span>{m.active ? 'Checked In' : 'Checked Out'}</span>
              </button>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-text-gray mt-2 italic font-body text-center leading-normal">
          Clicking the check-in button simulates live member scanner check-ins at reception desks.
        </p>
      </div>
    </div>
  );
};

const GymSolution = () => {
  const features = [
    "Gym Marketing Portals & Pages",
    "Trainer Scheduling Dashboards",
    "Workout Diet Chart Uploaders",
    "Fees Renewal Online Pay Gates",
    "Biometric Member Check-in Syncs",
    "Batch Timing Slots Controllers",
    "Body Composition Progress Logs",
    "Automatic Fee Reminder WhatsApp Alerts"
  ];

  const benefits = [
    "Increase membership retention by 30%",
    "Reduce front-desk check-in time by 70%",
    "Paperless workout plans shared directly with members",
    "Automate fee collections tracking and reminders"
  ];

  const faqs = [
    { q: "Can members view their diet charts online?", a: "Yes. Our systems feature a dedicated Client Login app where they can view workout sheets, biometric charts, and diet guidelines." },
    { q: "How are fee warnings handled?", a: "The system runs an automatic daily cron checking for plan expirations, sending a custom alert link on WhatsApp." }
  ];

  const portfolio = [
    { name: "Prime Fitness Studio", desc: "Gym website featuring customized trainer slots booking and diet uploads.", image: "/prime-mock.jpg" },
    { name: "Iron Gym Hub", desc: "Bulk biometric member entry dashboard running automated WhatsApp notices.", image: "/skyline-mock.jpg" },
    { name: "Aura Yoga & Wellness", desc: "Yoga booking site with online session checkout payment systems.", image: "/aura-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Gym Solution"
      subtitle="Complete fitness club management ERPs, client workout apps, trainer schedules, and member billing portals."
      category="Gym"
      bgImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={GymDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Digitalize Your Fitness Studio?"
    />
  );
};

export default GymSolution;
