import ambianceImg from "@/assets/ambiance.jpg";
import { UtensilsCrossed, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: UtensilsCrossed, label: "Menu Items", value: "200+" },
  { icon: Award, label: "Zomato Rating", value: "4.1 ★" },
  { icon: Clock, label: "Years Serving", value: "5+" },
  { icon: Users, label: "Happy Reviews", value: "503+" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img src={ambianceImg} alt="Our restaurant" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-2">Our Story</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground">About D.A.D</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card rounded-2xl p-6 text-center">
              <Icon size={24} className="text-gold-500 mx-auto mb-3" />
              <div className="font-serif text-2xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Culinary Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Drink And Dine (D.A.D) was born from a passion for authentic Indian flavors and a
                desire to create a welcoming space where families, friends, and food lovers
                could come together over exceptional meals.
              </p>
              <p>
                Situated in the vibrant Siddhivinayak Nagar neighborhood of Amravati, we have
                become a beloved destination for those seeking the finest North Indian, Chinese,
                and Mughlai cuisines under one roof.
              </p>
              <p>
                Our chefs bring decades of culinary expertise, working with fresh, locally sourced
                ingredients to craft dishes that honor traditional recipes while embracing
                contemporary tastes. Every item on our menu — from our signature Varhadi Handi to
                our sizzling platters — reflects our commitment to quality and flavor.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            {[
              {
                title: "200+ Dishes",
                desc: "An extensive menu spanning specials, platters, sizzlers, starters, main course, breads, rice, biryani, noodles and snacks.",
              },
              {
                title: "Varhadi Specialties",
                desc: "Authentic regional Varhadi preparations that carry the bold, rustic flavors of the Vidarbha region.",
              },
              {
                title: "Tandoor Excellence",
                desc: "A dedicated tandoor section with freshly prepared tikkas, kebabs, and breads baked to perfection.",
              },
              {
                title: "Sizzler Experience",
                desc: "Dramatic sizzling platters served at your table — an experience as theatrical as it is delicious.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1.5 text-gold-400">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cuisine Grid */}
        <div className="section-divider mb-12" />
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">
          Our Cuisine Expertise
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { emoji: "🍛", name: "North Indian" },
            { emoji: "🥢", name: "Chinese" },
            { emoji: "🫕", name: "Mughlai" },
            { emoji: "🍖", name: "Kebab" },
            { emoji: "🍚", name: "Biryani" },
            { emoji: "🔥", name: "Sizzlers" },
            { emoji: "🥗", name: "Starters" },
            { emoji: "🫓", name: "Breads" },
          ].map((c) => (
            <div key={c.name} className="glass-card rounded-xl p-4 text-center hover:border-gold-500/30 transition-colors">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <div className="text-sm font-medium text-foreground">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
