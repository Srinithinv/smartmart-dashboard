import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
