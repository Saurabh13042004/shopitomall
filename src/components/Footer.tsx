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
        
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap items-center align-middle text-center justify-center gap-8 space-y-2 md:space-y-0">
  <p>&copy; 2024 ShopItToMall - All rights reserved</p>
  
  <div className="flex items-center space-x-4">
  <span>|</span>
    <a href="#" className="hover:text-red-500">Privacy Policy</a>
    <span>|</span>
    <a href="#" className="hover:text-red-500">Cookie Policy</a>
    <span>|</span>
  </div>
  
  <p className="flex items-center space-x-2">
    Powered by 
    <img src="./logosecond.jpg" alt="ShopItToMall Logo" className="h-6 inline-block" />
   
  </p>
</div>


      </div>
    </motion.footer>
  );
}