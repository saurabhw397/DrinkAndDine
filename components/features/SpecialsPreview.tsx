import { Link } from "react-router-dom";
import special1 from "@/assets/special-1.jpg";
import special2 from "@/assets/special-2.jpg";
import special3 from "@/assets/special-3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const specials = [
  {
    img: special1,
    name: "Varhadi Chicken Handi",
    tag: "Chef's Special",
    desc: "Slow-cooked chicken in traditional clay pot with bold Varhadi spices",
    badge: "Non-Veg",
  },
  {
    img: special2,
    name: "Paneer Tikka Sizzler",
    tag: "Crowd Favourite",
    desc: "Smoky paneer tikka served on a sizzling cast iron platter with vegetables",
    badge: "Veg",
  },
  {
    img: special3,
    name: "Chicken Dum Biryani",
    tag: "Must Try",
    desc: "Aromatic basmati rice with tender chicken, slow-cooked in sealed handi",
    badge: "Non-Veg",
  },
];

export default function SpecialsPreview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            House Favourites
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
            Signature Dishes
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {specials.map((item, i) => (
            <div
              key={i}
              className={`group glass-card rounded-3xl overflow-hidden hover:border-gold-500/30 ease-out hover:-translate-y-2 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionProperty: "opacity, transform, border-color",
                transitionDuration: "600ms",
                transitionDelay: gridVisible ? `${i * 130}ms` : "0ms",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-gold-500 text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${
                      item.badge === "Veg"
                        ? "bg-green-900/80 border-green-500 text-green-400"
                        : "bg-red-900/80 border-red-500 text-red-400"
                    }`}
                  >
                    {item.badge === "Veg" ? "● Veg" : "● Non-Veg"}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-gold-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`text-center mt-10 transition-all duration-700 ease-out ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <Link
            to="/menu"
            className="inline-block border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:border-gold-500"
          >
            See All Menu Items
          </Link>
        </div>
      </div>
    </section>
  );
}
