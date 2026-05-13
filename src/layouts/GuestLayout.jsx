// GuestLayout.jsx

import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f0] overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default GuestLayout;