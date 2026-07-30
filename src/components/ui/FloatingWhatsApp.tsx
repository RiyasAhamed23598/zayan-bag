import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const FloatingWhatsApp = () => {
  const { i18n } = useTranslation();

  return (
    <motion.a
      href={getWhatsAppUrl(i18n.language)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 md:bottom-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}>
          <MessageCircle className="h-7 w-7 text-white" fill="white" />
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
