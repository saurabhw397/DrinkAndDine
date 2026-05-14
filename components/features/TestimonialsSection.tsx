import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Rahul Deshmukh",
    rating: 5,
    comment:
      "The Varhadi Chicken Handi is absolutely outstanding! Rich, spicy, and authentic. D.A.D is my go-to place in Amravati for any special occasion.",
    date: "3 weeks ago",
    via: "Zomato",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    comment:
      "Amazing sizzlers and the paneer tikka was cooked to perfection. The ambiance is cozy and the staff is very welcoming. Will definitely visit again!",
    date: "1 month ago",
    via: "Zomato",
  },
  {
    name: "Amit Kolhe",
    rating: 5,
    comment:
      "Best biryani in Amravati, hands down. The Chicken Dum Biryani had the perfect spice balance. Value for money and great portions too!",
    date: "2 months ago",
    via: "Zomato",
  },
];

export default function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            Guest Reviews
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
          <p
            className={`text-muted-foreground mt-3 text-sm transition-all duration-700 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            503+ verified reviews on Zomato
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 hover:border-gold-500/30 ease-out ${
                gridVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"
              }`}
              style={{
                transitionProperty: "opacity, transform, border-color",
                transitionDuration: "600ms",
                transitionDelay: gridVisible ? `${i * 110}ms` : "0ms",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote size={24} className="text-gold-500/40" />
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  via {review.via}
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{review.date}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
