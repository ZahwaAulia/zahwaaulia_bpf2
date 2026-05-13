import { products } from "../../data/data";
import { ShoppingCart, Star } from "lucide-react";

const ProductSection = () => {
  return (
    <section
      id="product"
      className="py-28 px-6 lg:px-8 bg-[#f8f7f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-[#4BAF47] font-bold mb-4">
            Popular Food
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-[#1f1e17] leading-tight">
            Featured Products
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-8 max-w-2xl mx-auto">
            Nikmati berbagai menu makanan premium dengan bahan berkualitas,
            tampilan modern, dan cita rasa terbaik setiap hari.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-5 left-5 bg-[#4BAF47] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Best Seller
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />

                  <span className="ml-2 text-gray-500 text-sm">
                    (4.9 Rating)
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-3xl font-black text-[#1f1e17] leading-snug">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-8 mt-5">
                  Menu makanan premium dengan bahan segar dan rasa autentik yang
                  cocok untuk semua kalangan.
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8">
                  <div>
                    <p className="text-gray-400 text-sm">Price</p>

                    <h4 className="text-3xl font-black text-[#4BAF47]">
                      {item.price}
                    </h4>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-4 rounded-full bg-[#1f1e17] text-white font-semibold hover:bg-[#4BAF47] duration-300 shadow-lg">
                    <ShoppingCart size={18} />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-20">
          <button className="px-10 py-5 rounded-full bg-[#4BAF47] text-white font-bold text-lg hover:bg-[#1f1e17] duration-300 shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
