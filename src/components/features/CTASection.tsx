import { Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative gold-gradient rounded-3xl overflow-hidden p-10 lg:p-16 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready for a Memorable Meal?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-base leading-relaxed max-w-xl mx-auto">
              Book a table at Drink And Dine (D.A.D) and experience the finest
              flavors of North Indian and Oriental cuisine in Amravati.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919403021003"
                className="flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-bold text-sm hover:opacity-95 transition-all duration-200 hover:scale-105"
              >
                <Phone size={16} />
                Call +91 94030 21003
              </a>
              <a
                href="https://maps.google.com/?q=Drink+And+Dine+DAD+Siddhivinayak+Nagar+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
