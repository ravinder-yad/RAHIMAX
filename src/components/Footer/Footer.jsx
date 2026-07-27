import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <span className="text-white text-2xl font-extrabold tracking-wider font-heading">
              RAHIMAX<span className="text-secondary">.</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            We build high-performance web applications, bespoke ERP systems, and conversion-optimized websites. Partner with us to scale your digital presence.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-secondary hover:text-white text-slate-400 transition-all duration-300" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-secondary hover:text-white text-slate-400 transition-all duration-300" aria-label="Twitter">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-secondary hover:text-white text-slate-400 transition-all duration-300" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-secondary hover:text-white text-slate-400 transition-all duration-300" aria-label="LinkedIn">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-6 text-white tracking-wider uppercase">Company</h3>
          <ul className="space-y-3.5 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Featured Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Options</Link></li>
            <li><Link to="/reviews" className="hover:text-white transition-colors">Client Reviews</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-6 text-white tracking-wider uppercase">Get in touch</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>info@rahimax.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>102, Premium Tech Hub, Sector-62, Noida, UP, India</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Box */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-6 text-white tracking-wider uppercase">Newsletter</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Subscribe to receive our latest updates, tech stacks, and premium web advice.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-secondary transition-colors text-sm font-body"
            />
            <button 
              type="submit" 
              className="absolute right-2 p-2 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Rahimax. All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
