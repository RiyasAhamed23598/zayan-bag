import React from 'react';
import Ornament from './Ornament';

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
        <>
          <Ornament light={light} className={`mb-4 ${centered ? '' : 'justify-start'}`} />
          <h2 className={`font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${light ? 'text-amber-200' : 'text-blue-900'}`}>
            {mainTitle}
          </h2>
        </>
      )}
      {subText && (
        <p className={`mt-4 text-base italic sm:text-lg max-w-2xl mx-auto ${light ? 'text-amber-50/80' : 'text-gray-600'}`}>
          {subText}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
