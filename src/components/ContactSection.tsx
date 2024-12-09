import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export function ContactSection() {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              Have questions? We're here to help. Reach out to us through any of these channels.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="p-6">
                <Phone className="w-10 h-10 mx-auto text-red-500" />
                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">+1 (555) 987-6543</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="p-6">
                <Mail className="w-10 h-10 mx-auto text-red-500" />
                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white">contact@shopittomall.com</p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">support@shopittomall.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="p-6">
                <MapPin className="w-10 h-10 mx-auto text-red-500" />
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
                  123 Innovation Drive,<br />Silicon Valley, CA 94025
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          >
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Send us a message</h3>

              <form className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900 dark:text-white">Your name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2.5 w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900 dark:text-white">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2.5 w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2.5 w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900 dark:text-white">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="mt-2.5 w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-base font-medium text-gray-900 dark:text-white">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    className="mt-2.5 w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}