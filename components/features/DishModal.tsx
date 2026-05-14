import { useEffect, useState } from "react";
import { X, Leaf, Drumstick, ShoppingBag, Plus, Check, Star } from "lucide-react";
import { MenuItem } from "@/constants/menu";
import { useCartStore } from "@/stores/cartStore";

// Dish image mapping by keyword priority
import paneerImg from "@/assets/dishes/paneer-dish.jpg";
import chickenCurryImg from "@/assets/dishes/chicken-curry.jpg";
import biryaniImg from "@/assets/dishes/biryani.jpg";
import kebabImg from "@/assets/dishes/kebab-tikka.jpg";
import friedRiceImg from "@/assets/dishes/fried-rice-noodles.jpg";
import breadsImg from "@/assets/dishes/breads.jpg";
import sizzlerImg from "@/assets/dishes/sizzler.jpg";
import muttonImg from "@/assets/dishes/mutton-dish.jpg";
import snacksImg from "@/assets/dishes/snacks.jpg";
import soupImg from "@/assets/dishes/soup.jpg";
import special1Img from "@/assets/special-1.jpg";
import special2Img from "@/assets/special-2.jpg";
import special3Img from "@/assets/special-3.jpg";

function getDishImage(name: string, isVeg: boolean): string {
  const n = name.toLowerCase();

  if (n.includes("biryani") || n.includes("pulao")) return biryaniImg;
  if (n.includes("sizzler")) return sizzlerImg;
  if (
    n.includes("seekh") ||
    n.includes("tikka") ||
    n.includes("kebab") ||
    n.includes("kebabs") ||
    n.includes("tandoori") ||
    n.includes("reshmi") ||
    n.includes("pahadi") ||
    n.includes("zafrani") ||
    n.includes("malai tikka") ||
    n.includes("afghani") ||
    n.includes("bhatti")
  )
    return kebabImg;
  if (n.includes("soup") || n.includes("chopsuey")) return soupImg;
  if (
    n.includes("noodle") ||
    n.includes("fried rice") ||
    n.includes("schezwan") ||
    n.includes("hakka") ||
    n.includes("singapuri")
  )
    return friedRiceImg;
  if (
    n.includes("naan") ||
    n.includes("roti") ||
    n.includes("paratha") ||
    n.includes("chapati") ||
    n.includes("kulcha") ||
    n.includes("rumali")
  )
    return breadsImg;
  if (n.includes("pakod") || n.includes("fries") || n.includes("corn") || n.includes("omelette") || n.includes("egg") || n.includes("snack"))
    return snacksImg;
  if (n.includes("mutton")) return muttonImg;
  if (n.includes("varhadi") && !isVeg) return special1Img;
  if (n.includes("paneer") && n.includes("sizzler")) return special2Img;
  if (n.includes("chicken") && n.includes("dum")) return special3Img;
  if (
    n.includes("paneer") ||
    n.includes("kofta") ||
    n.includes("malai kofta") ||
    n.includes("veg") ||
    n.includes("dal") ||
    n.includes("palak") ||
    n.includes("kaju") ||
    n.includes("mushroom") ||
    n.includes("corn")
  )
    return paneerImg;
  if (!isVeg) return chickenCurryImg;
  return paneerImg;
}

function getDishDescription(name: string, isVeg: boolean, categoryName?: string): string {
  const n = name.toLowerCase();

  if (n.includes("biryani"))
    return `Aromatic basmati rice slow-cooked with whole spices, saffron, and tender ${isVeg ? "vegetables or paneer" : "meat"} in a sealed handi — a fragrant, layered masterpiece.`;
  if (n.includes("sizzler"))
    return `A theatrical sizzling iron platter loaded with ${isVeg ? "paneer, vegetables, and sauce" : "grilled chicken and vegetables"}, brought to your table piping hot with a dramatic sizzle.`;
  if (n.includes("tikka") && n.includes("paneer"))
    return "Fresh paneer cubes marinated in yogurt and aromatic spices, skewered and chargrilled in our tandoor to golden perfection. Served with mint chutney.";
  if (n.includes("varhadi"))
    return `A bold, rustic preparation from the Vidarbha region — ${isVeg ? "paneer" : "chicken or mutton"} cooked in fiery Varhadi masala with whole spices and a rich, pungent gravy.`;
  if (n.includes("butter chicken") || n.includes("boneless butter"))
    return "Tender chicken in a luxuriously creamy tomato-butter sauce, slow-simmered with aromatic spices. The ultimate North Indian comfort dish.";
  if (n.includes("seekh"))
    return `Minced ${isVeg ? "veg" : "chicken or mutton"} blended with fresh herbs, ginger, garlic and signature spices — hand-shaped on skewers and cooked in our traditional tandoor.`;
  if (n.includes("tandoori"))
    return "Marinated overnight in yogurt and spices, then chargrilled in our clay tandoor at high heat for a smoky, juicy, charred-edge result.";
  if (n.includes("naan"))
    return "Soft, leavened flatbread baked fresh in our tandoor. Light and chewy inside with a slightly crisp exterior — the perfect companion to any curry.";
  if (n.includes("dal"))
    return "A comforting Indian lentil preparation, slow-cooked with turmeric, cumin, garlic, and a finishing tempering of ghee and whole spices.";
  if (n.includes("palak"))
    return "Fresh spinach puréed and cooked down with ginger, garlic, and warming spices — a vibrant, nutritious dish rich in flavor.";
  if (n.includes("kofta"))
    return "Delicate dumplings crafted from spiced vegetables or cottage cheese, simmered in a rich, aromatic gravy for a truly indulgent experience.";
  if (n.includes("rogan josh"))
    return "A Kashmir-origin slow-cooked dish featuring tender meat braised in a robust gravy of whole Kashmiri spices, delivering deep, complex flavors.";
  if (n.includes("schezwan") || n.includes("hakka"))
    return "Indo-Chinese classic featuring stir-fried noodles or rice tossed in our house schezwan sauce with fresh vegetables and the chef's signature spice blend.";
  if (n.includes("chilli") && !isVeg)
    return "Tender chicken tossed in a wok with vibrant bell peppers, onions, and a tangy Indo-Chinese chilli sauce — bold, punchy, and deeply satisfying.";
  if (n.includes("honey chilli"))
    return "Crispy golden bites glazed with a sweet-heat honey chilli sauce, garnished with sesame seeds and spring onion. A crowd-pleasing fusion starter.";
  if (categoryName?.toLowerCase().includes("bread"))
    return "Freshly prepared in our tandoor or on the tawa, this bread pairs perfectly with any curry or dal. Crisp outside, soft inside.";

  // Generic fallback based on veg status
  return isVeg
    ? `A carefully crafted ${name} — prepared with fresh, seasonal ingredients and our signature blend of spices for an authentic, satisfying experience.`
    : `Tender, high-quality ${name} — marinated with house spices and cooked to perfection using time-honored techniques passed down through generations.`;
}

interface Props {
  item: MenuItem | null;
  categoryName?: string;
  onClose: () => void;
}

export default function DishModal({ item, categoryName, onClose }: Props) {
  const { addItem, items } = useCartStore();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const inCart = items.find((i) => i.name === item.name);
  const dishImage = getDishImage(item.name, item.isVeg);
  const description = getDishDescription(item.name, item.isVeg, categoryName);

  const handleAdd = () => {
    addItem({ name: item.name, isVeg: item.isVeg, price: item.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full sm:max-w-lg bg-[hsl(224,30%,7%)] border border-white/10 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={dishImage}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,30%,7%)] via-transparent to-transparent" />

          {/* Veg / Non-Veg badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${
                item.isVeg
                  ? "bg-green-900/80 border-green-500/60 text-green-400"
                  : "bg-red-900/80 border-red-500/60 text-red-400"
              }`}
            >
              {item.isVeg ? (
                <Leaf size={11} />
              ) : (
                <Drumstick size={11} />
              )}
              {item.isVeg ? "Pure Veg" : "Non-Veg"}
            </span>
          </div>

          {/* Tag */}
          {item.tag && (
            <div className="absolute top-4 right-12">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-primary-foreground px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category label */}
          {categoryName && (
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-500/60 mb-1">
              {categoryName}
            </p>
          )}

          {/* Title */}
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3 leading-tight">
            {item.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {description}
          </p>

          {/* Rating hint */}
          <div className="flex items-center gap-2 mb-6 pb-5 border-b border-border">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={12} className="fill-gold-500 text-gold-500" />
              ))}
              <Star size={12} className="fill-gold-500/30 text-gold-500/30" />
            </div>
            <span className="text-xs text-muted-foreground">Popular dish at D.A.D</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Price</p>
              <p className="font-serif text-3xl font-bold text-gold-500">
                ₹{item.price}
              </p>
            </div>

            <div className="flex gap-3 flex-1 justify-end">
              {inCart && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-full border border-border">
                  <ShoppingBag size={12} className="text-gold-500" />
                  {inCart.quantity} in cart
                </div>
              )}
              <button
                onClick={handleAdd}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 min-h-[44px] ${
                  added
                    ? "bg-green-600 text-white scale-95"
                    : "gold-gradient text-primary-foreground hover:opacity-90 hover:scale-105 shadow-lg shadow-gold-500/20"
                }`}
              >
                {added ? (
                  <>
                    <Check size={14} />
                    Added!
                  </>
                ) : (
                  <>
                    <Plus size={14} />
                    Add to Order
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
