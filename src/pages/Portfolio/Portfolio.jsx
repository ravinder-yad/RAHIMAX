import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ExternalLink, Code2, Clock, Users, X, Check,
  Sparkles, ShieldCheck, Trophy, Star, MessageSquare,
  Monitor
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All', 'Business', 'E-Commerce', 'Hospital', 'School', 
    'Restaurant', 'Dashboard', 'Portfolio', 'Landing Page', 
    'CRM', 'ERP', 'Mobile App'
  ];

  // Rich Case Study Database
  const projects = [
    {
      id: 'hospital-erp',
      title: 'Hospital Management System (ERP)',
      category: 'Hospital',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      duration: '45 Days',
      teamSize: 3,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      problem: 'The hospital was struggling with manual paper slot bookings and charts, creating 2-hour check-in queue delays and booking losses.',
      solution: 'We engineered a clean React dashboard portal that schedules doctor sessions, automates billings, and logs digital health certificates securely.',
      features: ['Real-time doctor calendar slots', 'Prescription PDF downloads', 'Razorpay checkout payment gate', 'Automated WhatsApp alerts'],
      results: ['65% reduction in patient wait time', '99.9% database booking accuracy', 'Zero document loss logs'],
      timeline: ['Week 1: UX Wireframing', 'Week 2-3: Core REST APIs & Database Setup', 'Week 4-5: Responsive React frontend dev', 'Week 6: Auditing & Launch'],
      clientReview: {
        text: 'Rahimax exceeded our expectations. Our patient retention is up by 40% and wait times are down to minutes. Excellent UI/UX design!',
        author: 'Dr. Sandeep Roy, Director of MedLife Clinic'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'school-erp',
      title: 'Zenith School Administration',
      category: 'School',
      tags: ['Next.js', 'Tailwind', 'PostgreSQL', 'Firebase'],
      duration: '60 Days',
      teamSize: 4,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      problem: 'Administrative staff spent hours manually collecting student fees, logging attendance, and compiling report cards.',
      solution: 'We designed a modular school ERP featuring automatic fee invoice calculations, biometric attendance alerts, and student gradebooks.',
      features: ['Fees payment tracking', 'Student & Parent portal', 'Automatic Report Card compiler', 'SMS notifications gateway'],
      results: ['90% reduction in paper forms', 'Instant WhatsApp fee warnings', 'Seamless billing for 5000+ kids'],
      timeline: ['Week 1: Schema Design', 'Week 2-3: DB Integration & Auth setup', 'Week 4-5: Front-end parent portals', 'Week 6-8: Testing & School Launch'],
      clientReview: {
        text: 'The best investment we made for school administration. Parents love the instant fee alerts and transparency.',
        author: 'Mrs. Shradha Verma, Principal at Zenith Academy'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'ecommerce-store',
      title: 'Aura Premium E-Store',
      category: 'E-Commerce',
      tags: ['React', 'Shopify API', 'Tailwind CSS', 'Redux'],
      duration: '30 Days',
      teamSize: 2,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      problem: 'Their old store took 4.5 seconds to load, causing a 40% cart abandonment rate on checkout screens.',
      solution: 'We engineered a custom headless React store connected to Shopify APIs, optimizing loading speeds to under 1 second.',
      features: ['Headless cart checkout', 'Instant product search filters', 'Multi-currency payments sync', 'Product reviews sliders'],
      results: ['45% boost in checkout conversions', 'Load times reduced by 78%', '30% increase in average cart value'],
      timeline: ['Week 1: UX design in Figma', 'Week 2: Headless API connection setup', 'Week 3: Checkout optimizations', 'Week 4: Final speed audits'],
      clientReview: {
        text: 'Our sales soared immediately after launch. The site is incredibly fast and checkout takes just seconds!',
        author: 'Rohit Deshmukh, Founder at Aura Apparels'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'crm-dashboard',
      title: 'Vanguard Sales CRM Dashboard',
      category: 'CRM',
      tags: ['React', 'Recharts', 'MongoDB', 'Node.js'],
      duration: '40 Days',
      teamSize: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      problem: 'Sales teams were losing prospective leads due to manual excel sheet tracking and delayed client follow-ups.',
      solution: 'We built a tailored lead pipeline CRM tracking deal conversions, automated follow-up scheduling, and client communication.',
      features: ['Leads pipeline charts', 'Auto WhatsApp reminders', 'Team performance graphs', 'Secure user roles access'],
      results: ['35% increase in conversion rates', 'Eliminated excel database redundancy', 'Zero missed follow-up tasks'],
      timeline: ['Week 1: Workflow maps', 'Week 2-3: Database models & REST hooks', 'Week 4: Dashboard layout coding', 'Week 5: WhatsApp Webhook sync'],
      clientReview: {
        text: 'All our sales logs are now in one clear visual space. Lead closure speeds are up by 50%!',
        author: 'Kunal Sen, Operations Manager at Vanguard Group'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'restaurant-qr',
      title: 'Truffle Bistro QR Ordering',
      category: 'Restaurant',
      tags: ['React', 'Firebase', 'Tailwind', 'Websockets'],
      duration: '21 Days',
      teamSize: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      problem: 'Staff shortages during rush hours led to long ordering delays and dissatisfied diner reviews.',
      solution: 'We launched a contactless table QR ordering system allowing patrons to order meals direct to kitchens via mobile browsers.',
      features: ['Digital QR menu browser', 'Instant table cart checkout', 'Live kitchen KDS display feeds', 'Direct UPI payment checkout'],
      results: ['Table turnover speeds up 25%', '0% commissions saved on orders', 'Diner checkout rating up by 1.5 stars'],
      timeline: ['Week 1: Menu schema & QR setup', 'Week 2: Cart logic & UPI payment gateway', 'Week 3: Kitchen dashboard & Live Sync'],
      clientReview: {
        text: 'Our table turnover is faster than ever. Customers love scanning the menu and ordering in seconds.',
        author: 'Chef Sameer Alvi, Owner of Truffle Bistro'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'gym-fitness-app',
      title: 'Luxe Fitness App Portal',
      category: 'Mobile App',
      tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
      duration: '50 Days',
      teamSize: 3,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      problem: 'Gym members had no visual way to monitor daily attendance, renew packages, or track trainer schedules.',
      solution: 'We engineered a cross-platform React Native app featuring biometric check-in barcodes, training sessions booking, and diet logs.',
      features: ['Biometric entry check-in', 'Trainer session slots scheduler', 'Diet & progress log widgets', 'Secure subscription renewal'],
      results: ['30% increase in member renewals', 'Front desk queue wait reduced by 70%', 'Direct client engagement booster'],
      timeline: ['Week 1: App UI blueprints', 'Week 2-3: Kotlin/Swift native bridge logic', 'Week 4-6: Session scheduling APIs', 'Week 7: App Store release'],
      clientReview: {
        text: 'The check-in code feature alone has saved our reception staff hours. Beautiful app layout.',
        author: 'Rohan Sharma, Director at Luxe Fitness'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'real-estate-portal',
      title: 'Skyline Real Estate Search',
      category: 'Business',
      tags: ['React', 'Google Maps SDK', 'MongoDB', 'Tailwind'],
      duration: '35 Days',
      teamSize: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      problem: 'Clients had to browse hundreds of unorganized flat listings without a proper location search tool.',
      solution: 'We launched a real estate directory with advanced location maps filtering, price slides, and automated agent alerts.',
      features: ['Map property pins locator', 'Price range filtering sliders', 'Agent contact scheduler', 'Property upload panels'],
      results: ['55% boost in buyer leads volume', 'Property uploads reduced to 1 min', 'Intuitive visual map interface'],
      timeline: ['Week 1: Leaflet map mockups', 'Week 2: Advanced search filters coding', 'Week 3: Agent alert integrations', 'Week 5: Launch'],
      clientReview: {
        text: 'Our agents are receiving double the inquiries. The map pins feature is exceptionally smooth.',
        author: 'Mrs. Riya Sen, Owner at Skyline Realty'
      },
      liveLink: '#',
      github: '#'
    },
    {
      id: 'saas-landing-page',
      title: 'Zenith SaaS Campaign Funnel',
      category: 'Landing Page',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Webhooks'],
      duration: '14 Days',
      teamSize: 1,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      problem: 'Their old landing page had boring layouts, converting only 2.1% of Google Ad traffic into active signups.',
      solution: 'We designed a high-converting, single-page SaaS landing page featuring animated tech mockups and interactive FAQ cards.',
      features: ['Glassmorphic hero cards', 'Interactive FAQ accordion', 'Lead capture webhook integrations', 'Under 1.2s loading speeds'],
      results: ['Conversion rate rose to 6.8%', '3x increase in weekly registrations', '100% responsive screens layouts'],
      timeline: ['Week 1: Figma wireframing & copy', 'Week 2: Framer Motion layout animations & webhooks'],
      clientReview: {
        text: 'Outstanding conversion numbers immediately! The animations are clean and loading is lightning fast.',
        author: 'Amit Patel, CEO of Zenith Fintech'
      },
      liveLink: '#',
      github: '#'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  // Take the first project as the "Featured Project Spotlight"
  const featuredProject = projects[0];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    { q: "How long does a complete custom ERP project take?", a: "A custom ERP system usually takes between 40 to 60 days from requirement auditing to database scaling and cloud launch." },
    { q: "Can we review the progress during development?", a: "Yes. We host your code on temporary staging environments (Vercel/AWS) and update them weekly for your feedback." },
    { q: "Do you offer post-launch maintenance?", a: "Absolutely. We provide dedicated support packages managing backups, security patches, and minor tweaks monthly." },
    { q: "Will the codebase be completely owned by us?", a: "Yes. After final release, 100% ownership and full source code access are transferred to your team." }
  ];

  return (
    <>
      <Helmet>
        <title>Case Study Portfolio | Custom Web & SaaS Portals - Rahimax</title>
        <meta name="description" content="Explore our premium portfolio. View detailed case studies of custom ERPs, mobile app designs, and high-performance React stores." />
      </Helmet>

      {/* ① Hero Section: Starts exactly below fixed navbar */}
      <section className="py-24 relative overflow-hidden bg-bg-light border-b border-border-light mt-[88px]">
        <div 
          className="absolute inset-x-0 bottom-0 top-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/70 to-bg-light pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Premium Showcase
            </span>
            <h1 className="text-primary font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              Our Work Speaks <br />
              Louder Than Words.
            </h1>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-lg leading-relaxed">
              Explore our portfolio of premium websites, responsive web applications, and custom enterprise software engineered to scale your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
              >
                View Projects
              </a>
              <Link 
                to="/contact"
                className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] dark:bg-bg-card"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Visual Mockups */}
          <div className="lg:col-span-5 relative hidden lg:block h-[340px]">
            <div className="absolute top-2 left-6 bg-white/95 dark:bg-zinc-900/90 border border-border-light p-5 rounded-2xl shadow-xl w-64 text-left rotate-[-4deg] backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-wider text-text-gray font-bold">Hospital ERP</span>
              <h4 className="font-heading font-extrabold text-xs text-primary mt-1">🩺 Patient Registry Dashboard</h4>
              <div className="mt-4 flex items-center justify-between text-[10px]">
                <span className="text-emerald-500 font-bold">● Live Syncing</span>
                <span className="text-primary font-bold">14,289 Logs</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-zinc-900/90 border border-border-light p-5 rounded-2xl shadow-2xl w-60 text-left rotate-[3deg] backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-wider text-text-gray font-bold">Checkout Core</span>
              <h4 className="font-heading font-extrabold text-xs text-primary mt-1">🛒 Coupon RAHIMAX50</h4>
              <div className="mt-4 flex justify-between items-center text-[10px] font-bold text-emerald-500 bg-emerald-500/10 p-1.5 rounded">
                <span>Applied</span>
                <span>Save 50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② Portfolio Statistics */}
      <section className="py-12 bg-bg-surface border-b border-border-light px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-bg-card border border-border-light/65 rounded-2xl shadow-sm">
            <span className="block font-heading font-black text-2xl lg:text-3xl text-secondary">150+</span>
            <span className="block text-[10px] text-text-gray uppercase tracking-wider font-extrabold mt-1">Projects Delivered</span>
          </div>
          <div className="p-4 bg-bg-card border border-border-light/65 rounded-2xl shadow-sm">
            <span className="block font-heading font-black text-2xl lg:text-3xl text-secondary">98%</span>
            <span className="block text-[10px] text-text-gray uppercase tracking-wider font-extrabold mt-1">Client Satisfaction</span>
          </div>
          <div className="p-4 bg-bg-card border border-border-light/65 rounded-2xl shadow-sm">
            <span className="block font-heading font-black text-2xl lg:text-3xl text-secondary">40+</span>
            <span className="block text-[10px] text-text-gray uppercase tracking-wider font-extrabold mt-1">Industries Served</span>
          </div>
          <div className="p-4 bg-bg-card border border-border-light/65 rounded-2xl shadow-sm">
            <span className="block font-heading font-black text-2xl lg:text-3xl text-secondary">12+</span>
            <span className="block text-[10px] text-text-gray uppercase tracking-wider font-extrabold mt-1">Technologies</span>
          </div>
        </div>
      </section>

      {/* ③ Category Filter: Horizontal Scroll Pills */}
      <section id="projects" className="py-16 bg-bg-surface px-6 scroll-mt-24 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-bg-light border border-border-light text-text-gray hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ④ Featured Project Spotlight (Renders when filter is 'All') */}
          {filter === 'All' && featuredProject && (
            <div className="mb-16 text-left max-w-5xl mx-auto">
              <span className="text-secondary text-[9px] uppercase tracking-[0.2em] font-extrabold mb-3.5 block">
                ⭐ Featured Case Study
              </span>
              <div className="group bg-bg-card border border-border-light rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
                {/* Image side */}
                <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-border-light relative">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* Content side */}
                <div className="lg:col-span-5 flex flex-col justify-between p-2">
                  <div>
                    <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                      {featuredProject.category}
                    </span>
                    <h3 className="font-heading font-black text-xl md:text-2xl text-primary mt-4 leading-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-text-gray text-xs sm:text-sm font-body mt-3 leading-relaxed line-clamp-4">
                      {featuredProject.problem}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {featuredProject.tags.map((t, idx) => (
                        <span key={idx} className="bg-bg-light border border-border-light text-text-gray text-[10px] font-bold px-2.5 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-6 text-xs text-text-gray font-semibold">
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-secondary" /> {featuredProject.duration}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-secondary" /> Team: {featuredProject.teamSize}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border-light/50 flex flex-wrap gap-3 items-center justify-between">
                    <button 
                      onClick={() => setSelectedProject(featuredProject)}
                      className="bg-secondary hover:bg-secondary/95 text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a 
                      href={featuredProject.liveLink}
                      className="text-primary hover:text-secondary font-bold text-xs flex items-center gap-1 border border-border-light px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ⑤ All Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.id}
                className="group bg-bg-card border border-border-light rounded-[28px] overflow-hidden shadow-md hover:shadow-xl hover:border-secondary/25 transition-all duration-300 flex flex-col justify-between text-left relative"
              >
                {/* Thumbnail image with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border-light">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                        {p.category}
                      </span>
                      <div className="flex gap-3 text-[10px] text-text-gray font-semibold">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" /> {p.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3 text-secondary" /> Team: {p.teamSize}</span>
                      </div>
                    </div>

                    <h4 className="font-heading font-extrabold text-sm text-primary mt-4 group-hover:text-secondary transition-colors duration-300">
                      {p.title}
                    </h4>
                    <p className="text-text-gray text-[11px] font-body mt-2 leading-relaxed line-clamp-3">
                      {p.problem}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="bg-bg-light text-text-gray text-[9px] font-bold px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-light/50 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedProject(p)}
                      className="text-secondary font-bold text-xs uppercase tracking-wider hover:text-secondary/85 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a 
                      href={p.liveLink}
                      className="text-text-gray hover:text-primary font-bold text-xs flex items-center gap-1"
                    >
                      <Monitor className="w-3.5 h-3.5 text-secondary" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-text-gray text-xs italic py-16">No custom projects match the selected category filters.</p>
          )}
        </div>
      </section>

      {/* ⑥ Interactive Case Study Detail Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in">
          <div className="bg-bg-card border border-border-light rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10 relative text-left">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-primary rounded-full cursor-pointer transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            <div>
              {/* Category */}
              <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedProject.category} Case Study
              </span>

              {/* Title */}
              <h2 className="font-heading font-black text-xl md:text-3xl text-primary mt-4 mb-6 leading-tight">
                {selectedProject.title}
              </h2>

              {/* Banner Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 border border-border-light mb-8">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Grid: Details Column */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                
                {/* Left Side: Overview, Challenge, Solution */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">
                      The Challenge
                    </h4>
                    <p className="text-text-gray text-xs sm:text-sm font-body leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">
                      Our Engineered Solution
                    </h4>
                    <p className="text-text-gray text-xs sm:text-sm font-body leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">
                      Key Features Built
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-text-gray">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Specifications & Metrics */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Tech Specs */}
                  <div className="bg-bg-light border border-border-light p-5 rounded-2xl">
                    <h5 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-4 border-b pb-2">
                      Technical Specs
                    </h5>
                    <div className="space-y-3 text-xs font-semibold text-text-gray">
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="text-primary">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Size:</span>
                        <span className="text-primary">{selectedProject.teamSize} Developers</span>
                      </div>
                      <div className="border-t pt-3">
                        <span className="block mb-2">Technologies Used:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag, idx) => (
                            <span key={idx} className="bg-white dark:bg-zinc-950 border border-border-light text-[9px] font-bold px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results metrics */}
                  <div className="bg-emerald-500/10 border border-emerald-500/15 p-5 rounded-2xl">
                    <h5 className="font-heading font-bold text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-4 border-b pb-2 border-emerald-500/20">
                      Results Delivered
                    </h5>
                    <ul className="space-y-2 text-xs text-emerald-600 dark:text-emerald-500 font-semibold">
                      {selectedProject.results.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Timeline Flow */}
              <div className="mb-8 bg-bg-light border border-border-light p-6 rounded-2xl">
                <h4 className="font-heading font-extrabold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-4">
                  Development Process Walkthrough
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  {selectedProject.timeline.map((step, idx) => (
                    <div key={idx} className="p-3 bg-bg-card border border-border-light rounded-xl flex items-start gap-2">
                      <span className="font-heading font-black text-secondary">{idx+1}</span>
                      <span className="text-[11px] text-text-gray font-semibold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Review */}
              <div className="bg-bg-light border border-border-light p-6 rounded-2xl mb-8 relative">
                <MessageSquare className="absolute top-5 right-5 w-8 h-8 text-secondary/10" />
                <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider border-b pb-2 mb-3">
                  Client Review
                </h4>
                <div className="flex gap-1.5 mb-2 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-text-gray text-xs italic font-body leading-relaxed">
                  "{selectedProject.clientReview.text}"
                </p>
                <span className="block text-[10px] font-bold text-primary mt-3 uppercase tracking-wider">
                  — {selectedProject.clientReview.author}
                </span>
              </div>

              {/* CTAs */}
              <div className="border-t pt-6 flex flex-wrap gap-3 items-center justify-between">
                <div className="flex gap-3">
                  <a 
                    href={selectedProject.liveLink}
                    className="bg-secondary hover:bg-secondary/95 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                  <a 
                    href={selectedProject.github}
                    className="bg-primary hover:bg-primary/95 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-primary font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ⑨ Client Review section */}
      <section className="py-20 bg-bg-light border-y border-border-light/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Social Proof
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Testimonials from Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm flex flex-col justify-between h-[210px]">
              <p className="text-text-gray text-xs italic font-body leading-relaxed">
                "Rahimax transformed our clinic billing operations. Wait times dropped significantly and doctor schedulers run flawlessly. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-xs">M</span>
                <div>
                  <h5 className="font-bold text-xs text-primary">Dr. A. K. Roy</h5>
                  <span className="text-[9px] text-text-gray block uppercase tracking-wider font-semibold">City Health Clinic</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm flex flex-col justify-between h-[210px]">
              <p className="text-text-gray text-xs italic font-body leading-relaxed">
                "Our retail checkout speed is under a second! Cart drops reduced immediately by 40% after launching the headless React e-store."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-xs">A</span>
                <div>
                  <h5 className="font-bold text-xs text-primary">Rohit Deshmukh</h5>
                  <span className="text-[9px] text-text-gray block uppercase tracking-wider font-semibold">Aura Outfits</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm flex flex-col justify-between h-[210px]">
              <p className="text-text-gray text-xs italic font-body leading-relaxed">
                "Outstanding school administration ERP! Automating report compilation saved our staff dozens of manual hours weekly."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-xs">S</span>
                <div>
                  <h5 className="font-bold text-xs text-primary">Mrs. Shradha Verma</h5>
                  <span className="text-[9px] text-text-gray block uppercase tracking-wider font-semibold">Zenith Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ Technology Used Panel */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Core Tech Stacks
            </span>
            <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight">
              Technologies Used in Deliveries
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Material UI', 'Framer Motion'].map((tech) => (
              <span key={tech} className="bg-bg-light border border-border-light/75 px-5 py-3 rounded-2xl font-bold text-xs text-primary shadow-sm hover:border-secondary/30 transition-all flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-secondary" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ⑩ Development Process Timeline */}
      <section className="py-20 bg-bg-light border-b border-border-light/50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Our Timeline
          </span>
          <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight mb-16">
            Methodical Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-left">
            {[
              { step: "01", name: "Requirements", desc: "Understand business workflows and audit specifications." },
              { step: "02", name: "Research", desc: "Analyze industry structures and choose database models." },
              { step: "03", name: "Design", desc: "Figma wireframe layouts built for conversions." },
              { step: "04", name: "Development", desc: "Clean React code engineering utilizing Git checks." },
              { step: "05", name: "Testing", desc: "Automate speed tests and penetration audits." },
              { step: "06", name: "Launch", desc: "Deploy onto high-performance cloud networks (AWS/Vercel)." }
            ].map((p, idx) => (
              <div key={idx} className="bg-bg-card border border-border-light rounded-2xl p-5 hover:border-secondary/25 transition-all flex flex-col justify-between h-[170px] shadow-sm">
                <div>
                  <span className="text-[10px] font-heading font-black text-secondary block mb-2">{p.step}</span>
                  <h4 className="font-heading font-bold text-xs text-primary mb-1">{p.name}</h4>
                  <p className="text-text-gray text-[9px] leading-relaxed font-body">{p.desc}</p>
                </div>
                <div className="h-[1.5px] bg-secondary/15 w-full mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑪ Awards & Achievements Section */}
      <section className="py-20 bg-bg-surface px-6 border-b border-border-light/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-card border border-border-light p-6 rounded-[24px] shadow-sm text-left flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm text-primary">Top Rated Agency</h4>
              <p className="text-text-gray text-[10px] font-body mt-1 leading-normal">Recognized as a leading developer team on freelance and search platforms.</p>
            </div>
          </div>

          <div className="bg-bg-card border border-border-light p-6 rounded-[24px] shadow-sm text-left flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm text-primary">5 Star Verified Feedback</h4>
              <p className="text-text-gray text-[10px] font-body mt-1 leading-normal">Maintained 5-star ratings across Google and portfolio reviews platforms.</p>
            </div>
          </div>

          <div className="bg-bg-card border border-border-light p-6 rounded-[24px] shadow-sm text-left flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm text-primary">On-Time Project Launches</h4>
              <p className="text-text-gray text-[10px] font-body mt-1 leading-normal">Achieved a 100% on-time deployment record across all 150+ projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑫ FAQs Section */}
      <section className="py-20 bg-bg-light px-6 border-b border-border-light/50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            FAQs
          </span>
          <h2 className="text-primary font-heading font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-left mt-8">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`rounded-xl border transition-all duration-300 bg-bg-card overflow-hidden ${
                  isOpen ? 'border-secondary/40 shadow-md' : 'border-border-light/75'
                }`}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group"
                  >
                    <span className={`font-heading font-bold text-xs md:text-sm transition-colors ${
                      isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                    }`}>{faq.q}</span>
                    <span className={`p-1 rounded-full border transition-all ${
                      isOpen ? 'bg-secondary text-white border-secondary' : 'bg-bg-surface border-border-light text-primary'
                    }`}>
                      {isOpen ? <X className="w-3 h-3" /> : <Plus iconName="plus" className="w-3 h-3" />}
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

      {/* ⑬ Final CTA */}
      <section className="py-24 bg-bg-surface px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3.5 py-1.5 bg-secondary/10 rounded-full inline-block">
            Build With Us
          </span>
          <h2 className="text-primary font-heading font-black text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Get an enterprise-ready system built by expert custom engineers within weeks. Propose your requirements to our team.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-xl text-xs shadow-lg uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Book Consultation
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-border-light hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-xl text-xs shadow-sm uppercase tracking-wider transition-all hover:scale-[1.02] dark:bg-bg-card"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Simple Plus icon helper component
const Plus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// Simple Github icon helper component
const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default Portfolio;
