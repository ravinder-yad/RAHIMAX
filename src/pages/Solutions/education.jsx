import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { BookOpen, UserCheck, GraduationCap, CheckCircle } from 'lucide-react';

const EducationDemo = () => {
  const [selectedStudent, setSelectedStudent] = useState('Rahul Sharma');
  const [generated, setGenerated] = useState(false);

  const students = {
    'Rahul Sharma': { roll: 'A-102', grades: { Maths: 'A+', Science: 'A', English: 'B+', Computers: 'A+' }, gpa: '9.4/10' },
    'Priya Verma': { roll: 'A-145', grades: { Maths: 'A', Science: 'A+', English: 'A+', Computers: 'A' }, gpa: '9.6/10' },
    'Amit Patel': { roll: 'A-189', grades: { Maths: 'B', Science: 'B+', English: 'A', Computers: 'A+' }, gpa: '8.8/10' }
  };

  const current = students[selectedStudent];

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-secondary" />
        <span>Student Report Card Generator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-text-gray uppercase mb-1">Select Student</label>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(students).map((s, idx) => (
              <button 
                key={idx}
                onClick={() => { setSelectedStudent(s); setGenerated(false); }}
                className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                  selectedStudent === s 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface hover:bg-slate-50 text-text-gray'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setGenerated(true)}
          className="w-full bg-secondary hover:bg-secondary/95 text-white py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Compile & Generate Report Card</span>
        </button>

        {generated && (
          <div className="p-5 bg-white dark:bg-zinc-950 border border-border-light rounded-2xl shadow-lg relative overflow-hidden animate-scale-up">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
            <h4 className="font-heading font-black text-xs text-primary border-b pb-2 flex justify-between">
              <span>OFFICIAL TRANSCRIPT</span>
              <span className="text-secondary">{current.roll}</span>
            </h4>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between text-text-gray">
                <span>Student Name:</span>
                <span className="text-primary font-bold">{selectedStudent}</span>
              </div>
              <div className="border-t border-dashed my-2 pt-2 space-y-1">
                {Object.entries(current.grades).map(([subj, grade]) => (
                  <div key={subj} className="flex justify-between">
                    <span className="text-text-gray">{subj}:</span>
                    <span className="text-primary font-bold">{grade}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between items-center text-sm font-extrabold">
                <span className="text-primary">Cumulative GPA:</span>
                <span className="text-secondary">{current.gpa}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSolution = () => {
  const features = [
    "School & Academy Website Layouts",
    "Central Student Records Databases",
    "Fees Collection & Invoicing Modules",
    "Parent-Teacher Messaging Systems",
    "Digital Exam Marks Generators",
    "Library Book Reservation Ledger",
    "Biometric Attendance Tracker Hooks",
    "Staff Payroll & HR Management"
  ];

  const benefits = [
    "Reduce institutional paperwork by 90%",
    "Real-time attendance & fee SMS alerts to parents",
    "Unified multi-branch student telemetry",
    "Complete compliance with education database norms"
  ];

  const faqs = [
    { q: "Can parent logins be tracked separately?", a: "Yes. Our systems feature dual-login access with separate dashboards customized for students/parents and teachers/admins." },
    { q: "Do you support online payment gateways?", a: "Absolutely. We integrate local APIs (Razorpay, Paytm) and international gateways (Stripe) for direct fee transactions." }
  ];

  const portfolio = [
    { name: "Zenith Academy", desc: "ERP portal automating attendance and fee receipts for 5k students.", image: "/zenith-mock.jpg" },
    { name: "Oakridge International", desc: "Cloud student-parent communication panel with push alerts.", image: "/apex-mock.jpg" },
    { name: "Beacon Prep Analytics", desc: "Exam report card generator and automatic marksheet telemetry.", image: "/lens-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Education Solution"
      subtitle="Complete School & College ERP portals, student information databases, and online classroom portals."
      category="Education"
      bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={EducationDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Looking to Automate Your School Administration?"
    />
  );
};

export default EducationSolution;
