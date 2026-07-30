import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Luggage } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import LanguageSelector from '../ui/LanguageSelector';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Upper Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: About & Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/25">
                <Luggage className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Zayan Bag
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              {t('footer.description')}
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={BUSINESS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-gray-400 transition-colors hover:bg-pink-600 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={BUSINESS_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-gray-400 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="Youtube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('nav.products')}</Link>
              </li>
              <li>
                <Link to="/repair-services" className="hover:text-white transition-colors">{t('nav.repairServices')}</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.productCategories')}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('products.categories.schoolBags')}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('products.categories.trolleyBags')}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('products.categories.suitcases')}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('products.categories.backpacks')}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">{t('products.categories.handBags')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span className="leading-relaxed">{BUSINESS_CONFIG.address.full}</span>
              </li>
              <li>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(i18n.language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <span>{t('contact.whatsappNow')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-900 bg-gray-950 px-4 py-8 text-center text-xs sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <LanguageSelector variant="light" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
