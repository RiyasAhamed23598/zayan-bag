import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { BUSINESS_CONFIG } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
} as const;

const ContactSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading={t('contact.heading')}
          subheading={t('contact.subheading')}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Card 1: Phone */}
          <motion.div variants={cardVariants} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{t('contact.phone')}</h3>
              <p className="mt-2 text-sm text-gray-600 font-semibold">{BUSINESS_CONFIG.phone}</p>
            </div>
            <div className="mt-6">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex w-full items-center justify-center rounded-xl border border-blue-600 bg-white py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors"
              >
                {t('contact.callNow')}
              </a>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp */}
          <motion.div variants={cardVariants} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{t('contact.whatsapp')}</h3>
              <p className="mt-2 text-sm text-gray-600 font-semibold">WhatsApp Chat</p>
            </div>
            <div className="mt-6">
              <a
                href={getWhatsAppUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl text-white py-2.5 text-sm font-semibold shadow-md shadow-green-500/25 hover:shadow-lg transition-shadow"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
              >
                {t('contact.whatsappNow')}
              </a>
            </div>
          </motion.div>

          {/* Card 3: Address */}
          <motion.div variants={cardVariants} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{t('contact.address')}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">{BUSINESS_CONFIG.address.full}</p>
            </div>
            <div className="mt-6">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                {t('contact.directions')}
              </a>
            </div>
          </motion.div>

          {/* Card 4: Business Hours */}
          <motion.div variants={cardVariants} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">{t('contact.businessHours')}</h3>
              <div className="mt-3 space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between font-medium">
                  <span>{t('contact.weekdays')}:</span>
                  <span>{BUSINESS_CONFIG.businessHours.weekdays}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>{t('contact.sunday')}:</span>
                  <span>{BUSINESS_CONFIG.businessHours.sunday}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-1 text-center text-xs text-gray-400">
              Open Daily
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
