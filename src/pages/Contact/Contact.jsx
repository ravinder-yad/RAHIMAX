import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  service: z.string().min(1, { message: "Please select a service." }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: ""
    }
  });

  // Prefill service selector from URL search params
  useEffect(() => {
    const pkg = searchParams.get('package');
    const service = searchParams.get('service');
    if (pkg) {
      setValue('service', pkg);
      setValue('message', `Hi, I am looking to get a quote for the "${pkg}" package.`);
    } else if (service) {
      setValue('service', service);
      setValue('message', `Hi, I am interested in your "${service}" service.`);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data) => {
    // Simulate sending email (EmailJS style delay)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form submitted data:", data);
    toast.success("Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours.", {
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

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Project Quote - Rahimax</title>
        <meta name="description" content="Get in touch with Rahimax Pro Agency. Let's discuss your next custom dashboard, school management software, e-commerce shop, or technical SEO campaign." />
      </Helmet>
      
      {/* react-hot-toast mount */}
      <Toaster />

      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline={t('c_tagline')}
            title={t('c_title')}
            subtitle={t('c_desc')}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch mt-12">
            
            {/* Sidebar contact information */}
            <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-[32px] flex flex-col justify-between relative overflow-hidden shadow-xl border border-transparent dark:border-border-light">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <h3 className="font-heading font-extrabold text-2xl mb-6">{t('c_info_title')}</h3>
                
                <div className="flex items-start space-x-4 text-sm text-slate-300">
                  <Mail className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1">{t('c_email')}</h4>
                    <p>info@rahimax.com</p>
                    <p>support@rahimax.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-sm text-slate-300">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1">{t('c_call')}</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 120 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-sm text-slate-300">
                  <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1">{t('c_address')}</h4>
                    <p>102, Premium Tech Hub, Sector-62, Noida, Uttar Pradesh, 201301</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800 space-y-4 relative z-10">
                <h4 className="font-heading font-bold text-sm text-white">{t('c_next_title')}</h4>
                <div className="flex items-start space-x-3 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{t('c_next_1')}</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{t('c_next_2')}</span>
                </div>
              </div>
            </div>

            {/* Validation Contact Form */}
            <div className="lg:col-span-2 bg-bg-card p-8 md:p-10 border border-border-light rounded-[32px] premium-shadow">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_name')}</label>
                    <input 
                      type="text" 
                      placeholder={t('c_placeholder_name')}
                      {...register("name")}
                      className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-border-light'
                      }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_email')}</label>
                    <input 
                      type="email" 
                      placeholder={t('c_placeholder_email')}
                      {...register("email")}
                      className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-border-light'
                      }`}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_phone')}</label>
                    <input 
                      type="tel" 
                      placeholder={t('c_placeholder_phone')}
                      {...register("phone")}
                      className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-border-light'
                      }`}
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_solution')}</label>
                    <select 
                      {...register("service")}
                      className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm ${
                        errors.service ? 'border-red-500 bg-red-50/20' : 'border-border-light'
                      }`}
                    >
                      <option value="" className="bg-bg-card">Select a service...</option>
                      <option value="Business Website" className="bg-bg-card">Business Website</option>
                      <option value="Premium Portfolio" className="bg-bg-card">Premium Portfolio</option>
                      <option value="E-Commerce Store" className="bg-bg-card">E-Commerce Store</option>
                      <option value="School ERP System" className="bg-bg-card">School ERP System</option>
                      <option value="Hospital & Clinic Portal" className="bg-bg-card">Hospital & Clinic Portal</option>
                      <option value="Custom SaaS Dashboard" className="bg-bg-card">Custom SaaS Dashboard</option>
                      <option value="Web Application" className="bg-bg-card">Web Application</option>
                      <option value="UI/UX Design" className="bg-bg-card">UI/UX Design</option>
                      <option value="SEO Optimization" className="bg-bg-card">SEO Optimization</option>
                    </select>
                    {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
                  </div>

                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_budget')}</label>
                  <select 
                    {...register("budget")}
                    className="w-full bg-bg-surface text-primary border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="" className="bg-bg-card">Choose a range...</option>
                    <option value="Under ₹25,000" className="bg-bg-card">Under ₹25,000</option>
                    <option value="₹25,000 - ₹60,000" className="bg-bg-card">₹25,000 - ₹60,000</option>
                    <option value="₹60,000 - ₹1,50,000" className="bg-bg-card">₹60,000 - ₹1,50,000</option>
                    <option value="₹1,50,000+" className="bg-bg-card">₹1,50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">{t('c_label_message')}</label>
                  <textarea 
                    rows="5"
                    placeholder={t('c_placeholder_message')}
                    {...register("message")}
                    className={`w-full bg-bg-surface text-primary border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-border-light'
                    }`}
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-btn-primary-bg hover:bg-btn-primary-hover text-btn-primary-text font-bold py-4 rounded-xl transition-all duration-300 text-sm shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 border border-transparent"
                >
                  {isSubmitting ? t('c_btn_sending') : t('c_btn_send')}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
