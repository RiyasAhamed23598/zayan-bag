import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { faqItems } from '../data/faq';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading={t('faq.heading')}
          subheading={t('faq.subheading')}
        />

        <div className="mt-8 space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-gray-150 bg-white transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{t(item.questionKey)}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-gray-100 bg-gray-50/50 p-5 text-sm leading-relaxed text-gray-600 sm:p-6 sm:text-base">
                        {t(item.answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
