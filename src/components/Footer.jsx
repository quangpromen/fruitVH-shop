export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} FruitBox. Sản xuất & đóng gói tại Việt Nam.
      </div>
    </footer>
  );
}
