import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import UsersLayout from "./layouts/UsersLayout";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import NotFound from "./pages/NotFound";
import AuthMiddleware from "./middlewares/AuthMiddleware";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthMiddleware />}>
          <Route path="/users" element={<UsersLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="order/:id" element={<CreateProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
