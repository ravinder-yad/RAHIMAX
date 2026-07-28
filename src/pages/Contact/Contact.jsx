import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, UploadCloud, ChevronRight, ChevronLeft, Calendar, DollarSign, Laptop, Star, Award, Heart, CheckCircle2, PhoneCall, Mail, MapPin, Trash2, Send, FileText, Download, ArrowLeft, Info, ExternalLink, Sparkles
} from 'lucide-react';

const Contact = () => {
  // --- Form State ---
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectName: '',
    projectDesc: '',
    industry: '',
    features: [],
    budget: '',
    timeline: '',
    designPref: '',
    files: [],
    fullName: '',
    compName: '',
    email: '',
    phone: '',
    whatsApp: '',
    country: '',
    city: '',
    website: '',
    commPref: '',
    extraNotes: ''
  });
  
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);

  // --- Auto-Save Draft to localStorage ---
  useEffect(() => {
    const savedDraft = localStorage.getItem('rahimax_quote_draft');
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
      } catch (e) {
        console.error("Failed to parse saved quote draft", e);
      }
    }
  }, []);

  const saveDraft = (data) => {
    localStorage.setItem('rahimax_quote_draft', JSON.stringify(data));
  };

  const updateField = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    saveDraft(newData);
    // Clear error for that field
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleFeature = (feature) => {
    let newFeatures = [...formData.features];
    if (newFeatures.includes(feature)) {
      newFeatures = newFeatures.filter(f => f !== feature);
    } else {
      newFeatures.push(feature);
    }
    updateField('features', newFeatures);
  };

  // --- Estimator & AI Planner Logic ---
  const calculatePriceAndSpecs = () => {
    let basePrice = 25000;
    let durationWeeks = 2;
    let stack = "React.js + Tailwind CSS + Node.js + MongoDB + Express + AWS";

    // Project type calculations
    switch (formData.projectType) {
      case "Business Website":
        basePrice = 25000; durationWeeks = 2;
        break;
      case "E-Commerce Website":
        basePrice = 60000; durationWeeks = 4;
        stack = "React.js + Node.js + MongoDB + Stripe Webhooks + AWS";
        break;
      case "Mobile App":
        basePrice = 120000; durationWeeks = 6;
        stack = "React Native / Flutter + Express Node + MongoDB + Push Notifications";
        break;
      case "Custom Software":
        basePrice = 150000; durationWeeks = 8;
        stack = "React + Next.js + Python FastAPI + Docker + PostgreSQL";
        break;
      case "UI/UX Design":
        basePrice = 15000; durationWeeks = 2;
        stack = "Figma High-Fidelity Canvas + Adobe CC Suite + Design Tokens System";
        break;
      case "Landing Page":
        basePrice = 12000; durationWeeks = 1;
        break;
      case "School ERP":
        basePrice = 180000; durationWeeks = 10;
        stack = "React.js + Tailwind + Node.js + PostgreSQL + AWS RDS + PM2";
        break;
      case "Hospital ERP":
        basePrice = 220000; durationWeeks = 12;
        stack = "React.js + Next.js + Python Django + PostgreSQL + AWS HIPAA Server";
        break;
      case "CRM":
        basePrice = 140000; durationWeeks = 8;
        stack = "Next.js + Tailwind + Node.js + MongoDB + Redis Cache";
        break;
      case "Dashboard":
        basePrice = 50000; durationWeeks = 4;
        break;
      case "AI Solution":
        basePrice = 250000; durationWeeks = 10;
        stack = "React.js + Python FastAPI + PyTorch / OpenAI + Docker + AWS Sagemaker";
        break;
      default:
        basePrice = 30000; durationWeeks = 3;
    }

    // Features additional calculations
    const featurePrices = {
      "User Login": 5000,
      "Admin Panel": 8000,
      "Payment Gateway": 10000,
      "Booking System": 12000,
      "Blog": 4000,
      "CMS": 8000,
      "Chat": 15000,
      "Notifications": 6000,
      "Analytics": 8000,
      "Reports": 7000,
      "API Integration": 12000,
      "Email / OTP": 6000,
      "Dashboard": 10000,
      "Dark Mode": 3000,
      "Multi Language": 7000
    };

    formData.features.forEach(f => {
      if (featurePrices[f]) {
        basePrice += featurePrices[f];
        durationWeeks += 0.5;
      }
    });

    // Timeline adjustment
    if (formData.timeline === "Urgent") {
      basePrice = Math.round(basePrice * 1.25);
      durationWeeks = Math.max(1, Math.round(durationWeeks / 1.5));
    } else if (formData.timeline === "Flexible") {
      basePrice = Math.round(basePrice * 0.9);
    }

    return {
      price: basePrice,
      duration: Math.round(durationWeeks),
      stack
    };
  };

  const { price, duration, stack } = calculatePriceAndSpecs();

  // --- Step Validation ---
  const validateStep = () => {
    let stepErrors = {};
    if (step === 1) {
      if (!formData.projectType) {
        stepErrors.projectType = "Please select a project type to proceed.";
      }
    }
    if (step === 2) {
      if (!formData.projectName || formData.projectName.trim().length < 3) {
        stepErrors.projectName = "Project name must be at least 3 characters.";
      }
      if (!formData.projectDesc || formData.projectDesc.trim().length < 100) {
        stepErrors.projectDesc = `Description must be at least 100 characters. Current length: ${formData.projectDesc.length}`;
      }
      if (!formData.industry) {
        stepErrors.industry = "Please select your business industry.";
      }
    }
    if (step === 3) {
      if (!formData.budget) {
        stepErrors.budget = "Please select an estimated budget range.";
      }
      if (!formData.timeline) {
        stepErrors.timeline = "Please select your preferred timeline.";
      }
      if (!formData.designPref) {
        stepErrors.designPref = "Please select a design preference.";
      }
    }
    if (step === 4) {
      if (!formData.fullName || formData.fullName.trim().length < 2) {
        stepErrors.fullName = "Full name is required.";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        stepErrors.email = "Please enter a valid email address.";
      }
      if (!formData.phone || formData.phone.trim().length < 10) {
        stepErrors.phone = "Valid phone number is required (min 10 digits).";
      }
      if (!formData.commPref) {
        stepErrors.commPref = "Please select a preferred communication channel.";
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  // --- Drag & Drop Upload Handlers ---
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addMockFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      addMockFiles(e.target.files);
    }
  };

  const addMockFiles = (uploadedFiles) => {
    const fileList = Array.from(uploadedFiles).map(file => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
    }));
    updateField('files', [...formData.files, ...fileList]);
  };

  const removeFile = (idx) => {
    const nextFiles = formData.files.filter((_, i) => i !== idx);
    updateField('files', nextFiles);
  };

  // --- Submit Handler ---
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const uniqueId = `RHX-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    setSubmittedId(uniqueId);
    setIsSubmitting(false);
    localStorage.removeItem('rahimax_quote_draft'); // Clean draft on success
    setStep(6); // Success Step
  };

  // --- Simulated Download PDF ---
  const downloadSimulatedPDF = () => {
    const content = `
========================================
       RAHIMAX DIGITAL PROPOSAL
========================================
Project ID: ${submittedId || 'RHX-2026-001'}
Client Name: ${formData.fullName}
Company: ${formData.compName || 'N/A'}
Contact Email: ${formData.email}
Contact Phone: ${formData.phone}
WhatsApp: ${formData.whatsApp || 'N/A'}
----------------------------------------
Project Type: ${formData.projectType}
Project Name: ${formData.projectName}
Industry: ${formData.industry}
Description: ${formData.projectDesc}
----------------------------------------
Selected Features:
${formData.features.map(f => `- ${f}`).join('\n') || 'None Selected'}
----------------------------------------
Budget Range: ${formData.budget}
Timeline Scope: ${formData.timeline}
Design Style: ${formData.designPref}
----------------------------------------
AI Suggested Stack: ${stack}
Estimated Timeline: ${duration} Weeks
Calculated Price: ₹${price.toLocaleString('en-IN')}
========================================
    We will reach out in 24 hours!
========================================
    `;
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Rahimax-Proposal-${submittedId || 'RHX-2026-001'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <Helmet>
        <title>Get a Quote | Custom Software & Web Design - Rahimax</title>
        <meta name="description" content="Request a detailed project proposal in 24 hours. Connect with Ravinder, Himesh and Mayant to design hospital systems, school management softwares or headless Shopify stores." />
      </Helmet>

      {/* ① Hero Section */}
      <section className="pt-32 pb-16 bg-bg-light dark:bg-slate-950 px-6 border-b border-border-light dark:border-zinc-850 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block border border-secondary/20 shadow-sm">
              Instant Quote Planner
            </span>
            <h1 className="text-primary dark:text-white font-heading font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">Next Digital Product</span>
            </h1>
            <p className="text-text-gray dark:text-zinc-400 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Tell us about your project. We'll review your requirements and send you a detailed proposal within 24 hours.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:support@rahimax.com"
                className="bg-primary hover:bg-primary/95 text-white dark:bg-white dark:text-primary dark:hover:bg-slate-50 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <PhoneCall className="w-4 h-4" /> Book a Call
              </a>
              <a 
                href="https://wa.me/919876543210"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c35e] text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Collage mockup graphic */}
            <div className="bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-border-light dark:border-zinc-800 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                </div>
                <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">rhx_dashboard.dev</span>
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-slate-100 dark:bg-zinc-800 rounded-lg w-3/4 animate-pulse" />
                <div className="h-24 bg-slate-100 dark:bg-zinc-800 rounded-lg w-full flex items-center justify-center text-[10px] font-body text-zinc-550 dark:text-zinc-400 font-bold">
                  [ Floating Dynamic Sandbox Editor ]
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-blue-500/10 text-secondary border border-secondary/20 rounded-lg flex items-center justify-center text-[9px] font-extrabold uppercase">React 19</div>
                  <div className="h-8 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-lg flex items-center justify-center text-[9px] font-extrabold uppercase">FastAPI</div>
                  <div className="h-8 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg flex items-center justify-center text-[9px] font-extrabold uppercase">MongoDB</div>
                </div>
              </div>
            </div>
            
            {/* Absolute floating cards */}
            <div className="absolute -top-6 -right-6 bg-secondary text-white font-bold rounded-2xl p-4 shadow-lg flex items-center gap-2.5 animate-bounce">
              <Award className="w-6 h-6 text-white" />
              <div>
                <span className="block text-xs uppercase tracking-wider font-extrabold">Auto Estimator</span>
                <span className="block text-[10px] text-blue-100 mt-0.5">Live price tracking</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800 rounded-2xl p-3.5 shadow-xl flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              <span className="text-[10px] text-primary dark:text-white font-bold uppercase tracking-wider">Ready to deploy</span>
            </div>
          </div>

        </div>
      </section>

      {/* ② Main Form Container */}
      <section className="py-20 px-6 bg-bg-surface dark:bg-slate-900 border-b border-border-light dark:border-zinc-850">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Quote Form Steps (65% width) */}
            <div className="lg:col-span-8 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[32px] p-6 md:p-10 shadow-lg text-left">
              
              {/* ② Progress Stepper */}
              {step <= 5 && (
                <div className="mb-10">
                  <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-gray dark:text-zinc-500 mb-4">
                    <span className={step >= 1 ? "text-secondary font-black" : ""}>① Project</span>
                    <span className={step >= 2 ? "text-secondary font-black" : ""}>② Details</span>
                    <span className={step >= 3 ? "text-secondary font-black" : ""}>③ Setup</span>
                    <span className={step >= 4 ? "text-secondary font-black" : ""}>④ Contact</span>
                    <span className={step >= 5 ? "text-secondary font-black" : ""}>⑤ Review</span>
                  </div>
                  {/* Progress bar background */}
                  <div className="h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full w-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary transition-all duration-300 rounded-full"
                      style={{ width: `${(step / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Step Forms */}
              <form onSubmit={handleSubmitForm}>
                
                {/* 3️⃣ STEP 1: PROJECT TYPE */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-black text-lg text-primary dark:text-white mb-2">What project do you need built?</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed">Choose the primary framework type for your upcoming project. Select one card below.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { title: "Business Website", icon: "🌐" },
                        { title: "E-Commerce Website", icon: "🛒" },
                        { title: "Mobile App", icon: "📱" },
                        { title: "Custom Software", icon: "⚙" },
                        { title: "UI/UX Design", icon: "🎨" },
                        { title: "Landing Page", icon: "🚀" },
                        { title: "School ERP", icon: "🏫" },
                        { title: "Hospital ERP", icon: "🏥" },
                        { title: "CRM", icon: "🏢" },
                        { title: "Dashboard", icon: "📊" },
                        { title: "AI Solution", icon: "🤖" },
                        { title: "Other", icon: "➕" }
                      ].map((item, idx) => {
                        const isSelected = formData.projectType === item.title;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => updateField('projectType', item.title)}
                            className={`p-5 rounded-2xl border text-left flex flex-col justify-between h-[110px] transition-all cursor-pointer ${
                              isSelected 
                                ? 'bg-secondary/5 border-secondary text-secondary dark:border-blue-400 dark:text-blue-400 shadow-md ring-1 ring-secondary/20' 
                                : 'bg-bg-card border-border-light dark:border-zinc-800/80 hover:border-secondary/30 dark:hover:border-zinc-700'
                            }`}
                          >
                            <span className="text-xl block">{item.icon}</span>
                            <span className="font-heading font-extrabold text-[11px] uppercase tracking-wide text-primary dark:text-white mt-4 block">{item.title}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.projectType && (
                      <p className="text-red-500 text-xs font-bold mt-2">{errors.projectType}</p>
                    )}
                  </div>
                )}

                {/* 4️⃣ STEP 2: PROJECT DETAILS */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-black text-lg text-primary dark:text-white mb-2">Project Blueprint Details</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed font-medium">Define your project parameters, description narratives, and required modules checkboxes.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Project Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Project Title / Name</label>
                        <input
                          type="text"
                          placeholder="Example: Rahimax Hospital ERP"
                          value={formData.projectName}
                          onChange={(e) => updateField('projectName', e.target.value)}
                          className={`w-full bg-bg-light dark:bg-zinc-800 border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white ${
                            errors.projectName ? 'border-red-500' : 'border-border-light dark:border-zinc-755'
                          }`}
                        />
                        {errors.projectName && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.projectName}</span>}
                      </div>

                      {/* Project Description */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider">Describe Your Project Requirements</label>
                          <span className={`text-[9px] font-bold ${formData.projectDesc.length >= 100 ? 'text-emerald-500' : 'text-red-500'}`}>
                            {formData.projectDesc.length}/100 Minimum characters
                          </span>
                        </div>
                        <textarea
                          rows="4"
                          placeholder="Please provide details about target users, specific workflows, and operational goals (Minimum 100 chars)..."
                          value={formData.projectDesc}
                          onChange={(e) => updateField('projectDesc', e.target.value)}
                          className={`w-full bg-bg-light dark:bg-zinc-800 border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white leading-relaxed ${
                            errors.projectDesc ? 'border-red-500' : 'border-border-light dark:border-zinc-755'
                          }`}
                        />
                        {errors.projectDesc && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.projectDesc}</span>}
                      </div>

                      {/* Industry Selector */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Business Industry</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => updateField('industry', e.target.value)}
                          className={`w-full bg-bg-light dark:bg-zinc-800 border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white ${
                            errors.industry ? 'border-red-500' : 'border-border-light dark:border-zinc-755'
                          }`}
                        >
                          <option value="">Select industry category...</option>
                          {["Healthcare", "Education", "Restaurant", "Real Estate", "Finance", "Gym", "Travel", "NGO", "Manufacturing", "Startup", "Other"].map(ind => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                        {errors.industry && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.industry}</span>}
                      </div>

                      {/* Required Features Checkbox Grid */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-3">Required Modules & Features</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            "User Login", "Admin Panel", "Payment Gateway", "Booking System",
                            "Blog", "CMS", "Chat", "Notifications",
                            "Analytics", "Reports", "API Integration", "Email / OTP",
                            "Dashboard", "Dark Mode", "Multi Language"
                          ].map(f => {
                            const isChecked = formData.features.includes(f);
                            return (
                              <button
                                key={f}
                                type="button"
                                onClick={() => toggleFeature(f)}
                                className={`p-2.5 rounded-lg border text-center text-[10px] font-extrabold uppercase tracking-wide transition-all cursor-pointer ${
                                  isChecked 
                                    ? 'bg-secondary/15 border-secondary text-secondary dark:border-blue-400 dark:text-blue-400' 
                                    : 'bg-bg-light border-border-light dark:bg-zinc-800 dark:border-zinc-750 text-text-gray dark:text-zinc-300'
                                }`}
                              >
                                {f}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 5️⃣ STEP 3: BUDGET, TIMELINE, DESIGN & UPLOADS */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-black text-lg text-primary dark:text-white mb-2">Budget, Timeline & Uploads</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed font-medium">Select target budgets, deadline metrics, designs preferences, and upload references.</p>
                    </div>

                    <div className="space-y-5">
                      
                      {/* Budget grid */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Target Budget Range</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {["₹10K–25K", "₹25K–50K", "₹50K–1L", "₹1L–5L", "₹5L+", "Custom"].map(b => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => updateField('budget', b)}
                              className={`py-3 px-4 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                                formData.budget === b 
                                  ? 'bg-secondary/10 border-secondary text-secondary' 
                                  : 'bg-bg-light border-border-light dark:bg-zinc-850 dark:border-zinc-800 text-text-gray dark:text-zinc-300'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                        {errors.budget && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.budget}</span>}
                      </div>

                      {/* Timeline grid */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Preferred Delivery Timeline</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {["Urgent", "1 Week", "2 Weeks", "1 Month", "2 Months", "Flexible"].map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => updateField('timeline', t)}
                              className={`py-3 px-4 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                                formData.timeline === t 
                                  ? 'bg-secondary/10 border-secondary text-secondary' 
                                  : 'bg-bg-light border-border-light dark:bg-zinc-850 dark:border-zinc-800 text-text-gray dark:text-zinc-300'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.timeline && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.timeline}</span>}
                      </div>

                      {/* Design Preference */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Design Preference</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {["Minimal", "Corporate", "Modern", "Luxury", "Dark UI", "Light UI", "Glass UI", "Apple Style", "Creative", "Custom"].map(dp => (
                            <button
                              key={dp}
                              type="button"
                              onClick={() => updateField('designPref', dp)}
                              className={`py-2.5 px-3 rounded-lg border text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                                formData.designPref === dp 
                                  ? 'bg-secondary/15 border-secondary text-secondary' 
                                  : 'bg-bg-light border-border-light dark:bg-zinc-850 dark:bg-zinc-800 text-text-gray dark:text-zinc-300'
                              }`}
                            >
                              {dp}
                            </button>
                          ))}
                        </div>
                        {errors.designPref && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.designPref}</span>}
                      </div>

                      {/* Drag & Drop File Upload */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Upload Reference Files (Logo, wireframes, specs)</label>
                        <div 
                          className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all relative ${
                            dragActive ? 'border-secondary bg-secondary/5' : 'border-border-light dark:border-zinc-800'
                          }`}
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                        >
                          <input 
                            type="file" 
                            id="file-upload" 
                            multiple 
                            className="hidden" 
                            onChange={handleFileInput}
                          />
                          <UploadCloud className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                          <label htmlFor="file-upload" className="cursor-pointer text-xs font-bold text-secondary dark:text-blue-400 block hover:underline">
                            Drag & Drop files or click to upload
                          </label>
                          <span className="text-[10px] text-zinc-550 dark:text-zinc-500 block mt-1">Supports PDF, JPG, PNG, DOCX, FIG (Max 5MB each)</span>
                        </div>

                        {/* List uploaded files */}
                        {formData.files.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {formData.files.map((file, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-zinc-850/60 p-2.5 rounded-lg border border-border-light dark:border-zinc-800">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
                                  <span className="text-[10px] font-bold text-primary dark:text-white line-clamp-1">{file.name}</span>
                                  <span className="text-[9px] text-zinc-550 dark:text-zinc-500">({file.size})</span>
                                </div>
                                <button 
                                  type="button" 
                                  onClick={() => removeFile(idx)} 
                                  className="text-red-500 hover:text-red-700 transition-colors p-1"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}

                {/* 9️⃣ STEP 4: CONTACT INFORMATION & DETAILS */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-black text-lg text-primary dark:text-white mb-2">Contact Details & Communication</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed font-medium">Provide channels for sending the customized project proposal report.</p>
                    </div>

                    <div className="space-y-4">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Full Name</label>
                          <input
                            type="text"
                            placeholder="Vikram Malhotra"
                            value={formData.fullName}
                            onChange={(e) => updateField('fullName', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                          {errors.fullName && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.fullName}</span>}
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Company Name</label>
                          <input
                            type="text"
                            placeholder="Apex Logistics Ltd"
                            value={formData.compName}
                            onChange={(e) => updateField('compName', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Email Address</label>
                          <input
                            type="email"
                            placeholder="vikram@apex.com"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                          {errors.email && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.email}</span>}
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765-43210"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                          {errors.phone && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.phone}</span>}
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">WhatsApp Number (Optional)</label>
                          <input
                            type="tel"
                            placeholder="Same as phone"
                            value={formData.whatsApp}
                            onChange={(e) => updateField('whatsApp', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Country</label>
                          <input
                            type="text"
                            placeholder="India"
                            value={formData.country}
                            onChange={(e) => updateField('country', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">City</label>
                          <input
                            type="text"
                            placeholder="Noida"
                            value={formData.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Website URL (Optional)</label>
                          <input
                            type="url"
                            placeholder="https://apex.com"
                            value={formData.website}
                            onChange={(e) => updateField('website', e.target.value)}
                            className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white"
                          />
                        </div>
                      </div>

                      {/* Preferred Communication */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Preferred Communication Channel</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {["Email", "WhatsApp", "Phone Call", "Google Meet", "Zoom"].map(c => (
                            <button
                              key={c}
                              type="button"
                              onClick={() => updateField('commPref', c)}
                              className={`py-2.5 px-3 rounded-lg border text-[10px] font-extrabold uppercase tracking-wide transition-all cursor-pointer ${
                                formData.commPref === c 
                                  ? 'bg-secondary/15 border-secondary text-secondary' 
                                  : 'bg-bg-light border-border-light dark:bg-zinc-855 dark:border-zinc-800 text-text-gray dark:text-zinc-300'
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                        {errors.commPref && <span className="text-red-500 text-[10px] font-bold mt-1 block">{errors.commPref}</span>}
                      </div>

                      {/* Extra Notes */}
                      <div>
                        <label className="block text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider mb-2">Anything else? (Extra Notes)</label>
                        <textarea
                          rows="3"
                          placeholder="Provide specific notes regarding integrations, migration of files, host setups or anything else..."
                          value={formData.extraNotes}
                          onChange={(e) => updateField('extraNotes', e.target.value)}
                          className="w-full bg-bg-light dark:bg-zinc-800 border border-border-light dark:border-zinc-750 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-secondary/40 text-xs font-medium text-primary dark:text-white leading-relaxed"
                        />
                      </div>

                    </div>
                  </div>
                )}

                {/* 🔟 STEP 5: REVIEW ALL PARAMETERS */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-black text-lg text-primary dark:text-white mb-2">Confirm & Submit Your Quote</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed font-medium">Verify your selected specs summary details before final submissions dispatch.</p>
                    </div>

                    <div className="bg-bg-light dark:bg-zinc-850/60 border border-border-light dark:border-zinc-800 p-6 rounded-[24px] space-y-4 text-xs font-semibold text-text-gray dark:text-zinc-350">
                      
                      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border-light dark:border-zinc-800">
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Project Type</span>
                          <span className="font-heading font-black text-primary dark:text-white text-sm block mt-1">{formData.projectType || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Project Name</span>
                          <span className="font-heading font-black text-primary dark:text-white text-sm block mt-1">{formData.projectName || 'N/A'}</span>
                        </div>
                      </div>

                      <div className="pb-4 border-b border-border-light dark:border-zinc-800">
                        <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Project Requirements Outline</span>
                        <p className="font-body text-xs text-primary dark:text-white leading-relaxed mt-1">{formData.projectDesc || 'N/A'}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border-light dark:border-zinc-800">
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Target Budget</span>
                          <span className="font-heading font-bold text-primary dark:text-white block mt-1">{formData.budget || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Target Timeline</span>
                          <span className="font-heading font-bold text-primary dark:text-white block mt-1">{formData.timeline || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Design Preference</span>
                          <span className="font-heading font-bold text-primary dark:text-white block mt-1">{formData.designPref || 'N/A'}</span>
                        </div>
                      </div>

                      <div className="pb-4 border-b border-border-light dark:border-zinc-800">
                        <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Selected Features & Modules</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {formData.features.map(f => (
                            <span key={f} className="bg-white border border-border-light dark:bg-zinc-800 dark:border-zinc-700 text-[10px] font-bold uppercase px-2 py-1 rounded">{f}</span>
                          )) || 'No modules selected'}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border-light dark:border-zinc-800">
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Contact Person</span>
                          <span className="font-heading font-bold text-primary dark:text-white block mt-1">{formData.fullName} ({formData.compName || 'Independent'})</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Contact Details</span>
                          <span className="font-heading font-bold text-primary dark:text-white block mt-1">{formData.email} | {formData.phone}</span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Uploaded Reference Specs</span>
                        <span className="block text-primary dark:text-white mt-1">
                          {formData.files.length > 0 ? `${formData.files.length} Files attached` : 'No file references attached'}
                        </span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ⑬ SUCCESS PAGE */}
                {step === 6 && (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl shadow-md border border-emerald-500/20">
                      🎉
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-2xl text-primary dark:text-white mb-2">Thank You!</h3>
                      <p className="text-text-gray dark:text-zinc-400 text-xs font-body leading-relaxed max-w-sm mx-auto">
                        We've received your request successfully. Our technical design architects will review details and connect in 24 hours.
                      </p>
                    </div>

                    <div className="bg-bg-light dark:bg-zinc-850 p-5 rounded-2xl border border-border-light dark:border-zinc-800 max-w-xs mx-auto">
                      <span className="block text-[9px] uppercase tracking-wider text-zinc-400">Generated Quote ID</span>
                      <span className="font-heading font-black text-base text-secondary block mt-1 select-all">{submittedId || "RHX-2026-001"}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
                      <Link 
                        to="/"
                        className="bg-primary hover:bg-primary/95 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back Home
                      </Link>
                      <button 
                        type="button"
                        onClick={downloadSimulatedPDF}
                        className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" /> Download Quote
                      </button>
                      <a 
                        href="https://wa.me/919876543210"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#22c35e] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                )}

                {/* Form Buttons navigation */}
                {step <= 5 && (
                  <div className="flex justify-between items-center border-t border-border-light dark:border-zinc-800 pt-6 mt-8">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="flex items-center gap-1.5 text-xs font-bold text-text-gray hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 5 ? (
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="bg-secondary hover:bg-secondary/95 text-white font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1 hover:scale-[1.02] cursor-pointer"
                      >
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-550 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>Submit Proposal Quote <Send className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    )}
                  </div>
                )}

              </form>
            </div>

            {/* Right Column: AI estimator, Stats & why us (35% width) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              
              {/* 💡 Live Price Estimator & Cost Calculator */}
              <div className="bg-[#0F172A] text-white border border-transparent dark:border-zinc-800 rounded-[32px] p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-[60px] pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 text-secondary animate-pulse" />
                    <h3 className="font-heading font-black text-xs uppercase tracking-wider">AI Project Planner</h3>
                  </div>

                  <div className="space-y-4">
                    
                    {/* Live price counter */}
                    <div className="border-b border-slate-800 pb-4">
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">Approx. Estimated Cost</span>
                      <span className="font-heading font-black text-2xl text-white block mt-1">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Timeline estimates */}
                    <div className="border-b border-slate-800 pb-4">
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">Estimated Development Time</span>
                      <span className="font-heading font-bold text-xs text-white block mt-1.5 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-secondary" /> {duration} Weeks
                      </span>
                    </div>

                    {/* Tech Stack suggest */}
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">Suggested Stack (Highly Recommended)</span>
                      <p className="text-[10px] text-slate-300 font-semibold mt-2 bg-slate-900 border border-slate-800 p-2.5 rounded-lg font-body leading-relaxed">
                        {stack}
                      </p>
                    </div>

                    {/* Recommended Solution Pill */}
                    <div className="bg-secondary/10 border border-secondary/20 p-3 rounded-xl flex gap-2">
                      <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <p className="text-[9px] text-slate-300 leading-normal font-medium">
                        Based on your checklist, we recommend a headless serverless configuration. Deploys onto AWS in days with auto scaling limits.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* ⭐ Why choose Rahimax Sidebar */}
              <div className="bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[28px] p-6 shadow-md space-y-6">
                
                <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider border-b border-border-light dark:border-zinc-800 pb-3">
                  Why choose Rahimax?
                </h4>
                
                <div className="space-y-4">
                  
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-black text-primary dark:text-white">150+ Custom Projects</span>
                      <span className="block text-[10px] text-text-gray dark:text-zinc-500 mt-0.5">Delivered clinics database solutions, schools portals, and Web3 hubs.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-black text-primary dark:text-white">98% Happy Clients</span>
                      <span className="block text-[10px] text-text-gray dark:text-zinc-500 mt-0.5">Highly rated for transparent pricing schemas, speed, and support.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-black text-primary dark:text-white">24 Hours Response SLA</span>
                      <span className="block text-[10px] text-text-gray dark:text-zinc-500 mt-0.5">Direct quote blueprint feedback with estimates in 24 hours.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-black text-primary dark:text-white">Zero Bulk Templates</span>
                      <span className="block text-[10px] text-text-gray dark:text-zinc-550 mt-0.5">Bespoke code architectures loading pages in under 1.5s.</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Client Review Widget */}
              <div className="bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-100 dark:border-zinc-800 rounded-[28px] p-6 shadow-md text-xs font-semibold">
                <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star className="w-3.5 h-3.5 fill-current" key={i} />)}
                </div>
                <p className="italic text-text-gray dark:text-zinc-300 font-body text-[11px] leading-relaxed">
                  "Rahimax delivered our custom Clinic scheduling system 5 days ahead of schedule. The AI Project estimator price matched our invoice perfectly!"
                </p>
                <span className="block text-[10px] text-primary dark:text-white font-bold mt-4 uppercase tracking-wider">— Director, Apollo Hospital Network</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🔥 Premium CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 px-6 space-y-6">
          <span className="text-secondary text-[10px] uppercase tracking-[0.25em] font-extrabold px-3.5 py-1.5 bg-secondary/15 rounded-full inline-block border border-secondary/25 shadow-sm">
            Milestones blueprint
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-slate-400 font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Connect with our core software engineering architects to get started. No spam. 24 hour response guaranteed.
          </p>

          <div className="pt-6">
            <button 
              type="button" 
              onClick={() => { setStep(1); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-secondary/10 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Get My Free Quote
            </button>
          </div>

          <div className="pt-8 flex justify-center gap-8 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            <span>✓ No spam guarantee</span>
            <span>✓ Free consultation</span>
            <span>✓ 24hr Proposal turnaround</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
