import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/CartPage";
import { Navbar } from "./pages/Navbar";
import { CartProvider } from "./context/CardContext";

export const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};
