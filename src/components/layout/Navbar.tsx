import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalCount, openCart } = useCartStore();
  const count = totalCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(224,30%,5%)]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-22">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="nav-logo text-2xl lg:text-3xl text-gold-500 group-hover:text-gold-400 transition-colors tracking-[0.15em]">
              D.A.D
            </span>
            <span className="text-[8px] tracking-[0.35em] text-gold-500/40 uppercase font-light mt-0.5">
              Drink &amp; Dine
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-200 hover:text-gold-500 pb-0.5
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold-500 after:transition-all after:duration-300
                  ${
                    location.pathname === link.href
                      ? "text-gold-500 after:w-full"
                      : "text-foreground/60 after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag size={19} className="text-foreground/60 hover:text-gold-500 transition-colors" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none shadow-lg">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>
            <a
              href="tel:+919403021003"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-foreground px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105 shadow-lg shadow-gold-500/20"
            >
              <Phone size={12} />
              Reserve
            </a>
          </div>

          {/* Mobile: Cart + Toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} className="text-foreground/70" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground/70 hover:text-gold-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(224,30%,5%)]/98 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`py-3 px-4 rounded-xl text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === link.href
                    ? "text-gold-500 bg-gold-500/8"
                    : "text-foreground/60 hover:text-gold-500 hover:bg-white/4"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919403021003"
              className="mt-3 flex items-center justify-center gap-2 bg-gold-500 text-primary-foreground px-4 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg shadow-gold-500/20"
            >
              <Phone size={13} />
              +91 94030 21003
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
