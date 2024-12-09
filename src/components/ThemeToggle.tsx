import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { Button } from './ui/Button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleTheme}
      className="w-10 h-10 p-0"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}