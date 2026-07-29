import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/Common/ScrollToTop';
import PageLoader from './components/Common/PageLoader';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import Portfolio from './pages/Portfolio/Portfolio';
import Pricing from './pages/Pricing/Pricing';
import Reviews from './pages/Reviews/Reviews';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Refund from './pages/Refund/Refund';
import Cookies from './pages/Cookies/Cookies';
import NotFound from './pages/404/NotFound';

// Solutions
import SolutionsCatalog from './pages/Solutions';
import HealthcareSolution from './pages/Solutions/healthcare';
import EducationSolution from './pages/Solutions/education';
import EcommerceSolution from './pages/Solutions/ecommerce';
import CorporateSolution from './pages/Solutions/corporate';
import GymSolution from './pages/Solutions/gym';
import RestaurantSolution from './pages/Solutions/restaurant';
import RealEstateSolution from './pages/Solutions/real-estate';
import StartupSolution from './pages/Solutions/startup';
import FinanceSolution from './pages/Solutions/finance';
import HotelSolution from './pages/Solutions/hotel';
import TravelSolution from './pages/Solutions/travel';
import ManufacturingSolution from './pages/Solutions/manufacturing';
import AgricultureSolution from './pages/Solutions/agriculture';
import LegalSolution from './pages/Solutions/legal';
import AgencySolution from './pages/Solutions/agency';

// Resources pages
import ResourcesCatalog from './pages/Resources';
import ResBlog from './pages/Resources/Blog';
import CaseStudies from './pages/Resources/CaseStudies';
import PricingGuide from './pages/Resources/PricingGuide';
import FAQPage from './pages/Resources/FAQPage';
import Templates from './pages/Resources/Templates';
import Documentation from './pages/Resources/Documentation';
import Tutorials from './pages/Resources/Tutorials';
import Downloads from './pages/Resources/Downloads';
import WhitePapers from './pages/Resources/WhitePapers';
import IndustryReports from './pages/Resources/IndustryReports';
import LearningCenter from './pages/Resources/LearningCenter';
import AIProjectPlanner from './pages/Resources/AIProjectPlanner';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
      <Routes>
        {/* Main nested layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          
          {/* Solutions catalog and 15 industry portals */}
          <Route path="solutions" element={<SolutionsCatalog />} />
          <Route path="solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="solutions/education" element={<EducationSolution />} />
          <Route path="solutions/ecommerce" element={<EcommerceSolution />} />
          <Route path="solutions/corporate" element={<CorporateSolution />} />
          <Route path="solutions/gym" element={<GymSolution />} />
          <Route path="solutions/restaurant" element={<RestaurantSolution />} />
          <Route path="solutions/real-estate" element={<RealEstateSolution />} />
          <Route path="solutions/startup" element={<StartupSolution />} />
          <Route path="solutions/finance" element={<FinanceSolution />} />
          <Route path="solutions/hotel" element={<HotelSolution />} />
          <Route path="solutions/travel" element={<TravelSolution />} />
          <Route path="solutions/manufacturing" element={<ManufacturingSolution />} />
          <Route path="solutions/agriculture" element={<AgricultureSolution />} />
          <Route path="solutions/legal" element={<LegalSolution />} />
          <Route path="solutions/agency" element={<AgencySolution />} />

          {/* Resources catalog subpages */}
          <Route path="resources" element={<ResourcesCatalog />} />
          <Route path="resources/blog" element={<ResBlog />} />
          <Route path="resources/case-studies" element={<CaseStudies />} />
          <Route path="resources/pricing-guide" element={<PricingGuide />} />
          <Route path="resources/faq" element={<FAQPage />} />
          <Route path="resources/templates" element={<Templates />} />
          <Route path="resources/documentation" element={<Documentation />} />
          <Route path="resources/tutorials" element={<Tutorials />} />
          <Route path="resources/downloads" element={<Downloads />} />
          <Route path="resources/whitepapers" element={<WhitePapers />} />
          <Route path="resources/industry-reports" element={<IndustryReports />} />
          <Route path="resources/learning-center" element={<LearningCenter />} />
          <Route path="resources/ai-planner" element={<AIProjectPlanner />} />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="cookies" element={<Cookies />} />
          {/* Wildcard 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
