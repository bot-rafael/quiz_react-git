export default function ProductsTop({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src={product.gambar} alt={product.nama} className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-lg font-semibold">{product.nama}</h3>
          <p className="text-orange-500 font-bold">Rp {product.harga.toLocaleString('id-ID')}</p>
        </div>
      ))}
    </div>
  );
}
