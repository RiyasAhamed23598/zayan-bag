import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { beforeAfterItems } from '../data/beforeAfter';

const BeforeAfterSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 section-padding py-16" id="before-after">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={t('repair.beforeAfterHeading')} 
          subtitle={t('repair.beforeAfterSubheading')} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {beforeAfterItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md z-10 font-medium">
                    {t('repair.before')}
                  </div>
                  <img 
                    src={item.before} 
                    alt={`${t(item.titleKey)} before`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-green-600/90 text-white text-xs px-2 py-1 rounded-md z-10 font-medium">
                    {t('repair.after')}
                  </div>
                  <img 
                    src={item.after} 
                    alt={`${t(item.titleKey)} after`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(item.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
