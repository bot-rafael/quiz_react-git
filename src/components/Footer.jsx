export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Info Kontak */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Info Kontak</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>📍 Jl. Sedap No.123, Jakarta</li>
            <li>📞 (021) 1234-5678</li>
            <li>✉️ admin@sedapresto.com</li>
            <li>🕒 Buka: 09.00 - 22.00 WIB</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Sosial Media</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                🌐 Instagram: @sedapresto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                🌐 Facebook: Sedap Resto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                🌐 Twitter: @sedap_resto
              </a>
            </li>
          </ul>
        </div>

        {/* Partner Images */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Partner Kami</h3>
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Partner 1"
              className="h-10 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
              alt="Partner 2"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>© 2025 Sedap Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
