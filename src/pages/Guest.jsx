// Guest.jsx

import GuestNavbar from "../components/guest/GuestNavbar";
import HeroSection from "../components/guest/HeroSection";
import AboutSection from "../components/guest/AboutSection";
import ProductSection from "../components/guest/ProductSection";
import TestimonialSection from "../components/guest/TestimonialSection";
import GuestFooter from "../components/guest/GuestFooter";

const Guest = () => {
  return (
    <main className="overflow-hidden">
      
      {/* Navbar */}
      <GuestNavbar />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Product */}
      <ProductSection />

      {/* Testimonial */}
      <TestimonialSection />

      {/* Footer */}
      <GuestFooter />
    </main>
  );
};

export default Guest;