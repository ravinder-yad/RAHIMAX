import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageSquare } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { testimonialsData } from '../../data/mockData';

const Reviews = () => {
  const [reviews, setReviews] = useState(testimonialsData);
  const [form, setForm] = useState({ name: '', role: '', content: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.content) {
      alert('Please fill out all fields.');
      return;
    }
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      role: form.role || 'Client Partner',
      content: form.content,
      avatar: form.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      rating: parseInt(form.rating)
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: '', role: '', content: '', rating: 5 });
    alert('Thank you for your feedback!');
  };

  return (
    <>
      <Helmet>
        <title>Client Reviews | What Founders Say - Rahimax</title>
        <meta name="description" content="Read client testimonials and ratings for Rahimax. Discover how our digital solutions, custom ERP designs, and SEO optimizations helped startups grow." />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline="Testimonials"
            title="Client Success Reviews"
            subtitle="Don't just take our word for it. Read what founders and operational heads say about our work."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
            
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="bg-white p-8 rounded-[24px] border border-border-light premium-shadow flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-heading font-extrabold text-base shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-2 text-accent">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-text-gray text-sm md:text-base leading-relaxed italic mb-4 font-body">
                      "{review.content}"
                    </p>
                    <h4 className="font-heading font-bold text-sm text-primary">{review.name}</h4>
                    <p className="text-text-gray text-xs font-semibold mt-0.5">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Leave a review box */}
            <div className="bg-white p-8 rounded-[24px] border border-border-light premium-shadow">
              <h3 className="font-heading font-extrabold text-lg text-primary mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <span>Submit Feedback</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 font-body">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    required
                    className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">Company / Role</label>
                  <input 
                    type="text" 
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. CEO, Apex Hub"
                    className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">Rating</label>
                  <select 
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
                    className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Good)</option>
                    <option value="3">3 Stars (Average)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2">Review Details *</label>
                  <textarea 
                    rows="4"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Describe your project and feedback..."
                    required
                    className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 rounded-full transition-colors text-sm"
                >
                  Submit Review
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
