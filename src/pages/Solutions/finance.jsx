import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Coins, Percent, Calendar } from 'lucide-react';

const FinanceDemo = () => {
  const [amount, setAmount] = useState(100000); // ₹1 Lakh
  const [rate, setRate] = useState(10); // 10%
  const [tenure, setTenure] = useState(12); // 12 Months

  const calculateEmi = () => {
    const r = rate / 1200; // monthly interest rate
    const n = tenure; // monthly tenure
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emi = calculateEmi();
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - amount;

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm font-semibold">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Coins className="w-5 h-5 text-secondary" />
        <span>EMI Loan Repayment Calculator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Loan Amount: ₹{amount.toLocaleString('en-IN')}</label>
          <input 
            type="range" 
            min="10000" 
            max="1000000" 
            step="10000"
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-secondary mt-3"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Annual Rate: {rate}%</label>
            <input 
              type="range" 
              min="5" 
              max="20" 
              step="0.5"
              value={rate} 
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-secondary mt-3"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-[10px] font-extrabold text-text-gray uppercase mb-1">Tenure: {tenure} Months</label>
            <input 
              type="range" 
              min="6" 
              max="60" 
              step="6"
              value={tenure} 
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-secondary mt-3"
            />
          </div>
        </div>

        <div className="border-t pt-4 space-y-2 text-xs font-semibold">
          <div className="flex justify-between text-text-gray">
            <span>Interest Amount:</span>
            <span>₹{totalInterest.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-text-gray">
            <span>Total Repayment:</span>
            <span>₹{totalPayable.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-extrabold text-primary border-t pt-2 border-dashed">
            <span>Monthly EMI Payment:</span>
            <span className="text-secondary font-heading font-black text-lg">₹{emi.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FinanceSolution = () => {
  const features = [
    "Loan & EMI Calculators Tools",
    "Secure Digital KYC Verification Panels",
    "Transactions Ledger Databases",
    "Corporate Accounting Dashboards",
    "Razorpay / Stripe Payments Syncing",
    "Monthly PDF Invoices Generators",
    "Role-Based Accountant Access Logs",
    "Secure Encrypted Data Lockers"
  ];

  const benefits = [
    "99.9% database transaction logs reliability",
    "Reduce manual bookkeeping errors by 80%",
    "Fast calculations rendering in under 100ms",
    "Compliance with standard digital finance protection norms"
  ];

  const faqs = [
    { q: "Is user financial data encrypted?", a: "Yes. All database connections utilize high-grade SHA-256 SSL encryptions, making sure logs are completely private." },
    { q: "Can we support dynamic interest curves?", a: "Absolutely. We build customized logic models tracking specific corporate loans, compounds, or EMI formulas." }
  ];

  const portfolio = [
    { name: "FinTrack Portal", desc: "Corporate expense dashboard organizing budget categories and PDFs.", image: "/lens-mock.jpg" },
    { name: "Apex Pay Wallet", desc: "Mobile wallet client mockup utilizing secure double-signature validation.", image: "/prime-mock.jpg" },
    { name: "Vanguard Mortgages", desc: "Interactive mortgage calculator site with automated interest telemetry.", image: "/skyline-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Finance Solution"
      subtitle="Complete custom accounting dashboards, secure KYC portals, transaction ledgers, and interactive EMI calculators."
      category="Finance"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={FinanceDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Need a High-Grade Financial Dashboard?"
    />
  );
};

export default FinanceSolution;
