import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Rahimax</title>
        <meta name="description" content="Read our privacy policy to understand how we protect user data, client databases, and dashboard integrations." />
      </Helmet>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-border-light rounded-[32px] p-8 md:p-12 premium-shadow font-body text-sm leading-relaxed text-text-gray space-y-6">
          <SectionTitle 
            title="Privacy Policy" 
            align="left"
            className="mb-6"
          />
          <p>
            Last Updated: July 27, 2026
          </p>
          <p>
            At **Rahimax**, we prioritize the confidentiality and safety of our client databases, SaaS telemetry, and personal communications. This Privacy Policy describes how we collect, use, and process data.
          </p>
          
          <h3 className="font-heading font-bold text-lg text-primary mt-6">1. Information We Collect</h3>
          <p>
            We collect information you directly submit via our contact requests or review inputs. This includes your name, company name, email address, phone number, budget range, and project brief requirements.
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">2. How We Use Information</h3>
          <p>
            We use the collected metadata to:
            - Provide estimated pricing quotes and consult proposals.
            - Send notifications regarding system maintenance or support requests.
            - Improve landing page speed layouts and user experience metrics.
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">3. Data Integrity & Security</h3>
          <p>
            We deploy secure architectures, SSL configurations, and database credentials policies to ensure client ERP portals are isolated and protected against malicious vulnerabilities. We do not sell or lease client contact information.
          </p>

          <h3 className="font-heading font-bold text-lg text-primary mt-6">4. Contacting Us</h3>
          <p>
            If you have questions about our data security or wish to remove your user review inputs, please contact us at **privacy@rahimax.com**.
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
