import CheckoutForm from "./CheckoutForm.jsx";
import { currency, classNames } from "../utils/format.js";

export default function CartDrawer({ open, onClose, items, subtotal, shipping, total, add, sub, remove }) {
  return (
    <div
      className={classNames(
        "fixed inset-0 z-40 transition",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={classNames(
          "absolute inset-0 bg-black/30 transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <aside
        className={classNames(
          "absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform",
          "rounded-t-3xl sm:rounded-none",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Giỏ hàng"
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="font-semibold">Giỏ hàng</div>
          <button
            onClick={onClose}
            className="rounded-full border px-3 py-1 text-sm hover:bg-neutral-50"
          >
            Đóng
          </button>
        </div>

        <div className="max-h^[55vh] sm:max-h-[60vh] overflow-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-sm text-neutral-500">Chưa có sản phẩm nào.</div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-3 rounded-2xl border p-3">
                <img src={it.img} alt={it.name} className="h-16 w-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="font-medium leading-tight">{it.name}</div>
                  <div className="text-xs text-neutral-500">{it.weight}</div>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="text-sm font-semibold">{currency(it.price)}</div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => sub(it.id)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-50"
                        aria-label="Giảm"
                      >
                        −
                      </button>
                      <div className="w-7 text-center text-sm font-medium">{it.qty}</div>
                      <button
                        onClick={() => add(it.id)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-600 text-white hover:bg-lime-700"
                        aria-label="Tăng"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(it.id)}
                    className="mt-2 text-xs text-rose-600 hover:underline"
                  >
                    Xóa khỏi giỏ
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary + Checkout */}
        <div className="sticky bottom-0 space-y-3 border-t bg-white p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Tạm tính</span>
            <span className="font-semibold">{currency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Vận chuyển</span>
            <span className="font-semibold">{shipping === 0 ? "0₫ (Miễn phí)" : currency(shipping)}</span>
          </div>
          <div className="flex items-center justify-between text-base">
            <span className="font-semibold">Tổng cộng</span>
            <span className="font-bold text-lime-700">{currency(total)}</span>
          </div>

          <CheckoutForm total={total} />
        </div>
      </aside>
    </div>
  );
}
