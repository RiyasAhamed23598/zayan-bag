import { BUSINESS_CONFIG } from '../config/business';

export const getWhatsAppUrl = (language: string = 'en'): string => {
  const message = language === 'ta'
    ? BUSINESS_CONFIG.whatsappMessages.ta
    : BUSINESS_CONFIG.whatsappMessages.en;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
};

export const getCallUrl = (): string => {
  return `tel:${BUSINESS_CONFIG.phone}`;
};

export const getDirectionsUrl = (): string => {
  return BUSINESS_CONFIG.googleMapsUrl;
};
