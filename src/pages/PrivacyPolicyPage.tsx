import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t('footer.privacyPolicy')} | Zayan Bag`}</title>
      </Helmet>
      <div className="section-padding pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="section-heading mb-6">{t('privacy.heading')}</h1>
          <p className="mb-4 text-sm text-gray-500">
            {t('privacy.lastUpdated')}: January 2024
          </p>
          <div className="prose prose-gray max-w-none rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              {t('privacy.content')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
