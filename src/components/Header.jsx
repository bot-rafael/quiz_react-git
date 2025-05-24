import Logo from '../components/Logo';

const menuItems = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/stock" },
  { label: "Kategori", href: "#kategori" },
  { label: "Blog", href: "#blog" },
  { label: "Tentang Kami", href: "#tentangKami" },
  { label: "Kontak", href: "#kontak" },
  { label: "Langganan", href: "#langganan" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-8 flex justify-between items-center">
      <Logo />
      <nav className="flex items-center space-x-8 text-lg font-rethinksans font-semibold  text-gray-800">
        {menuItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="hover:text-orange-600 transition"
          >
            {label}
          </a>
        ))}
        <a
          href="/auth/login"
          className="ml-4 px-10 py-2 border bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
