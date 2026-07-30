import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden py-25 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.88)), url('./images/trolley_repair_hero.jpg')` }}
    >
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 text-6xl opacity-20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🎒
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-10 text-6xl opacity-20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🧳
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md"
        >
          {t('hero.heading')}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto drop-shadow"
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <ShoppingBag className="w-5 h-5" />
            {t('hero.exploreProducts')}
          </Link>
          
          <a 
            href={getWhatsAppUrl(i18n.language)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/50 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            {t('hero.whatsappNow')}
          </a>
          
          <a 
            href={BUSINESS_CONFIG.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
          >
            <MapPin className="w-5 h-5" />
            {t('hero.getDirections')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
