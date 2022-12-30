import React from 'react';
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

import ProductState from "./contexts/product/ProductState";

function App() {
  return (
    <div>
      <ProductState>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CommingSoon />} />
              <Route path="/profile" element={<CommingSoon />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ProductState>
    </div>
  )
}

export default App
