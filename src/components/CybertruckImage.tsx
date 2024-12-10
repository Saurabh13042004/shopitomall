import { motion } from 'framer-motion';
import { useState } from 'react';

export function CybertruckImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full flex justify-end mt-8" // Ensure the image is aligned to the right with margin
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 50 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={isHovered 
          ? "./image_hovered.png"
          : "./image_hovered.png"}
        alt="Tesla Cybertruck"
        className="w-2/3 md:w-1/2 lg:w-1/3 h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  );
}
