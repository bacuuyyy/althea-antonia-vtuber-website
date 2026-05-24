import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Lore", href: "#lore" },
  { name: "Profile", href: "#profile" },
  { name: "Schedule", href: "#schedule" },
  { name: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center group shrink-0">
            <img 
              src={logo} 
              alt="Althea Antonia Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display font-semibold text-base lg:text-lg text-foreground/80 hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://discord.com/invite/ENXYAbrE3Q" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
            <Button className="btn-kawaii text-primary-foreground px-6" asChild>
              <a href="https://youtube.com/@AltheaAntonia" target="_blank" rel="noopener noreferrer">
                Subscribe YouTube
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary"
                  asChild
                >
                  <a href="https://discord.com/invite/ENXYAbrE3Q" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
                <Button className="btn-kawaii text-primary-foreground" asChild>
                  <a href="https://youtube.com/@AltheaAntonia" target="_blank" rel="noopener noreferrer">
                    Subscribe YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
