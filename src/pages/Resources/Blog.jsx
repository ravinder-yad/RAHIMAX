import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Search, Star, MessageSquare } from 'lucide-react';

const Blog = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Web Development', 'React', 'Next.js', 'UI/UX', 'SEO', 'AI', 'Business'];

  const blogs = [
    { title: "React 2026 Guide", cat: "React", readTime: "8 min read", date: "July 2026", desc: "A comprehensive roadmap analyzing future components structures in React 19.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80" },
    { title: "Complete MERN Guide", cat: "Web Development", readTime: "12 min read", date: "June 2026", desc: "How to engineer full-stack responsive web apps using MongoDB and Express.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
    { title: "Best UI Trends", cat: "UI/UX", readTime: "6 min read", date: "May 2026", desc: "Aesthetic tokens, glassmorphism cards, and micro-animations analysis.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80" },
    { title: "Modern SEO Strategy", cat: "SEO", readTime: "7 min read", date: "April 2026", desc: "Optimize page load speeds and meta headers to rank #1 on Google searches.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { title: "AI in Web Apps", cat: "AI", readTime: "10 min read", date: "March 2026", desc: "Integrating automated LLM APIs inside custom user dashboards.", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80" }
  ];

  const popular = [
    "Top 20 React Libraries",
    "Complete MERN Guide",
    "Best UI Trends",
    "Modern SEO",
    "AI in Web Development"
  ];

  const filtered = activeCat === 'All' ? blogs : blogs.filter(b => b.cat === activeCat);

  return (
    <>
      <Helmet>
        <title>Insights & Tech Blog | Web Engineering - Rahimax</title>
        <meta name="description" content="Learn web development, React, Next.js, Node.js, and SEO strategies. Read our technical guides and design blueprints." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Insights & Guides
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Insights, Ideas <br />
              & Innovation.
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Learn web development, UI/UX design, search engine optimization, artificial intelligence, and software business scaling.
            </p>
          </div>
          <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg border border-border-light/50 relative">
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80" 
              alt="Tech Blog insights" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-bg-surface px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Articles */}
          <div className="lg:col-span-8 space-y-8">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 border-b pb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCat === cat 
                      ? 'bg-secondary text-white' 
                      : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {filtered.map((b, idx) => (
                <div key={idx} className="group bg-bg-card border border-border-light rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border-light">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-[10px] text-text-gray font-bold">
                      <span>{b.cat}</span>
                      <span>{b.date} • {b.readTime}</span>
                    </div>
                    <h4 className="font-heading font-extrabold text-sm text-primary mt-3 group-hover:text-secondary transition-colors duration-300">
                      {b.title}
                    </h4>
                    <p className="text-text-gray text-[11px] font-body mt-2 leading-relaxed line-clamp-3">
                      {b.desc}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border-light/50 flex items-center text-[10px] font-bold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Popular, Newsletter */}
          <div className="lg:col-span-4 space-y-8 text-left">
            {/* Popular Posts */}
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl">
              <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider mb-4 border-b pb-2">
                Popular Posts
              </h4>
              <ul className="space-y-3.5">
                {popular.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">{idx+1}</span>
                    <span className="text-xs text-text-gray font-semibold font-body hover:text-secondary cursor-pointer leading-normal">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">
                Newsletter
              </h4>
              <p className="text-text-gray text-[10px] font-body leading-relaxed">Get weekly technical guides and open-source updates direct in your inbox.</p>
              
              {subscribed ? (
                <div className="mt-4 p-3 bg-emerald-500/10 text-emerald-500 rounded-xl text-[10px] font-bold">
                  🎉 Subscribed Successfully! Thank you.
                </div>
              ) : (
                <div className="mt-4 space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border-light bg-transparent text-xs focus:outline-none focus:border-secondary font-bold" 
                  />
                  <button 
                    onClick={() => setSubscribed(true)}
                    className="w-full bg-secondary text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-secondary/95 transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
