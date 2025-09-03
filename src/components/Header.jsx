import { CartIcon, SearchIcon } from "./Icons.jsx";

export default function Header({ query, setQuery, onOpenCart, itemCount }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500 text-white font-bold shadow">
            FB
          </span>
          <div className="leading-tight">
            <div className="font-semibold">FruitBox</div>
            <div className="text-xs text-neutral-500">Đặt hộp trái cây tươi mỗi ngày</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm hộp trái cây..."
              className="w-72 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <SearchIcon className="h-4 w-4" />
            </div>
          </div>
          <button
            onClick={onOpenCart}
            className="relative rounded-2xl border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
          >
            <CartIcon className="mr-2 inline h-4 w-4" /> Giỏ hàng
            {itemCount > 0 && (
              <span className="ml-2 rounded-full bg-lime-500 px-2 py-0.5 text-xs font-medium text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile actions */}
        <button
          onClick={onOpenCart}
          className="md:hidden inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
        >
          <CartIcon className="h-4 w-4" />
          {itemCount > 0 && (
            <span className="rounded-full bg-lime-500 px-2 py-0.5 text-xs font-medium text-white">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
