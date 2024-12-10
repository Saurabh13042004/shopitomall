import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from './ui/Button';
import { validateEmail, validatePhoneNumber, generateOTP } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function GiveawayForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate OTP
      const newOTP = generateOTP();
      setGeneratedOTP(newOTP);
      setShowOTP(true);
      
      // In a real application, you would send this OTP via email
      // For demo purposes, we'll show it in the toast
      toast.success(`OTP sent to your email! (Demo OTP: ${newOTP})`);
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp === generatedOTP) {
      toast.success('Successfully registered for the giveaway!', {
        duration: 5000,
        icon: '🎉',
      });
      // Reset form
      setFormData({ name: '', email: '', country: '', phone: '' });
      setOTP('');
      setShowOTP(false);
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!showOTP ? (
          <motion.form
            key="registration-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleInitialSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your country"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending OTP...' : 'Register Now'}
            </Button>
          </motion.form>
        ) : (
          <motion.form
            key="otp-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleOTPSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter the OTP sent to your email
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                required
                maxLength={6}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-center text-2xl tracking-wider"
                value={otp}
                onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
              />
            </div>
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
            <button
              type="button"
              onClick={() => {
                const newOTP = generateOTP();
                setGeneratedOTP(newOTP);
                toast.success(`New OTP sent! (Demo OTP: ${newOTP})`);
              }}
              className="w-full text-sm text-red-600 hover:text-red-700"
            >
              Resend OTP
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}