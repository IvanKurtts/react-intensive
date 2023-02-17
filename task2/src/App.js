import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage, AboutPage, ProductPage, NotFound } from "./pages";
import { Layout } from "./components/Layout";
import { LoginProvider } from "./hoc/LoginProvider";
import { CartProvider } from "./hoc/CartProvider";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
