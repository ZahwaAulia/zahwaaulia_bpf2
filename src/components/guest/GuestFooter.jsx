
const GuestFooter = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">


        {/* Logo */}
        <div>
          <h1 className="text-4xl font-extrabold text-green-500">
            Sedap.
          </h1>


          <p className="mt-5 text-gray-400 leading-8">
            Platform pemesanan makanan modern dengan pelayanan terbaik.
          </p>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-5">
            Kontak
          </h3>


          <div className="space-y-3 text-gray-400">
            <p>Email : sedap@gmail.com</p>
            <p>Phone : 08123456789</p>
            <p>Padang, Indonesia</p>
          </div>
        </div>


        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-5">
            Social Media
          </h3>


          <div className="space-y-3 text-gray-400">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Tiktok</p>
          </div>
        </div>


        {/* Partner */}
        <div>
          <h3 className="text-2xl font-bold mb-5">
            Partners
          </h3>


          <div className="flex flex-wrap gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="amazon"
              className="h-8 bg-white p-2 rounded"
            />


            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="google"
              className="h-8 bg-white p-2 rounded"
            />


            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="apple"
              className="h-8 bg-white p-2 rounded"
            />
          </div>
        </div>


      </div>


      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Sedap. All Rights Reserved.
      </div>
    </footer>
  );
};


export default GuestFooter;
