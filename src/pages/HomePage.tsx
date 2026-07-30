import HeroSection from '../sections/HeroSection';
import ProductCategoriesSection from '../sections/ProductCategoriesSection';
import FeaturedProductsSection from '../sections/FeaturedProductsSection';
import RepairServicesSection from '../sections/RepairServicesSection';
import BeforeAfterSection from '../sections/BeforeAfterSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import ReviewsSection from '../sections/ReviewsSection';
import LocationSection from '../sections/LocationSection';
import ContactSection from '../sections/ContactSection';
import FAQSection from '../sections/FAQSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section id="repair">
        <RepairServicesSection />
      </section>
      <BeforeAfterSection />
      <WhyChooseSection />
      <section id="products">
        <ProductCategoriesSection />
      </section>
      <FeaturedProductsSection />
      <section id="reviews">
        <ReviewsSection />
      </section>
      <section id="location">
        <LocationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default HomePage;
