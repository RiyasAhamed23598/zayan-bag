import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import RepairServicesSection from '../sections/RepairServicesSection';
import BeforeAfterSection from '../sections/BeforeAfterSection';

const RepairServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t('nav.repairServices')} | Zayan Bag`}</title>
      </Helmet>
      <div className="pt-24">
        <RepairServicesSection />
        <BeforeAfterSection />
      </div>
    </>
  );
};

export default RepairServicesPage;
