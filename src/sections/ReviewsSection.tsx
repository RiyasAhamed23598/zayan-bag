import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { testimonials } from '../data/testimonials';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
} as const;

const ReviewsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="section-padding bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading={t('reviews.heading')}
          subheading={t('reviews.subheading')}
        />

        {/* Demo Note */}
        <div className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20">
            {t('reviews.sampleNote')}
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute right-6 top-6 text-blue-100">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4.5 w-4.5 ${
                        i < testimonial.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="relative z-10 text-sm leading-relaxed text-gray-600">
                  "{testimonial.reviewKey}"
                </p>
              </div>

              {/* User Bio */}
              <div className="mt-6 border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
