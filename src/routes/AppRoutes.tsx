import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { UserBenefitsSection } from "../components/UserBenefitsSection";
import { Footer } from '../components/Footer';

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from '../pages/Login';
import { AddProduct } from '../pages/AddProduct';
import { ProductDetails } from "../pages/ProductDetails";
import { Search } from "../pages/Search";
import { FavoriteProducts } from "../pages/FavoriteProducts";
import { CartPage } from '../pages/CartPage';
import { PrivateRoute } from "../components/PrivateRoute";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* PRIVATE ROUTES */}
        <Route path="/add-product" element={<PrivateRoute redirectTo="/login" />} >
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        <Route path="/product-details/:productId" element={<PrivateRoute redirectTo="/login" />} >
          <Route path="/product-details/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="/search" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/favorites" element={<FavoriteProducts />} />
        </Route>
        <Route path="/cart" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
      <UserBenefitsSection />
      <Footer />
    </BrowserRouter>
  );
}