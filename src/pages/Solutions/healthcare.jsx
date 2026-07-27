import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Calendar, User, Clock, CheckCircle } from 'lucide-react';

const HealthcareDemo = () => {
  const [selectedDoc, setSelectedDoc] = useState('Dr. Jane Roy (Cardiology)');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [booked, setBooked] = useState(false);

  const docs = [
    { name: 'Dr. Jane Roy', specialty: 'Cardiology', available: '10:30 AM, 02:00 PM' },
    { name: 'Dr. Sam Ali', specialty: 'Pediatrics', available: '09:00 AM, 11:30 AM' },
    { name: 'Dr. Priya Nair', specialty: 'Neurology', available: '01:15 PM, 04:30 PM' }
  ];

  const times = ['09:00 AM', '10:30 AM', '11:30 AM', '01:15 PM', '02:00 PM', '04:30 PM'];

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 5000);
  };

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <User className="w-4 h-4 text-secondary" />
        <span>Mini Patient Portal (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-text-gray uppercase mb-1">Select Specialist</label>
          <div className="grid grid-cols-1 gap-2">
            {docs.map((doc, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedDoc(`${doc.name} (${doc.specialty})`)}
                className={`p-3 rounded-xl border text-left font-semibold flex justify-between items-center transition-all ${
                  selectedDoc.includes(doc.name) 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                <span>{doc.name} - {doc.specialty}</span>
                <span className="text-[9px] uppercase tracking-wider bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">Available</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-text-gray uppercase mb-1">Select Appointment Slot</label>
          <div className="grid grid-cols-3 gap-2">
            {times.map((t, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedTime(t)}
                className={`py-2 rounded-lg border text-center font-bold transition-all ${
                  selectedTime === t 
                    ? 'border-secondary bg-secondary text-white' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleBook}
          className="w-full bg-secondary hover:bg-secondary/95 text-white py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Instant Appointment</span>
        </button>

        {booked && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl flex items-start gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Appointment Confirmed!</span>
              <span className="text-[10px] text-emerald-500/80 leading-normal block mt-1">
                Your slot is reserved with <strong>{selectedDoc}</strong> at <strong>{selectedTime}</strong>. 
                This is a simulation of the automated WhatsApp scheduling module.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HealthcareSolution = () => {
  const features = [
    "Integrated Hospital ERP Modules",
    "Real-time Doctor Appointment Schedulers",
    "Digital Prescriptions (E-Rx) Layouts",
    "Patient Medical Reports Portal",
    "Online Checkout Payments Gates",
    "Live ICU Queue Telemetry",
    "Medicine Stock Batch Inventory",
    "Billing & Insurance Claims Logs"
  ];

  const benefits = [
    "Reduce patient lobby queue wait times by 65%",
    "Automate doctors calendar bookings and alerts",
    "HIPAA compliant secure database architecture",
    "Provide patients 24/7 access to medical reports"
  ];

  const faqs = [
    { q: "Is the patient portal HIPAA compliant?", a: "Yes. All healthcare software we build incorporates end-to-end database encryption and secure JWT tokens meeting standard data storage rules." },
    { q: "Can we integrate this with pharmacy inventory?", a: "Absolutely. Our solutions support connecting medical billing to pharmacy batch counts automatically." }
  ];

  const portfolio = [
    { name: "Apex Medicare Portal", desc: "Hospital web portal with online appointment booking and records.", image: "/lens-mock.jpg" },
    { name: "HeartCare Clinique", desc: "Cardiac care booking panel with live consultation video links.", image: "/prime-mock.jpg" },
    { name: "DentalCare Calendar", desc: "Real-time doctor calendar slot selector and automated WhatsApp alerts.", image: "/skyline-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Healthcare Solution"
      subtitle="Complete hospital ERP, medical calendars, patient records portals, and doctor scheduling software."
      category="Healthcare"
      bgImage="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={HealthcareDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Looking for a Secure Healthcare Portal?"
    />
  );
};

export default HealthcareSolution;
