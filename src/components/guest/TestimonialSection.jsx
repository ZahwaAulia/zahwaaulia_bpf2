// TestimonialSection.jsx

import { Quote } from "lucide-react";
import { testimonials } from "../../data/data";

const TestimonialSection = () => {
  return (
    <section
      id="testimonial"
      className="relative py-28 px-6 lg:px-8 bg-[#f8f7f0] overflow-hidden"
    >
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4BAF47]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-[#4BAF47] uppercase tracking-[5px] font-bold mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-[#1f1e17] leading-tight">
            Apa Kata
            <span className="text-[#4BAF47]"> Pelanggan </span>
            Kami
          </h2>

          <p className="mt-7 text-gray-500 text-lg leading-8">
            Ribuan pelanggan telah mempercayai Foodies untuk
            pengalaman kuliner terbaik setiap hari.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[35px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-500 overflow-hidden"
            >

              {/* Quote */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#4BAF47]/10 rounded-full -translate-y-10 translate-x-10"></div>

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center gap-5">

                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#4BAF47]"
                    />

                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#4BAF47] flex items-center justify-center text-white shadow-lg">
                      ✓
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <h3 className="text-2xl font-black text-[#1f1e17]">
                      {item.name}
                    </h3>

                    <p className="text-[#4BAF47] font-semibold mt-1">
                      Happy Customer
                    </p>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                      ⭐ ⭐ ⭐ ⭐ ⭐
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="mt-8 text-gray-600 leading-8 text-lg">
                  “{item.review}”
                </p>

                {/* Quote Icon */}
                <div className="mt-8 flex justify-end">
                  <div className="w-14 h-14 rounded-full bg-[#4BAF47] text-white flex items-center justify-center shadow-lg">
                    <Quote size={24} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;