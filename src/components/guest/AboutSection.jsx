const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
            alt="restaurant"
            className="rounded-[40px] shadow-2xl h-[650px] object-cover w-full"
          />

          <div className="absolute -bottom-10 -right-10 bg-[#4BAF47] text-white rounded-[30px] p-10 shadow-2xl max-w-xs">
            <h3 className="text-5xl font-black">12+</h3>
            <p className="mt-3 text-lg leading-8">
              Tahun pengalaman memberikan makanan terbaik.
            </p>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[6px] text-[#4BAF47] font-bold mb-5">
            About Company
          </p>

          <h2 className="text-6xl font-black leading-tight text-[#1f1e17]">
            Healthy Food For
            <span className="text-[#4BAF47] block">Your Lifestyle</span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Sedap menghadirkan konsep makanan modern dengan kualitas premium,
            bahan segar, dan tampilan elegan untuk pengalaman terbaik setiap
            hari.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-start gap-5 bg-[#f8f7f0] p-6 rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-[#4BAF47] text-white flex items-center justify-center text-2xl">
                ✓
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1f1e17]">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600 mt-2 leading-8">
                  Semua makanan dibuat dari bahan berkualitas tinggi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 bg-[#f8f7f0] p-6 rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-[#4BAF47] text-white flex items-center justify-center text-2xl">
                ★
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1f1e17]">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 mt-2 leading-8">
                  Pengiriman cepat dengan pelayanan terbaik untuk pelanggan.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-10 px-9 py-4 rounded-full bg-[#4BAF47] text-white font-semibold hover:bg-[#1f1e17] duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;