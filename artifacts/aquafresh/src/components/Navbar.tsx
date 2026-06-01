import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Droplets } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Droplets className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif text-xl font-bold tracking-wide">
            AquaFresh
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Source", "Process", "Purity", "Products"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button className="rounded-full px-8 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              Order Now
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {["Source", "Process", "Purity", "Products"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-lg mt-4"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
