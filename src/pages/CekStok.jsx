import { useState } from 'react';
import produkData from '../assets/data/produk.json';
import { FiAlertCircle } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { AiFillShopping } from 'react-icons/ai';

const CekStok = () => {
  const [kode, setKode] = useState('');
  const [pesan, setPesan] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (kode.trim() === '') {
      setPesan({ status: 'error', teks: '❗ Kode produk tidak boleh kosong.' });
      return;
    }

    if (kode.trim().length < 4) {
      setPesan({ status: 'error', teks: '❗ Kode produk minimal 4 karakter.' });
      return;
    }

    const produk = produkData.find((item) => item.kode_produk.toLowerCase() === kode.trim().toLowerCase());

    if (!produk) {
      setPesan({ status: 'notfound', teks: '❌ Kode produk tidak ditemukan.' });
    } else if (produk.stok > 0) {
      setPesan({
        status: 'ready',
        nama: produk.nama_produk,
        harga: produk.harga,
        stok: produk.stok,
      });
    } else {
      setPesan({
        status: 'habis',
        nama: produk.nama_produk,
      });
    }
  };

  return (
    <section className="max-w-4xl my-16 mx-auto p-6 bg-white min-h-screen" style={{ fontFamily: 'var(--font-rethinksans)' }}>
      <h2 className="text-3xl font-bold text-center mb-6 text-black" style={{ fontFamily: 'var(--font-rethinksans-italic)' }}>
        Check Product Availability
      </h2>

      <form onSubmit={handleSubmit} className="mb-6 bg-white p-5 rounded-lg shadow-sm border">
        <label className="block mb-2 font-medium text-gray-700">Code Product</label>
        <input type="text" value={kode} onChange={(e) => setKode(e.target.value)} placeholder="Contoh: PRD1" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blueZodiac" />
        <button type="submit" className="mt-3 w-full bg-black hover:bg-blueZodiac text-white py-2 px-4 rounded-lg transition">
          Check
        </button>
      </form>

      {pesan && (
        <div className="p-4 rounded-lg bg-white shadow-md mb-6 border">
          {pesan.status === 'ready' && (
            <div className="flex items-center gap-4 text-green-700">
              <AiFillShopping className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">
                  ✅ Produk <strong>{pesan.nama}</strong> tersedia dengan harga Rp{pesan.harga.toLocaleString()}.
                </p>
                <p className="text-sm text-gray-600">Stok tersedia: {pesan.stok}</p>
              </div>
            </div>
          )}

          {pesan.status === 'habis' && (
            <div className="flex items-center gap-4 text-red-600">
              <ImCross className="text-3xl" />
              <div>
                <p className="text-lg font-semibold">
                  ⚠️ Produk <strong>{pesan.nama}</strong> saat ini sedang habis.
                </p>
                <p className="text-sm text-gray-600 italic">Out of Stock ❌</p>
              </div>
            </div>
          )}

          {(pesan.status === 'error' || pesan.status === 'notfound') && (
            <div className="flex items-center gap-4 text-red-700">
              <FiAlertCircle className="text-3xl" />
              <p className="text-lg font-semibold">{pesan.teks}</p>
            </div>
          )}
        </div>
      )}

      {/* List Semua Produk */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">📋 List Product</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {produkData.map((item) => (
          <div key={item.kode_produk} className="p-4 bg-blueZodiac rounded-lg shadow-sm border border-white hover:shadow-md transition">
            <h4 className="text-lg font-bold text-gray-50">{item.nama_produk}</h4>
            <p className="text-sm text-gray-300">Kode: {item.kode_produk}</p>
            <p className="text-sm text-gray-300">Harga: Rp{item.harga.toLocaleString()}</p>
            <p className={`text-sm font-semibold ${item.stok > 0 ? 'text-green-600' : 'text-red-600'}`}>Stok: {item.stok > 0 ? item.stok : 'Habis'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CekStok;
