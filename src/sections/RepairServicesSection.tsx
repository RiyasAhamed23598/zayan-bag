import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CircleDot, Grip, Scissors, Lock, Pen, Wrench, Settings, Sparkles, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { repairServices } from '../data/repairServices';
import SectionHeading from '../components/ui/SectionHeading';
import { getWhatsAppUrl } from '../utils/whatsapp';

const iconMap: Record<string, LucideIcon> = {
  CircleDot, Grip, Scissors, Lock, Needle: Pen, Wrench, Settings, Sparkles
};

export default function RepairServicesSection() {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={t('repair.heading')} 
          subtitle={t('repair.subheading')} 
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {repairServices.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            
            return (
              <motion.div key={service.id} variants={itemVariants} className="h-full">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col border border-gray-100 group">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t(service.nameKey)}</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm">{t(service.descriptionKey)}</p>
                  
                  <a
                    href={getWhatsAppUrl(i18n.language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-800 transition-colors w-max"
                  >
                    {t('repair.enquireNow', 'Enquire Now')}
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
