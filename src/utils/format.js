export function currency(vnd) {
  return vnd.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

export function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}
