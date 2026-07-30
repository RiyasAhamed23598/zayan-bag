import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ProductCategoriesSection from '../sections/ProductCategoriesSection';
import FeaturedProductsSection from '../sections/FeaturedProductsSection';

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t('nav.products')} | Zayan Bag`}</title>
      </Helmet>
      <div className="pt-24">
        <ProductCategoriesSection />
        <FeaturedProductsSection />
      </div>
    </>
  );
};

export default ProductsPage;
