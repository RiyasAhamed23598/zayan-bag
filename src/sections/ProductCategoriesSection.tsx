import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Briefcase, Laptop, Backpack, Plane, Luggage, Box, Package, Baby, ShoppingBag, Tag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { productCategories } from '../data/categories';
import SectionHeading from '../components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, BookOpen, Briefcase, Laptop, Backpack, Plane, Luggage, Box, Package, Baby, ShoppingBag, Tag,
};

export default function ProductCategoriesSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  return (
    <section className="py-20 bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={t('products.heading')} 
          subtitle={t('products.subheading')} 
        />
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {productCategories.map((category) => {
            const Icon = iconMap[category.icon] || ShoppingBag;
            
            return (
              <motion.div key={category.id} variants={itemVariants} className="h-full">
                <Link to={`/products?category=${category.id}`} className="group block h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <img 
                        src={category.image} 
                        alt={t(category.nameKey)} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full backdrop-blur-sm shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-end absolute bottom-0 w-full text-white pointer-events-none">
                      <h3 className="text-lg font-bold mb-1 drop-shadow-md">{t(category.nameKey)}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2 drop-shadow">{t(category.descriptionKey)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
