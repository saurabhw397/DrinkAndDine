import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { MenuCategory, MenuItem } from "@/constants/menu";
import { useCartStore } from "@/stores/cartStore";
import DishModal from "@/components/features/DishModal";

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-gold-500/25 text-gold-300 rounded px-0.5 not-italic">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

function formatPrice(price: number) {
  return `₹${price}`;
}

interface Props {
  category: MenuCategory;
  searchQuery?: string;
}

function VegIndicator({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center shrink-0 ${
        isVeg ? "border-green-500" : "border-red-500"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isVeg ? "bg-green-500" : "bg-red-500"}`}
      />
    </span>
  );
}

function ItemRow({
  item,
  searchQuery = "",
  categoryName,
  onOpenModal,
}: {
  item: MenuItem;
  searchQuery?: string;
  categoryName: string;
  onOpenModal: (item: MenuItem, categoryName: string) => void;
}) {
  const { addItem, openCart, items } = useCartStore();
  const [flash, setFlash] = useState(false);
  const inCart = items.find((i) => i.name === item.name);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ name: item.name, isVeg: item.isVeg, price: item.price });
    setFlash(true);
    setTimeout(() => setFlash(false), 900);
    openCart();
  };

  return (
    <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-secondary/50 transition-colors group">
      <VegIndicator isVeg={item.isVeg} />
      {/* Clickable dish name */}
      <button
        onClick={() => onOpenModal(item, categoryName)}
        className="text-sm text-foreground/90 flex-1 text-left hover:text-gold-400 transition-colors cursor-pointer underline-offset-2 hover:underline decoration-gold-500/40 group-hover:text-foreground"
      >
        <HighlightedText text={item.name} query={searchQuery} />
      </button>
      <span className="text-xs font-semibold text-gold-500 shrink-0">
        {formatPrice(item.price)}
      </span>
      {item.tag && (
        <span className="text-[10px] bg-gold-500/15 text-gold-400 px-2 py-0.5 rounded-full border border-gold-500/20 font-medium">
          {item.tag}
        </span>
      )}
      <button
        onClick={handleAdd}
        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
          flash
            ? "bg-green-600 text-white scale-110"
            : inCart
            ? "bg-gold-500/20 text-gold-500 hover:bg-gold-500 hover:text-primary-foreground"
            : "bg-secondary text-muted-foreground hover:bg-gold-500 hover:text-primary-foreground opacity-0 group-hover:opacity-100"
        }`}
        title={`Add ${item.name} to cart`}
      >
        {flash ? <Check size={12} /> : <Plus size={12} />}
      </button>
    </div>
  );
}

export default function MenuCategoryCard({ category, searchQuery = "" }: Props) {
  const [modalItem, setModalItem] = useState<{ item: MenuItem; categoryName: string } | null>(null);

  const handleOpenModal = (item: MenuItem, categoryName: string) => {
    setModalItem({ item, categoryName });
  };

  const handleCloseModal = () => setModalItem(null);

  return (
    <>
      <div className="glass-card rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
          <span className="text-2xl">{category.icon}</span>
          <h2 className="font-serif text-xl font-bold text-foreground">{category.name}</h2>
          <span className="ml-auto text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
            {category.subcategories
              ? category.subcategories.reduce((a, b) => a + b.items.length, 0)
              : category.items.length}{" "}
            items
          </span>
        </div>

        <div className="p-4">
          {category.subcategories ? (
            <div className="grid md:grid-cols-2 gap-6">
              {category.subcategories.map((sub) => (
                <div key={sub.name}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2 px-3">
                    {sub.name}
                  </h3>
                  <div>
                    {sub.items.map((item) => (
                      <ItemRow
                        key={item.name}
                        item={item}
                        searchQuery={searchQuery}
                        categoryName={`${category.name} · ${sub.name}`}
                        onOpenModal={handleOpenModal}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4">
              {category.items.map((item) => (
                <ItemRow
                  key={item.name}
                  item={item}
                  searchQuery={searchQuery}
                  categoryName={category.name}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dish Detail Modal */}
      {modalItem && (
        <DishModal
          item={modalItem.item}
          categoryName={modalItem.categoryName}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
