
import { motion } from 'framer-motion';
import { GiveawayForm } from './GiveawayForm';
import { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative min-h-screen bg-cover bg-center"   style={{ backgroundImage: "url('/bg_france.jpg')" }}>
      <div className="absolute inset-0 " />
      
      <div className="relative pt-32 pb-20 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future Of Shopping
            <br />
            <span className="text-red-500">Is Coming Soon</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get ready for a revolutionary shopping experience. Register now to be part
            of the shopitomall earlybirds and for a chance to win a Tesla Cybertruck!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[35%,65%] gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/95 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Register Now</h2>
            <GiveawayForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
                src="./image_hovered.png"
                alt="Tesla Cybertruck"
                className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300"
            />
            {/* <div className="absolute -top-10 -right-10 rotate-12">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg"
              >
                WIN A CYBERTRUCK!
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

