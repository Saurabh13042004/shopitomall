import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center"
    >
      <img 
        src="/logo.png" 
        alt="ShopItToMall" 
        className="h-16 md:h-20"
      />

    </motion.div>
  );
}