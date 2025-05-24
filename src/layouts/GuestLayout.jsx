import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import TopProduk from '../pages/TopProduk';
import Testimoni from '../pages/Testimoni';

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 space-y-16">
          <Outlet />
        </div>
        <About />
        <TopProduk />
        <Testimoni />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </div>
  );
}
