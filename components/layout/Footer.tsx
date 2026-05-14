import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, Instagram, Facebook, Twitter, Youtube, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Full Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const cuisines = ["North Indian", "Chinese", "Mughlai", "Kebabs & Grills", "Biryani", "Sizzlers", "Snacks & Starters", "Breads"];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram,
    color: "hover:text-pink-400",
    bg: "hover:bg-pink-500/10 hover:border-pink-500/30",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-500/10 hover:border-blue-500/30",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    Icon: Twitter,
    color: "hover:text-sky-400",
    bg: "hover:bg-sky-500/10 hover:border-sky-500/30",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    Icon: Youtube,
    color: "hover:text-red-400",
    bg: "hover:bg-red-500/10 hover:border-red-500/30",
  },
];

export default function Footer() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919403021003?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%20at%20Drink%20%26%20Dine%20(D.A.D)"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] group"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 shrink-0"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm font-semibold">Order on WhatsApp</span>
      </a>

      <footer className="relative overflow-hidden border-t border-white/6">
        {/* Background layers */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(342 35% 6%) 0%, hsl(345 40% 3%) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 10% 0%, hsl(40 95% 52% / 0.14) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(350 50% 18% / 0.22) 0%, transparent 55%)",
          }}
        />

        {/* Large D.A.D watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-serif font-bold text-[clamp(140px,22vw,320px)] leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(251,191,36,0.055)",
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}
          >
            D.A.D
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

          {/* Top brand + tagline */}
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-500/50 mb-3 font-light">
              Est. Amravati · Since 2020
            </p>
            <div className="font-serif text-5xl lg:text-6xl font-bold text-gold-500 tracking-[0.06em] mb-2">
              D.A.D
            </div>
            <div className="text-base lg:text-lg text-foreground/50 tracking-[0.4em] uppercase font-light">
              Drink &amp; Dine
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
              Where every plate tells a story. A celebration of bold flavors, warm hospitality,
              and unforgettable dining in the heart of Amravati.
            </p>

            {/* Zomato Rating */}
            <div className="inline-flex items-center gap-2 mt-5 bg-[#e23744]/10 border border-[#e23744]/20 text-[#e23744] px-4 py-2 rounded-full text-xs font-semibold">
              <span className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={11} className="fill-[#e23744] text-[#e23744]" />
                ))}
                <Star size={11} className="fill-[#e23744]/40 text-[#e23744]/40" />
              </span>
              4.1 · 503 Reviews on Zomato
              <a
                href="https://www.zomato.com/amravati/drink-and-dine-d-a-d-siddhivinayak-nagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="View on Zomato"
              >
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-gold-500/40" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
              <div className="w-8 h-px bg-gold-500/60" />
              <div className="font-serif text-gold-500/70 text-lg">✦</div>
              <div className="w-8 h-px bg-gold-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-500/20 to-gold-500/40" />
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-base font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-gold-500/60 inline-block" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-300 inline-block" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuisines */}
            <div>
              <h4 className="font-serif text-base font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-gold-500/60 inline-block" />
                Our Cuisines
              </h4>
              <ul className="space-y-3">
                {cuisines.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-500/40 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit Us */}
            <div>
              <h4 className="font-serif text-base font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-gold-500/60 inline-block" />
                Visit Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Dube Hights, Samta Gruha Nirman Sanstha, Kathora Road,
                    Siddhivinayak Nagar, Amravati
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-gold-500 shrink-0" />
                  <a
                    href="tel:+919403021003"
                    className="text-sm text-muted-foreground hover:text-gold-400 transition-colors"
                  >
                    +91 94030 21003
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={15} className="text-gold-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Mon–Sun: 11:00 AM – 11:00 PM
                  </span>
                </li>
              </ul>
            </div>

            {/* Social + WhatsApp CTA */}
            <div>
              <h4 className="font-serif text-base font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-5 h-px bg-gold-500/60 inline-block" />
                Follow Us
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {socialLinks.map(({ label, href, Icon, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-2.5 border border-white/8 bg-white/4 rounded-xl px-3 py-2.5 text-xs text-muted-foreground transition-all duration-200 ${color} ${bg} min-h-[44px]`}
                  >
                    <Icon size={15} className="shrink-0" />
                    <span className="font-medium leading-tight">{label}</span>
                  </a>
                ))}
              </div>

              {/* WhatsApp inline CTA */}
              <a
                href="https://wa.me/919403021003?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%20at%20Drink%20%26%20Dine%20(D.A.D)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/18 hover:border-[#25D366]/50 text-[#25D366] px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 min-h-[44px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat &amp; Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom decorative divider */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/8" />
            <div className="w-1 h-1 rounded-full bg-white/15" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/8" />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs text-muted-foreground/60">
              © 2026 Drink And Dine (D.A.D). All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/40">
              Lic. No. 21523051001640 · Siddhivinayak Nagar, Amravati, Maharashtra
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
