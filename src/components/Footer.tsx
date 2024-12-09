import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white mt-10 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ShopItToMall - The future of online shopping. Coming soon with revolutionary features and exclusive deals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>support@shopittomall.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 ShopItToMall. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}