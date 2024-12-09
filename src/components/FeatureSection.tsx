import { motion } from 'framer-motion';

export function FeatureSection() {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience the Future of Shopping
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Join us on this revolutionary journey to transform your shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:px-4 lg:px-10"
          >
            <img 
              className="w-full h-64 object-cover rounded-xl -rotate-1 shadow-lg" 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Shopping Experience" 
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black dark:text-white">Premium Experience</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Curated selection of premium products from top global brands.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:px-4 lg:px-10"
          >
            <img 
              className="w-full h-64 object-cover rounded-xl rotate-1 shadow-lg" 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80" 
              alt="Global Marketplace" 
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black dark:text-white">Global Marketplace</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Connect with sellers and buyers from around the world.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:px-4 lg:px-10"
          >
            <img 
              className="w-full h-64 object-cover rounded-xl -rotate-1 shadow-lg" 
              src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80" 
              alt="Secure Shopping" 
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black dark:text-white">Secure Shopping</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Advanced security measures to protect your transactions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}