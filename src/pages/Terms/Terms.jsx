import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Rahimax</title>
        <meta name="description" content="Review the Terms of Service for project contracts, milestones delivery, and intellectual ownership with Rahimax." />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-border-light rounded-[32px] p-8 md:p-12 premium-shadow font-body text-sm leading-relaxed text-text-gray space-y-6">
          <SectionTitle 
            title="Terms of Service" 
            align="left"
            className="mb-6"
          />
          <p>
            Last Updated: July 27, 2026
          </p>
          <p>
            Welcome to **Rahimax Pro Agency**. By accessing or contracting our web development services, you agree to comply with the terms and conditions outlined below.
          </p>
          
          <h3 className="font-heading font-bold text-lg text-primary mt-6">1. Scope of Work</h3>
          <p>
            We deliver custom React web application design, database engineering, ERP development, and SEO campaign management as outlined in the signed Statement of Work (SOW). Any additions to the initial design brief will require updated estimation.
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">2. Payments & Milestones</h3>
          <p>
            All custom projects require a 40% upfront deposit to initiate UI/UX wireframes. The remaining balance is split across milestone deliverables (e.g. frontend dev completion, staging check, and final production handoff).
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">3. Code Ownership</h3>
          <p>
            Upon full payment clearance of the project invoice, Rahimax transfers 100% intellectual property ownership of the custom code repositories to the client. We do not restrict code usage, reselling, or self-hosting.
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">4. Service Warranties</h3>
          <p>
            We provide a complimentary 30-day support period after deployment to address compilation bugs or design mismatches. Continued modifications are billed under our Website Maintenance plans.
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
