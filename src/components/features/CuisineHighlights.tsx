import { useScrollReveal } from "@/hooks/useScrollReveal";

const cuisines = [
  {
    emoji: "🍛",
    name: "North Indian",
    description: "Rich curries, tandoori specialties, and aromatic gravies from the heartland of India.",
  },
  {
    emoji: "🥢",
    name: "Chinese",
    description: "Indo-Chinese fusion with fiery schezwan, crispy dishes, and wok-tossed delicacies.",
  },
  {
    emoji: "🫕",
    name: "Mughlai",
    description: "Royal Mughal-inspired kebabs, biryanis, and slow-cooked handi preparations.",
  },
  {
    emoji: "🔥",
    name: "Sizzlers",
    description: "Theatrical sizzling platters with premium toppings, served piping hot at your table.",
  },
  {
    emoji: "🍖",
    name: "Kebabs",
    description: "Perfectly charred seekh, tikka, and reshmi kebabs straight from our tandoor.",
  },
  {
    emoji: "🍚",
    name: "Biryani",
    description: "Fragrant dum biryani with saffron, whole spices, and tender meat or paneer.",
  },
];

export default function CuisineHighlights() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

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
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Our Specialties</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground">
            A World of Flavors
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cuisines.map((c, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-5 text-center hover:border-gold-500/30 transition-all ease-out hover:-translate-y-1 group cursor-default ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionProperty: "opacity, transform, border-color",
                transitionDuration: "500ms",
                transitionDelay: gridVisible ? `${i * 75}ms` : "0ms",
              }}
            >
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-gold-400 transition-colors">
                {c.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed hidden lg:block">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
