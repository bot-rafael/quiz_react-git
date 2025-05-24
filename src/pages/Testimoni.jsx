import testimoniData from '../assets/data/testimoni.json';

export default function Testimoni() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Apa Kata Mereka?</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimoniData.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <img src={item.avatar} alt={item.nama} className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.nama}</h4>
                  <p className="text-sm text-gray-500">Pengguna</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic">"{item.ulasan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
