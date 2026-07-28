import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, ShieldCheck, Sparkles, Code2, Users, 
  Award, Heart, Target, Eye, Globe, X, Plus, Database, Cloud,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    { name: "Vikram Malhotra", role: "Director", comp: "Truffle Bistro Group", txt: "Rahimax constructed our entire online kitchen order dispatch suite. It reduced order queue latency by 45%. Highly recommended!", stars: 5 },
    { name: "Neha Sharma", role: "Founder", comp: "Aura E-Commerce Store", txt: "Bespoke React storefront loaded in 1.1 seconds. Our checkouts conversion rates jumped by 38% in a month.", stars: 5 },
    { name: "Rahul Deshmukh", role: "Principal", comp: "Zenith Global School", txt: "The student databases and transcript generator ERP simplified report compilation for 2,000 students.", stars: 5 },
    { name: "Arjun Verma", role: "CEO", comp: "Skyline Real Estate", txt: "Real-time property filters and interactive glass maps cards resulted in 40% more booking consultations.", stars: 5 },
    { name: "Dr. Alok Sen", role: "Chief Architect", comp: "Apollo Clinic Network", txt: "Delivered appointment slots managers and patients records panels. Zero compliance leaks. Exceptional engineering care.", stars: 5 },
    { name: "Shreya Ghoshal", role: "Manager", comp: "Prime Fitness Studio", txt: "Active shift check-in scanner widget built by Ravinder is robust. Simple database tracking schemas.", stars: 5 },
    { name: "Kabir Mehta", role: "Director", comp: "Lens Hub Creative Studio", txt: "Stunning Apple-grade styling layouts and custom React micro-animations. Our clients are always impressed.", stars: 5 },
    { name: "Pooja Hegde", role: "Partner", comp: "Safe Legal Partners", txt: "Secured client scheduling portals, encrypted database inputs, and automated sitemaps. Clean execution.", stars: 5 },
    { name: "Amit Singhal", role: "Operations Lead", comp: "Apex Logistics Hub", txt: "Engineered candidates HR pipelines status tracking boards. Cut recruitment delay times by 50%.", stars: 5 },
    { name: "Suresh Prabhu", role: "Director", comp: "Smart Factory Group", txt: "Custom automated stock alerts warning monitors integrated. Exceptional dashboard reliability and support.", stars: 5 }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % reviews.length);
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const values = [
    { title: "Innovation", desc: "Utilizing advanced React 19 server components and Vite bundler optimizations.", icon: <Code2 className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
    { title: "Quality Code", desc: "No builders or generic templates. We write clean, optimized, responsive source code from scratch.", icon: <Award className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> },
    { title: "Transparency", desc: "Simple pricing models, precise contracts, and clear documentation. No surprises.", icon: <Globe className="w-5 h-5 text-purple-500 dark:text-purple-400" /> },
    { title: "High Security", desc: "Strict database sanitization protocols, encrypted JWT credentials, and SSL configs.", icon: <ShieldCheck className="w-5 h-5 text-pink-500 dark:text-pink-400" /> },
    { title: "Creativity First", desc: "Bespoke visuals, custom CSS animations, and Apple-level design layout standards.", icon: <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
    { title: "Client Partner", desc: "We design features specifically tailored to remove your active business operational bottlenecks.", icon: <Heart className="w-5 h-5 text-rose-500 dark:text-rose-400" /> },
    { title: "Fast Turnaround", desc: "Deploying high-converting responsive web apps inside 5 to 10 business days.", icon: <Award className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
    { title: "Sustained Support", desc: "Post-launch maintenance checking server latency logs, database cache, and sitemaps.", icon: <Code2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> }
  ];

  const team = [
    {
      name: "Ravinder",
      role: "Founder & Full Stack Developer",
      bio: "Architects client backend portals, designs optimized Mongo databases, and deploys scalable secure server frameworks.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      tag: "FOUNDER",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Himesh",
      role: "Co-Founder & UI/UX Director",
      bio: "Frontend specialist crafting premium React user interfaces. Focused on responsive layouts and CSS animations.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      tag: "UI/UX LEAD",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Mayant",
      role: "Co-Founder & Lead Systems Architect",
      bio: "Designs secure logins, handles REST API integrations, and optimizes high-performance AWS configurations.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      tag: "ARCHITECT",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    }
  ];

  const milestones = [
    { year: "2026", title: "Rahimax Founded", desc: "Launched to fill the market gap for high-performance React web codes and custom ERP systems.", icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { year: "2026", title: "First Custom Portal", desc: "Delivered Apollo Clinic schedules system, cutting patient wait queues by 65%.", icon: <Target className="w-4 h-4 text-blue-500" /> },
    { year: "2026", title: "50+ Successful Projects", desc: "Scaled operations across e-commerce storefronts, schools databases, and HRMS panels.", icon: <Award className="w-4 h-4 text-indigo-550" /> },
    { year: "2026", title: "Global Client Expansion", desc: "Serving business clients in India, USA, and GCC region with scalable secure architectures.", icon: <Globe className="w-4 h-4 text-emerald-500" /> }
  ];

  const whyChooseUs = [
    { title: "Modern UI", desc: "Stunning Apple-grade styling and seamless micro-animations that engage visitors.", icon: <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
    { title: "Fast Performance", desc: "React Server Components and optimized asset bundlers to load under 1.5s.", icon: <Check className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> },
    { title: "SEO Optimized", desc: "Clean HTML structure and server-rendered data schemas for maximum index rankings.", icon: <Globe className="w-5 h-5 text-purple-500 dark:text-purple-400" /> },
    { title: "Mobile Friendly", desc: "100% responsive fluid layouts adapting perfectly across all mobile and tablet widths.", icon: <Globe className="w-5 h-5 text-pink-500 dark:text-pink-400" /> },
    { title: "Secure Code", desc: "Encrypted API keys, token authentication, and SQL injection sanitization protocols.", icon: <ShieldCheck className="w-5 h-5 text-rose-500 dark:text-rose-400" /> },
    { title: "Affordable Rates", desc: "Fixed project quotes with structured milestones payments. Zero maintenance surcharges.", icon: <Award className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
    { title: "Dedicated Support", desc: "Direct WhatsApp channel and scheduled Zoom tutorials for seamless dashboard management.", icon: <Heart className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> },
    { title: "Scalable Structure", desc: "Bespoke clean code bases that scale as your active user database expands.", icon: <Code2 className="w-5 h-5 text-blue-500 dark:text-blue-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>About Our Team & Digital Philosophy - Rahimax</title>
        <meta name="description" content="Meet Ravinder, Himesh, and Mayant. Discover how Rahimax writes custom React apps, clinic databases, and ERP suites with Apple-level visuals." />
      </Helmet>

      {/* Hero Section with Glowing Backdrops & Custom Interactive Mockup Collage */}
      <section className="relative py-24 overflow-hidden bg-bg-light dark:bg-slate-950 text-primary dark:text-white mt-[88px] border-b border-border-light dark:border-zinc-800">
        
        {/* Glow meshes */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-600/5 dark:bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/5 dark:bg-purple-600/15 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block border border-secondary/20">
              Technology Studio
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-primary via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400">
              Building Digital <br />
              Experiences That <br />
              Inspire Growth.
            </h1>
            <p className="text-text-gray dark:text-zinc-400 font-body text-xs sm:text-sm max-w-xl leading-relaxed font-medium">
              Rahimax is a vision-driven engineering agency. We reject generic templates to write fast, secure, custom React websites, E-Commerce platforms, and complex ERP software from scratch.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-secondary hover:bg-secondary/95 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-secondary/10 transition-all hover:scale-[1.02]"
              >
                🚀 Start Your Project
              </Link>
              <Link 
                to="/portfolio"
                className="bg-white border border-border-light hover:bg-slate-50 text-primary dark:bg-zinc-900 dark:border-zinc-800 dark:text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02]"
              >
                📂 View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Custom Interactive Collage Mockup (Wows the Client) */}
          <div className="lg:col-span-5 relative h-[360px] w-full flex items-center justify-center">
            
            {/* Background decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
            
            {/* Collage Card 1: Active Projects dashboard */}
            <div className="absolute top-4 left-4 bg-white dark:bg-zinc-900/90 border border-border-light dark:border-zinc-800 p-5 rounded-2xl shadow-xl w-60 rotate-[-2deg] backdrop-blur-md animate-float z-20 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center border-b border-border-light dark:border-zinc-800 pb-2 mb-3">
                <span className="text-[9px] uppercase tracking-wider text-text-gray dark:text-zinc-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>Staging Servers</span>
                </span>
                <span className="text-[9px] font-mono text-secondary font-bold">Live Status</span>
              </div>
              <h5 className="font-heading font-bold text-xs text-primary dark:text-white">Apollo Clinics ERP</h5>
              <div className="w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div className="bg-secondary h-full w-[85%]" />
              </div>
              <span className="text-[8px] text-text-gray dark:text-zinc-500 mt-2 block text-right font-mono font-bold">85% Compiled (1.2s)</span>
            </div>

            {/* Collage Card 2: Satisfied statistics */}
            <div className="absolute bottom-6 right-4 bg-white dark:bg-zinc-900/90 border border-border-light dark:border-zinc-800 p-5 rounded-2xl shadow-xl w-48 rotate-[3deg] backdrop-blur-md z-30 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-secondary/10 text-secondary">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-primary dark:text-zinc-300 font-bold">Client Success</span>
              </div>
              <div className="text-2xl font-heading font-black text-primary dark:text-white">100%</div>
              <span className="text-[9px] text-text-gray dark:text-zinc-400 leading-normal block mt-1 font-body">Custom React Code bases. Zero Template dependence.</span>
            </div>

            {/* Collage Card 3: Framework badges */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900/90 border border-border-light dark:border-zinc-800 p-4 rounded-2xl shadow-xl w-52 backdrop-blur-md z-10 hover:scale-102 transition-transform duration-300">
              <span className="text-[8px] uppercase tracking-wider text-text-gray dark:text-zinc-500 font-bold block mb-2">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {["React 19", "Next.js", "Node.js", "MongoDB"].map(t => (
                  <span key={t} className="bg-slate-50 dark:bg-zinc-800 text-[8px] font-bold px-2 py-0.5 rounded text-primary dark:text-zinc-300 border border-border-light dark:border-zinc-700">{t}</span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ② Our Story with rich visuals (Genesis Section) */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 text-left border-b border-border-light dark:border-zinc-800 relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Slogan & Status Badge */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-secondary dark:text-blue-400 text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 bg-secondary/10 dark:bg-blue-500/10 rounded-full inline-block border border-secondary/20">
              Genesis
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Our Story & <br />
              Digital Purpose.
            </h2>
            <div className="pt-6 border-t border-border-light dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider">Fast Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider">Custom Hand-Written Code</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider">Zero Template Overrides</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed narrative & Glass Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-xs sm:text-sm text-text-gray dark:text-zinc-300 font-body leading-relaxed">
              <p className="first-letter:text-3xl first-letter:font-heading first-letter:font-black first-letter:text-secondary first-letter:mr-2 first-letter:float-left">
                Rahimax was founded with one clear goal — to help businesses build modern digital products that are fast, scalable, and beautifully designed. We observed that most agencies rely on heavy WordPress templates, slow page builders, and unsecure code, resulting in slow load times and vulnerable applications.
              </p>
              <p>
                We solved this by writing custom-coded React and Node.js solutions from scratch. By prioritizing clean layouts, database optimization, and high-performance server configurations, we help our clients build authority and capture leads with zero technical compromises.
              </p>
            </div>

            {/* Glass Quote Card */}
            <div className="bg-bg-card border border-border-light/75 dark:bg-zinc-800/50 dark:border-zinc-700/50 p-6 rounded-2xl shadow-sm relative overflow-hidden mt-6">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              <p className="text-[11px] italic font-body text-text-gray dark:text-zinc-300 leading-relaxed">
                "Every single line of code we write is crafted to deliver unmatched loading speeds, security, and conversion. That is our genesis promise."
              </p>
              <span className="block text-[9px] font-bold text-primary dark:text-white mt-3 uppercase tracking-wider">
                — Ravinder, Founder
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ③ Mission & Vision (Redesigned with Premium details) */}
      <section className="py-24 bg-bg-light dark:bg-slate-950 text-left border-b border-border-light dark:border-zinc-800 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-bg-card border border-border-light/75 dark:bg-zinc-900/50 dark:border-zinc-800 p-8 rounded-[28px] shadow-lg flex flex-col sm:flex-row items-start gap-5 hover:border-secondary/35 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-blue-500/10 border border-secondary/20 text-secondary dark:text-blue-400 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-black text-sm text-primary dark:text-white uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="text-primary dark:text-zinc-200 font-bold text-xs">
                Empowering brands with high-performance operational systems.
              </p>
              <p className="text-text-gray dark:text-zinc-400 font-body text-xs leading-relaxed">
                Deliver premium digital solutions that automate processes, secure user databases, and scale conversion targets.
              </p>
              <ul className="space-y-2 pt-2 border-t border-border-light dark:border-zinc-800">
                <li className="flex items-center gap-2 text-[10px] text-text-gray dark:text-zinc-400 font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Loading speeds under 1.5 seconds</span>
                </li>
                <li className="flex items-center gap-2 text-[10px] text-text-gray dark:text-zinc-400 font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Secure double-access authorization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-bg-card border border-border-light/75 dark:bg-zinc-900/50 dark:border-zinc-800 p-8 rounded-[28px] shadow-lg flex flex-col sm:flex-row items-start gap-5 hover:border-secondary/35 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-indigo-500/10 border border-secondary/20 text-secondary dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-black text-sm text-primary dark:text-white uppercase tracking-wider">
                Our Vision
              </h3>
              <p className="text-primary dark:text-zinc-200 font-bold text-xs">
                Setting the digital engineering standard in India.
              </p>
              <p className="text-text-gray dark:text-zinc-400 font-body text-xs leading-relaxed">
                To become one of the most trusted technology companies, engineering high-grade web platforms with Apple-level simplicity.
              </p>
              <ul className="space-y-2 pt-2 border-t border-border-light dark:border-zinc-800">
                <li className="flex items-center gap-2 text-[10px] text-text-gray dark:text-zinc-400 font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Bespoke custom coding frameworks</span>
                </li>
                <li className="flex items-center gap-2 text-[10px] text-text-gray dark:text-zinc-400 font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Establishing long-term customer trust</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 💎 SIGNATURE SECTION: Why We Started Rahimax with Premium Cards */}
      <section className="py-28 bg-[#09090B] text-white text-left border-y border-zinc-900 px-6 relative overflow-hidden">
        
        {/* Internal Glow Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-blue-500/10 rounded-full inline-block border border-blue-500/20">
              Brand Philosophy
            </span>
            <h2 className="text-white font-heading font-extrabold text-3xl md:text-4xl leading-tight">
              Why We Started Rahimax
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Our Purpose */}
            <div className="p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[32px] shadow-lg flex flex-col justify-between hover:border-blue-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="space-y-4">
                <span className="text-[10px] bg-blue-500/15 text-blue-400 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max">
                  💡 Our Purpose
                </span>
                <h4 className="font-heading font-black text-sm text-white">
                  Killing slow page builders and heavy template codes.
                </h4>
                <p className="text-zinc-400 font-body text-[11px] leading-relaxed">
                  We believe businesses deserve custom react code-bases built for speed and engineered specifically to scale, rather than generic heavy drag-and-drop elements that destroy your Google SEO authority rankings.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-800/60">
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>100% bespoke hand-coded React elements</span>
                  </li>
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Accelerating page load speed index under 1.5s</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Our Promise */}
            <div className="p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[32px] shadow-lg flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="space-y-4">
                <span className="text-[10px] bg-indigo-500/15 text-indigo-400 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max">
                  🎯 Our Promise
                </span>
                <h4 className="font-heading font-black text-sm text-white">
                  Absolute transparency and zero template overrides.
                </h4>
                <p className="text-zinc-400 font-body text-[11px] leading-relaxed">
                  No hidden hosting licenses, no sudden setup surcharges. We promise clean secure architectures, daily repository backup reports, and full ownership of your custom source code files.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-800/60">
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Fixed pricing models and clear contracts</span>
                  </li>
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>100% complete source code ownership</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Our Future */}
            <div className="p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[32px] shadow-lg flex flex-col justify-between hover:border-purple-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="space-y-4">
                <span className="text-[10px] bg-purple-500/15 text-purple-400 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max">
                  🚀 Our Future
                </span>
                <h4 className="font-heading font-black text-sm text-white">
                  Scaling custom ERP and database clusters globally.
                </h4>
                <p className="text-zinc-400 font-body text-[11px] leading-relaxed">
                  Our goal is to scale our engineering studio to handle large-scale global enterprise systems and Clinic database networks while maintaining our boutique studio care and layout simplicity.
                </p>
                <ul className="space-y-2 pt-4 border-t border-zinc-800/60">
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Worldwide client deliveries across India & GCC</span>
                  </li>
                  <li className="flex items-center gap-2 text-[10px] text-zinc-300 font-semibold">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Automated API system pipelines & hosting tools</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ④ Core Values (Redesigned with Premium details) */}
      <section className="py-24 bg-bg-light dark:bg-slate-950 text-left border-b border-border-light dark:border-zinc-800 px-6 relative">
        
        {/* Soft background mesh glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Core Principles
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <div key={idx} className="p-7 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-md border border-slate-100 dark:border-zinc-800/80 rounded-3xl shadow-sm hover:shadow-lg hover:border-secondary/35 dark:hover:border-blue-500/35 transition-all duration-300 flex flex-col justify-between h-[190px] hover:-translate-y-1.5 relative overflow-hidden group">
                {/* Visual hover border line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-2xl bg-secondary/5 dark:bg-zinc-800 flex items-center justify-center mb-4 text-secondary dark:text-blue-400 border border-secondary/10 dark:border-zinc-700/50">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-primary dark:text-white mb-2">{item.title}</h4>
                  <p className="text-text-gray dark:text-zinc-400 text-xs leading-relaxed font-body font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Company Journey Timeline (Visual and Animated) */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 text-left border-b border-border-light dark:border-zinc-800 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Milestones
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Company Journey
            </h2>
          </div>

          {/* Timeline track */}
          <div className="relative border-l-2 border-border-light dark:border-zinc-800 ml-4 md:ml-36 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                
                {/* Visual Connector Node */}
                <div className="absolute left-0 -translate-x-[50%] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-secondary/40 dark:border-zinc-700 flex items-center justify-center z-10 group-hover:border-secondary transition-colors duration-300">
                  {m.icon}
                </div>

                {/* Left side year indicator (hidden on mobile, visible on md+) */}
                <div className="hidden md:block absolute right-full mr-8 top-2 text-right">
                  <span className="font-heading font-black text-sm text-secondary dark:text-blue-400 bg-secondary/10 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-secondary/20 shadow-sm">
                    {m.year}
                  </span>
                </div>

                {/* Mobile Year Badge (visible on mobile, hidden on md+) */}
                <div className="md:hidden mb-2 inline-block">
                  <span className="font-heading font-black text-[9px] text-secondary dark:text-blue-400 bg-secondary/10 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                    {m.year}
                  </span>
                </div>

                {/* Card Container */}
                <div className="bg-white/60 dark:bg-zinc-900/30 border border-slate-100 dark:border-zinc-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-secondary/30 dark:hover:border-blue-500/30 transition-all duration-300">
                  <h4 className="font-heading font-black text-sm text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-text-gray dark:text-zinc-400 font-body text-xs mt-2 leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Why Choose Rahimax Benefits list */}
      <section className="py-24 bg-bg-light dark:bg-slate-950 text-left border-b border-border-light dark:border-zinc-800 px-6 relative">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Why Us
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Why Choose Rahimax
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-md border border-slate-100 dark:border-zinc-800/80 rounded-3xl shadow-sm hover:shadow-lg hover:border-secondary/35 dark:hover:border-blue-500/35 transition-all duration-300 flex flex-col justify-between h-[180px] hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-secondary/5 dark:bg-zinc-800 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white">{item.title}</h4>
                  <p className="text-text-gray dark:text-zinc-400 text-[10px] font-body mt-2 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Meet Our Team with Premium Portrait cards */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 text-left border-b border-border-light dark:border-zinc-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Architects
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="group bg-white dark:bg-zinc-900/60 border border-border-light dark:border-zinc-800 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[470px] hover:-translate-y-1 relative">
                
                {/* Photo container */}
                <div className="h-[240px] w-full overflow-hidden relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Floating role badge */}
                  <span className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-md text-[8px] font-black uppercase tracking-wider text-secondary dark:text-blue-400 border border-secondary/35 px-2.5 py-1 rounded-full shadow-md z-20">
                    {member.tag}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-black text-base text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-[10px] text-secondary font-extrabold block mt-1 uppercase tracking-wider">
                      {member.role}
                    </span>
                    <p className="text-text-gray dark:text-zinc-400 text-[10px] font-body mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex gap-3 border-t border-border-light dark:border-zinc-800 pt-3 mt-4">
                    <a href={member.socials.github} className="text-text-gray dark:text-zinc-550 hover:text-secondary dark:hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                    <a href={member.socials.twitter} className="text-text-gray dark:text-zinc-550 hover:text-secondary dark:hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href={member.socials.linkedin} className="text-text-gray dark:text-zinc-550 hover:text-secondary dark:hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑧ Development Process with glowing index (Operations Flow) */}
      <section className="py-24 bg-bg-light dark:bg-slate-950 px-6 text-left border-b border-border-light dark:border-zinc-800 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Operations Flow
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { id: "01", title: "Discovery", desc: "Collect specifications, logs, user objectives, and feature blueprints sheets." },
              { id: "02", title: "Research", desc: "Audit competitor software portals, database schemas, and security cryptography rules." },
              { id: "03", title: "Planning", desc: "Compile development milestones roadmaps, pricing quotes packages, and API scopes." },
              { id: "04", title: "UI Design", desc: "Craft custom high-fidelity Figma canvas layouts matching modern aesthetics guides." },
              { id: "05", title: "Development", desc: "Write clean React frontend frameworks and optimized scalable Node.js backend controllers." },
              { id: "06", title: "Testing", desc: "Audit speed latency using Lighthouse, check responsive widths, and debug queries errors." },
              { id: "07", title: "Launch", desc: "Deploy configurations onto AWS cloud, wire Cloudflare DNS, and secure sitemaps." },
              { id: "08", title: "Support", desc: "Provide monthly files backings up, packages upgrades, security updates, and maintenance." }
            ].map((p, idx) => (
              <div key={idx} className="p-6 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-md border border-slate-100 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md hover:border-secondary/35 dark:hover:border-blue-500/35 transition-all duration-300 flex flex-col justify-between h-[160px] relative overflow-hidden group">
                {/* Large Background Step Number */}
                <span className="text-4xl font-heading font-black text-secondary/10 dark:text-blue-500/10 absolute right-4 top-4 select-none">
                  {p.id}
                </span>
                
                <div className="space-y-2 mt-auto">
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-text-gray dark:text-zinc-400 text-[10px] font-body leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑨ Technology Stack */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 px-6 text-left border-b border-border-light dark:border-zinc-800 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Tech Stack
            </span>
            <h2 className="text-primary dark:text-white font-heading font-black text-3xl md:text-4xl leading-tight">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Frontend Category */}
            <div className="bg-white/70 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800 p-6 rounded-[28px] shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 border-b border-border-light dark:border-zinc-800 pb-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js (19)", "Next.js", "Vite.js", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Framer Motion", "Material UI", "HTML5 & CSS3"].map(t => (
                    <span key={t} className="bg-bg-light dark:bg-zinc-800/80 text-text-gray dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1.5 border border-border-light dark:border-zinc-700/65 rounded-xl hover:bg-secondary/5 dark:hover:bg-blue-500/10 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/20 transition-all">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Category */}
            <div className="bg-white/70 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800 p-6 rounded-[28px] shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 border-b border-border-light dark:border-zinc-800 pb-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express.js", "RESTful APIs", "GraphQL APIs", "WebSockets", "JWT Cryptography", "Microservices", "Python FastAPI"].map(t => (
                    <span key={t} className="bg-bg-light dark:bg-zinc-800/80 text-text-gray dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1.5 border border-border-light dark:border-zinc-700/65 rounded-xl hover:bg-secondary/5 dark:hover:bg-blue-500/10 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/20 transition-all">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Database Category */}
            <div className="bg-white/70 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800 p-6 rounded-[28px] shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 border-b border-border-light dark:border-zinc-800 pb-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 dark:text-purple-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["MongoDB", "PostgreSQL", "Mongoose ODM", "Prisma ORM", "Redis Cache", "MySQL", "SQLite", "Firebase DB"].map(t => (
                    <span key={t} className="bg-bg-light dark:bg-zinc-800/80 text-text-gray dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1.5 border border-border-light dark:border-zinc-700/65 rounded-xl hover:bg-secondary/5 dark:hover:bg-blue-500/10 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/20 transition-all">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & Staging Category */}
            <div className="bg-white/70 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800 p-6 rounded-[28px] shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-3 border-b border-border-light dark:border-zinc-800 pb-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-xs text-primary dark:text-white uppercase tracking-wider">Cloud & Staging</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS EC2 / S3", "Vercel Deploy", "Netlify", "Cloudflare CDN", "GitHub CI/CD", "Docker Containers", "PM2 Manager", "Nginx Proxy"].map(t => (
                    <span key={t} className="bg-bg-light dark:bg-zinc-800/80 text-text-gray dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1.5 border border-border-light dark:border-zinc-700/65 rounded-xl hover:bg-secondary/5 dark:hover:bg-blue-500/10 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/20 transition-all">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🏆 10. Achievements Counters with Dynamic Count Animation */}
      <section className="py-20 bg-bg-light dark:bg-slate-950 px-6 border-b border-border-light dark:border-zinc-800 relative">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <span className="font-heading font-black text-3xl lg:text-4xl text-secondary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-indigo-400 block">
              <Counter end="150" suffix="+" />
            </span>
            <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider block mt-2">
              Projects Delivered
            </span>
          </div>

          <div>
            <span className="font-heading font-black text-3xl lg:text-4xl text-secondary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 block">
              <Counter end="98" suffix="%" />
            </span>
            <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider block mt-2">
              Client Satisfaction
            </span>
          </div>

          <div>
            <span className="font-heading font-black text-3xl lg:text-4xl text-secondary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-400 block">
              <Counter end="40" suffix="+" />
            </span>
            <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider block mt-2">
              Industries Served
            </span>
          </div>

          <div>
            <span className="font-heading font-black text-3xl lg:text-4xl text-secondary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-400 dark:to-blue-400 block">
              <Counter end="24/7" />
            </span>
            <span className="text-[10px] text-text-gray dark:text-zinc-400 font-bold uppercase tracking-wider block mt-2">
              Support SLA
            </span>
          </div>

        </div>
      </section>

      {/* ❤️ 11. Testimonials (Redesigned looping Slider Carousel with 10 reviews) */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 px-6 text-left border-b border-border-light dark:border-zinc-800 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
                Reviews
              </span>
              <h2 className="text-primary dark:text-white font-heading font-black text-2xl md:text-3xl leading-tight mt-2">
                Client Testimonials
              </h2>
            </div>
            
            {/* Slider triggers */}
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border-light dark:border-zinc-800 bg-bg-card hover:bg-secondary/15 hover:border-secondary/40 text-primary dark:text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border-light dark:border-zinc-800 bg-bg-card hover:bg-secondary/15 hover:border-secondary/40 text-primary dark:text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial slider grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Always visible */}
            <div className="bg-bg-card border border-border-light dark:bg-zinc-900/60 dark:border-zinc-800 p-7 rounded-[28px] shadow-lg flex flex-col justify-between h-[230px] hover:border-secondary/35 dark:hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div>
                <div className="text-amber-500 flex gap-1 mb-3">
                  {[...Array(reviews[activeSlide].stars)].map((_, i) => (
                    <Check className="w-3.5 h-3.5 fill-current text-amber-500 shrink-0" key={i} />
                  ))}
                </div>
                <p className="italic leading-relaxed font-body text-xs text-text-gray dark:text-zinc-300 line-clamp-4">
                  "{reviews[activeSlide].txt}"
                </p>
              </div>
              <div className="border-t border-border-light dark:border-zinc-850 pt-3 flex flex-col">
                <span className="text-[11px] font-heading font-black text-primary dark:text-white">
                  {reviews[activeSlide].name}
                </span>
                <span className="text-[9px] text-text-gray dark:text-zinc-500 font-bold uppercase tracking-wide mt-0.5">
                  {reviews[activeSlide].role}, {reviews[activeSlide].comp}
                </span>
              </div>
            </div>

            {/* Card 2: Visible on md+ */}
            <div className="hidden md:flex bg-bg-card border border-border-light dark:bg-zinc-900/60 dark:border-zinc-800 p-7 rounded-[28px] shadow-lg flex-col justify-between h-[230px] hover:border-secondary/35 dark:hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div>
                <div className="text-amber-500 flex gap-1 mb-3">
                  {[...Array(reviews[(activeSlide + 1) % reviews.length].stars)].map((_, i) => (
                    <Check className="w-3.5 h-3.5 fill-current text-amber-500 shrink-0" key={i} />
                  ))}
                </div>
                <p className="italic leading-relaxed font-body text-xs text-text-gray dark:text-zinc-300 line-clamp-4">
                  "{reviews[(activeSlide + 1) % reviews.length].txt}"
                </p>
              </div>
              <div className="border-t border-border-light dark:border-zinc-850 pt-3 flex flex-col">
                <span className="text-[11px] font-heading font-black text-primary dark:text-white">
                  {reviews[(activeSlide + 1) % reviews.length].name}
                </span>
                <span className="text-[9px] text-text-gray dark:text-zinc-500 font-bold uppercase tracking-wide mt-0.5">
                  {reviews[(activeSlide + 1) % reviews.length].role}, {reviews[(activeSlide + 1) % reviews.length].comp}
                </span>
              </div>
            </div>

            {/* Card 3: Visible on lg+ */}
            <div className="hidden lg:flex bg-bg-card border border-border-light dark:bg-zinc-900/60 dark:border-zinc-800 p-7 rounded-[28px] shadow-lg flex-col justify-between h-[230px] hover:border-secondary/35 dark:hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div>
                <div className="text-amber-500 flex gap-1 mb-3">
                  {[...Array(reviews[(activeSlide + 2) % reviews.length].stars)].map((_, i) => (
                    <Check className="w-3.5 h-3.5 fill-current text-amber-500 shrink-0" key={i} />
                  ))}
                </div>
                <p className="italic leading-relaxed font-body text-xs text-text-gray dark:text-zinc-300 line-clamp-4">
                  "{reviews[(activeSlide + 2) % reviews.length].txt}"
                </p>
              </div>
              <div className="border-t border-border-light dark:border-zinc-850 pt-3 flex flex-col">
                <span className="text-[11px] font-heading font-black text-primary dark:text-white">
                  {reviews[(activeSlide + 2) % reviews.length].name}
                </span>
                <span className="text-[9px] text-text-gray dark:text-zinc-500 font-bold uppercase tracking-wide mt-0.5">
                  {reviews[(activeSlide + 2) % reviews.length].role}, {reviews[(activeSlide + 2) % reviews.length].comp}
                </span>
              </div>
            </div>

          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 mt-8">
            {reviews.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === i ? 'w-6 bg-secondary' : 'w-1.5 bg-border-light dark:bg-zinc-800'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ❓ FAQs Accordion */}
      <section className="py-24 bg-bg-light dark:bg-slate-950 px-6 text-left border-b border-border-light dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block border border-secondary/20">
              Support
            </span>
            <h2 className="text-primary dark:text-white font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Why choose Rahimax custom code over templates?", a: "Templates load bulky libraries and are hard to customize. We write React elements from scratch so your pages load under 1.5s and are fully secure." },
              { q: "How long does a standard project take?", a: "Business sites take 5-10 days, headless E-Commerce portals take 10-20 days, and complex systems range from 30-90 days." },
              { q: "Do you offer maintenance support?", a: "Yes. Every plan includes dedicated support, checking database queries, backups, and security updates." }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`rounded-xl border transition-all duration-300 bg-bg-card dark:bg-zinc-900/40 overflow-hidden ${
                  isOpen ? 'border-secondary/40 shadow-md' : 'border-border-light dark:border-zinc-800/80'
                }`}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group animate-fade-in"
                  >
                    <span className={`font-heading font-bold text-xs md:text-sm transition-colors ${
                      isOpen ? 'text-secondary' : 'text-primary dark:text-white group-hover:text-secondary'
                    }`}>{faq.q}</span>
                    <span className={`p-1 rounded-full border transition-all ${
                      isOpen ? 'bg-secondary text-white border-secondary' : 'bg-slate-100 dark:bg-zinc-800 border-border-light dark:border-zinc-700 text-primary dark:text-white'
                    }`}>
                      {isOpen ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-text-gray dark:text-zinc-400 font-body leading-relaxed border-t border-border-light dark:border-zinc-800 pt-3 bg-bg-surface/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 📞 Final CTA */}
      <section className="py-24 bg-bg-surface dark:bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 px-6">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block border border-secondary/20">
            Connect With Us
          </span>
          <h2 className="text-primary dark:text-white font-heading font-black text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto">
            Let's Build Something Amazing Together.
          </h2>
          <p className="text-text-gray dark:text-zinc-400 font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Contact Ravinder, Himesh, and Mayant today to map out your database schemas and request a custom quote blueprint.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs shadow-lg shadow-secondary/10 uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Start Your Project
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-border-light hover:bg-slate-50 text-primary dark:bg-zinc-900 dark:border-zinc-800 dark:text-white font-bold px-8 py-4 rounded-xl text-xs shadow-sm uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Custom Github icon helper
const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

// Custom Twitter icon helper
const Twitter = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

// Custom Linkedin icon helper
const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Custom Counter component for dynamic number ticking
const Counter = ({ end, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(end, 10);
    if (isNaN(target)) {
      setCount(end);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const isNumeric = !isNaN(parseInt(end, 10)) && /^[0-9]+$/.test(end.toString().replace(/[^0-9]/g, ''));
  return (
    <span>
      {isNumeric ? count : end}
      {suffix}
    </span>
  );
};

export default About;
