import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Navbar from "../components/Navbar/Navbar";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Footer from "../components/Footer/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
