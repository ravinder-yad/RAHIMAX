import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Custom React Code Outperforms Elementor & WordPress Builders",
      excerpt: "A technical deep-dive into how DOM bloat affects search rankings and how clean code loads 300% faster.",
      date: "July 24, 2026",
      author: "Rahid Sheikh",
      readTime: "5 min read",
      category: "Tech",
      image: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)"
    },
    {
      id: 2,
      title: "How to Design Dashboards That Don't Confuse Users",
      excerpt: "UX principles inspired by Stripe and Linear to represent complex data in clean grids with soft gradients.",
      date: "July 18, 2026",
      author: "Maxim Deshmukh",
      readTime: "8 min read",
      category: "Design",
      image: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)"
    },
    {
      id: 3,
      title: "The Ultimate Guide to School Management Systems",
      excerpt: "How migrating administrative queues to a digital cloud ERP saves institutional staff up to 15 hours per week.",
      date: "June 29, 2026",
      author: "Arjun Verma",
      readTime: "12 min read",
      category: "ERP Systems",
      image: "linear-gradient(135deg, #059669 0%, #064E3B 100%)"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog & Tech Insights | Web engineering advice - Rahimax</title>
        <meta name="description" content="Explore custom web engineering, technical SEO advice, and SaaS design system layouts from the specialists at Rahimax." />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline="Insights"
            title="Articles & Tech Insights"
            subtitle="Learn about the design languages, performance metrics, and architectures we use to build successful software."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white border border-border-light rounded-[24px] overflow-hidden premium-shadow hover:border-secondary/20 transition-all duration-300"
              >
                {/* Visual Cover */}
                <div 
                  className="h-52 flex items-center justify-center text-white"
                  style={{ background: post.image }}
                >
                  <span className="font-heading font-extrabold text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 font-body">
                  <div className="flex items-center gap-4 text-xs text-text-gray mb-3.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg md:text-xl text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-gray text-xs leading-relaxed mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <hr className="border-border-light my-5" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-semibold flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="text-secondary font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
