import React from 'react';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { GiveawayForm } from './components/GiveawayForm';
import { CybertruckImage } from './components/CybertruckImage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FeatureSection } from './components/FeatureSection';
import { ContactSection } from './components/ContactSection';
import { useTheme } from './lib/theme';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const { theme } = useTheme();

  const handleOpenGiveaway = () => setShowModal(true);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        <Toaster position="top-right" />
        <Navbar onOpenGiveaway={handleOpenGiveaway} />

        <main>
          <section className="relative pt-32 lg:pt-48 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="container mx-auto text-center mb-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-3xl opacity-20 dark:opacity-10 animate-gradient" />
                <h1 className="relative text-5xl md:text-7xl font-bold mb-6 dark:text-white">
                  The Future of Shopping
                  <br />
                  <span className="text-gradient">Is Coming Soon</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get ready for a revolutionary shopping experience. Register now for a chance to win a Tesla Cybertruck!
              </p>
            </motion.div>

            <CybertruckImage onOpenGiveaway={handleOpenGiveaway} />
          </section>

          <FeatureSection />
          <ContactSection />
        </main>

        <Footer />

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
                Win a Cybertruck!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Fill out the form below to enter the giveaway
              </p>
              <GiveawayForm />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;