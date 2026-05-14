import ambianceImg from "@/assets/ambiance.jpg";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  "200+ dishes across 10 menu categories",
  "Tandoor-fresh kebabs & sizzling platters",
  "Authentic Varhadi & Mughlai specialties",
  "Cozy casual dining atmosphere",
  "Delivery available via Zomato",
];

const stats = [
  { value: "200+", label: "Menu Items" },
  { value: "4.1★", label: "Zomato Rating" },
  { value: "503+", label: "Happy Reviews" },
];

export default function FeaturedSection() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: listRef, isVisible: listVisible } = useScrollReveal<HTMLUListElement>({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imgRef}
            className={`relative rounded-3xl overflow-hidden aspect-[4/3] transition-all ease-out ${
              imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDuration: "800ms" }}
          >
            <img
              src={ambianceImg}
              alt="Restaurant ambiance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl px-4 py-3 flex-1 text-center transition-all ease-out ${
                    imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDuration: "600ms",
                    transitionDelay: imgVisible ? `${400 + i * 120}ms` : "0ms",
                  }}
                >
                  <div className="font-serif text-2xl font-bold text-gold-500">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all ease-out ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDuration: "800ms" }}
          >
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Every Meal Tells a Story
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Located in the heart of Siddhivinayak Nagar, Drink And Dine (D.A.D) brings together
              the best of Indian and Oriental cuisines under one roof. From smoky tandoori
              preparations to fiery Chinese starters and slow-cooked Mughlai curries — every dish
              is crafted with passion and fresh ingredients.
            </p>

            <ul ref={listRef} className="space-y-3 mb-8">
              {highlights.map((point, i) => (
                <li
                  key={point}
                  className={`flex items-center gap-3 transition-all ease-out ${
                    listVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                  style={{
                    transitionDuration: "500ms",
                    transitionDelay: listVisible ? `${i * 80}ms` : "0ms",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-gold-500/15 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-gold-500" />
                  </div>
                  <span className="text-sm text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            <div
              className={`transition-all ease-out ${
                listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDuration: "500ms", transitionDelay: listVisible ? "450ms" : "0ms" }}
            >
              <Link
                to="/menu"
                className="inline-block gold-gradient text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-105"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
