import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translations = {
    EN: {
      // Navbar
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      portfolio: "Portfolio",
      pricing: "Pricing",
      resources: "Resources",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      book_call: "Book Call",
      get_quote: "Get Quote",
      building_excellence: "Building Excellence",
      popular: "Popular",
      search_placeholder: "Search for school ERP, landing pages, shopify...",
      search_title: "Search Solutions",
      
      // Hero
      hero_tagline: "Next-Gen Tech Studio",
      hero_title_1: "Build Powerful",
      hero_title_2: "Digital Products",
      hero_title_3: "Built to Grow Your Business",
      hero_desc: "Rahimax creates modern websites, web applications, mobile apps, and custom software that help businesses grow faster.",
      hero_cta_start: "🚀 Start Your Project",
      hero_cta_work: "▶ Watch Our Work",
      dashboard_growth: "Monthly Growth",
      dashboard_title: "RAHIMAX DASHBOARD",
      dashboard_conv: "Conversion",
      dashboard_speed: "Load Speed",
      dashboard_seo: "SEO Score",
      float_web: "Web Development",
      float_ui: "Premium UI Design",
      float_seo: "SEO Optimized",
      float_load: "Fast Load Delivery",

      // Announcement Bar
      announcement_text: "🚀 Now Accepting New Projects for 2026 • Free Consultation • Book Your Call Today →",

      // Unique Showcase Section
      live_showcase_title: "Live Project Showcase",
      live_showcase_subtitle: "Interact with live mini-previews of applications engineered by Rahimax.",
      live_view_project: "View Live Project →",
      live_school_title: "Zenith School ERP",
      live_school_desc: "A custom dashboard tracking 10k student profiles, automated fee receipting, and teacher payroll modules.",
      live_hospital_title: "MediCare Clinic Portal",
      live_hospital_desc: "Secure diagnostic charts, real-time patient queue trackers, and doctor calendar management.",
      live_crm_title: "FitFlow SaaS CRM",
      live_crm_desc: "Real-time client check-ins, automated subscription metrics, and custom telemetry data logs.",

      // Stats
      stats_completed: "Projects Completed",
      stats_satisfaction: "Client Satisfaction",
      stats_support: "Support Hours",
      stats_experience: "Years Experience",

      // Expertise (Showcase)
      exp_tagline: "Our Expertise",
      exp_title: "Premium Solutions We Deliver",
      exp_desc: "We don't build generic templates. We build custom-coded web architectures optimized for speed, scalability, and conversion.",
      exp_cta: "Explore All 14 Services",
      details_link: "Details",
      view_service: "View Service →",

      // Advantages
      adv_tagline: "The Rahimax Advantage",
      adv_title: "Designed to Outperform",
      adv_desc: "Our systems are hand-crafted using clean layouts, high-performance setups, and Stripe-inspired dashboard details.",
      adv_aest: "Stunning Aesthetics",
      adv_aest_desc: "Apple-inspired layouts that focus on premium typography, spacious structures, and high contrast.",
      adv_custom: "Custom Built",
      adv_custom_desc: "Zero bloated site builders. We code from scratch in React, Vite, and Tailwind CSS for max performance.",
      adv_sec: "Enterprise Security",
      adv_sec_desc: "Robust architectures optimized for safe payments, data privacy, and secure API structures.",
      adv_seo: "SEO Native",
      adv_seo_desc: "Speed-optimized code structured with SEO metadata mapping out-of-the-box for better rankings.",

      // Portfolio
      port_tagline: "Case Studies",
      port_title: "Projects We've Engineered",
      port_title_home: "Featured Case Studies",
      port_desc: "Explore our portfolio of high-end software solutions, dashboards, and custom designs crafted with precision.",
      port_cta_title: "Have a specific design in mind?",
      port_cta_desc: "We can customize any layout, database system, or custom integrations according to your specific brand identity.",
      port_cta_btn: "Let's Discuss Details",
      view_case: "View Case Study →",

      // Industries
      ind_tagline: "Industries",
      ind_title: "Industries We Serve",
      ind_subtitle: "Custom-coded digital architectures tailored to automate and secure specific industry workflows.",

      // Technology Stack
      tech_tagline: "Technology Stack",
      tech_title: "Our Technology Stack",
      tech_subtitle: "We employ next-generation backend and frontend architectures for robust, fast, and scalable delivery.",

      // Featured Project
      feat_proj_title: "Featured Project",
      feat_proj_desc: "Hospital ERP - Complete Management System",

      // Methodology
      method_tagline: "Our Methodology",
      method_title: "How We Build Success",
      method_desc: "A transparent, agile workflow focused on client alignment and delivering premium software.",
      method_1_title: "Requirement",
      method_1_desc: "Gathering detailed user goals, defining technology scopes, and writing clear requirements.",
      method_2_title: "Research",
      method_2_desc: "Analyzing user competitors, exploring optimal DB models, and researching API flows.",
      method_3_title: "UI Design",
      method_3_desc: "Creating high-fidelity, Apple-like interactive interfaces in Figma with robust styling tokens.",
      method_4_title: "Development",
      method_4_desc: "Writing clean, custom React & Tailwind codes with Zero bloated dependencies.",
      method_5_title: "Testing",
      method_5_desc: "Rigorous quality audits, speed checking, responsive layout audits, and device tests.",
      method_6_title: "Launch",
      method_6_desc: "Safe deployment on live host servers, analytics handoff, and ongoing support setup.",

      // FAQs
      faq_tagline: "FAQs",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Got questions? We have answers. If your question isn't listed, feel free to reach out.",

      // Collaborate CTA
      collab_tagline: "LET'S COLLABORATE",
      collab_title: "Ready to take your digital experience to the next level?",
      collab_desc: "Contact us today for a free consultation call. We will discuss your technology requirements, project timeline, and draft a custom estimate.",
      collab_btn_1: "Get Free Consultation",
      collab_btn_2: "Browse Projects",

      // Contact Form
      c_tagline: "Get in touch",
      c_title: "Let's Build Something Amazing",
      c_desc: "Fill out the form below to receive a custom quote within 24 hours, or contact us directly.",
      c_info_title: "Contact Info",
      c_email: "Email us",
      c_call: "Call us",
      c_address: "HQ Address",
      c_next_title: "What happens next?",
      c_next_1: "We schedule a 15-min discovery call to align on ideas.",
      c_next_2: "Our architects draft a clear statement of work and estimate.",
      c_label_name: "Full Name *",
      c_label_email: "Email Address *",
      c_label_phone: "Phone Number *",
      c_label_solution: "Required Solution *",
      c_label_budget: "Estimated Budget Range",
      c_label_message: "Project Brief *",
      c_placeholder_name: "e.g. Vikram Sharma",
      c_placeholder_email: "e.g. vikram@mycompany.com",
      c_placeholder_phone: "e.g. 9876543210",
      c_placeholder_message: "Describe your requests, dashboard needs, features or database rules...",
      c_btn_send: "Send Message →",
      c_btn_sending: "Sending Request...",

      // Pricing
      pr_tagline: "Transparent Plans",
      pr_title: "Premium Pricing Packages",
      pr_desc: "Choose a plan that fits your business stage, or contact our architects for a fully bespoke software quote.",
      pr_one_time: "one-time",
      pr_features: "Features Included",
      pr_benefits: "Key Benefits",
      pr_included_all: "Included in all our packages",
      pr_custom_code: "Custom Code",
      pr_secure_setup: "Secure Setup",
      pr_analytics: "Analytics Ready",
      pr_mobile: "Mobile Match"
    },
    HI: {
      // Navbar
      home: "मुख्य पृष्ठ",
      services: "सेवाएं",
      solutions: "समाधान",
      portfolio: "पोर्टफोलियो",
      pricing: "कीमतें",
      resources: "संसाधन",
      about: "हमारे बारे में",
      blog: "ब्लॉग",
      contact: "संपर्क",
      book_call: "कॉल करें",
      get_quote: "कोटेशन लें",
      building_excellence: "उत्कृष्टता का निर्माण",
      popular: "लोकप्रिय",
      search_placeholder: "स्कूल ईआरपी, लैंडिंग पेज, शॉपिफाई खोजें...",
      search_title: "समाधान खोजें",

      // Hero
      hero_tagline: "अगली पीढ़ी का टेक स्टूडियो",
      hero_title_1: "शक्तिशाली डिजिटल",
      hero_title_2: "उत्पाद बनाएं",
      hero_title_3: "व्यवसाय बढ़ाने के लिए",
      hero_desc: "रहीमैक्स आधुनिक वेबसाइटें, वेब एप्लिकेशन, मोबाइल ऐप्स और कस्टम सॉफ़्टवेयर बनाता है जो व्यवसायों को तेज़ी से बढ़ने में मदद करते हैं।",
      hero_cta_start: "🚀 प्रोजेक्ट शुरू करें",
      hero_cta_work: "▶ हमारा काम देखें",
      dashboard_growth: "मासिक वृद्धि",
      dashboard_title: "रहीमैक्स डैशबोर्ड",
      dashboard_conv: "रूपांतरण दर",
      dashboard_speed: "लोड स्पीड",
      dashboard_seo: "SEO स्कोर",
      float_web: "वेब विकास",
      float_ui: "प्रीमियम UI डिज़ाइन",
      float_seo: "SEO अनुकूलित",
      float_load: "फास्ट लोड डिलीवरी",

      // Announcement Bar
      announcement_text: "🚀 वर्ष 2026 के लिए नए प्रोजेक्ट स्वीकार किए जा रहे हैं • मुफ्त परामर्श • आज ही अपना कॉल बुक करें →",

      // Unique Showcase Section
      live_showcase_title: "लाइव प्रोजेक्ट प्रदर्शन",
      live_showcase_subtitle: "रहीमैक्स द्वारा कोडेड उच्च-प्रदर्शन प्रणालियों के वास्तविक समय के मिनी प्रीव्यू देखें।",
      live_view_project: "लाइव प्रोजेक्ट देखें →",
      live_school_title: "जेनिथ स्कूल ईआरपी",
      live_school_desc: "10k छात्र प्रोफाइल, स्वचालित शुल्क रसीद और शिक्षक पेरोल मॉड्यूल को ट्रैक करने वाला एक कस्टम डैशबोर्ड।",
      live_hospital_title: "मेडिकेयर क्लिनिक पोर्टल",
      live_hospital_desc: "सुरक्षित नैदानिक चार्ट, वास्तविक समय में रोगी कतार ट्रैकर और डॉक्टर कैलेंडर प्रबंधन।",
      live_crm_title: "फिटफ्लो SaaS CRM",
      live_crm_desc: "वास्तविक समय में ग्राहक चेक-इन, स्वचालित सदस्यता मैट्रिक्स और कस्टम टेलीमेट्री डेटा लॉग।",

      // Stats
      stats_completed: "प्रोजेक्ट्स पूर्ण",
      stats_satisfaction: "ग्राहक संतुष्टि",
      stats_support: "सपोर्ट घंटे",
      stats_experience: "वर्षों का अनुभव",

      // Expertise (Showcase)
      exp_tagline: "हमारी विशेषज्ञता",
      exp_title: "प्रीमियम समाधान जो हम प्रदान करते हैं",
      exp_desc: "हम सामान्य रेडीमेड टेम्पलेट नहीं बनाते हैं। हम स्पीड, स्केलेबिलिटी और बेहतर कन्वर्जन के लिए कस्टम-कोडेड वेब आर्किटेक्चर बनाते हैं।",
      exp_cta: "सभी 14 सेवाओं को देखें",
      details_link: "विवरण",
      view_service: "सेवा देखें →",

      // Advantages
      adv_tagline: "रहीमैक्स का लाभ",
      adv_title: "सर्वश्रेष्ठ प्रदर्शन के लिए डिज़ाइन किया गया",
      adv_desc: "हमारे सिस्टम को क्लीन लेआउट, उच्च-प्रदर्शन सेटअप और स्ट्राइप-प्रेरित डैशबोर्ड विवरण का उपयोग करके तैयार किया गया है।",
      adv_aest: "आकर्षक सौंदर्यशास्त्र",
      adv_aest_desc: "एप्पल-प्रेरित लेआउट जो प्रीमियम टाइपोग्राफी, विशाल संरचनाओं और उच्च कंट्रास्ट पर ध्यान केंद्रित करते हैं।",
      adv_custom: "कस्टम निर्मित",
      adv_custom_desc: "कोई फालतू वेबसाइट बिल्डर्स नहीं। हम अधिकतम प्रदर्शन के लिए रिएक्ट, वाइट और टेलविंड सीएसएस में शुरू से कोड करते हैं।",
      adv_sec: "एंटरप्राइज सुरक्षा",
      adv_sec_desc: "सुरक्षित भुगतान, डेटा गोपनीयता और सुरक्षित एपीआई संरचनाओं के लिए अनुकूलित मजबूत आर्किटेक्चर।",
      adv_seo: "SEO अनुकूलित",
      adv_seo_desc: "बेहतर रैंकिंग के लिए आउट-ऑफ़-द-बॉक्स एसईओ मेटाडेटा मैपिंग के साथ गति-अनुकूलित कोड संरचना।",

      // Portfolio
      port_tagline: "केस स्टडीज",
      port_title: "प्रोजेक्ट जो हमने तैयार किए हैं",
      port_title_home: "चुनिंदा केस स्टडीज",
      port_desc: "सटीकता के साथ तैयार किए गए हमारे उच्च-स्तरीय सॉफ्टवेयर समाधानों, डैशबोर्ड और कस्टम डिज़ाइनों के पोर्टफोलियो का अन्वेषण करें।",
      port_cta_title: "क्या आपके मन में कोई विशिष्ट डिज़ाइन है?",
      port_cta_desc: "हम आपके विशिष्ट ब्रांड पहचान के अनुसार किसी भी लेआउट, डेटाबेस सिस्टम या कस्टम एकीकरण को अनुकूलित कर सकते हैं।",
      port_cta_btn: "विवरण पर चर्चा करें",
      view_case: "केस स्टडी देखें →",

      // Industries
      ind_tagline: "उद्योग",
      ind_title: "उद्योग जिन्हें हम सेवा प्रदान करते हैं",
      ind_subtitle: "विशिष्ट उद्योग वर्कफ़्लो को स्वचालित और सुरक्षित करने के लिए तैयार किए गए कस्टम-कोडेड डिजिटल आर्किटेक्चर।",

      // Technology Stack
      tech_tagline: "टेक्नोलॉजी स्टैक",
      tech_title: "हमारा टेक्नोलॉजी स्टैक",
      tech_subtitle: "हम मजबूत, तेज और स्केलेबल डिलीवरी के लिए अगली पीढ़ी के बैकएंड और फ्रंटएंड आर्किटेक्चर का उपयोग करते हैं।",

      // Featured Project
      feat_proj_title: "चुनिंदा प्रोजेक्ट",
      feat_proj_desc: "अस्पताल ईआरपी - संपूर्ण प्रबंधन प्रणाली",

      // Methodology
      method_tagline: "हमारी कार्यप्रणाली",
      method_title: "हम सफलता कैसे सुनिश्चित करते हैं",
      method_desc: "क्लाइंट संरेखण और प्रीमियम सॉफ़्टवेयर प्रदान करने पर केंद्रित एक पारदर्शी, चुस्त कार्यप्रवाह।",
      method_1_title: "आवश्यकताएं",
      method_1_desc: "विस्तृत उपयोगकर्ता लक्ष्यों को इकट्ठा करना, प्रौद्योगिकी दायरों को परिभाषित करना और स्पष्ट आवश्यकताएं लिखना।",
      method_2_title: "अनुसंधान",
      method_2_desc: "उपयोगकर्ता प्रतिस्पर्धियों का विश्लेषण करना, इष्टतम डीबी मॉडल तलाशना और एपीआई प्रवाह पर शोध करना।",
      method_3_title: "UI डिज़ाइन",
      method_3_desc: "मजबूत स्टाइलिंग टोकन के साथ फिग्मा में उच्च-सटीकता, ऐप्पल-जैसे इंटरैक्टिव इंटरफेस बनाना।",
      method_4_title: "विकास",
      method_4_desc: "बिना किसी फालतू निर्भरता के साफ, कस्टम रिएक्ट और टेलविंड कोड लिखना।",
      method_5_title: "परीक्षण",
      method_5_desc: "कड़े गुणवत्ता ऑडिट, स्पीड चेकिंग, रिस्पॉन्सिव लेआउट ऑडिट और डिवाइस परीक्षण।",
      method_6_title: "लॉन्च",
      method_6_desc: "लाइव होस्ट सर्वर पर सुरक्षित परिनियोजन, एनालिटिक्स हैंडऑफ़ और निरंतर सहायता सेटअप।",

      // FAQs
      faq_tagline: "अक्सर पूछे जाने वाले प्रश्न",
      faq_title: "सामान्यतः पूछे जाने वाले प्रश्न",
      faq_desc: "प्रश्न हैं? हमारे पास उत्तर हैं। यदि आपका प्रश्न सूचीबद्ध नहीं है, तो बेझिझक हमसे संपर्क करें।",

      // Collaborate CTA
      collab_tagline: "आइए सहयोग करें",
      collab_title: "अपने डिजिटल अनुभव को अगले स्तर पर ले जाने के लिए तैयार हैं?",
      collab_desc: "मुफ़्त परामर्श कॉल के लिए आज ही हमसे संपर्क करें। हम आपकी तकनीकी आवश्यकताओं, प्रोजेक्ट समयसीमा पर चर्चा करेंगे और एक कस्टम अनुमान तैयार करेंगे।",
      collab_btn_1: "मुफ़्त परामर्श प्राप्त करें",
      collab_btn_2: "प्रोजेक्ट्स ब्राउज़ करें",

      // Contact Form
      c_tagline: "संपर्क में रहें",
      c_title: "आइए कुछ अद्भुत बनाएं",
      c_desc: "24 घंटे के भीतर कस्टम कोटेशन प्राप्त करने के लिए नीचे दिए गए फॉर्म को भरें, या सीधे हमसे संपर्क करें।",
      c_info_title: "संपर्क जानकारी",
      c_email: "हमें ईमेल करें",
      c_call: "हमें कॉल करें",
      c_address: "मुख्यालय का पता",
      c_next_title: "आगे क्या होता है?",
      c_next_1: "विचारों पर संरेखित करने के लिए हम 15 मिनट की डिस्कवरी कॉल शेड्यूल करते हैं।",
      c_next_2: "हमारे आर्किटेक्ट काम का एक स्पष्ट विवरण और अनुमान तैयार करते हैं।",
      c_label_name: "पूरा नाम *",
      c_label_email: "ईमेल पता *",
      c_label_phone: "फ़ोन नंबर *",
      c_label_solution: "आवश्यक समाधान *",
      c_label_budget: "अनुमानित बजट रेंज",
      c_label_message: "प्रोजेक्ट ब्रीफ *",
      c_placeholder_name: "उदा. विक्रम शर्मा",
      c_placeholder_email: "उदा. vikram@mycompany.com",
      c_placeholder_phone: "उदा. 9876543210",
      c_placeholder_message: "अपनी आवश्यकताओं, डैशबोर्ड जरूरतों, सुविधाओं या डेटाबेस नियमों का वर्णन करें...",
      c_btn_send: "संदेश भेजें →",
      c_btn_sending: "अनुरोध भेजा जा रहा है...",

      // Pricing
      pr_tagline: "पारदर्शी योजनाएं",
      pr_title: "प्रीमियम मूल्य निर्धारण पैकेज",
      pr_desc: "एक ऐसी योजना चुनें जो आपके व्यावसायिक स्तर के अनुकूल हो, या पूरी तरह से अनुकूलित सॉफ़्टवेयर कोटेशन के लिए संपर्क करें।",
      pr_one_time: "एक बार",
      pr_features: "सुविधाएं शामिल",
      pr_benefits: "मुख्य लाभ",
      pr_included_all: "हमारे सभी पैकेजों में शामिल",
      pr_custom_code: "कस्टम कोड",
      pr_secure_setup: "सुरक्षित सेटअप",
      pr_analytics: "एनालिटिक्स तैयार",
      pr_mobile: "मोबाइल रेडी"
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
