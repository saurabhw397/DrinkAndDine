import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import tandooriPlatter from "@/assets/gallery/tandoori-platter.jpg";
import butterChicken from "@/assets/gallery/butter-chicken.jpg";
import sizzler from "@/assets/gallery/sizzler.jpg";
import biryaniHandi from "@/assets/gallery/biryani-handi.jpg";
import restaurantInterior from "@/assets/gallery/restaurant-interior.jpg";
import paneerTikka from "@/assets/gallery/paneer-tikka.jpg";
import chilliChicken from "@/assets/gallery/chilli-chicken.jpg";
import breadsBasket from "@/assets/gallery/breads-basket.jpg";
import diningTable from "@/assets/gallery/dining-table.jpg";
import muttonHandi from "@/assets/gallery/mutton-handi.jpg";
import friedRice from "@/assets/gallery/fried-rice.jpg";
import outdoorSeating from "@/assets/gallery/outdoor-seating.jpg";

type Category = "All" | "Food" | "Ambiance" | "Specials";

interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  span?: "wide" | "tall" | "normal";
}

const galleryImages: GalleryImage[] = [
  {
    src: restaurantInterior,
    title: "Our Dining Space",
    subtitle: "Warm, intimate ambiance",
    category: "Ambiance",
    span: "wide",
  },
  {
    src: tandooriPlatter,
    title: "Tandoori Mixed Platter",
    subtitle: "Kebabs & tikka straight from the tandoor",
    category: "Food",
    span: "normal",
  },
  {
    src: biryaniHandi,
    title: "Chicken Dum Biryani",
    subtitle: "Slow-cooked aromatic perfection",
    category: "Specials",
    span: "tall",
  },
  {
    src: butterChicken,
    title: "Butter Chicken",
    subtitle: "Velvety tomato-cream gravy",
    category: "Food",
    span: "tall",
  },
  {
    src: sizzler,
    title: "Paneer Tikka Sizzler",
    subtitle: "Live sizzle at your table",
    category: "Specials",
    span: "wide",
  },
  {
    src: paneerTikka,
    title: "Paneer Tikka",
    subtitle: "Charred to golden perfection",
    category: "Food",
    span: "normal",
  },
  {
    src: diningTable,
    title: "Fine Dining Setup",
    subtitle: "Perfect for every occasion",
    category: "Ambiance",
    span: "normal",
  },
  {
    src: chilliChicken,
    title: "Chilli Chicken",
    subtitle: "Indo-Chinese wok magic",
    category: "Food",
    span: "wide",
  },
  {
    src: muttonHandi,
    title: "Varhadi Mutton Handi",
    subtitle: "Our house signature",
    category: "Specials",
    span: "normal",
  },
  {
    src: breadsBasket,
    title: "Bread Basket",
    subtitle: "Freshly baked from the tandoor",
    category: "Food",
    span: "normal",
  },
  {
    src: outdoorSeating,
    title: "Evening Seating",
    subtitle: "Dine under the stars",
    category: "Ambiance",
    span: "wide",
  },
  {
    src: friedRice,
    title: "Schezwan Fried Rice",
    subtitle: "Fiery Indo-Chinese classic",
    category: "Food",
    span: "normal",
  },
];

const categories: Category[] = ["All", "Food", "Specials", "Ambiance"];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="relative z-10 max-w-5xl w-full mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
        />
        <div className="mt-4 text-center">
          <p className="text-white font-serif text-xl font-bold">{image.title}</p>
          <p className="text-white/60 text-sm mt-1">{image.subtitle}</p>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-5 overflow-x-auto max-w-full pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                // navigate to clicked thumbnail
                const diff = i - index;
                if (diff > 0) for (let j = 0; j < diff; j++) onNext();
                else for (let j = 0; j < Math.abs(diff); j++) onPrev();
              }}
              className={`shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === index
                  ? "border-gold-500 opacity-100 scale-105"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Column distribution for masonry (3 columns)
  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  const getGlobalIndex = (colIndex: number, colOffset: number) => {
    return colOffset * 3 + colIndex;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 px-4 text-center overflow-hidden bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            A Visual Feast
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Explore the flavors, atmosphere, and culinary artistry that define the D.A.D experience.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 min-h-[44px] ${
                activeCategory === cat
                  ? "bg-gold-500 border-gold-500 text-primary-foreground"
                  : "bg-transparent border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                ({cat === "All" ? galleryImages.length : galleryImages.filter((g) => g.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">📷</p>
            <p className="text-muted-foreground">No images in this category.</p>
          </div>
        ) : (
          <>
            {/* Desktop: 3-column masonry */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {[col1, col2, col3].map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((img, rowIdx) => {
                    const globalIdx = getGlobalIndex(colIdx, rowIdx);
                    return (
                      <GalleryCard
                        key={img.src}
                        img={img}
                        index={globalIdx}
                        onOpen={openLightbox}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Mobile: 2-column grid */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {filtered.map((img, i) => (
                <GalleryCard key={img.src} img={img} index={i} onOpen={openLightbox} />
              ))}
            </div>
          </>
        )}

        {/* Total count */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          Showing {filtered.length} of {galleryImages.length} photos
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}

function GalleryCard({
  img,
  index,
  onOpen,
}: {
  img: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="group relative overflow-hidden rounded-2xl bg-secondary cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      aria-label={`View ${img.title}`}
    >
      <img
        src={img.src}
        alt={img.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{
          minHeight: img.span === "wide" ? "200px" : img.span === "tall" ? "360px" : "240px",
        }}
      />

      {/* Category badge */}
      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-sm text-gold-400 border border-gold-500/30 px-2.5 py-1 rounded-full">
        {img.category}
      </span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-serif font-bold text-base leading-tight">{img.title}</p>
            <p className="text-white/70 text-xs mt-0.5">{img.subtitle}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gold-500/80 flex items-center justify-center shrink-0 ml-2">
            <ZoomIn size={15} className="text-white" />
          </div>
        </div>
      </div>
    </button>
  );
}
