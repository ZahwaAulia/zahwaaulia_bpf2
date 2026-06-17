import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

/* =========================
   Layouts
========================= */
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

/* =========================
   Pages
========================= */
import Guest from "./pages/Guest";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
/* =========================
   Auth Pages
========================= */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Notes = lazy(() => import("./pages/Notes"));

// const AlertBox = lazy(() => import("./components/AlertBox"));
// const EmptyState = lazy(() => import("./components/EmptyState"));
// const GenericTable = lazy(() => import("./components/GenericTable"));
// const Loading = lazy(() => import("./components/Loading"));


export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-[#4BAF47]">Loading...</h1>
        </div>
      }
    >
      <Routes>
        {/* =========================
            ADMIN
        ========================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />   
          <Route path="/notes" element={<Notes />} />  
          <Route path="/products/:id" element={<ProductDetail />} /> 

          {/* <Route path="/alertbox" element={<AlertBox />} />
          <Route path="/emptystate" element={<EmptyState />} />
          <Route path="/generictable" element={<GenericTable />} />
          <Route path="/loading" element={<Loading />} /> */}
        </Route>

        {/* =========================
            GUEST
        ========================= */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>

        {/* =========================
            AUTH
        ========================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* =========================
            NOT FOUND
        ========================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
