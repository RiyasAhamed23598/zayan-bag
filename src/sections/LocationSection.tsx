import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, CheckCircle2, Landmark } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { BUSINESS_CONFIG } from '../config/business';

const LocationSection = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_CONFIG.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="location" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          heading={t('location.heading')}
          subheading={t('location.subheading')}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Col: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] overflow-hidden rounded-2xl border border-gray-100 shadow-lg sm:h-[450px]"
          >
            <iframe
              src={BUSINESS_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zayan Bag Location Map"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Right Col: Address & Info Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            {/* Address Card */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{BUSINESS_CONFIG.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {BUSINESS_CONFIG.address.full}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Navigation className="h-4.5 w-4.5" />
                  <span>{t('location.getDirections')}</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:bg-gray-100"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-4.5 w-4.5 text-green-600" />
                      <span className="text-green-600">{t('location.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4.5 w-4.5 text-gray-500" />
                      <span>{t('location.copyAddress')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Landmark Details */}
            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    {t('location.nearbyLandmarks')}
                  </h4>
                  <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-gray-600">
                    <li>{t('location.landmark1')}</li>
                    <li>{t('location.landmark2')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
