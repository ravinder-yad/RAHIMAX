import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Search, Sun, Moon, Globe,
  ArrowRight, Phone, Laptop, ShoppingCart, Cpu, 
  Smartphone, Palette, CheckCircle, Sparkles, BookOpen
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'solutions', 'resources', or null
  const [showLangMenu, setShowLangMenu] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Close mobile drawer and dropdowns on page navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setShowLangMenu(false);
  }, [location]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown-parent')) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const getServiceUrl = (item) => {
    const name = item.toLowerCase();
    
    // Parent headers mapping
    if (name === 'web development') return '/services/custom-website';
    if (name === 'e-commerce') return '/services/e-commerce';
    if (name === 'custom software') return '/services/custom-crm';
    if (name === 'mobile apps') return '/services/mobile-app';
    if (name === 'design services') return '/services/ui-ux-design';
    
    // Solutions specific ERP/system routes mapping
    if (name.includes('education')) return '/services/school-erp';
    if (name.includes('healthcare')) return '/services/hospital-website';
    if (name.includes('restaurant')) return '/services/restaurant-website';
    if (name.includes('gym')) return '/services/gym-website';
    if (name.includes('real estate')) return '/services/real-estate';
    
    // Default clean slug routing for all 21 individual megamenu services
    const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `/services/${slug}`;
  };

  const getSolutionUrl = (item) => {
    const name = item.toLowerCase();
    if (name.includes('enterprise') || name.includes('ngo') || name.includes('corporate')) {
      return '/solutions/corporate';
    }
    if (name.includes('ecommerce')) {
      return '/solutions/ecommerce';
    }
    const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `/solutions/${slug}`;
  };

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const servicesMenuData = [
    {
      title: "Web Development",
      items: ["Business Website", "Company Website", "Landing Page", "Portfolio", "Custom Website"]
    },
    {
      title: "E-Commerce",
      items: ["Shopify", "WooCommerce", "Custom Store", "Multi Vendor"]
    },
    {
      title: "Custom Software",
      items: ["CRM", "ERP", "Dashboard", "HRMS", "POS", "Inventory"]
    },
    {
      title: "Mobile Apps",
      items: ["Android", "iOS", "React Native", "Flutter"]
    },
    {
      title: "Design Services",
      items: ["UI Design", "UX Design", "Branding", "Logo Design"]
    }
  ];

  const solutionsMenuData = [
    "Education", "Healthcare", "Restaurant", "Gym", "Real Estate", 
    "Travel", "Startup", "Enterprise", "NGO", "Manufacturing"
  ];

  const resourcesMenuData = [
    { title: "Blog", desc: "Latest tech and design trends." },
    { title: "Case Studies", desc: "Detailed engineering breakthroughs." },
    { title: "Pricing Guide", desc: "Transparent project cost estimators." },
    { title: "FAQs", desc: "Frequently asked questions answered." },
    { title: "Free Templates", desc: "Open source boilerplates for developers." },
    { title: "Documentation", desc: "SaaS API and ERP integrations setup." }
  ];

  // Premium Logo Symbol: 36px width & height
  const LogoSymbol = () => (
    <svg 
      className="w-9 h-9 shrink-0 group-hover:scale-[1.05] transition-transform duration-300" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="28" fill="#0F172A" className="dark:fill-[#1E293B]" />
      <circle cx="50" cy="50" r="38" stroke="#1E293B" strokeWidth="2" className="dark:stroke-border-light" />
      <path 
        d="M34 26H56C66 26 73 32 73 40C73 48 66 54 56 54H42V74" 
        stroke="#FFFFFF" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M42 26V74" 
        stroke="#FFFFFF" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M52 48L68 74" 
        stroke="#2563EB" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
      />
      <circle cx="68" cy="74" r="5" fill="#F59E0B" />
    </svg>
  );

  return (
    <>
      {/* Header Container that encapsulates the sliding announcement bar and sticky navbar */}
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
        
        {/* Announcement Bar: Glass effect, transparent, auto-sliding, hides on scroll */}
        <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out relative ${
          isScrolled 
            ? 'h-0 opacity-0 pointer-events-none' 
            : 'h-9 bg-slate-900/60 dark:bg-black/60 backdrop-blur-md border-b border-white/5'
        }`}>
          {/* Bottom gradient border line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
          
          <div className="h-full flex items-center justify-center">
            {/* Slide message */}
            <div className="animate-pulse text-[10px] sm:text-xs text-white/90 font-bold uppercase tracking-wider px-6 text-center select-none">
              <Link to="/contact" className="hover:underline flex items-center justify-center gap-1">
                <span>{t('announcement_text')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar Row */}
        <nav className={`w-full z-50 h-[88px] transition-all duration-300 relative ${
          isScrolled 
            ? 'glass-navbar shadow-sm' 
            : 'bg-transparent border-b border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-6">
            
            {/* Logo Concept */}
            <Link to="/" className="flex items-center space-x-2.5 group shrink-0">
              <LogoSymbol />
              <div className="flex flex-col justify-center">
                <span className="text-primary text-xl font-extrabold tracking-wider leading-none font-heading group-hover:text-secondary transition-colors duration-300">
                  RAHIMAX
                </span>
                <span className="text-[9px] font-bold text-text-gray tracking-[0.12em] uppercase mt-1">
                  {t('building_excellence')}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-x-6 font-semibold text-[11px] tracking-wider uppercase">
              
              <Link 
                to="/" 
                className={`hover:text-secondary transition-colors py-2 relative group ${
                  location.pathname === '/' ? 'text-secondary font-bold' : 'text-primary'
                }`}
              >
                <span>{t('home')}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transition-transform duration-300 origin-left ${
                  location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              {/* Services Dropdown */}
              <div className="py-2 nav-dropdown-parent">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === 'services' ? null : 'services');
                  }}
                  className={`flex items-center space-x-0.5 hover:text-secondary transition-colors cursor-pointer ${
                    location.pathname.startsWith('/services') ? 'text-secondary font-bold' : 'text-primary'
                  }`}
                >
                  <span>{t('services')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {activeMenu === 'services' && (
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[1100px] bg-white dark:bg-bg-card rounded-[24px] shadow-2xl border border-border-light p-8 grid grid-cols-12 gap-8 animate-fade-in premium-shadow ${
                    isScrolled ? 'top-[88px]' : 'top-[124px]'
                  }`}>
                    {/* Left Side: Services lists */}
                    <div className="col-span-8 grid grid-cols-4 gap-6">
                      {servicesMenuData.map((col, idx) => (
                        <div key={idx} className="space-y-4">
                          <Link 
                            to={getServiceUrl(col.title)}
                            className="font-heading font-extrabold text-[10px] text-primary uppercase tracking-wider border-b border-border-light pb-2 block hover:text-secondary transition-colors"
                          >
                            {col.title}
                          </Link>
                          <ul className="space-y-2 text-xs normal-case tracking-normal">
                            {col.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={getServiceUrl(item)}
                                  className="text-text-gray hover:text-secondary block py-1 font-body transition-colors font-medium hover:translate-x-1 transition-transform duration-200"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Right Side: Premium Featured Card */}
                    <div className="col-span-4 bg-gradient-to-br from-primary to-[#1E293B] dark:from-bg-surface dark:to-bg-card rounded-2xl p-6 text-white dark:text-text-dark border dark:border-border-light flex flex-col justify-between relative overflow-hidden group/card shadow-lg normal-case tracking-normal">
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-white/10 dark:bg-primary/10 flex items-center justify-center text-secondary mb-4">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading font-extrabold text-lg leading-snug text-white dark:text-text-dark">
                          🚀 Build Your Dream Website
                        </h4>
                        <p className="text-slate-300 dark:text-text-gray text-xs mt-2 leading-relaxed font-body">
                          Premium UI • Fast Delivery • SEO Optimized. Custom codes engineered for speed and conversion.
                        </p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center text-xs text-white dark:text-secondary font-bold tracking-wider uppercase mt-6 group/btn"
                      >
                        <span className="border-b border-white dark:border-secondary pb-0.5 group-hover/btn:border-secondary group-hover/btn:text-secondary transition-all">Get Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1 text-secondary" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="py-2 nav-dropdown-parent">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === 'solutions' ? null : 'solutions');
                  }}
                  className={`flex items-center space-x-0.5 hover:text-secondary transition-colors cursor-pointer ${
                    activeMenu === 'solutions' ? 'text-secondary font-bold' : 'text-primary'
                  }`}
                >
                  <span>{t('solutions')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                {activeMenu === 'solutions' && (
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[800px] bg-white dark:bg-bg-card rounded-[24px] shadow-2xl border border-border-light p-8 grid grid-cols-12 gap-8 animate-fade-in premium-shadow ${
                    isScrolled ? 'top-[88px]' : 'top-[124px]'
                  }`}>
                    {/* Left: 2-column Solutions */}
                    <div className="col-span-8 space-y-4">
                      <Link 
                        to="/solutions"
                        className="font-heading font-extrabold text-[10px] text-primary uppercase tracking-wider border-b border-border-light pb-2 block hover:text-secondary transition-colors"
                      >
                        Industry Solutions
                      </Link>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 normal-case tracking-normal">
                        {solutionsMenuData.map((sol, idx) => (
                          <Link 
                            key={idx} 
                            to={getSolutionUrl(sol)}
                            className="text-xs text-text-gray hover:text-secondary hover:bg-slate-50 dark:hover:bg-bg-surface p-2.5 rounded-xl font-body font-semibold transition-colors flex items-center gap-2"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                            <span>{sol} Solutions</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right: Featured Case Study Preview */}
                    <div className="col-span-4 bg-slate-50 dark:bg-bg-surface border border-border-light rounded-2xl p-5 flex flex-col justify-between normal-case tracking-normal">
                      <div>
                        <span className="text-[9px] bg-secondary/15 text-secondary px-2 py-0.5 rounded font-extrabold uppercase tracking-wider">Featured case study</span>
                        <h4 className="font-heading font-bold text-sm text-primary mt-3 leading-snug">
                          Zenith School ERP System
                        </h4>
                        <p className="text-text-gray text-[11px] mt-1 leading-relaxed font-body">
                          Migration of 10k student records onto a custom React dashboard panel.
                        </p>
                      </div>
                      <Link to="/portfolio" className="text-xs text-secondary font-bold flex items-center gap-1 hover:underline mt-4">
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/portfolio" 
                className={`hover:text-secondary transition-colors py-2 relative group ${
                  location.pathname === '/portfolio' ? 'text-secondary font-bold' : 'text-primary'
                }`}
              >
                <span>{t('portfolio')}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transition-transform duration-300 origin-left ${
                  location.pathname === '/portfolio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              <Link 
                to="/pricing" 
                className={`hover:text-secondary transition-colors py-2 relative group ${
                  location.pathname === '/pricing' ? 'text-secondary font-bold' : 'text-primary'
                }`}
              >
                <span>{t('pricing')}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transition-transform duration-300 origin-left ${
                  location.pathname === '/pricing' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              {/* Resources Dropdown */}
              <div className="py-2 nav-dropdown-parent">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === 'resources' ? null : 'resources');
                  }}
                  className={`flex items-center space-x-0.5 hover:text-secondary transition-colors cursor-pointer ${
                    location.pathname.startsWith('/blog') ? 'text-secondary font-bold' : 'text-primary'
                  }`}
                >
                  <span>{t('resources')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {activeMenu === 'resources' && (
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[850px] bg-white dark:bg-bg-card rounded-[24px] shadow-2xl border border-border-light p-8 grid grid-cols-12 gap-8 animate-fade-in premium-shadow ${
                    isScrolled ? 'top-[88px]' : 'top-[124px]'
                  }`}>
                    {/* Left Side: Resources lists */}
                    <div className="col-span-8 space-y-4">
                      <h4 className="font-heading font-extrabold text-[10px] text-primary uppercase tracking-wider border-b border-border-light pb-2">
                        Resources Directory
                      </h4>
                      <div className="grid grid-cols-2 gap-4 normal-case tracking-normal">
                        {resourcesMenuData.map((item, idx) => (
                          <Link 
                            key={idx}
                            to={item.title === 'Blog' ? '/blog' : `/pricing`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-bg-surface transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-primary/10 group-hover:bg-blue-100 transition-colors mt-0.5 text-secondary">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-heading font-bold text-xs text-primary group-hover:text-secondary transition-colors">
                                {item.title}
                              </h5>
                              <p className="text-[10px] text-text-gray line-clamp-1 mt-0.5 font-body">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Featured article */}
                    <div className="col-span-4 bg-slate-50 dark:bg-bg-surface border border-border-light rounded-2xl p-5 flex flex-col justify-between normal-case tracking-normal">
                      <div>
                        <span className="text-[9px] bg-amber-50 dark:bg-primary/10 text-accent px-2.5 py-1 rounded font-extrabold uppercase tracking-wider">{t('popular')}</span>
                        <h4 className="font-heading font-bold text-sm text-primary mt-3 leading-snug">
                          Why Custom React Code Beats Builders
                        </h4>
                        <p className="text-text-gray text-[11px] mt-1 leading-relaxed font-body">
                          A tech analysis detailing performance load boosts using clean React & Tailwind CSS.
                        </p>
                      </div>
                      <Link to="/blog" className="text-xs text-secondary font-bold flex items-center gap-1 hover:underline mt-4">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className={`hover:text-secondary transition-colors py-2 relative group ${
                  location.pathname === '/about' ? 'text-secondary font-bold' : 'text-primary'
                }`}
              >
                <span>{t('about')}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transition-transform duration-300 origin-left ${
                  location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

            </div>

            {/* Right Utilities */}
            <div className="hidden xl:flex items-center gap-x-4 shrink-0">
              
              {/* Search Icon */}
              <button 
                onClick={() => setShowSearch(true)}
                className="p-1.5 text-primary hover:text-secondary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-1.5 text-primary hover:text-secondary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface cursor-pointer"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="p-1.5 text-primary hover:text-secondary transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface flex items-center gap-0.5 font-body text-xs font-semibold cursor-pointer"
                  aria-label="Select Language"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 top-full mt-1 bg-white dark:bg-bg-card border border-border-light shadow-lg rounded-xl py-1 z-50 text-xs min-w-[70px] animate-fade-in">
                    {['EN', 'HI'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setShowLangMenu(false); }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-bg-surface text-primary font-semibold font-body cursor-pointer"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Book Call */}
              <a 
                href="tel:+919876543210"
                className="text-[10px] uppercase tracking-wider font-extrabold text-primary hover:text-secondary flex items-center space-x-0.5"
              >
                <Phone className="w-3 h-3" />
                <span>{t('book_call')}</span>
              </a>

              {/* Get Quote Button */}
              <Link 
                to="/contact" 
                className="w-[155px] h-[48px] bg-btn-primary-bg text-btn-primary-text text-[10px] uppercase tracking-wider font-extrabold rounded-xl hover:bg-btn-primary-hover hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{t('get_quote')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Navigation Drawer Toggle */}
            <div className="xl:hidden flex items-center space-x-3">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-primary rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface"
              >
                {darkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-primary rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isOpen && (
            <div className="xl:hidden fixed inset-0 top-[88px] bg-white dark:bg-bg-main z-40 flex flex-col p-6 overflow-y-auto border-t border-border-light animate-fade-in font-heading">
              <div className="flex flex-col space-y-4 font-semibold text-base">
                <Link to="/" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('home')}</Link>
                <Link to="/services" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('services')}</Link>
                <Link to="/portfolio" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('portfolio')}</Link>
                <Link to="/pricing" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('pricing')}</Link>
                <Link to="/about" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('about')}</Link>
                <Link to="/blog" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('blog')}</Link>
                <Link to="/contact" className="hover:text-secondary transition-colors py-2 border-b border-slate-100 dark:border-border-light">{t('contact')}</Link>
                
                <div className="pt-6 space-y-3 font-body">
                  <a 
                    href="tel:+919876543210" 
                    className="border border-border-light text-primary text-center block py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-bg-surface font-bold text-sm"
                  >
                    {t('book_call')}
                  </a>
                  <Link 
                    to="/contact" 
                    className="bg-btn-primary-bg text-btn-primary-text text-center block py-3.5 rounded-xl hover:bg-btn-primary-hover font-bold text-sm shadow-md"
                  >
                    {t('get_quote')} →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Stripe/Linear Search Modal Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-primary/40 dark:bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-28 px-4 font-body animate-fade-in">
          <div className="bg-white dark:bg-bg-card w-full max-w-xl rounded-3xl shadow-2xl p-6 border border-border-light animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-border-light mb-4">
              <span className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider">{t('search_title')}</span>
              <button 
                onClick={() => setShowSearch(false)}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-bg-surface text-text-gray cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray w-5 h-5" />
              <input 
                type="text" 
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border-light bg-transparent focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm font-semibold"
                autoFocus
              />
            </div>
            <div className="mt-4 text-[10px] text-text-gray uppercase tracking-wider font-extrabold">
              Popular: <span className="text-secondary cursor-pointer hover:underline">Shopify</span>, <span className="text-secondary cursor-pointer hover:underline">CRM Systems</span>, <span className="text-secondary cursor-pointer hover:underline">Mobile Apps</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
