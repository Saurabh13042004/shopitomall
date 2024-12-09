import { motion } from 'framer-motion';
import { useState } from 'react';

export function CybertruckImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={isHovered 
          ? "./image_hovered.jpg"
          : "./image.jpg"}
        alt="Tesla Cybertruck"
        className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
      />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
        </motion.div>
      )}
    </motion.div>
  );
}