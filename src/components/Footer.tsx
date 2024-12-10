import { motion } from 'framer-motion';
import { Logo } from './Logo';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-900 py-12"
    >
      <div className="container mx-auto px-6 text-center">
        <Logo />
        
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 ShopItToMall - All rights reserved</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-red-500">Cookie Policy</a>
          </div>
          <p className="mt-2">Powered by ShopItToMall</p>
        </div>
      </div>
    </motion.footer>
  );
}