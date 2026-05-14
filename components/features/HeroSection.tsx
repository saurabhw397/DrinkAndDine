import { Link } from "react-router-dom";
import { ChevronDown, Star, MapPin, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Poster image shown while video loads */}
        <img
          src={heroBg}
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Autoplay looping video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          style={{ zIndex: 1 }}
        >
          {/* Primary: restaurant candles & ambiance */}
          <source
            src="https://videos.pexels.com/video-files/6586286/6586286-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback: food serving */}
          <source
            src="https://videos.pexels.com/video-files/5820011/5820011-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays for text legibility */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 2, background: "linear-gradient(to bottom, hsl(345 35% 5% / 0.72) 0%, hsl(345 35% 5% / 0.35) 45%, hsl(345 35% 5% / 0.92) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ zIndex: 2, background: "linear-gradient(to right, hsl(345 35% 5% / 0.55) 0%, transparent 50%, hsl(345 35% 5% / 0.35) 100%)" }}
        />
        {/* Burgundy tint to match site theme */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 2, background: "hsl(350 60% 10% / 0.25)" }}
        />
      </div>

      {/* Mute/Unmute control */}
      <button
        onClick={toggleMute}
        title={muted ? "Unmute video" : "Mute video"}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-10 right-6 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/70 hover:text-white hover:bg-black/60 hover:border-white/30 transition-all duration-200"
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Live badge */}
      <div className="absolute top-24 right-6 z-20 hidden sm:flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] px-3 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        Live Ambiance
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gold-500/10 border border-gold-500/25 text-gold-400 text-[11px] font-medium px-5 py-2.5 rounded-full mb-8 tracking-[0.2em] uppercase">
          <Star size={11} className="fill-gold-400" />
          4.1 ★ Rated on Zomato · 503+ Reviews
        </div>

        {/* Eyebrow */}
        <p className="text-[11px] font-sans tracking-[0.5em] uppercase text-gold-500/70 mb-4">Est. Amravati</p>

        {/* Title */}
        <h1 className="hero-title text-[72px] sm:text-[96px] lg:text-[140px] text-foreground mb-2"
          style={{ textShadow: "0 4px 32px rgba(0,0,0,0.7)" }}
        >
          Drink <em className="not-italic text-gold-500">&amp;</em> Dine
        </h1>
        <div className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold-400/60 mb-7 tracking-[0.6em] font-light">
          D &nbsp;·&nbsp; A &nbsp;·&nbsp; D
        </div>

        <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto mb-4 leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
        >
          A culinary journey through North Indian, Chinese & Mughlai flavors.
          Where every meal becomes a memory.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 mb-10">
          <MapPin size={14} className="text-gold-500" />
          Kathora Road, Siddhivinayak Nagar, Amravati
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="gold-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            Explore Menu
          </Link>
          <a
            href="tel:+919403021003"
            className="border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:border-gold-500 backdrop-blur-sm"
          >
            Reserve a Table
          </a>
        </div>

        {/* Cuisine Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {["North Indian", "Chinese", "Mughlai", "Kebab", "Biryani", "Sizzlers"].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-black/30 backdrop-blur-sm border border-white/15 text-foreground/70 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-gold-500/50" size={28} />
      </div>
    </section>
  );
}
