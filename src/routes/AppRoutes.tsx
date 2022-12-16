import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Header } from "../components/Header";
import { UserBenefitsSection } from "../components/UserBenefitsSection";
import { Footer } from '../components/Footer';
import { PrivateRoute } from "../components/PrivateRoute";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from '../pages/Login';
import { AddProduct } from '../pages/AddProduct';
import { ProductDetails } from "../pages/ProductDetails";
import { Search } from "../pages/Search";
import { WishList } from "../pages/WishList";
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile/index';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        {/* PRIVATE ROUTES */}
        <Route path="/add-product" element={<PrivateRoute redirectTo="/login" />} >
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/favorites" element={<WishList />} />
        </Route>
        <Route path="/cart" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <UserBenefitsSection />
      <Footer />
    </BrowserRouter>
  );
}