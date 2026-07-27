import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Factory, AlertTriangle, CheckCircle } from 'lucide-react';

const ManufacturingDemo = () => {
  const [materials, setMaterials] = useState([
    { name: 'Steel Sheets (Batch A)', qty: 80, minNeeded: 100 },
    { name: 'Copper Wiring (Batch B)', qty: 250, minNeeded: 150 },
    { name: 'Industrial Paint (Batch C)', qty: 40, minNeeded: 80 }
  ]);

  const restock = (idx) => {
    const updated = [...materials];
    updated[idx].qty += 100;
    setMaterials(updated);
  };

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Factory className="w-5 h-5 text-secondary" />
        <span>Warehouse Stock Auditor Panel (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Raw Materials Stock Levels</label>
        <div className="space-y-3">
          {materials.map((m, idx) => {
            const isLow = m.qty < m.minNeeded;
            return (
              <div key={idx} className="p-3 bg-bg-surface border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/20 transition-all">
                <div>
                  <span className="font-bold text-primary block">{m.name}</span>
                  <span className="text-[10px] text-text-gray mt-1 block">Current Stock: {m.qty} units (Min: {m.minNeeded})</span>
                </div>
                <div className="flex items-center gap-3">
                  {isLow && (
                    <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-red-500/10 text-red-500 px-2 py-0.5 rounded">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Low</span>
                    </span>
                  )}
                  <button 
                    onClick={() => restock(idx)}
                    className="bg-secondary text-white font-bold px-3 py-1.5 rounded-lg text-[9px] uppercase hover:bg-secondary/90 transition-all cursor-pointer"
                  >
                    + Restock
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ManufacturingSolution = () => {
  const features = [
    "Raw Materials Inventory Control",
    "Production Batch Logs Trackers",
    "Warehouse Bin Locations Mapping",
    "Staff Shifts Biometric Scheduling",
    "Supplier Purchase Orders Ledger",
    "Automatic Low Stock Warnings",
    "Machinery Maintenance Alerts",
    "Quality Control Inspection Boards"
  ];

  const benefits = [
    "Reduce factory material stockouts by 80%",
    "Paperless raw materials intake and batch logging",
    "95% accuracy in inventory location lookups",
    "Automate supplier purchase order creations"
  ];

  const faqs = [
    { q: "Can we support barcode scanning?", a: "Yes. We design mobile web scanner hooks allowing workers to scan inventory barcodes directly using their phone cameras." },
    { q: "Is multiple warehouse tracking supported?", a: "Absolutely. Our ERP dashboards support tracking inventory quantities across different cities and physical warehouses." }
  ];

  const portfolio = [
    { name: "Vanguard Steel ERP", desc: "Heavy metals manufacturing ledger tracking raw steel batches.", image: "/skyline-mock.jpg" },
    { name: "Apex Supply Chain", desc: "Warehouse inventory routing calendar syncing multi-vendor shipments.", image: "/lens-mock.jpg" },
    { name: "Orion Pack Dashboard", desc: "Packaging line telemetry system flagging QA errors in real-time.", image: "/prime-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Manufacturing Solution"
      subtitle="Complete industrial ERP software, warehouse inventory trackers, production logs, and logistics workflows."
      category="Manufacturing"
      bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={ManufacturingDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Looking to Automate Your Factory Operations?"
    />
  );
};

export default ManufacturingSolution;
