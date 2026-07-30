import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import SectionHeading from '../components/ui/SectionHeading';
import type { GalleryImage } from '../types';

const CATEGORIES = [
  { key: 'all', translationKey: 'gallery.all' },
  { key: 'trolleyBags', translationKey: 'gallery.trolleyBags' },
  { key: 'suitcases', translationKey: 'gallery.suitcases' },
  { key: 'schoolBags', translationKey: 'gallery.schoolBags' },
  { key: 'backpacks', translationKey: 'gallery.backpacks' },
  { key: 'shopInterior', translationKey: 'gallery.shopInterior' },
  { key: 'repairWork', translationKey: 'gallery.repairWork' },
];

const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{`${t('nav.gallery')} | Zayan Bag`}</title>
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('gallery.heading')}
            subheading={t('gallery.subheading')}
          />

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {t(cat.translationKey)}
                </button>
              );
            })}
          </div>

          {/* Responsive Image Grid with Framer Motion Layout Animation */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxImage(image)}
                  className="group relative rounded-xl overflow-hidden shadow-sm bg-gray-200 aspect-square cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                    <ZoomIn className="w-8 h-8 mb-2 transform group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-center line-clamp-2">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer border border-white/20"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Centered Image */}
              <div className="relative rounded-xl overflow-hidden max-h-[80vh] shadow-2xl">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="w-full h-full object-contain max-h-[80vh] rounded-xl"
                />
              </div>

              {lightboxImage.alt && (
                <p className="mt-4 text-center text-white text-sm sm:text-base font-medium px-4 py-1.5 rounded-full bg-black/40 border border-white/10">
                  {lightboxImage.alt}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
