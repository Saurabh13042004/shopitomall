import { ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenGiveaway: () => void;
}

export function Navbar({ onOpenGiveaway }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className={`relative flex items-center justify-between h-16 lg:h-24 px-4 lg:px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-transparent'
            : 'lg:bg-white/80 lg:dark:bg-gray-900/80 lg:backdrop-blur-sm lg:mt-8 lg:rounded-md lg:shadow-lg'
        }`}>
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-28 h-10 lg:w-36 lg:h-12" />
              {/* <ShoppingBag className="w-8 h-8 lg:h-10 lg:w-10 text-red-500" /> */}
              {/* <span className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled || !isScrolled
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-900 dark:text-white'
              }`}>
                ShopItToMall
              </span> */}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="default" 
              onClick={onOpenGiveaway}
              size="lg"
              className="hidden sm:inline-flex"
            >
              Win Cybertruck
            </Button>
            <Button 
              variant="default" 
              onClick={onOpenGiveaway}
              className="sm:hidden"
            >
              Win
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}