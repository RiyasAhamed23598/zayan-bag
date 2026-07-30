import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import AppRoutes from './routes';
import { BUSINESS_CONFIG } from './config/business';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import MobileBottomBar from './components/ui/MobileBottomBar';

function App() {
  const { i18n } = useTranslation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_CONFIG.name,
    description: BUSINESS_CONFIG.seo.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.address.line1,
      addressLocality: BUSINESS_CONFIG.address.city,
      addressRegion: BUSINESS_CONFIG.address.state,
      postalCode: BUSINESS_CONFIG.address.pincode,
      addressCountry: 'IN',
    },
    telephone: BUSINESS_CONFIG.phone,
    url: BUSINESS_CONFIG.seo.canonicalUrl,
    image: BUSINESS_CONFIG.seo.ogImage,
    priceRange: '₹₹',
    openingHours: [
      'Mo-Sa 09:00-21:00',
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{BUSINESS_CONFIG.seo.title}</title>
        <meta name="description" content={BUSINESS_CONFIG.seo.description} />
        <link rel="canonical" href={BUSINESS_CONFIG.seo.canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={BUSINESS_CONFIG.seo.title} />
        <meta property="og:description" content={BUSINESS_CONFIG.seo.description} />
        <meta property="og:image" content={BUSINESS_CONFIG.seo.ogImage} />
        <meta property="og:url" content={BUSINESS_CONFIG.seo.canonicalUrl} />
        <meta property="og:locale" content={i18n.language === 'ta' ? 'ta_IN' : 'en_IN'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={BUSINESS_CONFIG.seo.title} />
        <meta name="twitter:description" content={BUSINESS_CONFIG.seo.description} />
        <meta name="twitter:image" content={BUSINESS_CONFIG.seo.ogImage} />

        {/* Keywords */}
        <meta name="keywords" content="bags madurai, trolley bags madurai, suitcase repair madurai, bag shop madurai, luggage repair, Zayan Bag, பைகள் மதுரை, டிராலி பேக் மதுரை, சூட்கேஸ் பழுதுபார்ப்பு" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <AppRoutes />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  );
}

export default App;
