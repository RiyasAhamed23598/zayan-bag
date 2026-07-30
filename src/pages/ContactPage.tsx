import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../sections/ContactSection';
import LocationSection from '../sections/LocationSection';
import FAQSection from '../sections/FAQSection';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t('nav.contact')} | Zayan Bag`}</title>
      </Helmet>
      <div className="pt-24">
        <ContactSection />
        <LocationSection />
        <FAQSection />
      </div>
    </>
  );
};

export default ContactPage;
