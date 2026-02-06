import "@/assets/scss/global.scss";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartProvider } from "./providers/cart/CartProvider";

const HomeLayout = lazy(() => import("./Layouts/HomeLayout"));

const CatalogPage = lazy(() => import("@/pages/Catalog/Catalog"));
const CartPage = lazy(() => import("@/pages/Cart/Cart"));

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<CatalogPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
