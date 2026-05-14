import { useState, useMemo, useRef } from "react";
import { Search, ShoppingBag, X, Leaf, Drumstick } from "lucide-react";
import { menuCategories } from "@/constants/menu";
import MenuCategoryCard from "@/components/features/MenuCategoryCard";
import { useCartStore } from "@/stores/cartStore";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");
  const { totalCount, openCart } = useCartStore();
  const cartCount = totalCount();
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((cat) => {
        const filterItem = (item: { name: string; isVeg: boolean }) => {
          const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
          const matchFilter =
            filter === "all" || (filter === "veg" ? item.isVeg : !item.isVeg);
          return matchSearch && matchFilter;
        };

        if (cat.subcategories) {
          const filteredSubs = cat.subcategories.map((sub) => ({
            ...sub,
            items: sub.items.filter(filterItem),
          })).filter((sub) => sub.items.length > 0);
          return { ...cat, subcategories: filteredSubs, items: [] };
        } else {
          return { ...cat, items: cat.items.filter(filterItem) };
        }
      })
      .filter((cat) => {
        if (activeCategory !== "all" && cat.id !== activeCategory) return false;
        if (cat.subcategories) return cat.subcategories.some((s) => s.items.length > 0);
        return cat.items.length > 0;
      });
  }, [search, filter, activeCategory]);

  const totalMatchCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => {
      if (cat.subcategories) return acc + cat.subcategories.reduce((a, s) => a + s.items.length, 0);
      return acc + cat.items.length;
    }, 0);
  }, [filteredCategories]);

  const isFiltering = search.trim() !== "" || filter !== "all";

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 px-4 text-center overflow-hidden bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            Our Complete
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Menu
          </h1>
          <p className="text-muted-foreground text-base">
            200+ dishes across 10 categories — from tandoor-fresh kebabs to rich curries
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search dishes… e.g. Paneer Tikka, Biryani"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-secondary border border-border rounded-full pl-10 pr-10 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all duration-200 min-h-[44px]"
              />
              {search && (
                <button
                  onClick={() => { setSearch(""); searchRef.current?.focus(); }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/35 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X size={11} />
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Filter Pills */}
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 min-h-[44px] ${
                  filter === "all"
                    ? "bg-gold-500 border-gold-500 text-primary-foreground shadow-md shadow-gold-500/20"
                    : "bg-transparent border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter(filter === "veg" ? "all" : "veg")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 min-h-[44px] ${
                  filter === "veg"
                    ? "bg-green-600 border-green-600 text-white shadow-md shadow-green-600/20"
                    : "bg-transparent border-border text-muted-foreground hover:border-green-600/40 hover:text-green-500"
                }`}
              >
                <Leaf size={12} className={filter === "veg" ? "text-white" : "text-green-500"} />
                Veg
              </button>
              <button
                onClick={() => setFilter(filter === "nonveg" ? "all" : "nonveg")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 min-h-[44px] ${
                  filter === "nonveg"
                    ? "bg-red-700 border-red-700 text-white shadow-md shadow-red-700/20"
                    : "bg-transparent border-border text-muted-foreground hover:border-red-600/40 hover:text-red-400"
                }`}
              >
                <Drumstick size={12} className={filter === "nonveg" ? "text-white" : "text-red-400"} />
                Non-Veg
              </button>
            </div>
          </div>

          {/* Live results summary */}
          {isFiltering && (
            <div className="flex items-center justify-between mt-2.5 px-1">
              <p className="text-xs text-muted-foreground">
                {totalMatchCount === 0 ? (
                  "No dishes match your search"
                ) : (
                  <>
                    <span className="text-gold-400 font-semibold">{totalMatchCount}</span>
                    {" dish"}{totalMatchCount !== 1 ? "es" : ""} found
                    {search.trim() && (
                      <> for <span className="text-foreground font-medium">"{search.trim()}"</span></>
                    )}
                    {filter !== "all" && (
                      <> · <span className={filter === "veg" ? "text-green-400" : "text-red-400"}>{filter === "veg" ? "Veg only" : "Non-Veg only"}</span></>
                    )}
                  </>
                )}
              </p>
              {isFiltering && (
                <button
                  onClick={() => { setSearch(""); setFilter("all"); }}
                  className="text-xs text-muted-foreground hover:text-gold-400 transition-colors underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 min-h-[36px] ${
                activeCategory === "all"
                  ? "bg-gold-500 border-gold-500 text-primary-foreground"
                  : "bg-transparent border-border text-muted-foreground hover:border-foreground/30"
              }`}
            >
              All Categories
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 min-h-[36px] ${
                  activeCategory === cat.id
                    ? "bg-gold-500 border-gold-500 text-primary-foreground"
                    : "bg-transparent border-border text-muted-foreground hover:border-foreground/30"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <button
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 gold-gradient text-primary-foreground px-5 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-gold-500/30 flex items-center gap-2 hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          <ShoppingBag size={16} />
          View Order
          <span className="bg-primary-foreground/20 text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount > 9 ? "9+" : cartCount}
          </span>
        </button>
      )}

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="font-serif text-xl text-foreground mb-2">No dishes found</h3>
            <p className="text-muted-foreground text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredCategories.map((cat) => (
              <MenuCategoryCard key={cat.id} category={cat} searchQuery={search} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
