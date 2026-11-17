import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Luggage } from 'lucide-react';
import LanguageSelector from '../ui/LanguageSelector';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const navItems = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.products', href: '/products' },
  { key: 'nav.repairServices', href: '/repair-services' },
  { key: 'nav.gallery', href: '/gallery' },
  { key: 'nav.reviews', href: '/#reviews' },
  { key: 'nav.location', href: '/#location' },
  { key: 'nav.contact', href: '/contact' },
  { key: 'nav.faq', href: '/#faq' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const isHashLink = (href: string) => href.includes('#');
  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]) || location.pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf6ec]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'bg-[#fbf6ec]/90 backdrop-blur-md'
      }`}
    >
      <div className="temple-band !h-2.5 !bg-[length:10px_10px]" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 shadow-md ring-2 ring-amber-500 ring-offset-2 ring-offset-[#fbf6ec]">
            <Luggage className="h-5 w-5 text-amber-300" />
          </div>
          <div className="leading-none">
            <span className="block font-serif text-2xl font-bold text-blue-900">
              Zayan Bag
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600">
              Madurai
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            isHashLink(item.href) ? (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-900 text-amber-200'
                    : 'text-gray-700 hover:bg-amber-100 hover:text-blue-900'
                }`}
              >
                {t(item.key)}
              </Link>
            ) : (
              <Link
                key={item.key}
                to={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-900 text-amber-200'
                    : 'text-gray-700 hover:bg-amber-100 hover:text-blue-900'
                }`}
              >
                {t(item.key)}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />
          <a
            href={getWhatsAppUrl(i18n.language)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t('hero.whatsappNow')}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t-2 border-amber-500/60 bg-[#fbf6ec] lg:hidden"
          >
            <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-900 text-amber-200'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-blue-900'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl(i18n.language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('hero.whatsappNow')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
