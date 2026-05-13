const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f8f7f0] overflow-hidden pt-44"
    >
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#e9f3e7] rounded-full blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8 py-20 relative z-10">
        <div>
          <p className="uppercase tracking-[6px] text-[#4BAF47] font-bold mb-5">
            Welcome to Sedap
          </p>

          <h1 className="text-6xl lg:text-8xl leading-tight font-black text-[#1f1e17]">
            Fresh &
            <span className="text-[#4BAF47] block">Healthy</span>
            Food Everyday
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600 max-w-2xl">
            Nikmati pengalaman kuliner modern dengan makanan premium,
            pelayanan cepat, dan tampilan elegan ala restoran modern.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="px-9 py-4 rounded-full bg-[#4BAF47] text-white font-semibold hover:bg-[#1f1e17] duration-300 shadow-xl">
              Order Now
            </button>

            <button className="px-9 py-4 rounded-full border border-gray-300 font-semibold hover:bg-white duration-300">
              Explore Menu
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            <div>
              <h3 className="text-4xl font-black text-[#1f1e17]">25+</h3>
              <p className="text-gray-500 mt-2">Best Chef</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#1f1e17]">100+</h3>
              <p className="text-gray-500 mt-2">Menu Food</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#1f1e17]">9k+</h3>
              <p className="text-gray-500 mt-2">Customers</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[#4BAF47] rounded-[40px] translate-x-6 translate-y-6"></div>

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt="food"
            className="relative rounded-[40px] shadow-2xl h-[750px] w-full object-cover"
          />

          <div className="absolute top-8 left-8 bg-white rounded-3xl p-6 shadow-2xl w-64">
            <p className="text-gray-500">Trusted by</p>
            <h3 className="text-4xl font-black text-[#4BAF47] mt-2">5000+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;