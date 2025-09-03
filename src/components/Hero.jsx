import { SearchIcon } from "./Icons.jsx";
import { classNames } from "../utils/format.js";

export default function Hero({ categories, activeCats, toggleCat, query, setQuery }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lime-100 via-white to-amber-50 p-6 sm:p-10 shadow">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Hộp trái cây tươi – giao nhanh trong ngày
          </h1>
          <p className="mt-2 text-neutral-600">
            Sản xuất bởi <span className="font-semibold">FruitBox</span>. Chọn loại trái cây bạn mong muốn.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => toggleCat(c)}
                className={classNames(
                  "rounded-2xl border px-3 py-1.5 text-sm",
                  activeCats.includes(c)
                    ? "border-lime-600 bg-lime-600 text-white"
                    : "border-neutral-300 bg-white hover:bg-neutral-50"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Mobile search */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm hộp trái cây..."
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <SearchIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-6 -bottom-8 hidden md:block opacity-70">
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop"
            alt="Fresh fruits"
            className="h-60 w-60 rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
