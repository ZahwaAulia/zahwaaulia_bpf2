import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <PageHeader />
      
      <main className="relative isolate flex-grow flex items-center justify-center overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="text-center px-6">
          {/* Animated 404 Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-8 animate-bounce">
            Error 404
          </div>

          {/* Big Gradient Text */}
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Waduh!
            </span>
          </h1>
          
          <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Halaman ini hilang di angkasa.
          </h2>
          
          <p className="mt-6 text-lg leading-7 text-gray-600 max-w-lg mx-auto">
            Sepertinya Anda tersesat. Halaman yang Anda cari tidak ada atau telah dipindahkan ke dimensi lain.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200 active:scale-95"
            >
              Bawa Saya Pulang
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Kembali ke Sebelumnya
            </button>
          </div>
        </div>

        {/* Bottom Decorative Glow */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </main>
    </div>
  );
}