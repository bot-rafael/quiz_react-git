import { useState } from 'react';
import Logo from '../components/Logo';

const menuItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Produk', href: '/stock' },
  { label: 'Kategori', href: '#kategori' },
  { label: 'Blog', href: '#blog' },
  { label: 'Tentang Kami', href: '#tentangKami' },
  { label: 'Kontak', href: '#kontak' },
  { label: 'Langganan', href: '#langganan' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-8 flex justify-between items-center h-16">
      <Logo />

      {/* Hamburger icon for mobile */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8 text-lg font-rethinksans font-semibold text-gray-800">
        {menuItems.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-orange-600 transition">
            {label}
          </a>
        ))}
        <a href="/auth/login" className="ml-4 px-10 py-2 border bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Login
        </a>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-base font-rethinksans font-medium text-gray-800 md:hidden">
          {menuItems.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/auth/login" className="w-full text-center px-6 py-2 border bg-orange-500 text-white rounded-full hover:bg-orange-600 transition" onClick={() => setMenuOpen(false)}>
            Login
          </a>
        </div>
      )}
    </header>
  );
}
