import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, ShieldCheck, Sparkles, Code2, Users, 
  Award, Heart, Target, Eye, Globe, X, Plus
} from 'lucide-react';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const values = [
    { title: "Innovation", desc: "Utilizing advanced React 19 server components and Vite bundler optimizations.", icon: <Code2 className="w-5 h-5 text-secondary" /> },
    { title: "Quality", desc: "No templates or page builders. We write bespoke responsive code from scratch.", icon: <Award className="w-5 h-5 text-secondary" /> },
    { title: "Transparency", desc: "No hidden hosting licensing, no setup surcharges. Plain billing schedules.", icon: <Globe className="w-5 h-5 text-secondary" /> },
    { title: "Security", desc: "Sanitizing databases models schemas to block SQL injection vulnerabilities.", icon: <ShieldCheck className="w-5 h-5 text-secondary" /> },
    { title: "Creativity", desc: "Custom Framer Motion animations delivering premium Apple-level look and feel.", icon: <Sparkles className="w-5 h-5 text-secondary" /> },
    { title: "Client First", desc: "Building dashboards workflows customized precisely to solve team bottlenecks.", icon: <Heart className="w-5 h-5 text-secondary" /> },
    { title: "Fast Delivery", desc: "Deploying high-speed marketing landing pages inside 5 to 10 working days.", icon: <Award className="w-5 h-5 text-secondary" /> },
    { title: "Continuous Learning", desc: "Adopting standard secure protocols and microservices speed caching systems.", icon: <Code2 className="w-5 h-5 text-secondary" /> }
  ];

  const team = [
    {
      name: "Ravinder",
      role: "Founder & Full Stack Developer",
      bio: "10+ years architecting web products. Specializes in Node.js backend systems, database schemas, and global deployment clusters.",
      initials: "RY",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Himesh",
      role: "Co-Founder & Frontend Specialist",
      bio: "Expert designer crafting high-performance React user interfaces. Focused on responsive layouts, micro-animations, and CSS compilers.",
      initials: "HD",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Mayant",
      role: "Co-Founder & Backend Lead",
      bio: "Manages server frameworks, SQL/NoSQL databases optimization, roles authorization, and HIPAA data compliance structures.",
      initials: "MD",
      socials: { github: "#", twitter: "#", linkedin: "#" }
    }
  ];

  const milestones = [
    { year: "2026", title: "Rahimax Founded", desc: "Launched to fill the market gap for high-performance React web codes and custom ERP systems." },
    { year: "2026", title: "First Custom Portal", desc: "Delivered Apollo Clinic schedules system, cutting wait patient lists queue by 65%." },
    { year: "2026", title: "50+ Successful Projects", desc: "Scaled operations across e-commerce storefronts, schools databases, and HRMS panels." },
    { year: "2026", title: "Global Client Expansion", desc: "Serving business clients in India, USA, and GCC region with scalable secure architectures." }
  ];

  return (
    <>
      <Helmet>
        <title>About Our Digital Agency & Software Engineers | Rahimax</title>
        <meta name="description" content="Meet our founders Ravinder, Himesh, and Mayant. Discover our mission to deliver fast, secure, custom React websites and ERP software." />
      </Helmet>

      {/* ① Hero Section: Starts below fixed navbar */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-bg-light pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Premium Studio
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Building Digital <br />
              Experiences That <br />
              Inspire Growth.
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed font-medium">
              Rahimax is a modern digital agency helping startups, businesses, and enterprises build high-performance websites, custom E-Commerce stores, and operational ERP software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
              >
                🚀 Start Your Project
              </Link>
              <Link 
                to="/portfolio"
                className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] dark:bg-bg-card"
              >
                📂 View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-[340px] rounded-3xl overflow-hidden shadow-2xl border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
              alt="Rahimax Team Workspace Collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ② Our Story */}
      <section className="py-20 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary text-[9px] uppercase tracking-widest font-extrabold block mb-2">Genesis</span>
          <h2 className="text-primary font-heading font-black text-2xl md:text-3xl leading-tight mb-6">Our Story</h2>
          <div className="space-y-4 text-xs sm:text-sm text-text-gray font-body leading-relaxed">
            <p>
              Rahimax was founded with one clear goal — to help businesses build modern digital products that are fast, scalable, and beautifully designed. We observed that most agencies rely on heavy WordPress templates, slow page builders, and unsecure code, resulting in slow load times and vulnerable applications.
            </p>
            <p>
              We solved this by writing custom-coded React and Node.js solutions from scratch. By prioritizing clean layouts, database optimization, and high-performance server configurations, we help our clients build authority and capture leads with zero technical compromises.
            </p>
          </div>
        </div>
      </section>

      {/* ③ Mission & Vision */}
      <section className="py-20 bg-bg-light px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-bg-card p-8 rounded-[28px] border border-border-light/75 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition-all">
            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-zinc-800 text-secondary shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm text-primary mb-2 uppercase tracking-wider">Our Mission</h3>
              <p className="text-text-gray font-body text-xs leading-relaxed">
                Deliver premium, high-speed digital solutions that help startups automate processes, secure user databases, and scale their conversions.
              </p>
            </div>
          </div>

          <div className="bg-bg-card p-8 rounded-[28px] border border-border-light/75 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition-all">
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-zinc-800 text-accent shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm text-primary mb-2 uppercase tracking-wider">Our Vision</h3>
              <p className="text-text-gray font-body text-xs leading-relaxed">
                To become one of the most trusted technology companies in India, engineering high-grade web platforms with Apple-level design aesthetics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 💎 SIGNATURE SECTION: Why We Started Rahimax */}
      <section className="py-24 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Brand Philosophy
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight">
              Why We Started Rahimax
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            <div className="p-8 bg-bg-card border border-border-light rounded-[28px] shadow-md flex flex-col justify-between hover:border-secondary/20 hover:shadow-xl transition-all">
              <div>
                <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-6">
                  💡 Our Purpose
                </span>
                <p className="text-text-gray font-body text-xs leading-relaxed">
                  We built Rahimax to eliminate slow, generic template structures. We believe businesses deserve custom react code-bases built for speed and engineered specifically to scale.
                </p>
              </div>
            </div>

            <div className="p-8 bg-bg-card border border-border-light rounded-[28px] shadow-md flex flex-col justify-between hover:border-secondary/20 hover:shadow-xl transition-all">
              <div>
                <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-6">
                  🎯 Our Promise
                </span>
                <p className="text-text-gray font-body text-xs leading-relaxed">
                  We promise absolute transparency. No hidden charges, zero template overrides, high-grade security configurations, and live Zoom training after every product delivery.
                </p>
              </div>
            </div>

            <div className="p-8 bg-bg-card border border-border-light rounded-[28px] shadow-md flex flex-col justify-between hover:border-secondary/20 hover:shadow-xl transition-all">
              <div>
                <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-6">
                  🚀 Our Future
                </span>
                <p className="text-text-gray font-body text-xs leading-relaxed">
                  Our goal is to scale our engineering studio to handle large-scale global enterprise ERP architectures while maintaining our boutique studio care and layout simplicity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ④ Core Values */}
      <section className="py-20 bg-bg-light px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Core Principles
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <div key={idx} className="p-6 bg-bg-card border border-border-light/75 rounded-2xl shadow-sm hover:border-secondary/20 transition-all flex flex-col justify-between h-[150px]">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs text-primary">{item.title}</h4>
                  <p className="text-text-gray text-[10px] font-body mt-1 leading-normal line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Company Journey Timeline */}
      <section className="py-20 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Milestones
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Company Journey
            </h2>
          </div>

          {/* Timeline track */}
          <div className="relative border-l-2 border-border-light ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                {/* Year tag */}
                <div className="absolute left-0 -translate-x-[50%] -translate-y-[-2px] bg-secondary text-white font-heading font-black text-[10px] px-2.5 py-0.5 rounded-full z-10 border-4 border-bg-surface shadow-sm">
                  {m.year}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs md:text-sm text-primary">{m.title}</h4>
                  <p className="text-text-gray font-body text-[11px] md:text-xs mt-1 max-w-lg leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Why Choose Rahimax */}
      <section className="py-20 bg-bg-light px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Why Us
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Why Choose Rahimax
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
            {[
              "Modern User Interfaces",
              "Super Fast Performance (<1.5s load)",
              "SEO Optimized Codebases",
              "100% Mobile Friendly Layouts",
              "Encrypted Secure Backend Code",
              "Highly Affordable Rates",
              "Dedicated Tech Support Managers",
              "Scalable Microservices Architectures"
            ].map((pt, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light/75 p-4 rounded-xl flex items-center gap-2.5 text-xs font-semibold text-text-gray">
                <Check className="w-4.5 h-4.5 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Meet Our Team */}
      <section className="py-20 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Architects
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="group bg-bg-card border border-border-light p-6 rounded-[24px] shadow-sm hover:border-secondary/20 hover:shadow-md transition-all flex flex-col justify-between h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center font-heading font-black text-secondary text-sm mb-4">
                    {member.initials}
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-primary group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h4>
                  <span className="text-[10px] text-secondary font-bold block mt-1 uppercase tracking-wider">
                    {member.role}
                  </span>
                  <p className="text-text-gray text-[10px] font-body mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex gap-3 border-t border-border-light/50 pt-4">
                  <a href={member.socials.github} className="text-text-gray hover:text-secondary transition-colors"><Github className="w-4 h-4" /></a>
                  <a href={member.socials.twitter} className="text-text-gray hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href={member.socials.linkedin} className="text-text-gray hover:text-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑧ Development Process */}
      <section className="py-20 bg-bg-light px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Operations Flow
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-text-gray max-w-5xl mx-auto">
            {[
              { id: "01", title: "Discovery", desc: "Collect logs, details, user features specs sheets." },
              { id: "02", title: "Research", desc: "Audit competitor portals, security schemas protocols." },
              { id: "03", title: "Planning", desc: "Build timelines, packages scopes, mapping integrations." },
              { id: "04", title: "UI Design", desc: "Craft custom Figmas layout templates with glass cards." },
              { id: "05", title: "Development", desc: "Write clean React & Node components databases." },
              { id: "06", title: "Testing", desc: "Lighthouse audits check, API latency logs monitor." },
              { id: "07", title: "Launch", desc: "Deploy configurations onto AWS staging servers." },
              { id: "08", title: "Support", desc: "Monthly backing backups, upgrades updates patches." }
            ].map((p, idx) => (
              <div key={idx} className="p-5 bg-bg-card border border-border-light rounded-xl flex items-start gap-3">
                <span className="font-heading font-black text-secondary text-sm shrink-0">{p.id}</span>
                <div>
                  <h4 className="font-heading font-bold text-xs text-primary">{p.title}</h4>
                  <p className="text-[10px] text-text-gray font-body mt-1 leading-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑨ Technology Stack */}
      <section className="py-20 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Tech Stack
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-xs font-semibold text-text-gray">
            <div className="bg-bg-card p-6 border border-border-light rounded-2xl">
              <h4 className="font-heading font-bold text-xs text-primary border-b pb-2 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Next.js", "Tailwind CSS", "Material UI", "Redux"].map(t => (
                  <span key={t} className="bg-bg-light px-2.5 py-1 border rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-bg-card p-6 border border-border-light rounded-2xl">
              <h4 className="font-heading font-bold text-xs text-primary border-b pb-2 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "REST APIs", "WebSockets"].map(t => (
                  <span key={t} className="bg-bg-light px-2.5 py-1 border rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-bg-card p-6 border border-border-light rounded-2xl">
              <h4 className="font-heading font-bold text-xs text-primary border-b pb-2 mb-4">Databases</h4>
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "PostgreSQL", "Firebase", "SQLite"].map(t => (
                  <span key={t} className="bg-bg-light px-2.5 py-1 border rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-bg-card p-6 border border-border-light rounded-2xl">
              <h4 className="font-heading font-bold text-xs text-primary border-b pb-2 mb-4">Cloud & Staging</h4>
              <div className="flex flex-wrap gap-1.5">
                {["AWS EC2", "Vercel", "Cloudflare CDN", "GitHub CI/CD"].map(t => (
                  <span key={t} className="bg-bg-light px-2.5 py-1 border rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 10. Achievements Counters */}
      <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-heading font-black text-2xl lg:text-3xl text-secondary block">150+</span>
            <span className="text-[10px] text-text-gray font-bold uppercase tracking-wider block mt-1">Projects Delivered</span>
          </div>
          <div>
            <span className="font-heading font-black text-2xl lg:text-3xl text-secondary block">98%</span>
            <span className="text-[10px] text-text-gray font-bold uppercase tracking-wider block mt-1">Client Satisfaction</span>
          </div>
          <div>
            <span className="font-heading font-black text-2xl lg:text-3xl text-secondary block">40+</span>
            <span className="text-[10px] text-text-gray font-bold uppercase tracking-wider block mt-1">Industries Served</span>
          </div>
          <div>
            <span className="font-heading font-black text-2xl lg:text-3xl text-secondary block">24/7</span>
            <span className="text-[10px] text-text-gray font-bold uppercase tracking-wider block mt-1">Support SLA</span>
          </div>
        </div>
      </section>

      {/* ❤️ 11. Testimonials */}
      <section className="py-20 bg-bg-surface px-6 text-left border-b border-border-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Reviews
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-semibold text-text-gray">
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl relative shadow-sm">
              <div className="text-amber-500 flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Check className="w-3.5 h-3.5 fill-current text-amber-500 shrink-0" key={i} />)}
              </div>
              <p className="italic leading-relaxed font-body text-[11px] text-text-gray">
                "Rahimax exceeded our expectations. Ravinder and the team constructed our entire logistics dashboard ERP and launched it 5 days ahead of schedule. Highly recommended!"
              </p>
              <span className="block text-[10px] text-primary font-bold mt-4 uppercase tracking-wider">— Director, Truffle Bistro Group</span>
            </div>
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl relative shadow-sm">
              <div className="text-amber-500 flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Check className="w-3.5 h-3.5 fill-current text-amber-500 shrink-0" key={i} />)}
              </div>
              <p className="italic leading-relaxed font-body text-[11px] text-text-gray">
                "Bespoke code loaded our e-commerce portal under 1.1s. Our SEO analytics jumped by 40% in a month. Excellent UI design simplicity!"
              </p>
              <span className="block text-[10px] text-primary font-bold mt-4 uppercase tracking-wider">— Founder, Apex Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ 14. FAQs Accordion */}
      <section className="py-20 bg-bg-light px-6 text-left border-b border-border-light/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Support
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl leading-tight">
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
                <div key={idx} className={`rounded-xl border transition-all duration-300 bg-bg-card ${
                  isOpen ? 'border-secondary/40 shadow-md' : 'border-border-light/75'
                }`}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group animate-fade-in"
                  >
                    <span className={`font-heading font-bold text-xs md:text-sm transition-colors ${
                      isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                    }`}>{faq.q}</span>
                    <span className={`p-1 rounded-full border transition-all ${
                      isOpen ? 'bg-secondary text-white border-secondary' : 'bg-bg-surface border-border-light text-primary'
                    }`}>
                      {isOpen ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-text-gray font-body leading-relaxed border-t border-border-light pt-3 bg-bg-surface/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 📞 15. Final CTA */}
      <section className="py-24 bg-bg-surface px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block">
            Connect With Us
          </span>
          <h2 className="text-primary font-heading font-black text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto">
            Let's Build Something Amazing Together.
          </h2>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Contact Ravinder, Himesh, and Mayant today to map out your database schemas and request a custom quote blueprint.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs shadow-lg uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Start Your Project
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-xl text-xs shadow-sm uppercase tracking-wider transition-all hover:scale-[1.02] dark:bg-bg-card"
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

export default About;
