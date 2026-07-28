import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, Laptop, Star, Award, Heart, CheckCircle2, Globe, Clock, Sparkles, ChevronRight, Moon, Sun, Check
} from 'lucide-react';

const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  // Check current theme state on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = (themeMode) => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#09090B] text-[#F8FAFC] pt-24 pb-12 border-t border-[#27272A] relative overflow-hidden font-body">
      {/* Background glowing ambient vector */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      {/* 💎 1. Mini CTA Segment */}
      <div className="max-w-7xl mx-auto px-6 border-b border-[#27272A] pb-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left space-y-2">
          <h3 className="font-heading font-black text-xl md:text-2xl text-white tracking-tight">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xs text-slate-400 font-body leading-relaxed max-w-md">
            Let's create your next high-performance website, dashboard software, or digital product together.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 w-full sm:w-auto">
          <Link 
            to="/contact" 
            className="flex-1 sm:flex-initial bg-secondary hover:bg-secondary/95 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-[1.02] text-center shadow-lg shadow-secondary/10"
          >
            Get Free Quote
          </Link>
          <a 
            href="mailto:hello@rahimax.com" 
            className="flex-1 sm:flex-initial bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-[1.02] text-center border border-[#27272A]"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* 💎 2. Start Your Project Signature Idea (3 Large Cards) */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link 
            to="/contact" 
            className="group bg-[#18181B] border border-[#27272A] p-6 rounded-[24px] flex items-start gap-4 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
          >
            <div className="p-3 bg-secondary/10 text-secondary dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider">Get a Quote</h4>
              <p className="text-[10px] text-slate-400 font-body mt-1.5 leading-relaxed">
                Tell us about your project requirements to get a customized proposal blueprints within 24 hours.
              </p>
            </div>
          </Link>

          <Link 
            to="/contact" 
            className="group bg-[#18181B] border border-[#27272A] p-6 rounded-[24px] flex items-start gap-4 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
          >
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider">Book a Free Call</h4>
              <p className="text-[10px] text-slate-400 font-body mt-1.5 leading-relaxed">
                Schedule a 30-minute strategy call with our lead technical software architecture designers.
              </p>
            </div>
          </Link>

          <Link 
            to="/portfolio" 
            className="group bg-[#18181B] border border-[#27272A] p-6 rounded-[24px] flex items-start gap-4 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300"
          >
            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl group-hover:scale-110 transition-transform">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider">View Portfolio</h4>
              <p className="text-[10px] text-slate-400 font-body mt-1.5 leading-relaxed">
                Explore our clinic databases ERP setups, school systems portals, and headless storefronts case details.
              </p>
            </div>
          </Link>

        </div>
      </div>

      {/* 💎 3. 6-Columns Directories Links */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-left border-b border-[#27272A] pb-16">
        
        {/* Brand Column */}
        <div className="space-y-4 col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block">
            <span className="text-white text-xl font-heading font-black tracking-wider">
              RAHIMAX<span className="text-secondary">.</span>
            </span>
          </Link>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Building Digital Excellence</span>
          <p className="text-[10px] text-slate-400 leading-relaxed font-body">
            Modern websites, custom software, databases ERP solutions, mobile apps, and digital experiences.
          </p>
          <p className="italic text-[9px] text-slate-500 font-body leading-relaxed mt-4 border-l border-zinc-800 pl-3">
            "We don't just build websites. We build digital experiences."
          </p>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-heading font-black text-[10px] text-white uppercase tracking-wider mb-5">Company</h4>
          <ul className="space-y-2.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <li><Link to="/about" className="hover:text-white transition-colors block">About Us</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors block">Our Story</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors block">Our Team</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors block">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors block">Contact Us</Link></li>
            <li><Link to="/reviews" className="hover:text-white transition-colors block">Reviews</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="font-heading font-black text-[10px] text-white uppercase tracking-wider mb-5">Services</h4>
          <ul className="space-y-2.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <li><Link to="/services" className="hover:text-white transition-colors block">Websites</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">E-Commerce</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">Software</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">CRM & ERP</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">Mobile Apps</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">UI/UX Design</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">SEO Engine</Link></li>
          </ul>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="font-heading font-black text-[10px] text-white uppercase tracking-wider mb-5">Solutions</h4>
          <ul className="space-y-2.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <li><Link to="/solutions/healthcare" className="hover:text-white transition-colors block">Healthcare</Link></li>
            <li><Link to="/solutions/education" className="hover:text-white transition-colors block">Education</Link></li>
            <li><Link to="/solutions/restaurant" className="hover:text-white transition-colors block">Restaurant</Link></li>
            <li><Link to="/solutions/real-estate" className="hover:text-white transition-colors block">Real Estate</Link></li>
            <li><Link to="/solutions/finance" className="hover:text-white transition-colors block">Finance</Link></li>
            <li><Link to="/solutions/gym" className="hover:text-white transition-colors block">Gym ERP</Link></li>
            <li><Link to="/solutions/startup" className="hover:text-white transition-colors block">Startup Hub</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="font-heading font-black text-[10px] text-white uppercase tracking-wider mb-5">Resources</h4>
          <ul className="space-y-2.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <li><Link to="/resources/blog" className="hover:text-white transition-colors block">Articles Blog</Link></li>
            <li><Link to="/resources/case-studies" className="hover:text-white transition-colors block">Case Studies</Link></li>
            <li><Link to="/resources/pricing-guide" className="hover:text-white transition-colors block">Pricing Guide</Link></li>
            <li><Link to="/resources/documentation" className="hover:text-white transition-colors block">Docs Library</Link></li>
            <li><Link to="/resources/templates" className="hover:text-white transition-colors block">Free Figma</Link></li>
            <li><Link to="/resources/faq" className="hover:text-white transition-colors block">Support FAQs</Link></li>
            <li><Link to="/resources/learning-center" className="hover:text-white transition-colors block">Learning Hub</Link></li>
          </ul>
        </div>

        {/* Portfolio & Contact Columns */}
        <div>
          <h4 className="font-heading font-black text-[10px] text-white uppercase tracking-wider mb-5">Office & Contact</h4>
          <div className="space-y-5 text-[10px] text-slate-400">
            <div className="space-y-1">
              <span className="block font-bold uppercase tracking-wider text-slate-500">Contact Email</span>
              <a href="mailto:hello@rahimax.com" className="font-bold text-white hover:text-secondary transition-colors block">hello@rahimax.com</a>
            </div>
            <div className="space-y-1">
              <span className="block font-bold uppercase tracking-wider text-slate-500">Head Office</span>
              <span className="block text-white">Alwar, Rajasthan, India</span>
            </div>
            <div className="space-y-1">
              <span className="block font-bold uppercase tracking-wider text-slate-500">Business Hours</span>
              <span className="block text-slate-400">Mon - Sat: 10AM - 7PM</span>
            </div>
            
            {/* Live availability indicator */}
            <div className="bg-slate-900 border border-[#27272A] p-2.5 rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              <div>
                <span className="block text-[8px] font-black uppercase text-white tracking-wide">Team Available</span>
                <span className="block text-[7px] text-slate-500 mt-0.5">SLA response in 2 Hours</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 💎 4. Newsletter & Trust Badges Area */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#27272A] pb-12 mb-12 text-left">
        
        {/* Newsletter form (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="font-heading font-black text-xs text-white uppercase tracking-wider">Stay Updated</h4>
          <p className="text-[10px] text-slate-400 font-body leading-relaxed max-w-md">
            Subscribe to our weekly design inspirations, React.js code tips, custom backend protocols tutorials, and service updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full bg-[#18181B] border border-[#27272A] text-white rounded-xl py-3 pl-4 pr-32 focus:outline-none focus:border-secondary transition-colors text-xs font-semibold"
            />
            <button 
              type="submit" 
              className="absolute right-1.5 bg-secondary hover:bg-secondary/95 text-white font-bold px-4 py-2 rounded-lg text-[9px] uppercase tracking-wider transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold">
              <Check className="w-3.5 h-3.5" /> Subscribed successfully! Thank you.
            </div>
          )}
        </div>

        {/* Trust Badges (5 Columns) */}
        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "100+", title: "Projects" },
            { metric: "★★★★★", title: "Client Rating" },
            { metric: "24 Hours", title: "Response SLA" },
            { metric: "99%", title: "Server Uptime" }
          ].map((badge, i) => (
            <div key={i} className="bg-[#18181B] border border-[#27272A] p-4 rounded-xl text-center flex flex-col justify-center h-20 shadow-sm">
              <span className="font-heading font-black text-xs text-secondary block">{badge.metric}</span>
              <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider block mt-1">{badge.title}</span>
            </div>
          ))}
        </div>

      </div>

      {/* 💎 5. Core Technologies stack taglines */}
      <div className="max-w-7xl mx-auto px-6 border-b border-[#27272A] pb-12 mb-12 text-left">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">Core Technologies Stack</span>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Material UI", "Amazon Web Services", "Vercel Cloud", "Docker Containers"].map(tech => (
            <span key={tech} className="bg-slate-900 border border-[#27272A] text-slate-400 text-[10px] font-bold px-3.5 py-1.5 rounded-xl hover:border-secondary/30 hover:text-white transition-colors">{tech}</span>
          ))}
        </div>
      </div>

      {/* 💎 6. Social channels + Languages + Theme Selector Row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-[#27272A] pb-12 mb-12 text-left">
        
        {/* Social channels icons */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-2">Follow Us</span>
          {[
            { name: "GitHub", href: "https://github.com" },
            { name: "LinkedIn", href: "https://linkedin.com" },
            { name: "Instagram", href: "https://instagram.com" },
            { name: "Facebook", href: "https://facebook.com" },
            { name: "Twitter", href: "https://twitter.com" },
            { name: "YouTube", href: "https://youtube.com" }
          ].map(ch => (
            <a key={ch.name} href={ch.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-secondary uppercase tracking-wide transition-colors">
              {ch.name}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          
          {/* Languages Selector */}
          <div className="flex items-center gap-2 border-r border-[#27272A] pr-6">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">English</span>
            <span className="text-[9px] text-slate-600 font-bold uppercase">/</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hindi</span>
            <span className="text-[8px] bg-slate-900 border border-[#27272A] px-1.5 py-0.5 rounded text-slate-500 font-bold ml-1">Beta</span>
          </div>

          {/* Theme toggler buttons */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-[#27272A] p-1 rounded-xl">
            <button 
              onClick={() => toggleTheme('light')}
              className={`p-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                !isDark ? 'bg-secondary text-white shadow-sm' : 'text-slate-500 hover:text-white'
              }`}
              title="Light Theme"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => toggleTheme('dark')}
              className={`p-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                isDark ? 'bg-secondary text-white shadow-sm' : 'text-slate-500 hover:text-white'
              }`}
              title="Dark Theme"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* 💎 7. Copyright & Bottom legal bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-6 text-left relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] text-slate-400 font-medium font-body leading-normal">
            © {new Date().getFullYear()} Rahimax. All rights reserved.
          </p>
          <span className="text-[9px] text-slate-600 font-body block mt-0.5">
            Made with ❤️ in India. Alwar, Rajasthan. Version 1.0.0
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
