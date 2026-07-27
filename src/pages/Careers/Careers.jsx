import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Careers = () => {
  const jobs = [
    {
      id: "react-dev",
      role: "Frontend Engineer (React / Tailwind)",
      department: "Engineering",
      location: "Noida / Hybrid",
      type: "Full-Time",
      experience: "2-4 Years"
    },
    {
      id: "uiux-designer",
      role: "Product Designer (Figma / Web Design)",
      department: "Design",
      location: "Remote / India",
      type: "Full-Time",
      experience: "3+ Years"
    },
    {
      id: "seo-specialist",
      role: "Technical SEO Campaign Manager",
      department: "Marketing",
      location: "Noida, UP",
      type: "Full-Time",
      experience: "2+ Years"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Join the Engineering Team - Rahimax</title>
        <meta name="description" content="View active career opportunities at Rahimax. We are hiring React developers, UI/UX designers, and SEO campaign strategists." />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tagline="Join us"
            title="We're Building the Next Generation of Web Solutions"
            subtitle="Work with advanced tech stacks (React 19, Tailwind CSS v4, GSAP) and design portals for global founders."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white p-6 md:p-8 rounded-[24px] border border-border-light premium-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-secondary/20 transition-all duration-300 group"
              >
                <div>
                  <span className="text-[10px] bg-slate-100 text-primary font-bold uppercase px-2.5 py-1 rounded">
                    {job.department}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-primary mt-3 mb-2">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-text-gray font-body font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      {job.type}
                    </span>
                    <span>Exp: {job.experience}</span>
                  </div>
                </div>

                <a 
                  href={`/contact?subject=Application for ${job.role}`}
                  className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary text-sm shrink-0 flex items-center gap-1 transition-all group-hover:scale-105"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h4 className="font-heading font-bold text-lg text-primary">Don't see your profile?</h4>
            <p className="text-text-gray text-sm mt-2">
              We are always looking for passionate engineers and builders. Send your resume directly to <span className="text-secondary font-semibold">careers@rahimax.com</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
