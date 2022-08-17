import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import LandingPage from "./Pages/LandingPage";
import Product from "./Pages/Products";
import Showroom from "./Pages/Showroom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="product" element={<Product />} />
      <Route path="showroom" element={<Showroom />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
