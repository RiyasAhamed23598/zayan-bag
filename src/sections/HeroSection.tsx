import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';
import Ornament from '../components/ui/Ornament';

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  } as const;

  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="relative flex min-h-[92vh] items-center bg-cover bg-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(31,5,4,0.95) 0%, rgba(74,13,12,0.9) 45%, rgba(127,20,20,0.72) 100%), url('./images/trolley_repair_hero.jpg')",
        }}
      >
        <div className="kolam-dark pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Text */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-400/50 bg-black/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
            >
              <span>✦</span> Madurai <span>✦</span>
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl font-bold leading-tight drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">{t('hero.heading')}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="my-6 flex justify-center lg:justify-start">
              <Ornament light />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-10 max-w-2xl text-lg text-amber-50/85 md:text-xl lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                to="/products"
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-amber-200/60 px-7 py-4 font-semibold text-blue-950 shadow-lg shadow-black/30 transition-all hover:-translate-y-1 hover:shadow-amber-500/40 sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #f4dc8a, #e0ab2b 50%, #c9921a)' }}
              >
                <ShoppingBag className="h-5 w-5" />
                {t('hero.exploreProducts')}
              </Link>

              <a
                href={getWhatsAppUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#128C7E] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                {t('hero.whatsappNow')}
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-amber-300/50 px-7 py-4 font-semibold text-amber-100 transition-all hover:-translate-y-1 hover:border-amber-300 hover:bg-white/10 sm:w-auto"
              >
                <MapPin className="h-5 w-5" />
                {t('hero.getDirections')}
              </a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 flex items-start justify-center gap-2 text-sm text-amber-100/75 lg:justify-start"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>{BUSINESS_CONFIG.address.full}</span>
            </motion.p>
          </motion.div>

          {/* Temple-arch framed image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <div className="temple-arch absolute -inset-4 border-2 border-amber-400/40" />
            <div className="temple-arch absolute -inset-2 border border-amber-300/70" />
            <div className="temple-arch relative aspect-[4/5] overflow-hidden border-4 border-amber-500 shadow-2xl shadow-black/50">
              <img
                src="./images/shop_entrance.jpg"
                alt="Zayan Bag shop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/90 to-transparent p-6 text-center">
                <p className="font-serif text-2xl font-bold text-amber-200">{BUSINESS_CONFIG.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-amber-100/80">Tirupparankunram Road</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="temple-band" />
    </section>
  );
}
