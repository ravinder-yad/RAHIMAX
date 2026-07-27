import React from 'react';

const SectionTitle = ({ tagline, title, subtitle, align = 'center', className = '' }) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  const flexClass = align === 'left' ? 'items-start' : align === 'right' ? 'items-end' : 'items-center';

  return (
    <div className={`flex flex-col ${flexClass} ${alignmentClass} mb-14 ${className}`}>
      {tagline && (
        <span className="text-secondary text-xs uppercase tracking-[0.2em] font-extrabold mb-3 px-3 py-1 bg-secondary/10 rounded-full inline-block">
          {tagline}
        </span>
      )}
      <h2 className="text-primary font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-gray font-body text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
