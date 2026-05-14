import { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, User } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

function OrderForm({ onSuccess }: { onSuccess: () => void }) {
  const { items, clearCart } = useCartStore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      toast.success(`Order placed! We'll call ${phone} to confirm.`);
      onSuccess();
    }, 1200);
  };

  return (
    <form onSubmit={handleOrder} className="space-y-4 pt-4 border-t border-border">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Your Details
      </p>
      <div className="relative">
        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-secondary border border-border rounded-xl pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div className="relative">
        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-secondary border border-border rounded-xl pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full gold-gradient text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <>
            <ShoppingBag size={15} />
            Place Order ({items.reduce((s, i) => s + i.quantity, 0)} items)
          </>
        )}
      </button>
      <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
        We'll confirm via call. This is a mock order for demonstration.
      </p>
    </form>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart } = useCartStore();
  const [ordered, setOrdered] = useState(false);

  const handleSuccess = () => {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      closeCart();
    }, 2500);
  };

  const total = items.reduce((s, i) => s + i.quantity, 0);
  const { totalPrice } = useCartStore();
  const grandTotal = totalPrice();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold-500" />
            <h2 className="font-serif text-lg font-bold text-foreground">Your Order</h2>
            {total > 0 && (
              <span className="bg-gold-500 text-primary-foreground text-[11px] font-bold px-2 py-0.5 rounded-full">
                {total}
              </span>
            )}
          </div>
          {grandTotal > 0 && (
            <span className="text-base font-bold text-gold-500 mr-2">₹{grandTotal}</span>
          )}
          <div className="flex items-center gap-1">
            {items.length > 0 && !ordered && (
              <button
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-red-400 transition-colors px-2 py-1"
              >
                Clear all
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {ordered ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="text-6xl">🎉</div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Order Placed!</h3>
              <p className="text-muted-foreground text-sm">
                We'll call you shortly to confirm your order.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="text-5xl">🛒</div>
              <h3 className="font-serif text-xl font-bold text-foreground">Cart is empty</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Browse the menu and add dishes you'd like to order.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 text-gold-500 hover:text-gold-400 text-sm font-semibold transition-colors underline underline-offset-2"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 glass-card rounded-xl p-3"
                >
                  {/* Veg indicator */}
                  <span
                    aria-hidden
                    className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center shrink-0 ${
                      item.isVeg ? "border-green-500" : "border-red-500"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.isVeg ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </span>

                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-foreground font-medium leading-snug block truncate">
                      {item.name}
                    </span>
                    <span className="text-xs text-gold-500 font-semibold">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1 bg-secondary rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(item.name, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.name, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-background text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.name)}
                    className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with order form */}
        {!ordered && items.length > 0 && (
          <div className="px-5 pb-6 pt-2 border-t border-border bg-background">
            {/* Order Total */}
            <div className="flex items-center justify-between py-3 mb-1">
              <span className="text-sm text-muted-foreground">
                {total} item{total !== 1 ? "s" : ""}
              </span>
              <div className="text-right">
                <span className="text-xs text-muted-foreground mr-2">Total</span>
                <span className="text-lg font-bold text-gold-500">₹{grandTotal}</span>
              </div>
            </div>
            <OrderForm onSuccess={handleSuccess} />
          </div>
        )}
      </div>
    </>
  );
}
