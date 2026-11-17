export const BUSINESS_CONFIG = {
  name: 'Zayan Bag',
  tagline: 'Premium Bags & Expert Repair Services',
  
  phone: '+91-7010766312', // Replace with actual phone number
  whatsappNumber: '917010766312', // Replace with actual WhatsApp number (no + or spaces)
  email: '', // Add email if available

  address: {
    line1: '80 Perumal Nandavam, Tirupparankunram Rd',
    landmark1: 'On Tirupparankunram Road',
    landmark2: 'Agrini Township',
    area: 'Agrini Twp',
    city: 'Madurai',
    state: 'Tamil Nadu',
    pincode: '625011',
    full: '80 Perumal Nandavam, Tirupparankunram Rd, Agrini Twp, Madurai, Tamil Nadu 625011',
  },

  googleMapsUrl: 'https://maps.google.com/?q=80+Perumal+Nandavam,+Tirupparankunram+Rd,+Agrini+Twp,+Madurai,+Tamil+Nadu+625011', // Replace with actual Google Maps URL
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=80+Perumal+Nandavam,+Tirupparankunram+Rd,+Agrini+Twp,+Madurai,+Tamil+Nadu+625011&output=embed',

  businessHours: {
    weekdays: '9:00 AM – 10:00 PM', // Replace with actual hours
    saturday: '9:00 AM – 9:00 PM',
    sunday: '10:00 AM – 4:00 PM', // Replace or mark as closed
  },

  social: {
    facebook: '#', // Replace with actual URL
    instagram: '#',
    youtube: '#',
  },

  whatsappMessages: {
    en: 'Hello Zayan Bag, I would like to know more about your bags and repair services.',
    ta: 'வணக்கம் Zayan Bag, உங்கள் பைகள் மற்றும் பழுதுபார்ப்பு சேவைகள் பற்றி மேலும் தெரிந்துகொள்ள விரும்புகிறேன்.',
  },

  seo: {
    title: 'Zayan Bag | Bags, Trolley Bags & Suitcase Repair in Madurai',
    description: 'Shop quality bags, trolley bags and suitcases and get professional suitcase repair services on Tirupparankunram Road, Madurai.',
    canonicalUrl: 'https://your-domain.com', // Replace with actual domain
    ogImage: '/og-image.jpg', // Replace with actual OG image
  },
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
