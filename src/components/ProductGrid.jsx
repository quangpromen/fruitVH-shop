import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, cart, add, sub }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-neutral-500">
        Không tìm thấy sản phẩm phù hợp.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} qty={cart[p.id]} onAdd={add} onSub={sub} />
      ))}
    </div>
  );
}
