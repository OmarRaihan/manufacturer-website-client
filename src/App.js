import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Purchase from "./Pages/Purchase/Purchase";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Products from "./Pages/Home/Products/Products";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder/>}></Route>
          <Route path="review" element={<AddReview/>}></Route>
          <Route path="profile" element={<MyProfile/>}></Route>
          <Route path="manageOrders" element={<ManageOrders/>}></Route>
          <Route path="AddProduct" element={<AddProduct/>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin/>}></Route>
          <Route path="manageProducts" element={<ManageProducts/>}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
