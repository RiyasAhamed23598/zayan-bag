import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layers, Award, CircleDollarSign, Wrench, Headphones, MapPin, Shield } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const features = [
  { titleKey: 'whyChoose.wideRange', descKey: 'whyChoose.wideRangeDesc', Icon: Layers },
  { titleKey: 'whyChoose.quality', descKey: 'whyChoose.qualityDesc', Icon: Award },
  { titleKey: 'whyChoose.affordable', descKey: 'whyChoose.affordableDesc', Icon: CircleDollarSign },
  { titleKey: 'whyChoose.experienced', descKey: 'whyChoose.experiencedDesc', Icon: Wrench },
  { titleKey: 'whyChoose.quickSupport', descKey: 'whyChoose.quickSupportDesc', Icon: Headphones },
  { titleKey: 'whyChoose.convenient', descKey: 'whyChoose.convenientDesc', Icon: MapPin },
  { titleKey: 'whyChoose.trusted', descKey: 'whyChoose.trustedDesc', Icon: Shield },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

const WhyChooseSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-900 bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={t('whyChoose.heading')} 
          subtitle={t('whyChoose.subheading')} 
          light={true}
        />
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const { Icon } = feature;
            return (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
