import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

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
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
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

const App = () => {
  return (
    <Router>
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

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          {/* Wildcard 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
