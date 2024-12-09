import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from './ui/Button';
import { validateEmail, generateOTP } from '../lib/utils';

export function GiveawayForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    otp: '',
  });
  const [showOTP, setShowOTP] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!showOTP) {
      const otp = generateOTP();
      setGeneratedOTP(otp);
      setShowOTP(true);
      toast.success(`OTP sent to your email! (For demo: ${otp})`);
      return;
    }

    if (formData.otp !== generatedOTP) {
      toast.error('Invalid OTP');
      return;
    }

    toast.success('Successfully registered for the giveaway!');
    setFormData({ name: '', email: '', phone: '', country: '', otp: '' });
    setShowOTP(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
      </div>
      {showOTP && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
          />
        </div>
      )}
      <Button type="submit" size="lg" className="w-full">
        {showOTP ? 'Verify OTP' : 'Register for Giveaway'}
      </Button>
    </form>
  );
}