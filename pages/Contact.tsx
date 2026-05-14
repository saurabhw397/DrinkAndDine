import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    // Simulate reservation submission
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Reservation request sent! We will call you to confirm.");
    }, 800);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-16 px-4 text-center bg-card/30">
        <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
          Find Us
        </p>
        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-4">
          Contact & Reservations
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-base">
          Make a reservation or get in touch — we'd love to have you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            {/* Map Embed Placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden aspect-video flex items-center justify-center bg-secondary/30">
              <div className="text-center p-8">
                <MapPin size={40} className="text-gold-500 mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-2">Drink And Dine (D.A.D)</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Dube Hights, Samta Gruha Nirman Sanstha,<br />
                  Kathora Road, Siddhivinayak Nagar,<br />
                  Amravati, Maharashtra
                </p>
                <a
                  href="https://maps.google.com/?q=Drink+And+Dine+DAD+Siddhivinayak+Nagar+Amravati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-medium transition-colors"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5">
                <Phone size={20} className="text-gold-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+919403021003"
                  className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
                >
                  +91 94030 21003
                </a>
                <p className="text-xs text-muted-foreground mt-1">Call to reserve or enquire</p>
              </div>
              <div className="glass-card rounded-2xl p-5">
                <Clock size={20} className="text-gold-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-sm text-foreground/80 font-medium">Mon – Sun</p>
                <p className="text-sm text-muted-foreground">11:00 AM – 11:00 PM</p>
              </div>
              <div className="glass-card rounded-2xl p-5 sm:col-span-2">
                <MapPin size={20} className="text-gold-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dube Hights, Samta Gruha Nirman Sanstha, Kathora Road,<br />
                  Siddhivinayak Nagar, Amravati, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Request Received!
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-foreground font-medium">{form.name}</span>!
                  We'll call you at <span className="text-gold-400">{form.phone}</span> to confirm your reservation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", date: "", guests: "", message: "" });
                  }}
                  className="text-sm text-gold-500 hover:text-gold-400 transition-colors underline"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Reserve a Table
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="">Select guests</option>
                        {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                          <option key={n} value={n}>
                            {n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Special Requests (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Dietary requirements, occasion, seating preference..."
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                  >
                    Request Reservation
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Or call directly:{" "}
                    <a href="tel:+919403021003" className="text-gold-500 hover:text-gold-400">
                      +91 94030 21003
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
