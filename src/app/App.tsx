import "@/assets/scss/global.scss";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const HomeLayout = lazy(() => import("./Layouts/HomeLayout"));

const CatalogPage = lazy(() => import("@/pages/Catalog/Catalog"));
const CartPage = lazy(() => import("@/pages/Cart/Cart"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
