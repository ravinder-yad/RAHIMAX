import React, { useState } from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import { Utensils, CheckCircle, Flame } from 'lucide-react';

const RestaurantDemo = () => {
  const [order, setOrder] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const menu = [
    { name: 'Truffle Mushroom Pizza', price: 499, description: 'Fresh black truffles with mozzarella and garlic butter base.' },
    { name: 'Smashed Avocado Toast', price: 299, description: 'Organic sourdough topped with avocado, cherry tomatoes, and feta.' },
    { name: 'Signature Matcha Latte', price: 199, description: 'Stone-ground green tea latte sweetened with organic honey.' }
  ];

  const addToOrder = (dish) => {
    const existing = order.find(item => item.name === dish.name);
    if (existing) {
      setOrder(order.map(item => item.name === dish.name ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setOrder([...order, { ...dish, qty: 1 }]);
    }
    setSubmitted(false);
  };

  const getSubtotal = () => {
    return order.reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const placeOrder = () => {
    setSubmitted(true);
    setOrder([]);
  };

  const subtotal = getSubtotal();

  return (
    <div className="space-y-6 text-left max-w-lg mx-auto font-body text-xs sm:text-sm">
      <h3 className="font-heading font-black text-sm text-primary uppercase tracking-wider mb-2 border-b pb-2 flex items-center gap-2">
        <Utensils className="w-5 h-5 text-secondary" />
        <span>QR Contactless Digital Menu (Live Demo)</span>
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-text-gray uppercase mb-2">Select Dishes from Table 5</label>
          <div className="space-y-3">
            {menu.map((dish, idx) => (
              <div key={idx} className="p-3 bg-bg-surface border border-border-light rounded-xl flex justify-between items-center hover:border-secondary/30 transition-all">
                <div className="max-w-[70%]">
                  <h4 className="font-bold text-primary">{dish.name}</h4>
                  <p className="text-[10px] text-text-gray mt-1 leading-normal font-body">{dish.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-heading font-black text-primary block mb-2">₹{dish.price}</span>
                  <button 
                    onClick={() => addToOrder(dish)}
                    className="bg-secondary text-white font-bold px-3 py-1 rounded-lg text-[10px] uppercase hover:bg-secondary/90 transition-all cursor-pointer"
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {order.length > 0 && (
          <div className="p-4 bg-slate-50 dark:bg-zinc-950 border border-border-light rounded-xl">
            <h4 className="font-heading font-extrabold text-[10px] text-primary border-b pb-1.5 uppercase tracking-wider">Your Table Order</h4>
            <div className="mt-2 space-y-1.5 text-xs">
              {order.map((item, idx) => (
                <div key={idx} className="flex justify-between text-text-gray">
                  <span>{item.name} (x{item.qty})</span>
                  <span className="font-bold text-primary">₹{item.price * item.qty}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 flex justify-between items-center font-extrabold text-primary">
                <span>Subtotal:</span>
                <span className="text-secondary text-sm">₹{subtotal}</span>
              </div>
              <button 
                onClick={placeOrder}
                className="w-full bg-primary hover:bg-primary/95 text-white py-2 rounded-xl font-bold uppercase text-[10px] tracking-wider mt-3 transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Place Order to Kitchen</span>
              </button>
            </div>
          </div>
        )}

        {submitted && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl flex items-start gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Order Sent to Kitchen!</span>
              <span className="text-[10px] text-emerald-500/80 leading-normal block mt-1">
                Your Table 5 ticket #304 is registered. This is a simulation of the QR Menu ordering tablet integrations.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const RestaurantSolution = () => {
  const features = [
    "Digital Interactive QR Menus",
    "Real-time Food Ordering Sync",
    "Table Reservations & Calendars",
    "Kitchen Display System (KDS) feeds",
    "POS Invoicing & Digital Billing",
    "Commission-free Direct Deliveries",
    "Dynamic Promo Codes & Discounts",
    "Restaurant Analytics & Auditing"
  ];

  const benefits = [
    "Eliminate 3rd-party food ordering commissions (0% commission)",
    "Increase table turnover rates by 25%",
    "Contactless table QR payments setup",
    "Unified dashboard for multiple outlets"
  ];

  const faqs = [
    { q: "Can clients order food from their table?", a: "Yes. They scan the QR code placed on the table, browse the menu, and order directly. The ticket goes straight to the kitchen KDS tablet." },
    { q: "Do you integrate with payment systems?", a: "Yes. Customers can pay directly at the end of their meal via GooglePay/UPI in their mobile browser." }
  ];

  const portfolio = [
    { name: "L'Aura Bistro Menu", desc: "Mouth-watering digital menu with local table reservation calendar.", image: "/aura-mock.jpg" },
    { name: "Sizzle Grill Delivery", desc: "Steakhouse booking panel with online food checkout module.", image: "/lens-mock.jpg" },
    { name: "Pizzeria Craft", desc: "Custom pizza topping designer and real-time order delivery tracker.", image: "/prime-mock.jpg" }
  ];

  return (
    <SolutionPageLayout
      title="Restaurant Solution"
      subtitle="Complete contactless QR ordering systems, table reservations calendars, restaurant marketing sites, and digital billing systems."
      category="Restaurant"
      bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
      features={features}
      benefits={benefits}
      demoComponent={RestaurantDemo}
      portfolio={portfolio}
      faqs={faqs}
      ctaTitle="Want to Launch a Commission-Free Ordering System?"
    />
  );
};

export default RestaurantSolution;
