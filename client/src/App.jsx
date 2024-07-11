import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenProduct from "./pages/MenProduct";
import WomenProduct from "./pages/WomenProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-User";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-Update";
import AdminProducts from "./pages/Admin-Products";
import AdminProductUpdate from "./pages/Admin-Products-Update";
import AdminProductsAdd from "./pages/Admin-Products-Add";
import Detailviewproduct from "./pages/Detailviewproduct";
import { CartProvider } from "./components/cart/contextReducer";
import AdminOrders from "./pages/Admin-Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:_id" element={<Detailviewproduct />} />
            <Route path="/menproduct" element={<MenProduct />} />
            <Route path="/womenproduct" element={<WomenProduct />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="users/:userId/edit" element={<AdminUpdate />} />
              <Route
                path="products/:_id/edit"
                element={<AdminProductUpdate />}
              />
              <Route
                path="products/addproduct"
                element={<AdminProductsAdd />}
              />
              <Route path="getallorders" element={<AdminOrders />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
