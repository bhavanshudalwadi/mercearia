import React, {useContext, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import CommingSoon from './components/CommingSoon';
import Cart from './components/Cart';
import Profile from './components/Profile';

import ProductState from "./contexts/product/ProductState";
import UserState from './contexts/users/userState';
import CartState from './contexts/cart/CartState';

function App() {
  return (
    <div>
      <CartState>
        <UserState>
          <ProductState>
            <BrowserRouter>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <Footer />
            </BrowserRouter>
          </ProductState>
        </UserState>
      </CartState>
    </div>
  )
}

export default App
