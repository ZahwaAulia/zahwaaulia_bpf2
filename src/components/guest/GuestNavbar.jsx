import { Link } from "react-router-dom";
import { Search, ShoppingCart, Phone } from "lucide-react";

const GuestNavbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          
          {/* Logo + Menu */}
          <div className="flex items-center gap-16">
            <h1 className="text-4xl font-black tracking-wide text-[#4BAF47]">
              Sedap<span className="text-[#1f1e17]">.</span>
            </h1>

            <ul className="hidden lg:flex items-center gap-10 font-semibold text-gray-700">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#4BAF47] duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#4BAF47] duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#product"
                  className="hover:text-[#4BAF47] duration-300"
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#testimonial"
                  className="hover:text-[#4BAF47] duration-300"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-5">
            
            {/* Search */}
            <button className="w-11 h-11 rounded-full bg-[#f8f7f0] flex items-center justify-center hover:bg-[#4BAF47] hover:text-white duration-300">
              <Search size={18} />
            </button>

            {/* Cart */}
            <button className="w-11 h-11 rounded-full bg-[#f8f7f0] flex items-center justify-center hover:bg-[#4BAF47] hover:text-white duration-300 relative">
              <ShoppingCart size={18} />

              <span className="absolute -top-1 -right-1 bg-[#4BAF47] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Phone */}
            <div className="hidden xl:flex items-center gap-3 border-l pl-5">
              <div className="w-12 h-12 rounded-full bg-[#4BAF47] text-white flex items-center justify-center">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Call Anytime
                </p>

                <h4 className="font-bold text-[#1f1e17]">
                  0812-3456-789
                </h4>
              </div>
            </div>
  {/* AUTH BUTTONS */}
            <Link
              to="/login"
              className="px-5 py-3 rounded-full border border-[#4BAF47] text-[#4BAF47] font-semibold hover:bg-[#4BAF47] hover:text-white duration-300"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 rounded-full bg-[#4BAF47] text-white font-semibold hover:bg-[#1f1e17] duration-300"
            >
              Sign Up
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default GuestNavbar;