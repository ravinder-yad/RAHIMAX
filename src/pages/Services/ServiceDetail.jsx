import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Sparkles, ShieldCheck, Clock, Layers, ArrowLeft, Eye } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { useLanguage } from '../../context/LanguageContext';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useLanguage();
  const location = useLocation();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Find target service
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-32 px-6 text-center bg-bg-light min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-heading font-extrabold text-primary mb-4">Service Not Found</h2>
        <p className="text-text-gray font-body mb-6">The requested service page does not exist or has been relocated.</p>
        <Link to="/services" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-6 py-3 rounded-xl hover:bg-secondary/90 transition-all text-xs">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>
      </div>
    );
  }

  // Map high-definition background images for all 14 services
  const getServiceBgImage = (id) => {
    switch (id) {
      // 1. Web Development
      case 'business-website':
        return '/stats-meeting.jpg';
      case 'company-website':
        return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
      case 'landing-page':
      case 'landing-pages':
        return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80';
      case 'portfolio':
        return 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80';
      case 'custom-website':
        return 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80';

      // 2. E-Commerce
      case 'e-commerce':
        return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80';
      case 'shopify':
        return 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80';
      case 'woocommerce':
        return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80';
      case 'custom-store':
        return 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80';
      case 'multi-vendor':
        return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80';

      // 3. Custom Software & ERPs
      case 'custom-crm':
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
      case 'crm':
        return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';
      case 'erp':
      case 'school-erp':
        return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80';
      case 'dashboard':
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
      case 'hrms':
        return 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';
      case 'pos':
        return 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80';
      case 'inventory':
        return 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';

      // 4. Mobile Apps
      case 'mobile-app':
        return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80';
      case 'android':
        return 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80';
      case 'ios':
        return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80';
      case 'react-native':
        return 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80';
      case 'flutter':
        return 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=1200&q=80';

      // 5. Design Services
      case 'ui-ux-design':
      case 'ui-design':
        return 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80';
      case 'ux-design':
        return 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80';
      case 'branding':
        return 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80';
      case 'logo-design':
        return 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80';

      // 6. Support
      case 'seo-optimization':
        return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';
      case 'maintenance':
        return 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80';

      // Fallbacks
      case 'hospital-website':
        return 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80';
      case 'gym-website':
        return 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80';
      case 'restaurant-website':
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80';
      case 'real-estate':
        return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
      default:
        return '/stats-meeting.jpg';
    }
  };

  // Generate exactly 6 related projects for each of the 14 services
  const getRelatedProjects = (id) => {
    const mockImages = [
      '/aura-mock.jpg',
      '/apex-mock.jpg',
      '/lens-mock.jpg',
      '/prime-mock.jpg',
      '/skyline-mock.jpg',
      '/zenith-mock.jpg'
    ];

    const projectTemplates = {
      'business-website': [
        { name: "Apex Consultants", desc: "Premium marketing agency corporate site with custom lead funnels." },
        { name: "Nova Legal", desc: "Corporate platform for a multi-national legal advisory firm." },
        { name: "Vanguard Tech", desc: "Bespoke technology consultancy brand landing website." },
        { name: "Orion Logistics", desc: "Global supply chain tracking and business marketing portal." },
        { name: "Horizon Ventures", desc: "Sleek venture capital portfolio site featuring portfolio matrices." },
        { name: "Terra Architect", desc: "Architectural firm showcase website with premium gallery transitions." }
      ],
      'portfolio': [
        { name: "Aura Creative", desc: "Slick interactive portfolio for a luxury branding designer." },
        { name: "DevLens Portfolio", desc: "Personal developer showcase with live telemetry integrations." },
        { name: "Vivid Studio Showcase", desc: "Minimal photography archive with smooth parallax grids." },
        { name: "Studio Pixel Art", desc: "Award-winning 3D animator portfolio with media player widgets." },
        { name: "SoundScribe Studio", desc: "Audio engineer audio log showcase with custom soundbars." },
        { name: "Elysian Art Gallery", desc: "Fine arts exhibition portal with custom room-scaling zoom." }
      ],
      'e-commerce': [
        { name: "Aura Fashion Hub", desc: "Headless React fashion store featuring smooth carts and payment sync." },
        { name: "Luxe Decor Store", desc: "Premium interior furniture e-store with custom 3D model loaders." },
        { name: "Glow Cosmetics", desc: "Skincare product store with integrated reviews and bundle builder." },
        { name: "Apex Gear App", desc: "Automated sports apparel storefront with localized multi-currency checkouts." },
        { name: "Velo Electric Bikes", desc: "E-bike pre-order sales funnel with real-time stock booking." },
        { name: "Bespoke Brew Coffee", desc: "Artisanal coffee subscription website with Stripe recurring billing." }
      ],
      'school-erp': [
        { name: "Zenith Academics", desc: "ERP portal automating attendance and fee receipts for 5k students." },
        { name: "Oakridge Portal", desc: "Cloud student-parent communication panel with push alerts." },
        { name: "Beacon Prep Analytics", desc: "Exam report card generator and automatic marksheet telemetry." },
        { name: "St. Jude Campus", desc: "Integrated school library management and real-time book booking." },
        { name: "Pinnacle ERP Suite", desc: "Staff biometric payroll manager and accounting ledger." },
        { name: "Greenwood Fleet System", desc: "Student bus fleet real-time GPS tracking and parent portal." }
      ],
      'hospital-website': [
        { name: "Apex Medicare Portal", desc: "Hospital web portal with online appointment booking and records." },
        { name: "HeartCare Clinique", desc: "Cardiac care booking panel with live consultation video links." },
        { name: "DentalCare Calendar", desc: "Real-time doctor calendar slot selector and automated WhatsApp alerts." },
        { name: "Zenith Pharmacy System", desc: "Pharmacy catalog showing real-time medicine stock indices." },
        { name: "NeuroLife Patient Hub", desc: "Secure portal for patients to view test reports and bills." },
        { name: "Lifeline ER Telemetry", desc: "Multi-specialty emergency room queue tracker telemetry." }
      ],
      'gym-website': [
        { name: "Prime Fitness Club", desc: "High-energy membership sign-up and online class scheduler." },
        { name: "Ironclad Gym Tracker", desc: "Personal trainer calendar booking and automated recurring fee invoices." },
        { name: "Pulse Yoga Sessions", desc: "Yoga session reservation app with integrated Zoom webinars." },
        { name: "Flex Nutrition Store", desc: "Supplement store coupled with client workout plan charts." },
        { name: "Aura Crossfit Batch", desc: "Crossfit batch slot selector showing real-time seat capacities." },
        { name: "Titan Athletic Logging", desc: "Athlete training portal with telemetry log integrations." }
      ],
      'restaurant-website': [
        { name: "L'Aura Bistro Menu", desc: "Mouth-watering digital menu with local table reservation calendar." },
        { name: "Sizzle Grill Delivery", desc: "Steakhouse booking panel with online food checkout module." },
        { name: "Pizzeria Craft", desc: "Custom pizza topping designer and real-time order delivery tracker." },
        { name: "Gourmet Garden Catering", desc: "Vegan restaurant reservation and catering package inquiries." },
        { name: "The Brew House QR", desc: "Pub digital tap menu and table qr-code ordering integrations." },
        { name: "Sweet Reserve Bakery", desc: "Cake customization ordering funnel with secure Razorpay gateway." }
      ],
      'real-estate': [
        { name: "Skyline Realty Engine", desc: "Luxury real estate search engine with maps and virtual tours." },
        { name: "Vanguard Estates Hub", desc: "Premium properties portal featuring interactive neighborhood map filters." },
        { name: "Hearth Dwelling", desc: "Residential apartment booking landing pages and agent routing." },
        { name: "Orion Commercial spaces", desc: "Office spaces booking system with digital lease signing tools." },
        { name: "Apex Land Mapping", desc: "Agricultural plot search maps showing area measurements." },
        { name: "Urban Student Housing", desc: "Rental student housing finder with virtual roommates match tools." }
      ],
      'landing-pages': [
        { name: "Zenith Promo Page", desc: "High-converting promo funnel with clean pricing and CTA grids." },
        { name: "Apex App Download", desc: "Mobile application download page with clean mockup carousels." },
        { name: "LaunchPadSpecs", desc: "Crowdfunding product landing page with animated feature specs." },
        { name: "Fintech Wallet Promo", desc: "Digital wallet landing page showing security certificate checks." },
        { name: "Aura Conf Registration", desc: "Design conference registration funnel with automated ticket barcode PDFs." },
        { name: "MedTech Capture Page", desc: "Medical device lead capture form with clean responsive grids." }
      ],
      'custom-crm': [
        { name: "Vanguard Sales Panel", desc: "Tailored CRM panel monitoring sales funnel conversion ratios." },
        { name: "Apex HRMS Suite", desc: "Staff attendance, leaves calendar, and dynamic employee records." },
        { name: "Orion Helpdesk Tickets", desc: "Support ticket routing dashboard with internal messaging threads." },
        { name: "Luxe Stock Manager", desc: "E-commerce supply chain inventory analytics reporting engine." },
        { name: "FinTrack Dynamic Charts", desc: "Corporate expense bookkeeping system with chart telemetry." },
        { name: "Apex School Board ERP", desc: "Dynamic administrative telemetry panel for academy trustees." }
      ],
      'mobile-app': [
        { name: "Aura Courier iOS", desc: "On-demand parcel delivery booking app with map tracking." },
        { name: "Apex Biometrics App", desc: "iOS workout tracker running biometric syncing dashboards." },
        { name: "Luxe Pay App", desc: "Secure digital wallet app running multi-signature encryptions." },
        { name: "School Alert Mobile", desc: "Real-time notice board push alerts app for parents." },
        { name: "Hospital Queue Tracker", desc: "Live medical clinic patient scheduling status app." },
        { name: "Orion POS Tablet", desc: "Offline restaurant waiter ordering tablet app." }
      ],
      'ui-ux-design': [
        { name: "Apex Figma Library", desc: "Complete Figma wireframe system and component design guides." },
        { name: "Luxe Branding Book", desc: "Visual branding guideline books and typography tokens." },
        { name: "Zenith Interactive UI", desc: "Interactive mobile app prototyping and layout audit reports." },
        { name: "Glow Cart Audit", desc: "Shopping cart user checkout friction audit and flow layouts." },
        { name: "Apex School Portal Wireframes", desc: "Student dashboard usability blueprints for accessibility." },
        { name: "Vanguard Design Tokens", desc: "Cross-platform design token exports for Figma to React components." }
      ],
      'seo-optimization': [
        { name: "Apex Consultant Rank", desc: "Ranked first page on Google for competitive consultant keywords." },
        { name: "Luxe Store Catalog SEO", desc: "Schema markup setup boosting organic product traffic by 250%." },
        { name: "Zenith ERP Performance Sync", desc: "Speed optimization to 99/100 Lighthouse score for administrative portal." },
        { name: "Vanguard Technical Audit", desc: "Technical audit fixing broken link structures and Google index delays." },
        { name: "Aura Local Visibility", desc: "Local business catalog SEO mapping boosting shop walk-ins." },
        { name: "Orion Multilingual Search", desc: "Multi-lingual translation SEO mapping for international audiences." }
      ],
      'maintenance': [
        { name: "Apex Medical Server SLA", desc: "Dedicated server uptime monitoring with 99.99% assurance SLA." },
        { name: "School Database Patches", desc: "Bi-weekly backups and software database patches for Zenith Academy." },
        { name: "Luxe Gateway Security", desc: "PCI-compliance payment gateway updates and virus scans." },
        { name: "Orion Load Balancer Uptime", desc: "Monthly server load telemetry log updates and speed optimizations." },
        { name: "Vanguard Front-end Edits", desc: "On-call developer hours for rapid front-end visual adjustments." },
        { name: "Apex Dependency Audits", desc: "Annual software code audit and library upgrade recommendations." }
      ]
    };

    const templates = projectTemplates[id] || projectTemplates['business-website'];
    return templates.map((tmpl, idx) => ({
      id: `${id}-proj-${idx + 1}`,
      name: tmpl.name,
      desc: tmpl.desc,
      image: mockImages[idx]
    }));
  };

  const relatedProjects = getRelatedProjects(service.id);

  return (
    <>
      <Helmet>
        <title>{`${service.title} Services | Custom Web Development - Rahimax`}</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Hero Section: Compact 250px height, background image fully visible on sides, text directly on image */}
      <section 
        className="h-[250px] mt-[88px] relative overflow-hidden bg-zinc-950 text-white bg-fixed bg-cover bg-center flex items-center justify-center border-b border-zinc-800"
        style={{ 
          backgroundImage: `url("${getServiceBgImage(service.id)}")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark drop overlay mask (fully clear background image, text remains perfectly readable) */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Text directly printed on the image background (No box container at all) */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center select-none">
          <span className="text-secondary text-[10px] uppercase tracking-[0.25em] font-extrabold mb-2 block animate-pulse">
            {service.category}
          </span>
          <h1 className="text-white font-heading font-black text-2xl md:text-3xl lg:text-4xl tracking-tight drop-shadow-md">
            {service.title}
          </h1>
          <p className="text-zinc-300 font-body text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed drop-shadow">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Features & Benefits details layout */}
      <section className="py-20 bg-bg-light px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Features checklist grid */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-bg-card border border-border-light/60 p-8 rounded-[28px] shadow-md text-left">
              <h2 className="font-heading font-extrabold text-lg text-primary mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span>Features Included</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 bg-emerald-500/10 rounded-full p-0.5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-primary">{feat}</h4>
                      <p className="text-text-gray text-[10px] font-body mt-1 leading-normal">
                        Bespoke implementation verified for compliance and speed standards.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits detailed section */}
            <div className="bg-bg-card border border-border-light/60 p-8 rounded-[28px] shadow-md text-left">
              <h2 className="font-heading font-extrabold text-lg text-primary mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>Key Benefits</span>
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <p className="text-text-gray text-xs font-semibold font-body leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Sticky Pricing Card */}
          <div className="lg:col-span-4">
            <div className="bg-bg-card border-2 border-secondary ring-4 ring-secondary/5 p-8 rounded-[28px] shadow-xl text-left lg:sticky lg:top-[120px]">
              <span className="text-[10px] bg-secondary/15 text-secondary font-extrabold tracking-widest px-3 py-1 rounded-full uppercase inline-block mb-6">
                Transparent Quote
              </span>
              <h3 className="font-heading font-black text-2xl text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-gray text-xs leading-relaxed font-body mb-6">
                Tailored build engineered with pure clean code. Setup with SEO benchmarks.
              </p>

              <hr className="border-border-light/65 mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-text-gray">INVESTMENT:</span>
                  <span className="text-primary font-bold text-xs">{service.priceRange}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-text-gray">DELIVERY:</span>
                  <span className="text-primary font-bold text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span>{service.deliveryTime}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-text-gray">SUPPORT:</span>
                  <span className="text-primary font-bold text-xs flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-secondary" />
                    <span>1 Month Free</span>
                  </span>
                </div>
              </div>

              <a 
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="block w-full text-center bg-secondary hover:bg-secondary-hover text-white py-3.5 rounded-xl font-bold text-xs shadow-lg shadow-secondary/20 transition-all duration-300 hover:scale-[1.02] uppercase tracking-wider"
              >
                Inquire & Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section: exactly 6 related projects for this specific service */}
      <section className="py-24 bg-bg-surface border-t border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
              Case Studies
            </span>
            <h2 className="text-primary font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-xl">
              Recent {service.title} Work
            </h2>
            <p className="text-text-gray font-body text-xs sm:text-sm mt-3 max-w-lg leading-relaxed">
              Explore 6 real-world systems and bespoke creations designed and deployed by our digital architects.
            </p>
          </div>

          {/* Grid of 6 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {relatedProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-bg-card border border-border-light rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border-light">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay and icon */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-primary group-hover:text-secondary transition-colors duration-300">
                      {project.name}
                    </h4>
                    <p className="text-text-gray text-xs font-body mt-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-light/50 flex items-center justify-between text-[10px] font-bold text-secondary uppercase tracking-wider">
                    <span>Active Deployment</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
