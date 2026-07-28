import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, Plus, X } from 'lucide-react';

const FAQPage = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [openIdx, setOpenIdx] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'General', 'Pricing', 'Development', 'SEO', 'Hosting', 'Support', 'Security', 'Payment'];

  const faqs = [
    { cat: 'General', q: "Can I redesign my existing website with Rahimax?", a: "Yes. We rebuild outdated legacy HTML websites into modern high-speed React storefronts with fully customizable components structures." },
    { cat: 'Pricing', q: "How much does a basic business website cost?", a: "Our Starter Website begins at ₹9,999. It includes up to 5 custom React pages, fully responsive templates, basic SEO tag configs, and a WhatsApp contact widget." },
    { cat: 'Development', q: "What is your standard development timeline?", a: "Standard landing pages take 5-10 days, E-Commerce platforms take 10-20 days, and customized enterprise portals/ERPs range from 30-90 days." },
    { cat: 'SEO', q: "Do you configure Google Search Console indexing?", a: "Yes. We configure Google Search Console indexing, submit XML sitemaps, register meta headers, and target local business keyword terms." },
    { cat: 'Hosting', q: "Where do you host custom React web applications?", a: "We deploy onto high-performance serverless platforms like AWS Cloud, Vercel, Netlify, or Hostinger, depending on your database needs." },
    { cat: 'Support', q: "Do you offer post-deployment technical maintenance?", a: "Yes. All projects include 1 to 12 months post-deploy support depending on the pricing plan, checking database logs, caching logs, and applying updates." },
    { cat: 'Security', q: "Do you configure secure SSL certificates?", a: "Yes. We verify SSL configurations, sanitize data schemas to prevent SQL injection, and encrypt user authentication tokens." },
    { cat: 'Payment', q: "Which payment gateways do you integrate?", a: "We integrate Stripe checkout flows, Razorpay APIs, Paytm, PayPal, and custom credit-card checkout processors depending on local compliance." }
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filtered = faqs.filter(f => {
    const matchesCat = activeCat === 'All' || f.cat === activeCat;
    const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Help Center & General FAQs | Rahimax</title>
        <meta name="description" content="Find answers to questions about domain configuration, custom dashboard components, timelines, and technical support frameworks." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 text-left relative z-10">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Help Center
          </span>
          <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Frequently Asked <br />
            Questions
          </h1>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
            Search our categorized repository of answers covering web hosting setup, security certificates configurations, and checkout systems.
          </p>
        </div>
      </section>

      {/* FAQs Main Section */}
      <section className="py-20 bg-bg-surface px-6 text-left">
        <div className="max-w-3xl mx-auto">
          {/* Search bar */}
          <div className="bg-bg-card border border-border-light rounded-xl p-3 flex items-center gap-2 mb-10">
            <Search className="w-4 h-4 text-text-gray" />
            <input 
              type="text" 
              placeholder="Search help topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-semibold focus:outline-none bg-transparent"
            />
          </div>

          {/* Categories select */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-border-light/50">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCat === c 
                    ? 'bg-secondary text-white' 
                    : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filtered.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={`rounded-xl border transition-all duration-300 bg-bg-card ${
                  isOpen ? 'border-secondary/40 shadow-md' : 'border-border-light/75'
                }`}>
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group"
                  >
                    <span className={`font-heading font-bold text-xs md:text-sm transition-colors ${
                      isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                    }`}>{item.q}</span>
                    <span className={`p-1 rounded-full border transition-all ${
                      isOpen ? 'bg-secondary text-white border-secondary' : 'bg-bg-surface border-border-light text-primary'
                    }`}>
                      {isOpen ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-text-gray font-body leading-relaxed border-t border-border-light pt-3 bg-bg-surface/30">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-text-gray text-xs italic py-16 text-center">No answers matching your search criteria were found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FAQPage;
