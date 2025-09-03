import { useState } from "react";
import { classNames, currency } from "../utils/format.js";

export default function CheckoutForm({ total }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name && phone && address && agree;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!canSubmit) return;
        setSubmitted(true);
        // TODO: Replace with API call
        setTimeout(() => {
          alert("Đặt hàng thành công! Chúng tôi sẽ liên hệ xác nhận.");
        }, 50);
      }}
      className="space-y-3"
    >
      <div className="grid grid-cols-1 gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Họ tên người nhận"
          className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Số điện thoại"
          className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Địa chỉ giao hàng"
          className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
        />
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Ghi chú cho đơn hàng (tuỳ chọn)"
          rows={2}
          className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-neutral-600">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-lime-600 focus:ring-lime-500"
        />
        Tôi đồng ý cho FruitBox liên hệ xác nhận đơn hàng.
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className={classNames(
          "w-full rounded-xl px-4 py-3 text-sm font-semibold shadow",
          canSubmit
            ? "bg-lime-600 text-white hover:bg-lime-700"
            : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
        )}
      >
        {submitted ? "Đang gửi..." : `Đặt hàng (${currency(total)})`}
      </button>
    </form>
  );
}
