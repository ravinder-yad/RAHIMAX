import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { ShoppingCart, Tag, CheckCircle } from 'lucide-react';

const EcommerceDemo = () => {
  const [cart, setCart] = useState([
    { name: 'Developer Premium Template', price: 4999, selected: true },
    { name: 'Custom SEO Campaign Package', price: 2999, selected: false }
  ]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [successMsg, setSuccessMsg] = useState('');

  const toggleSelect = (idx) => {
    const updated = [...cart];
    updated[idx].selected = !updated[idx].selected;
    setCart(updated);
    setDiscount(0); // reset coupon on cart change
    setSuccessMsg('');
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.selected ? item.price : 0), 0);
  };

  const applyCoupon = () => {
    const sub = getSubtotal();
    if (coupon.toUpperCase() === 'RAHIMAX50') {
      setDiscount(sub * 0.5);
      setSuccessMsg('🎉 50% discount coupon RAHIMAX50 applied successfully!');
    } else if (coupon.toUpperCase() === 'WELCOME20') {
      setDiscount(sub * 0.2);
      setSuccessMsg('🎉 20% discount coupon WELCOME20 applied successfully!');
    } else {
      setDiscount(0);
      setSuccessMsg('❌ Invalid discount coupon code.');
    }
  };

  const subtotal = getSubtotal();
  const total = subtotal - discount;

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5 text-secondary" />
        <span>Checkout Price Calculator (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">Configure Cart Items</label>
          <div className="space-y-2">
            {cart.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => toggleSelect(idx)}
                className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                  item.selected 
                    ? 'border-secondary bg-secondary/5 text-primary' 
                    : 'border-border-light bg-bg-surface text-text-gray hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    item.selected ? 'bg-secondary border-secondary text-white' : 'border-border-light bg-white'
                  }`}>
                    {item.selected && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="font-bold">{item.name}</span>
                </div>
                <span className="font-heading font-black text-primary">₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-text-gray w-4 h-4" />
            <input 
              type="text" 
              placeholder="Enter coupon (try RAHIMAX50)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border-light bg-transparent focus:outline-none focus:border-secondary font-bold text-xs"
            />
          </div>
          <button 
            onClick={applyCoupon}
            className="bg-primary text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase hover:bg-primary/90 transition-all cursor-pointer"
          >
            Apply
          </button>
        </div>

        {successMsg && (
          <div className={`p-3.5 border rounded-xl text-[10px] leading-relaxed font-bold ${
            successMsg.includes('Applied') || successMsg.includes('applied')
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
              : 'bg-red-500/10 border-red-500/20 text-red-500'
          }`}>
            {successMsg}
          </div>
        )}

        <div className="border-t pt-4 space-y-2 text-xs font-semibold">
          <div className="flex justify-between text-text-gray">
            <span>Cart Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-emerald-500">
              <span>Coupon Discount:</span>
              <span>- ₹{discount}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-sm font-extrabold text-primary border-t pt-2 border-dashed">
            <span>Total Payable:</span>
            <span className="text-secondary font-heading font-black text-lg">₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcommerceSolution = () => {
  const features = [
    "Headless React Checkout Architecture",
    "Shopify Custom Themes Setup",
    "WooCommerce WordPress Installs",
    "Razorpay / Stripe Gateways Sync",
    "Flexible Discounts & Coupon Modules",
    "Order Inventory Stocks Tracking",
    "Sellers Multi-Vendor Systems Setup",
    "Sales Analytics & Accounting Ledgers"
  ];

  const benefits = [
    "Increase e-store sales checkouts by up to 35%",
    "Bespoke pages load in under 1 second, reducing cart drops",
    "Zero ongoing platform fees for WooCommerce setups",
    "Fully integrated warehouse stock dashboards"
  ];

  const faqs = [
    { q: "Which gateway do you recommend for India?", a: "Razorpay is highly stable and supports UPI, NetBanking, and credit/debit card transactions natively." },
    { q: "Can we migrate from Shopify to custom React?", a: "Yes. We design headless storefronts that pull inventory from Shopify APIs, combining stability with custom speeds." }
  ];

  const portfolio = [
    { name: "Aura Fashion Store", desc: "Headless React fashion store featuring smooth carts and payment sync.", image: "/aura-mock.jpg" },
    { name: "Luxe Decor", desc: "Premium interior furniture e-store with custom 3D model loaders.", image: "/lens-mock.jpg" },
    { name: "Glow Cosmetics", desc: "Skincare product store with integrated reviews and bundle builder.", image: "/prime-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="E-Commerce Solution"
      subtitle="Launch headless, custom React storefronts, WooCommerce portals, or custom Shopify theme setups engineered for sales."
      category="E-Commerce"
      bgImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={EcommerceDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Ready to Elevate Your Online Store Sales?"
    />
  );
};

export default EcommerceSolution;
