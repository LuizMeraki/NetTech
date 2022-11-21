import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { UserBenefitsSection } from "../components/UserBenefitsSection";
import { Footer } from '../components/Footer/index';

import { Register } from "../pages/Register";
import { Login } from '../pages/Login/index';
import { AddProduct } from '../pages/AddProduct/index';
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Search } from "../pages/Search";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <UserBenefitsSection />
      <Footer />
    </BrowserRouter>
  );
}