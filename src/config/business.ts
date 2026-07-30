export const BUSINESS_CONFIG = {
  name: 'Zayan Bag',
  tagline: 'Premium Bags & Expert Repair Services',
  
  phone: '+91-7010766312', // Replace with actual phone number
  whatsappNumber: '917010766312', // Replace with actual WhatsApp number (no + or spaces)
  email: '', // Add email if available

  address: {
    line1: '50, West Vadampokki Street',
    landmark1: 'Near Koodal Azhagar Temple',
    landmark2: 'Near Periyar Bus Stand',
    area: 'Periyar, Madurai Main',
    city: 'Madurai',
    state: 'Tamil Nadu',
    pincode: '625001',
    full: '50, West Vadampokki Street, Near Koodal Azhagar Temple, Near Periyar Bus Stand, Periyar, Madurai Main, Madurai, Tamil Nadu – 625001',
  },

  googleMapsUrl: 'https://maps.google.com/?q=Zayan+Bag+Madurai', // Replace with actual Google Maps URL
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0!2d78.12!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTIuMCJOIDc4wrAwNycxMi4wIkU!5e0!3m2!1sen!2sin!4v1234567890', // Replace with actual embed URL

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
    description: 'Shop quality bags, trolley bags and suitcases and get professional suitcase repair services near Periyar Bus Stand in Madurai.',
    canonicalUrl: 'https://your-domain.com', // Replace with actual domain
    ogImage: '/og-image.jpg', // Replace with actual OG image
  },
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
