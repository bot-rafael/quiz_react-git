import ProductsTop from '../components/ProductsTop';
import productsData from '../assets/data/productsTop.json';

// Import gambar dari assets
import paket1 from '../assets/img/1.jpg';
import paket2 from '../assets/img/2.jpg';
import combo from '../assets/img/3.jpg';

// Map filename ke gambar impor
const imageMap = {
  '1.jpg': paket1,
  '2.jpg': paket2,
  '3.jpg': combo,
};

export default function TopProduk(){
  const updatedProducts = productsData.map((product) => ({
    ...product,
    gambar: imageMap[product.gambar] || '', // fallback kalau tidak ada
  }));

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Produk Unggulan</h2>
      <ProductsTop products={updatedProducts} />
    </section>
  );
};
