import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Rahimax</title>
      </Helmet>

      <section className="min-h-[75vh] flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-md w-full bg-white border border-border-light rounded-[32px] p-8 md:p-12 premium-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          
          <span className="font-heading font-extrabold text-7xl md:text-8xl text-secondary block animate-pulse">
            404
          </span>
          
          <h1 className="font-heading font-extrabold text-2xl text-primary mt-6 mb-3">
            Digital Path Lost
          </h1>
          
          <p className="text-text-gray font-body text-sm leading-relaxed mb-8">
            The page you are looking for has been moved, renamed, or is temporarily unavailable. Let's return you to standard digital systems.
          </p>

          <div className="space-y-3 font-body">
            <Link 
              to="/" 
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-secondary transition-all flex items-center justify-center space-x-2 text-sm shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Systems</span>
            </Link>
            
            <button 
              onClick={() => window.location.reload()}
              className="w-full border border-border-light text-primary hover:bg-slate-50 font-semibold py-3 px-6 rounded-full transition-all flex items-center justify-center space-x-2 text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Page</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
