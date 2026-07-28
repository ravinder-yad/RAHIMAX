import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { 
  ArrowRight, Check, Star, Plus, Minus, X, 
  Layers, Settings, Laptop, ShieldCheck, Flame, Users2, CheckCircle,
  Briefcase, ShoppingBag, GraduationCap, HeartPulse, Dumbbell, Utensils,
  Globe, Smartphone, Sparkles, BookOpen, BarChart3, Database, Cloud, Terminal, Eye, Cpu
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { servicesData } from '../../data/servicesData';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { projectsData } from '../../data/mockData';

// Zod Schema for Home Contact Form
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  company: z.string().optional(),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Home = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeShowcase, setActiveShowcase] = useState(0); // 0: School, 1: Hospital, 2: CRM
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: ""
    }
  });

  const onContactSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form submitted data:", data);
    toast.success("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.", {
      duration: 5000,
      position: 'top-center',
      style: {
        background: '#0F172A',
        color: '#FFFFFF',
        borderRadius: '16px',
        fontFamily: 'Poppins'
      }
    });
    reset();
  };

  // Stats Data
  const stats = [
    { value: 150, label: t('stats_completed'), suffix: "+" },
    { value: 98, label: t('stats_satisfaction'), suffix: "%" },
    { value: 24, label: t('stats_support'), suffix: "x7" },
    { value: 5, label: t('stats_experience'), suffix: "+" }
  ];

  // Trusted Brands list
  const trustedBrands = ["Google", "Microsoft", "Amazon", "Adobe", "Spotify", "Meta", "Stripe", "Vercel"];

  // Industries list with custom icons
  const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-5 h-5" /> },
    { name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Restaurant", icon: <Utensils className="w-5 h-5" /> },
    { name: "Gym", icon: <Dumbbell className="w-5 h-5" /> },
    { name: "Travel", icon: <Globe className="w-5 h-5" /> },
    { name: "Finance", icon: <Layers className="w-5 h-5" /> },
    { name: "Real Estate", icon: <Laptop className="w-5 h-5" /> }, // Fallback icon
    { name: "Startup", icon: <Flame className="w-5 h-5" /> },
    { name: "NGO", icon: <Users2 className="w-5 h-5" /> },
    { name: "Manufacturing", icon: <Settings className="w-5 h-5" /> }
  ];

  // Technologies Stack Data
  const techStack = [
    { name: "React", icon: <Sparkles className="w-5 h-5 text-sky-400" /> },
    { name: "Next.js", icon: <Layers className="w-5 h-5 text-white" /> },
    { name: "Node.js", icon: <Terminal className="w-5 h-5 text-green-400" /> },
    { name: "Express", icon: <Settings className="w-5 h-5 text-slate-400" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 text-emerald-500" /> },
    { name: "Tailwind", icon: <Laptop className="w-5 h-5 text-cyan-400" /> },
    { name: "Firebase", icon: <Flame className="w-5 h-5 text-amber-500" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 text-orange-400" /> },
    { name: "Docker", icon: <Cpu className="w-5 h-5 text-blue-400" /> }
  ];

  // Testimonials list
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Founder, Apex Analytics",
      content: "Rahimax delivered our financial dashboard 2 weeks ahead of schedule. The UI look and feel is extremely premium—closely matching our design benchmarks like Stripe. Our users love the smooth layouts and the performance is incredible.",
      rating: 5,
      logo: "APEX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 2,
      name: "Dr. Ananya Goel",
      role: "Director, CareHealth Clinics",
      content: "Our hospital ERP appointment scheduling became 100% automated after launching our new portal with Rahimax. Patients love the ease of scheduling diagnostic tests, and our staff saves hours of manual queue booking daily.",
      rating: 5,
      logo: "CARE",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "Operations Head, Zenith Academy",
      content: "We migrated our school management to Rahimax's custom School ERP system. The interface is intuitive, payroll tasks are automated, and our teachers adapted to the new digital processes in just a few days. High-end delivery!",
      rating: 5,
      logo: "ZENITH",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 4,
      name: "Sophia Lawrence",
      role: "Product Lead, Aura Beauty",
      content: "Our e-commerce store conversion rates increased by 35% after Rahimax redesigned the checkout flows and product gallery. The motion effects are smooth, checkout is ultra-fast, and it feels incredibly luxurious.",
      rating: 5,
      logo: "AURA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 5,
      name: "Rahul Verma",
      role: "CEO, BuildFast SaaS",
      content: "Excellent work on our developer landing page. The loading speed score is 99 on PageSpeed Insights and conversions jumped from 8% to 15% in the first week. Will definitely hire Rahimax again for our next project.",
      rating: 5,
      logo: "BFAST",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Marketing Head, FitLife Gyms",
      content: "Rahimax created our brand catalog and booking portal. Members now book sessions and handle subscriptions via mobile in seconds. The custom integrations with Razorpay make payments effortless.",
      rating: 5,
      logo: "FITLIFE",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 7,
      name: "David Miller",
      role: "CTO, RealState3D",
      content: "The property search engine with 3D map views designed by Rahimax exceeded our expectations. The codebase is clean, well-documented, and incredibly modular. They work extremely professionally.",
      rating: 5,
      logo: "REAL3D",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 8,
      name: "Neha Sen",
      role: "Co-Founder, EduLearn Interactive",
      content: "We launched our kid learning portal with Rahimax. The gamified milestones and children reward panels are animated beautifully. Parents and children are highly satisfied with the interface.",
      rating: 5,
      logo: "EDULEARN",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 9,
      name: "Marcus Thorne",
      role: "Founder, NeoCafe Chains",
      content: "Rahimax created our online loyalty program and qr menu ordering portal. It transformed our offline operations and speeded up guest checkouts during peak rush hours. Absolute game changer.",
      rating: 5,
      logo: "NEOCAFE",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 10,
      name: "Aisha Khan",
      role: "Director, Hope NGO",
      content: "Working with Rahimax was a breeze. They designed our donation gateway and campaign showcase portal. Our non-profit saw a 50% rise in online donor support due to the trusted interface.",
      rating: 5,
      logo: "HOPE",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  // Pricing Packages
  const packages = [
    {
      name: "Startup Launch",
      price: "₹4,999",
      originalPrice: "₹19,999",
      desc: "Perfect for establishing a premium brand presence with clean layout configurations.",
      features: [
        "Up to 5 Custom React Pages",
        "Fully Mobile-Responsive Layout",
        "Tailwind CSS / MUI Styling",
        "Contact Form with Zod Validation",
        "Speed Optimized (Under 2s)",
        "Basic Technical SEO Setup",
        "1 Month Deployment Support"
      ]
    },
    {
      name: "Growth Professional",
      price: "₹12,999",
      originalPrice: "₹49,999",
      desc: "Ideal for growing businesses requiring CMS integration, dynamic blogs, and checkout stores.",
      features: [
        "Up to 10 Custom React Pages",
        "CMS Integration (Strapi/WordPress)",
        "Premium Framer Motion Effects",
        "Stripe or Razorpay Payments",
        "Dynamic Blog or Store Pages",
        "Full SEO & Analytics Suite",
        "3 Months Dedicated Support",
        "WhatsApp Live Chat Widget"
      ],
      popular: true
    },
    {
      name: "Enterprise ERP",
      price: "Custom Quote",
      originalPrice: "",
      desc: "For institutional systems requiring secure roles management, school/hospital ERPs, and portals.",
      features: [
        "Unlimited Custom Dashboard Panels",
        "Custom Database Structure",
        "Role-Based Access Control",
        "Complex Charts & Telemetry",
        "Automated PDF Invoice Generators",
        "Hospital/School Management Modules",
        "Priority Uptime Maintenance",
        "Custom APIs & Integrations"
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      id: "faq-1",
      question: "What is your project development process?",
      answer: "We follow a 6-stage process: Requirement Analysis, Research, UI Design (Figma), Development (React/Tailwind), testing, and finally Launch. Each step is signed off by you."
    },
    {
      id: "faq-2",
      question: "Do you integrate custom payment gateways?",
      answer: "Yes, we support and integrate various secure payment gateways including Stripe, Razorpay, PayPal, and PayU, depending on your business requirements and target markets."
    },
    {
      id: "faq-3",
      question: "Can you build custom school or hospital ERPs?",
      answer: "Absolutely! We specialize in building complex, roles-based School ERPs and Hospital Patient management dashboards tailored to your organizational workflows."
    },
    {
      id: "faq-4",
      question: "Do you provide search engine optimization (SEO)?",
      answer: "All our websites are built with semantic HTML and technical SEO best-practices (fast loading speed, meta tags, schema markup). We also offer monthly dedicated SEO campaigns to improve your keyword rankings."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rahimax Pro Agency | High-End Web Applications & ERP Solutions</title>
        <meta name="description" content="We engineer premium digital solutions, custom SaaS dashboards, school & hospital ERP systems, and Stripe-level web applications with Apple-like aesthetics." />
      </Helmet>
      
      {/* Toast Alert Provider */}
      <Toaster />

      {/* 3️⃣ Hero Section (WOW Section) */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-bg-light px-6 pt-2 pb-20">
        {/* Decorative Ambient Aurora Gradients */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/10 dark:bg-accent/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-semibold text-xs tracking-[0.25em] uppercase bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
                {t('hero_tagline')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-primary font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-tight md:leading-[1.1] text-balance"
            >
              {t('hero_title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t('hero_title_2')}
              </span>{' '}
              {t('hero_title_3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-text-gray font-body text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              {t('hero_desc')}
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-btn-primary-bg text-btn-primary-text font-semibold px-8 py-4 rounded-xl hover:bg-btn-primary-hover hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-transparent"
              >
                <span>{t('hero_cta_start')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-btn-secondary-bg border border-btn-secondary-border text-btn-secondary-text font-semibold px-8 py-4 rounded-xl hover:bg-btn-secondary-hover transition-all duration-300 flex items-center justify-center"
              >
                {t('hero_cta_work')}
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Premium Dashboard / CRM Mockup visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[440px] h-[440px] flex items-center justify-center">
              {/* Ambient radial mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-secondary/20 to-accent/20 dark:from-secondary/30 dark:to-accent/15 rounded-full blur-[80px] animate-pulse pointer-events-none" />

              {/* Main Dashboard Panel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full glass-card rounded-2xl border border-white/10 dark:border-border-light p-5 shadow-2xl relative overflow-hidden backdrop-blur-xl z-10"
              >
                {/* Window header controls */}
                <div className="flex items-center justify-between pb-4 border-b border-border-light/40 mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-text-gray tracking-wider">
                    {t('dashboard_title')}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Metrics header */}
                <div className="mb-6">
                  <span className="text-[10px] font-semibold text-text-gray uppercase tracking-widest block">{t('dashboard_growth')}</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading font-extrabold text-3xl text-primary">$48,920</span>
                    <span className="text-xs font-bold text-success flex items-center bg-success/15 px-2 py-0.5 rounded">+12.4%</span>
                  </div>
                </div>

                {/* SVG wave chart line animation */}
                <div className="h-32 w-full relative mb-4">
                  <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hero-chart-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(148, 163, 184, 0.08)" strokeDasharray="4 4" />
                    <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(148, 163, 184, 0.08)" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(148, 163, 184, 0.08)" strokeDasharray="4 4" />

                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M0,110 C50,105 80,45 120,65 C160,85 190,25 240,45 C290,65 320,15 400,35"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,110 C50,105 80,45 120,65 C160,85 190,25 240,45 C290,65 320,15 400,35 L400,120 L0,120 Z"
                      fill="url(#hero-chart-glow)"
                    />
                  </svg>
                </div>

                {/* Technical grids */}
                <div className="grid grid-cols-3 gap-3 border-t border-border-light/40 pt-4 text-xs font-semibold">
                  <div>
                    <span className="text-[9px] text-text-gray uppercase tracking-wider block">{t('dashboard_conv')}</span>
                    <span className="text-primary font-bold mt-0.5 block">4.82%</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-text-gray uppercase tracking-wider block">{t('dashboard_speed')}</span>
                    <span className="text-success font-bold mt-0.5 block">0.4s</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-text-gray uppercase tracking-wider block">{t('dashboard_seo')}</span>
                    <span className="text-primary font-bold mt-0.5 block">100/100</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 z-20 glass-card px-4 py-3 rounded-2xl border border-white/20 dark:border-border-light shadow-xl flex items-center space-x-3 backdrop-blur-xl scale-95"
              >
                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-extrabold text-[11px] text-primary">{t('float_web')}</h5>
                  <p className="text-[9px] text-text-gray font-body font-bold mt-0.5">{t('float_ui')}</p>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -right-4 z-20 glass-card px-4 py-3 rounded-2xl border border-white/20 dark:border-border-light shadow-xl flex items-center space-x-3 backdrop-blur-xl scale-95"
              >
                <div className="w-8 h-8 rounded-xl bg-success/15 flex items-center justify-center text-success">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-heading font-extrabold text-[11px] text-primary">{t('float_seo')}</h5>
                  <p className="text-[9px] text-text-gray font-body font-bold mt-0.5">{t('float_load')}</p>
                </div>
              </motion.div>

              {/* Live Programmatic Cursor */}
              <motion.div
                animate={{
                  x: [40, 260, 120, 200, 40],
                  y: [320, 150, 280, 90, 320]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 z-30 pointer-events-none"
              >
                <svg className="w-5 h-5 text-secondary filter drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 3v16l4.5-4.5h7.5L4.5 3z" stroke="white" strokeWidth="1.5" />
                </svg>
                <motion.div 
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="ml-4 mt-2 px-2.5 py-1 rounded bg-secondary text-[8px] font-bold uppercase tracking-wider text-white shadow-lg whitespace-nowrap"
                >
                  Rahimax Builder
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>


      {/* 🔥 Unique Section: Live Project Showcase */}
      <section className="py-24 bg-bg-surface border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Live Showcase
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('live_showcase_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('live_showcase_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
            {/* Left Column: Interactive Cards list */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { title: t('live_school_title'), desc: t('live_school_desc'), id: 0, tag: "School ERP", icon: <GraduationCap className="w-5 h-5" /> },
                { title: t('live_hospital_title'), desc: t('live_hospital_desc'), id: 1, tag: "Clinic Portal", icon: <HeartPulse className="w-5 h-5" /> },
                { title: t('live_crm_title'), desc: t('live_crm_desc'), id: 2, tag: "SaaS CRM", icon: <BarChart3 className="w-5 h-5" /> }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveShowcase(item.id)}
                  className={`p-6 rounded-[24px] border cursor-pointer transition-all duration-300 text-left relative overflow-hidden flex gap-4 items-start ${
                    activeShowcase === item.id 
                      ? 'bg-bg-card border-secondary border-l-4 border-l-secondary ring-2 ring-secondary/5 shadow-lg animate-fade-in' 
                      : 'bg-transparent border-border-light hover:border-text-gray/20 hover:bg-bg-card/40'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    activeShowcase === item.id ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 dark:bg-bg-surface text-text-gray'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <h4 className="font-heading font-extrabold text-lg text-primary mt-3 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-gray text-xs leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Mini Interactive Preview Block in Mac Browser style */}
            <div className="lg:col-span-7 bg-bg-card border border-border-light rounded-[24px] shadow-2xl flex flex-col justify-between overflow-hidden relative min-h-[460px]">
              {/* Mac Browser Header bar */}
              <div className="bg-slate-50 dark:bg-bg-surface h-12 px-5 flex items-center justify-between border-b border-border-light/80 select-none shrink-0">
                {/* Dots */}
                <div className="flex space-x-1.5 shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#22C55E]" />
                </div>
                {/* URL Bar */}
                <div className="bg-white dark:bg-bg-card border border-border-light rounded-lg px-4 py-1.5 text-[10px] text-text-gray font-mono font-medium truncate max-w-sm w-full mx-4 text-center">
                  {activeShowcase === 0 ? 'https://zenith-erp.rahimax.com/dashboard' : activeShowcase === 1 ? 'https://medicare.rahimax.com/portal' : 'https://fitflow-crm.rahimax.com/telemetry'}
                </div>
                {/* Status indicator */}
                <div className="w-12 flex justify-end shrink-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-md animate-pulse">Live</span>
                </div>
              </div>

              {/* Browser Body Panel */}
              <div className="p-8 flex-grow relative flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[85px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  {activeShowcase === 0 && (
                    <motion.div 
                      key="school-preview"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* School Top grid stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Students Enrolled</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">10,480</span>
                            <span className="text-[9px] text-success font-bold">+12%</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Fee Invoices Collected</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-emerald-500">98.2%</span>
                            <span className="text-[9px] text-text-gray font-bold">goal</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Active Staff Payroll</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">142</span>
                            <span className="text-[9px] text-text-gray font-bold">staff</span>
                          </div>
                        </div>
                      </div>

                      {/* Mock Student Grid Panel */}
                      <div className="bg-bg-surface border border-border-light/40 rounded-2xl p-5 space-y-4 font-semibold text-primary text-left">
                        <div className="flex items-center justify-between border-b border-border-light/20 pb-2.5">
                          <span className="text-[10px] text-text-gray uppercase tracking-widest">Active Classes & Attendance</span>
                          <span className="text-[10px] text-secondary font-bold hover:underline cursor-pointer">View All</span>
                        </div>
                        
                        <div className="space-y-2.5">
                          <div className="flex justify-between items-center py-2 px-3 bg-bg-card rounded-xl border border-border-light/30">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center font-heading text-[10px] text-secondary font-extrabold">AM</div>
                              <div>
                                <h5 className="text-[11px] font-bold">Aarav Mehta</h5>
                                <p className="text-[9px] text-text-gray">Grade 10-A • Roll 24</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-success bg-success/15 px-2.5 py-1 rounded-lg">Present</span>
                          </div>

                          <div className="flex justify-between items-center py-2 px-3 bg-bg-card rounded-xl border border-border-light/30">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center font-heading text-[10px] text-orange-500 font-extrabold">NG</div>
                              <div>
                                <h5 className="text-[11px] font-bold">Neha Gupta</h5>
                                <p className="text-[9px] text-text-gray">Grade 12-C • Roll 12</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-success bg-success/15 px-2.5 py-1 rounded-lg">Present</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeShowcase === 1 && (
                    <motion.div 
                      key="hospital-preview"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Hospital Top grid stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Admitted Today</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">42 Patients</span>
                            <span className="text-[9px] text-text-gray font-bold">today</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">ER Queue Time</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-red-500">4 Mins</span>
                            <span className="text-[9px] text-text-gray font-bold">average</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">On-Call Staff</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">18 Doctors</span>
                            <span className="text-[9px] text-success font-bold">active</span>
                          </div>
                        </div>
                      </div>

                      {/* Mock Diagnostic pulse monitor */}
                      <div className="bg-bg-surface border border-border-light/40 rounded-2xl p-5 space-y-4 font-semibold text-primary text-left">
                        <div className="flex items-center justify-between border-b border-border-light/20 pb-2.5">
                          <span className="text-[10px] text-text-gray uppercase tracking-widest">Diagnostic Pulse (Real-Time Patient Monitor)</span>
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        </div>
                        
                        {/* Heart rate SVG path wave animation */}
                        <div className="h-14 bg-bg-card rounded-xl border border-border-light/30 flex items-center justify-center p-3 overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 300 40" preserveAspectRatio="none">
                            <path
                              d="M0,20 L40,20 L50,10 L60,30 L70,20 L120,20 L130,5 L140,35 L150,20 L200,20 L210,10 L220,30 L230,20 L280,20 L290,5 L300,35 L310,20 L350,20 L360,10 L370,30 L380,20 L430,20 L440,5 L450,35 L460,20 L500,20"
                              fill="none"
                              stroke="#EF4444"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        {/* Patient Status Grid */}
                        <div className="grid grid-cols-2 gap-3 text-[11px]">
                          <div className="p-2.5 bg-bg-card rounded-lg border border-border-light/30 flex justify-between items-center">
                            <span>Bed-A4 (Orthopedics)</span>
                            <span className="text-secondary font-bold">Stable</span>
                          </div>
                          <div className="p-2.5 bg-bg-card rounded-lg border border-border-light/30 flex justify-between items-center">
                            <span>Bed-C1 (ICU Monitor)</span>
                            <span className="text-red-500 font-bold">Critical</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeShowcase === 2 && (
                    <motion.div 
                      key="crm-preview"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* CRM Top grid stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Monthly MRR</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">$12,480</span>
                            <span className="text-[9px] text-success font-bold">+18.4%</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Churn Rate</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-emerald-500">1.8%</span>
                            <span className="text-[9px] text-success font-bold">low</span>
                          </div>
                        </div>
                        <div className="p-4 bg-bg-surface rounded-2xl border border-border-light/40 flex flex-col justify-between h-24">
                          <span className="text-[9px] text-text-gray uppercase tracking-wider block">Paying Seats</span>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-2xl font-extrabold font-heading text-primary">420 seats</span>
                            <span className="text-[9px] text-text-gray font-bold">active</span>
                          </div>
                        </div>
                      </div>

                      {/* Transaction Feed */}
                      <div className="bg-bg-surface border border-border-light/40 rounded-2xl p-5 space-y-4 font-semibold text-primary text-left">
                        <div className="flex items-center justify-between border-b border-border-light/20 pb-2.5">
                          <span className="text-[10px] text-text-gray uppercase tracking-widest">Recent Sales Feed</span>
                          <span className="text-[10px] text-success bg-success/15 px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Sync On</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center py-2 px-3 bg-bg-card rounded-xl border border-border-light/30">
                            <div>
                              <h5 className="text-[11px] font-bold">Zenith Academy License</h5>
                              <p className="text-[9px] text-text-gray">Renewed 2 mins ago • Card ****42</p>
                            </div>
                            <span className="text-[11px] font-extrabold text-emerald-500">+$89.00</span>
                          </div>

                          <div className="flex justify-between items-center py-2 px-3 bg-bg-card rounded-xl border border-border-light/30">
                            <div>
                              <h5 className="text-[11px] font-bold">Medicare Telehealth Seat</h5>
                              <p className="text-[9px] text-text-gray">Upgraded 10 mins ago • Apple Pay</p>
                            </div>
                            <span className="text-[11px] font-extrabold text-emerald-500">+$120.00</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Preview Footer details */}
              <div className="p-6 bg-slate-50 dark:bg-bg-surface border-t border-border-light/80 flex flex-col sm:flex-row items-center justify-between gap-4 select-none shrink-0">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white dark:bg-bg-card text-primary border border-border-light/40 text-[9px] font-bold px-2.5 py-1 rounded-md">React 19</span>
                  <span className="bg-white dark:bg-bg-card text-primary border border-border-light/40 text-[9px] font-bold px-2.5 py-1 rounded-md">Tailwind v4</span>
                  <span className="bg-white dark:bg-bg-card text-primary border border-border-light/40 text-[9px] font-bold px-2.5 py-1 rounded-md">Framer Motion</span>
                </div>
                <Link 
                  to="/portfolio" 
                  className="w-full sm:w-auto bg-btn-primary-bg text-btn-primary-text font-bold px-6 py-3 rounded-xl text-xs hover:bg-btn-primary-hover text-center transition-all duration-300 flex items-center justify-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t('live_view_project')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Trusted Companies: Infinite Slider with Left/Right Fading Masks */}
      <section className="py-10 bg-bg-surface border-b border-border-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          <p className="text-text-gray text-[10px] uppercase tracking-[0.2em] font-extrabold select-none">
            Trusted by founders at forward-thinking companies
          </p>
        </div>
        
        {/* Loop with Fading Masks */}
        <div className="relative w-full overflow-hidden flex items-center py-2 select-none
          before:absolute before:left-0 before:top-0 before:w-24 md:before:w-48 before:h-full before:bg-gradient-to-r before:from-bg-surface before:to-transparent before:z-10
          after:absolute after:right-0 after:top-0 after:w-24 md:after:w-48 after:h-full after:bg-gradient-to-l after:from-bg-surface after:to-transparent after:z-10"
        >
          <div className="animate-infinite-slider flex items-center gap-20 py-2 shrink-0">
            {[...Array(3)].flatMap((_, blockIdx) => (
              [
                { name: "Google", logo: <span className="font-heading font-extrabold text-lg text-primary tracking-tight">Google</span> },
                { name: "Microsoft", logo: <div className="flex items-center gap-2 font-heading font-extrabold text-lg text-primary tracking-tight"><div className="grid grid-cols-2 gap-0.5 w-3 h-3"><div className="bg-[#F25022] w-1.2 h-1.2" /><div className="bg-[#7FBA00] w-1.2 h-1.2" /><div className="bg-[#00A4EF] w-1.2 h-1.2" /><div className="bg-[#FFB900] w-1.2 h-1.2" /></div><span>Microsoft</span></div> },
                { name: "Amazon", logo: <span className="font-heading font-extrabold text-lg text-primary tracking-tight">amazon</span> },
                { name: "Adobe", logo: <span className="font-heading font-extrabold text-lg text-primary tracking-tight">Adobe</span> },
                { name: "Spotify", logo: <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg text-primary tracking-tight"><svg className="w-4 h-4 text-[#1DB954] fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-1.023-.336.073-.668-.14-.74-.476-.073-.337.14-.668.476-.74 3.847-.878 7.14-.504 9.81 1.13.292.18.384.566.207.862zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.673-1.114 8.243-.574 11.348 1.334.368.226.488.707.26 1.074zm.106-2.833C14.39 8.784 8.567 8.59 5.18 9.617c-.52.158-1.07-.142-1.228-.662-.158-.52.142-1.07.662-1.228 3.896-1.183 10.32-.962 14.39 1.453.47.28.623.89.344 1.36-.28.47-.89.622-1.36.343z"/></svg><span>Spotify</span></div> },
                { name: "Meta", logo: <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg text-primary tracking-tight"><svg className="w-5 h-3 text-[#0064E0] fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 12"><path d="M6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.5 2 10.5 4.5 12 6C13.5 7.5 15.5 10 18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.5 2 13.5 4.5 12 6C10.5 7.5 8.5 10 6 10Z" /></svg><span>Meta</span></div> },
                { name: "Stripe", logo: <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg text-primary tracking-tight"><svg className="w-4 h-4 text-[#635BFF] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.6 15c0-1.8 2.4-1.2 2.4-3 0-.6-.6-1.2-1.2-1.2-.6 0-1.8.6-2.4 1.2l-1.2-1.8c1.2-1.2 2.4-1.8 3.6-1.8 1.8 0 3.6 1.2 3.6 3 0 1.8-2.4 1.2-2.4 3 0 .6.6 1.2 1.2 1.2.6 0 1.8-.6 2.4-1.2l1.2 1.8c-1.2 1.2-2.4 1.8-3.6 1.8-1.8 0-3.6-1.2-3.6-3z" /></svg><span>Stripe</span></div> },
                { name: "Vercel", logo: <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg text-primary tracking-wider uppercase"><svg className="w-3.5 h-3.5 fill-current text-primary" viewBox="0 0 24 24"><path d="M24 22.525H0L12 1.475L24 22.525Z" /></svg><span>Vercel</span></div> }
              ].map((brand, bIdx) => (
                <div key={`${blockIdx}-${bIdx}`} className="flex items-center space-x-2 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  {brand.logo}
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Our Services Grid */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Header Row with Left Heading and Right Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div className="max-w-2xl">
              <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
                {t('exp_tagline')}
              </span>
              <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight text-balance">
                {t('exp_title')}
              </h2>
              <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
                {t('exp_desc')}
              </p>
            </div>
            
            <div className="shrink-0">
              <Link 
                to="/services" 
                className="inline-flex items-center space-x-2 bg-btn-primary-bg text-btn-primary-text font-bold px-6 py-3.5 rounded-xl hover:bg-btn-primary-hover transition-all text-xs tracking-wider uppercase"
              >
                <span>{t('exp_cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => {
              // Helper to calculate slashed price dynamics
              const getSlashedPrice = (priceRange) => {
                const startPart = priceRange.split(' - ')[0]; 
                const num = parseInt(startPart.replace(/[^\d]/g, ''), 10);
                if (isNaN(num)) return null;
                const slashed = Math.round(num * 1.6);
                return `₹${slashed.toLocaleString('en-IN')}`;
              };

              return (
                <div 
                  key={service.id} 
                  className="group bg-bg-card border border-border-light rounded-[24px] p-6 flex flex-col justify-between hover:shadow-2xl hover:border-secondary/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-left h-full"
                >
                  {/* Subtle top background decorative glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />
                  
                  <div>
                    {/* Header: Category Badge and Delivery Time */}
                    <div className="flex justify-between items-center gap-2 mb-4">
                      <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="text-[9px] text-text-gray font-bold bg-slate-100 dark:bg-bg-surface px-2.5 py-0.5 rounded">
                        🕒 {service.deliveryTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-primary font-heading font-extrabold text-lg mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Short Description */}
                    <p className="text-text-gray text-xs leading-relaxed mb-4 font-body min-h-[36px]">
                      {service.shortDesc}
                    </p>

                    {/* Pricing: Slashed & Active Discounted Price */}
                    <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-border-light/40">
                      <span className="text-lg font-black text-secondary">
                        {service.priceRange.split(' - ')[0]}
                      </span>
                      {getSlashedPrice(service.priceRange) && (
                        <span className="text-xs text-text-gray line-through opacity-70">
                          {getSlashedPrice(service.priceRange)}
                        </span>
                      )}
                      <span className="text-[9px] text-success font-black uppercase tracking-wider bg-success/15 px-1.5 py-0.5 rounded">
                        40% OFF
                      </span>
                    </div>

                    {/* Key Features (Checklist) */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                          <span className="text-text-gray font-semibold font-body leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call-to-action button */}
                  <div className="mt-auto pt-2 flex items-center justify-between gap-3">
                    <Link 
                      to={`/services#${service.id}`} 
                      className="text-text-gray hover:text-secondary text-[10px] font-bold uppercase tracking-wider"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact" 
                      className="bg-secondary text-white font-bold px-4 py-2 rounded-xl text-[10px] hover:bg-secondary-hover transition-all text-center tracking-wider uppercase flex items-center justify-center space-x-1"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6️⃣ Featured Project */}
      <section className="py-24 bg-bg-surface border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('feat_proj_title')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('feat_proj_desc')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              Explore how we built the Medicare Portal, automating scheduling, patient queues, and electronic diagnostics.
            </p>
          </div>

          <div className="group rounded-[32px] border border-border-light bg-bg-card overflow-hidden premium-shadow relative flex flex-col lg:flex-row items-stretch min-h-[460px]">
            {/* Visual Glassmorphic Dashboard Mockup (Left Side) */}
            <div className="lg:w-1/2 min-h-[380px] flex items-center justify-center relative overflow-hidden bg-zinc-950 p-6 md:p-8 select-none">
              {/* Background gradient lights */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              
              {/* The Dashboard Frame */}
              <div className="w-full bg-zinc-900/95 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[290px] transition-transform duration-500 group-hover:scale-[1.01]">
                {/* Dashboard Top bar */}
                <div className="h-10 bg-zinc-950 px-4 flex items-center justify-between border-b border-zinc-800/80 shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">medicare-erp.v2.4</div>
                  <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-[7px] text-zinc-400 font-bold">DR</div>
                </div>
                
                {/* Dashboard Body */}
                <div className="flex flex-row flex-grow overflow-hidden">
                  {/* Dashboard Sidebar */}
                  <div className="w-12 bg-zinc-950/60 border-r border-zinc-800/60 flex flex-col items-center py-4 space-y-4 shrink-0">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center"><HeartPulse className="w-3.5 h-3.5" /></div>
                    <div className="w-6 h-6 rounded-lg text-zinc-600 flex items-center justify-center"><Database className="w-3.5 h-3.5" /></div>
                    <div className="w-6 h-6 rounded-lg text-zinc-600 flex items-center justify-center"><Users2 className="w-3.5 h-3.5" /></div>
                    <div className="w-6 h-6 rounded-lg text-zinc-600 flex items-center justify-center"><Settings className="w-3.5 h-3.5" /></div>
                  </div>
                  
                  {/* Dashboard Main Panel */}
                  <div className="flex-grow p-4 flex flex-col justify-between overflow-hidden">
                    {/* Panel Top row: Summary widgets */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-zinc-950/40 border border-zinc-800/40 p-2 rounded-xl">
                        <span className="text-[7px] text-zinc-500 block uppercase font-extrabold tracking-wider">Admitted</span>
                        <span className="text-xs font-black text-white mt-0.5 block">142 Patients</span>
                      </div>
                      <div className="bg-zinc-950/40 border border-zinc-800/40 p-2 rounded-xl">
                        <span className="text-[7px] text-zinc-500 block uppercase font-extrabold tracking-wider">ER Queue</span>
                        <span className="text-xs font-black text-red-400 mt-0.5 block">3 min wait</span>
                      </div>
                      <div className="bg-zinc-950/40 border border-zinc-800/40 p-2 rounded-xl">
                        <span className="text-[7px] text-zinc-500 block uppercase font-extrabold tracking-wider">Occupancy</span>
                        <span className="text-xs font-black text-teal-400 mt-0.5 block">94.8%</span>
                      </div>
                    </div>
                    
                    {/* Panel Bottom row: Telemetry Chart and Patient Feed */}
                    <div className="grid grid-cols-12 gap-3 flex-grow mt-3 items-stretch overflow-hidden">
                      {/* Left: Glowing telemetry graph */}
                      <div className="col-span-7 bg-zinc-950/60 border border-zinc-800/40 rounded-xl p-3 flex flex-col justify-between overflow-hidden relative">
                        <div className="flex justify-between items-center mb-1 shrink-0">
                          <span className="text-[7px] text-zinc-400 uppercase tracking-widest font-black">Live Pulse Roster</span>
                          <span className="text-[7px] text-teal-400 font-bold bg-teal-500/10 px-1 rounded">Realtime</span>
                        </div>
                        <div className="h-16 w-full relative flex-grow mt-1">
                          <svg className="w-full h-full" viewBox="0 0 160 60" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Area under curve */}
                            <path d="M0,50 Q20,25 40,35 T80,15 T120,40 L120,60 L0,60 Z" fill="url(#chartGlow)" />
                            {/* Line path */}
                            <path d="M0,50 Q20,25 40,35 T80,15 T120,40" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Right: Active ward feeds */}
                      <div className="col-span-5 bg-zinc-950/60 border border-zinc-800/40 rounded-xl p-3 flex flex-col justify-between overflow-hidden">
                        <span className="text-[7px] text-zinc-400 uppercase tracking-widest font-black block mb-2">Ward Alerts</span>
                        <div className="space-y-1.5 flex-grow overflow-hidden text-left">
                          <div className="flex items-center justify-between text-[8px] bg-zinc-900 border border-zinc-800/40 p-1 rounded">
                            <span className="text-zinc-300 truncate max-w-[45px]">Aarav Mehta</span>
                            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded text-[6px]">Stable</span>
                          </div>
                          <div className="flex items-center justify-between text-[8px] bg-zinc-900 border border-zinc-800/40 p-1 rounded">
                            <span className="text-zinc-300 truncate max-w-[45px]">Neha Gupta</span>
                            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded text-[6px]">Stable</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case study info (Right Side) */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] bg-secondary/15 text-secondary font-extrabold tracking-wider px-2.5 py-0.5 rounded uppercase">
                  Institutional System
                </span>
                <h3 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary mt-4 mb-4 tracking-tight">
                  Hospital Management Suite
                </h3>
                <p className="text-text-gray text-xs leading-relaxed mb-6 font-body">
                  A high-end, secure digital architecture featuring diagnostic record logs, doctor roster schedules, billing systems, and live queuing telemetry updates.
                </p>

                {/* Upgraded Grid of Checkboxes inside elegant tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Role-Based Access Control",
                    "PDF Prescription Exporters",
                    "Razorpay Gateways",
                    "99.9% Uptime Telemetry"
                  ].map((featText, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3 text-xs bg-bg-light border border-border-light/60 p-3 rounded-xl hover:border-secondary/20 transition-all duration-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-primary font-bold font-body">{featText}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/portfolio" 
                className="inline-flex items-center space-x-2 bg-btn-primary-bg text-btn-primary-text border border-transparent font-bold px-6 py-3.5 rounded-xl hover:bg-btn-primary-hover transition-all text-xs tracking-wider uppercase group w-fit"
              >
                <span>{t('view_case')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Industries We Serve */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('ind_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('ind_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('ind_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => {
              // Local description mapping
              const getIndustryDesc = (name) => {
                switch (name) {
                  case 'Healthcare': return 'Clinic & EHR Systems';
                  case 'Education': return 'ERP & Learning portals';
                  case 'Restaurant': return 'Booking & Menu portals';
                  case 'Gym': return 'Membership & Booking';
                  case 'Travel': return 'Booking & Agency portals';
                  case 'Finance': return 'Payment & Analytics';
                  case 'Real Estate': return 'Property list engines';
                  case 'Startup': return 'SaaS Landing pages';
                  case 'NGO': return 'Portals & Support sites';
                  case 'Manufacturing': return 'Supply ERP systems';
                  default: return 'Custom integrations';
                }
              };

              return (
                <div 
                  key={idx}
                  className="group relative bg-bg-card border border-border-light/60 rounded-2xl p-5 flex flex-col items-start text-left hover:border-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {ind.icon}
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-primary mb-1 group-hover:text-secondary transition-colors">
                    {ind.name}
                  </h4>
                  <p className="text-[10px] text-text-gray font-body leading-normal">
                    {getIndustryDesc(ind.name)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8️⃣ Why Rahimax (Statistics) with Parallax Boardroom Meeting Background */}
      <section 
        className="py-32 relative overflow-hidden bg-zinc-900 text-white border-y border-zinc-800 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/stats-meeting.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* No color overlay - purely visible background image */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 hover:scale-105 transition-all duration-300 relative z-10"
              >
                <span className="block font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  <CountUpComponent 
                    end={stat.value} 
                    duration={2.5} 
                  />
                  {stat.suffix}
                </span>
                {/* Bold label with dark shadow to pop out */}
                <span className="text-white text-xs font-black uppercase tracking-widest select-none block mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ Process Timeline */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('method_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('method_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('method_desc')}
            </p>
          </div>

          {/* Connected timeline container */}
          <div className="relative">
            {/* Desktop horizontal timeline line track */}
            <div className="hidden lg:block absolute top-[36px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-secondary/30 via-secondary/15 to-border-light/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {[
                { num: "01", title: t('method_1_title'), desc: t('method_1_desc') },
                { num: "02", title: t('method_2_title'), desc: t('method_2_desc') },
                { num: "03", title: t('method_3_title'), desc: t('method_3_desc') },
                { num: "04", title: t('method_4_title'), desc: t('method_4_desc') },
                { num: "05", title: t('method_5_title'), desc: t('method_5_desc') },
                { num: "06", title: t('method_6_title'), desc: t('method_6_desc') }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="group p-5 rounded-[20px] bg-bg-card border border-border-light/60 hover:border-secondary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between h-full text-left"
                >
                  <div>
                    {/* Top milestone node row */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-heading font-black text-xs border border-secondary/20 select-none shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
                        {step.num}
                      </span>
                      {/* Active indicator dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-secondary transition-colors duration-300 shrink-0" />
                    </div>

                    <h4 className="font-heading font-extrabold text-sm text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-text-gray text-[10px] leading-relaxed mt-2 font-body flex-grow">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Portfolio/Case Studies Grid */}
      <section className="py-24 bg-bg-surface border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('port_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('port_title_home')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('port_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 6).map((project) => (
              <div 
                key={project.id} 
                className="group rounded-[24px] border border-border-light bg-bg-card overflow-hidden premium-shadow hover:border-secondary/20 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left h-full"
              >
                <div>
                  {/* Visual Header with real HD Mockup Image */}
                  <div className="h-52 overflow-hidden relative w-full select-none shrink-0 border-b border-border-light/40 bg-zinc-950">
                    {/* Dynamic image selector mapping generated HD mockups for all 6 projects */}
                    <img 
                      src={
                        project.id === 'apex-dashboard' ? '/apex-mock.jpg' :
                        project.id === 'aura-beauty' ? '/aura-mock.jpg' :
                        project.id === 'zenith-erp' ? '/zenith-mock.jpg' :
                        project.id === 'lens-hub' ? '/lens-mock.jpg' :
                        project.id === 'skyline-realty' ? '/skyline-mock.jpg' :
                        project.id === 'prime-physique' ? '/gym-mock.jpg' :
                        '/apex-mock.jpg' // Fallback
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Soft dark gradient mask overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Frosted Glass Category Badge inside image */}
                    <span className="absolute bottom-4 left-4 z-10 font-heading font-extrabold text-[9px] uppercase tracking-wider bg-white/10 dark:bg-black/40 border border-white/20 px-3 py-1 rounded-lg backdrop-blur-md text-white shadow-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h4 className="font-heading font-extrabold text-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-text-gray text-xs mb-4 leading-relaxed font-body min-h-[36px]">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-border-light/40 flex justify-between items-center text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tg, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] text-text-gray font-body font-bold bg-slate-100 dark:bg-bg-surface px-2 py-0.5 rounded border border-border-light/35"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                  <Link to="/portfolio" className="text-secondary font-bold flex items-center gap-0.5 hover:underline group">
                    <span>{t('view_case')}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11️⃣ Technology Stack (Brand Color Glows) */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('tech_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('tech_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('tech_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {techStack.map((tech, idx) => {
              // Local brand glow resolver
              const getTechGlowClass = (name) => {
                switch (name) {
                  case 'React': return 'hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/5';
                  case 'Next.js': return 'hover:border-zinc-400/40 hover:shadow-lg hover:shadow-zinc-400/5';
                  case 'Node.js': return 'hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/5';
                  case 'Express': return 'hover:border-slate-400/40 hover:shadow-lg hover:shadow-slate-400/5';
                  case 'MongoDB': return 'hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5';
                  case 'Tailwind': return 'hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5';
                  case 'Firebase': return 'hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5';
                  case 'AWS': return 'hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/5';
                  case 'Docker': return 'hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/5';
                  default: return 'hover:border-secondary/20';
                }
              };

              return (
                <div 
                  key={idx}
                  className={`group p-5 rounded-[20px] border border-border-light/60 bg-bg-card flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative overflow-hidden select-none ${getTechGlowClass(tech.name)}`}
                >
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-bg-surface flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12️⃣ Testimonials (Infinite Auto-scrolling Marquee) */}
      <section className="py-24 bg-bg-surface border-y border-border-light relative overflow-hidden">
        {/* Inline CSS for premium seamless horizontal infinite marquee */}
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonial-marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: marquee-scroll 45s linear infinite;
          }
          .testimonial-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto mb-4">
            What Founders Say About Us
          </h2>
          <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Glance through reviews from 10+ growing companies. Hover to pause, click to expand the full case study.
          </p>
        </div>

        {/* Infinite marquee wrapper */}
        <div className="w-full relative py-4 mask-gradient-x select-none overflow-hidden">
          {/* Double the list to make the loop seamless */}
          <div className="testimonial-marquee-track px-4">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                onClick={() => setSelectedTestimonial(item)}
                className="group w-[300px] sm:w-[340px] md:w-[380px] p-6 rounded-[24px] bg-bg-card border border-border-light/60 cursor-pointer shadow-md hover:scale-[1.04] hover:-translate-y-2.5 hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between text-left shrink-0 min-h-[220px]"
              >
                <div>
                  {/* Stars */}
                  <div className="flex space-x-1 text-accent mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Truncated review content */}
                  <p className="text-text-gray text-xs italic leading-relaxed font-body mb-6 line-clamp-3">
                    "{item.content}"
                  </p>
                </div>

                {/* Profile Meta info row */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-light/45 mt-auto">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full object-cover border border-border-light/60 shrink-0"
                  />
                  <div className="text-left shrink">
                    <h4 className="font-heading font-extrabold text-primary text-xs leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-text-gray text-[10px] font-body mt-0.5 leading-none">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Testimonial Expansion Modal Popup */}
        {selectedTestimonial && (
          <div className="fixed inset-0 bg-black/55 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div 
              className="bg-bg-card border border-border-light max-w-md w-full rounded-[28px] p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-left"
              onClick={(e) => e.stopPropagation()} // Stop closing on wrapper click
            >
              {/* Close / Cut Button */}
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-bg-surface flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors border border-border-light/40 cursor-pointer text-text-gray"
                aria-label="Close review"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Stars */}
              <div className="flex space-x-1 text-accent mb-4 mt-2">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Full Quote content */}
              <p className="text-primary text-sm md:text-base italic leading-relaxed font-body mb-8">
                "{selectedTestimonial.content}"
              </p>

              {/* User profile row */}
              <div className="flex items-center gap-3 pt-6 border-t border-border-light/40">
                <img 
                  src={selectedTestimonial.avatar} 
                  alt={selectedTestimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-border-light/80"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-primary text-sm leading-tight">
                    {selectedTestimonial.name}
                  </h4>
                  <p className="text-text-gray text-xs font-body mt-0.5">
                    {selectedTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 13️⃣ Pricing (Premium Grid with Slashed Discounts) */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('pr_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('pr_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('pr_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-[28px] border bg-bg-card flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular 
                    ? 'border-secondary ring-4 ring-secondary/5 shadow-2xl scale-105 z-10' 
                    : 'border-border-light/75 shadow-md hover:border-secondary/20 hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-secondary text-white font-extrabold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md animate-pulse">
                    {t('popular')}
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-gray text-xs leading-relaxed mb-6 font-body">
                    {pkg.desc}
                  </p>
                  
                  {/* Slashed value pricing display block */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="font-heading font-black text-3xl md:text-4xl text-primary tracking-tight">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-text-gray line-through font-body select-none">
                        {pkg.originalPrice}
                      </span>
                    )}
                    {pkg.price !== 'Custom Quote' && (
                      <span className="text-text-gray text-[9px] font-bold uppercase tracking-widest ml-1 select-none">
                        {t('pr_one_time')}
                      </span>
                    )}
                  </div>

                  <hr className="border-border-light/40 mb-6" />

                  <ul className="space-y-4 text-xs font-semibold text-primary">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a 
                    href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    className={`block w-full text-center py-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover shadow-lg hover:scale-[1.02]'
                        : 'bg-btn-secondary-bg border border-btn-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover hover:scale-[1.02]'
                    }`}
                  >
                    {pkg.cta || 'Choose Plan'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14️⃣ FAQ Accordion (Animated Panels) */}
      <section className="py-24 bg-bg-surface border-y border-border-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              {t('faq_tagline')}
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              {t('faq_title')}
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              {t('faq_desc')}
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`rounded-[20px] border transition-all duration-300 bg-bg-card overflow-hidden ${
                    isOpen 
                      ? 'border-secondary/40 shadow-lg shadow-secondary/5' 
                      : 'border-border-light/75 hover:border-secondary/25'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                  >
                    <span className={`font-heading font-extrabold text-sm md:text-base transition-colors duration-300 ${
                      isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full border transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-secondary text-white border-secondary' 
                        : 'bg-bg-surface border-border-light text-primary group-hover:bg-slate-50 dark:group-hover:bg-slate-800'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  
                  {/* Smooth slidedown height transition */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-xs md:text-sm text-text-gray leading-relaxed border-t border-border-light/45 pt-4 bg-bg-surface/30 font-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15️⃣ Contact (Glass Form) */}
      <section className="py-24 bg-bg-light px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col justify-between py-6 text-left">
            <div>
              <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-4 px-3 py-1 bg-secondary/10 rounded-full inline-block">
                Let's Collaborate
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-primary leading-tight">
                Let's Build <br />
                Something Amazing <br />
                Together.
              </h2>
              <p className="text-text-gray text-xs md:text-sm mt-4 leading-relaxed font-body">
                Have an idea for a school portal, custom CRM, e-commerce storefront, or landing page? Fill out the brief, and our architects will design your quote within 24 hours.
              </p>
            </div>

            {/* Custom styled contact items with icons */}
            <div className="mt-12 pt-8 border-t border-border-light/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-text-gray/50 tracking-wider font-bold">EMAIL</span>
                  <span className="text-primary text-xs font-bold font-body">info@rahimax.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-text-gray/50 tracking-wider font-bold">PHONE</span>
                  <span className="text-primary text-xs font-bold font-body">+91 89494 77114</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20 shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-text-gray/50 tracking-wider font-bold">HQ</span>
                  <span className="text-primary text-xs font-bold font-body">Alwar, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form: Glass Form */}
          <div className="lg:col-span-7 bg-bg-card border border-border-light/80 rounded-[28px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <form onSubmit={handleSubmit(onContactSubmit)} className="space-y-6 font-body relative z-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">{t('c_label_name')}</label>
                  <input 
                    type="text" 
                    placeholder={t('c_placeholder_name')}
                    {...register("name")}
                    className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300 ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-border-light/80'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-[10px] mt-1 block font-bold">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">{t('c_label_email')}</label>
                  <input 
                    type="email" 
                    placeholder={t('c_placeholder_email')}
                    {...register("email")}
                    className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300 ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-border-light/80'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-[10px] mt-1 block font-bold">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">{t('c_label_phone')}</label>
                  <input 
                    type="tel" 
                    placeholder={t('c_placeholder_phone')}
                    {...register("phone")}
                    className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300 ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-border-light/80'
                    }`}
                  />
                  {errors.phone && <span className="text-red-500 text-[10px] mt-1 block font-bold">{errors.phone.message}</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. My Company Private Limited"
                    {...register("company")}
                    className="w-full bg-bg-surface text-primary border border-border-light/80 rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">{t('c_label_budget')} *</label>
                <select 
                  {...register("budget")}
                  className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300 ${
                    errors.budget ? 'border-red-500 bg-red-50/20' : 'border-border-light/80'
                  }`}
                >
                  <option value="" className="bg-bg-card">Choose a range...</option>
                  <option value="Under ₹25,000" className="bg-bg-card">Under ₹25,000</option>
                  <option value="₹25,000 - ₹60,000" className="bg-bg-card">₹25,000 - ₹60,000</option>
                  <option value="₹60,000 - ₹1,50,000" className="bg-bg-card">₹60,000 - ₹1,50,000</option>
                  <option value="₹1,50,000+" className="bg-bg-card">₹1,50,000+</option>
                </select>
                {errors.budget && <span className="text-red-500 text-[10px] mt-1 block font-bold">{errors.budget.message}</span>}
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-wider mb-2">{t('c_label_message')}</label>
                <textarea 
                  rows="4"
                  placeholder={t('c_placeholder_message')}
                  {...register("message")}
                  className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs font-medium transition-all duration-300 ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-border-light/80'
                  }`}
                />
                {errors.message && <span className="text-red-500 text-[10px] mt-1 block font-bold">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-btn-primary-bg hover:bg-btn-primary-hover text-btn-primary-text font-bold py-3.5 rounded-xl transition-all duration-300 text-xs shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 border border-transparent hover:scale-[1.01]"
              >
                {isSubmitting ? t('c_btn_sending') : t('c_btn_send')}
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
