import React from 'react';

interface SectionHeadingProps {
  title?: string;
  heading?: string;
  subheading?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  light?: boolean;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  heading,
  subheading,
  subtitle,
  className = '',
  centered = true,
  light = false,
  children,
}) => {
  const mainTitle = title || heading || children;
  const subText = subheading || subtitle;

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      {mainTitle && (
        <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-gray-900'}`}>
          {mainTitle}
        </h2>
      )}
      {subText && (
        <p className={`mt-3 text-base sm:text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subText}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
