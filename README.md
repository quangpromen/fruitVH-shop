# FruitBox Shop (React + Vite + Tailwind)

Giao diện đặt hộp trái cây **tối ưu và tách component rõ ràng**. Bao gồm:
- Grid sản phẩm, tìm kiếm, lọc theo danh mục
- Giỏ hàng (Cart Drawer) trượt
- Thanh sticky (mobile)
- Nút chat Facebook nổi
- Tối ưu hiệu năng: `useMemo`, `useReducer` (giỏ), props sạch, tách component

## Cách chạy (5 bước)
1. Cài Node.js >= 18 (https://nodejs.org).
2. Giải nén thư mục và mở trong VS Code.
3. Chạy lệnh:
   ```bash
   npm install
   npm run dev
   ```
4. Mở link xuất hiện (thường là http://localhost:5173).
5. Build bản production:
   ```bash
   npm run build
   npm run preview
   ```

## Cấu trúc
```
src/
  components/        // Header, Hero, ProductGrid, CartDrawer, CheckoutForm, Icons
  data/              // SAMPLE_PRODUCTS
  hooks/             // useCartReducer (ADD/SUB/REMOVE/CLEAR)
  utils/             // currency, classNames
  App.jsx            // Trang chính
  main.jsx, index.css
```
> Tailwind đã cấu hình sẵn (tailwind.config.js, postcss.config.cjs).

## Ghi chú
- Dễ dàng thay dữ liệu mẫu: `src/data/products.js`.
- Thêm API đặt hàng: xử lý trong `CheckoutForm.jsx` (TODO trong code).
