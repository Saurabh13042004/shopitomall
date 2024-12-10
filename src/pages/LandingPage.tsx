import { Toaster } from 'react-hot-toast';
import { Logo } from '../components/Logo';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer'
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>

      <main>
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;