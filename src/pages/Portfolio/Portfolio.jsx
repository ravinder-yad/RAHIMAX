import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { projectsData } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const { t } = useLanguage();

  const categories = ['All', 'Development', 'ERP & Systems', 'Design'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio | Featured Works & Custom Case Studies - Rahimax</title>
        <meta name="description" content="Browse the Rahimax case studies. View our custom school ERP systems, high-converting retail stores, responsive SaaS panels, and modern web application designs." />
      </Helmet>

      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline={t('port_tagline')}
            title={t('port_title')}
            subtitle={t('port_desc')}
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-btn-primary-bg border-btn-primary-bg text-btn-primary-text shadow-lg'
                    : 'bg-btn-secondary-bg border-btn-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-bg-card rounded-[24px] border border-border-light overflow-hidden premium-shadow hover:border-secondary/20 transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div 
                  className="h-60 flex items-center justify-center relative overflow-hidden text-white"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <span className="p-3 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/40 cursor-pointer transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="font-heading font-extrabold text-xl uppercase tracking-widest bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md text-center max-w-[80%]">
                    {project.title}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="text-[10px] bg-secondary/10 text-secondary font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase">
                    {project.category}
                  </span>
                  
                  <h3 className="font-heading font-bold text-xl text-primary mt-4 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed mb-6 font-body">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-bg-surface text-primary border border-border-light/40 text-[10px] font-bold px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-sm text-primary hover:text-secondary font-bold group"
                  >
                    <span>{t('view_case')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 p-10 md:p-12 rounded-[32px] bg-bg-surface border border-border-light flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary">{t('port_cta_title')}</h3>
              <p className="text-text-gray text-sm mt-1 max-w-xl">
                {t('port_cta_desc')}
              </p>
            </div>
            <a 
              href="/contact"
              className="bg-btn-primary-bg text-btn-primary-text border border-transparent hover:bg-btn-primary-hover font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shrink-0 text-sm"
            >
              {t('port_cta_btn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
