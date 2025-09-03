import React, { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Footer from "./components/Footer.jsx";
import { CartIcon, ChatIcon } from "./components/Icons.jsx";
import { SAMPLE_PRODUCTS } from "./data/products.js";
import { currency } from "./utils/format.js";
import { useCart } from "./hooks/useCartReducer.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState([]); // string[]
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categories = useMemo(
    () => [
      "Trái cây mix",
      "Trái cây theo loại",
      "Trái cây theo nhóm vitamin",
      "Trái cây cho người ăn kiêng",
    ],
    []
  );

  const products = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((p) => {
      const hitQ = [p.name, p.desc].join(" ").toLowerCase().includes(query.toLowerCase());
      const hitC = activeCats.length === 0 || activeCats.every((c) => p.categories.includes(c));
      return hitQ && hitC;
    });
  }, [query, activeCats]);

  const { cart, items, subtotal, shipping, total, count, add, sub, remove } = useCart(SAMPLE_PRODUCTS);

  const toggleCat = (cat) => {
    setActiveCats((cs) => (cs.includes(cat) ? cs.filter((c) => c !== cat) : [...cs, cat]));
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header
        query={query}
        setQuery={setQuery}
        onOpenCart={() => setDrawerOpen(true)}
        itemCount={count}
      />

      <Hero
        categories={categories}
        activeCats={activeCats}
        toggleCat={toggleCat}
        query={query}
        setQuery={setQuery}
      />

      {/* Product Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ProductGrid products={products} cart={cart} add={add} sub={sub} />
      </main>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-3 left-0 right-0 z-30 px-3">
        <div className="mx-auto max-w-md rounded-2xl border bg-white p-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="font-semibold">Tổng tạm: {currency(subtotal)}</div>
              <div className="text-xs text-neutral-500">
                {shipping === 0 ? "Miễn phí vận chuyển" : `Ship: ${currency(shipping)}`}
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-lime-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-lime-700"
            >
              <CartIcon className="h-4 w-4" /> Xem giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        add={add}
        sub={sub}
        remove={remove}
      />

      {/* Floating Chat to Facebook */}
      <a
        href="https://www.facebook.com/leuan123/?locale=vi_VN"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-lime-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-lime-700"
        aria-label="Chat với người bán"
      >
        <ChatIcon className="h-5 w-5" /> Chat với người bán
      </a>

      <Footer />
    </div>
  );
}
