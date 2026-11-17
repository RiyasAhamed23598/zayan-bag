import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const MobileBottomBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-amber-500 bg-blue-900/95 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around py-2 pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex flex-1 flex-col items-center gap-1 py-2 text-white transition-colors hover:text-blue-400"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('mobile.callNow')}</span>
        </a>
        <a
          href={getWhatsAppUrl(i18n.language)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-2 text-white transition-colors hover:text-green-400"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('mobile.whatsapp')}</span>
        </a>
        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-2 text-white transition-colors hover:text-amber-400"
        >
          <Navigation className="h-5 w-5" />
          <span className="text-[10px] font-medium">{t('mobile.directions')}</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
