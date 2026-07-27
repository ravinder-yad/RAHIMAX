import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, Eye, Cpu, Award, Zap } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const About = () => {
  const team = [
    {
      name: "Rahid Sheikh",
      role: "Founder & Lead Solutions Architect",
      bio: "10+ years designing enterprise applications and robust cloud systems. Specializes in building ERPs and database integrations.",
      initials: "RS"
    },
    {
      name: "Maxim Deshmukh",
      role: "Co-Founder & UI/UX Director",
      bio: "Crafts award-winning design architectures. Focuses on Stripe-level layouts, micro-interactions, and premium styling.",
      initials: "MD"
    },
    {
      name: "Arjun Verma",
      role: "Senior Full-Stack Engineer",
      bio: "React and Node expert. Optimizes loaders, API endpoints, and web performance to load pages under 1.5 seconds.",
      initials: "AV"
    }
  ];

  const milestones = [
    { year: "2022", title: "Agency Founded", desc: "Rahimax was launched to build premium web applications and ERP solutions, filling the gap for high-end custom code." },
    { year: "2023", title: "Enterprise ERP Expansion", desc: "Engineered and launched our first large-scale School ERP, serving 5,000+ daily active users." },
    { year: "2024", title: "50+ Successful Projects", desc: "Crossed 50 client deliveries globally, specializing in SaaS dashboards, headless e-commerce, and corporate portals." },
    { year: "2026", title: "Introducing Rahimax Pro", desc: "Scaling operations as a premium studio, delivering modern responsive portals utilizing advanced React 19 frameworks." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Rahimax Pro Agency - Next-Gen Web Engineering</title>
        <meta name="description" content="Discover the story behind Rahimax. Meet our team of dedicated software architects and designers creating high-performance, beautiful digital solutions." />
      </Helmet>

      {/* Hero Header */}
      <section className="py-20 bg-white border-b border-border-light px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-secondary text-xs uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Our Origin Story
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-primary mt-2">
            Pioneering the Digital Standard
          </h1>
          <p className="text-text-gray font-body text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            We are a high-end web design and systems engineering agency. We combine stunning aesthetic design with robust, custom-coded backend software to help companies scale.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-light px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white p-10 rounded-[32px] border border-border-light premium-shadow flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-blue-50 text-secondary shrink-0">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-primary mb-4">Our Mission</h3>
              <p className="text-text-gray font-body text-sm leading-relaxed">
                To eliminate slow, generic websites by offering custom-engineered, conversion-focused portals and ERP systems that automate processes, build authority, and boost revenue.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[32px] border border-border-light premium-shadow flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-amber-50 text-accent shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-primary mb-4">Our Vision</h3>
              <p className="text-text-gray font-body text-sm leading-relaxed">
                To become the premier web development agency trusted globally by startups and enterprises to build highly complex systems with clean, Apple-level simplicity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline="What We Stand For"
            title="Our Core Principles"
            subtitle="These values guide every layout we design, every line of code we write, and every system we deploy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[24px] border border-border-light hover:border-secondary/20 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mx-auto mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-primary mb-3">Absolute Customization</h4>
              <p className="text-text-gray text-sm leading-relaxed">
                We write custom code. No templates, no builders. You own 100% of the clean source code we deliver.
              </p>
            </div>

            <div className="p-8 rounded-[24px] border border-border-light hover:border-secondary/20 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mx-auto mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-primary mb-3">High-Performance Focus</h4>
              <p className="text-text-gray text-sm leading-relaxed">
                Speed is a feature. We optimize assets, database lookups, and load paths for instantaneous response.
              </p>
            </div>

            <div className="p-8 rounded-[24px] border border-border-light hover:border-secondary/20 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mx-auto mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-primary mb-3">Transparent Collaboration</h4>
              <p className="text-text-gray text-sm leading-relaxed">
                Direct Slack/Teams contact with your architects. Clear weekly milestone tracking in Figma and Jira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-24 bg-bg-light px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline="The Team"
            title="Meet Our Leaders"
            subtitle="The creative and engineering minds driving the digital standards of Rahimax."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[24px] border border-border-light premium-shadow">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-heading font-extrabold text-2xl mb-6 shadow-md">
                  {member.initials}
                </div>
                <h4 className="font-heading font-bold text-xl text-primary">{member.name}</h4>
                <p className="text-secondary font-semibold text-xs uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-text-gray text-sm mt-4 leading-relaxed font-body">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            tagline="Timeline"
            title="Our Growth Journey"
            subtitle="Tracing the path of our engineering and client triumphs over the years."
          />

          <div className="border-l-2 border-border-light ml-4 space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-white" />
                
                <span className="font-heading font-extrabold text-xl text-secondary">
                  {milestone.year}
                </span>
                <h4 className="font-heading font-bold text-lg text-primary mt-1">
                  {milestone.title}
                </h4>
                <p className="text-text-gray text-sm mt-2 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
