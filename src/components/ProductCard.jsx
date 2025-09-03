import { currency } from "../utils/format.js";

export default function ProductCard({ p, qty, onAdd, onSub }) {
  return (
    <article className="group rounded-3xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative">
        <img src={p.img} alt={p.name} className="h-36 sm:h-40 w-full object-cover" />
        {p.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-lime-700 shadow">
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold leading-snug group-hover:underline">{p.name}</h3>
        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">{p.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold">{currency(p.price)}</div>
            <div className="text-xs text-neutral-500">{p.weight}</div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onSub(p.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-50"
              aria-label="Giảm"
            >
              −
            </button>
            <div className="w-8 text-center text-sm font-medium">
              {qty || 0}
            </div>
            <button
              onClick={() => onAdd(p.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white hover:bg-lime-700"
              aria-label="Tăng"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
