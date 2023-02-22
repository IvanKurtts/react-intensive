import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage, AboutPage, ProductPage, NotFound } from "./pages";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
