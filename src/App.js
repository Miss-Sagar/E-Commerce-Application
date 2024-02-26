import './App.css';
import Login from './components/login/Login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './layout/layout';
import Shop from './view/shop/Shop';
import Men from './view/men/Men';
import Kids from './view/kids/Kids';
import Women from './view/women/Women';
import ItemInfo from './view/item/ItemInfo';
import CartData from './view/cartData/CartData';
import PrivateRoute from './privateRoute/privateRoute';

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Shop />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/itemInfo" element={<ItemInfo />} />
              <Route path="/cartData" element={<CartData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}