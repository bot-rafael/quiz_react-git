import Logo from '../assets/img/Logo.png';
export default function About() {
  return (
    <section id="about" className="bg-blueZodiac py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            About <span className="text-gray-500">Sedap.</span>
          </h2>
          <p className="text-white leading-relaxed text-lg">Sedap adalah restoran yang menyajikan beragam masakan lezat khas Indonesia dan kreasi modern yang menggugah selera.</p>
          <p className="text-white mb-8 leading-relaxed">
            Kami berkomitmen untuk menghadirkan makanan berkualitas dengan bahan-bahan segar dan pelayanan yang ramah. Dengan suasana nyaman dan menu yang terus berkembang, Sedap menjadi tempat yang pas untuk berkumpul bersama keluarga,
            teman, atau rekan kerja.
          </p>
          <p className="font-rethinksans-italic font-light text-sm text-white  mb-8 leading-relaxed">
            Nikmati cita rasa yang sesungguhnya – hanya di Sedap.
          </p>
          <a href="#features" className="inline-block bg-white text-black font-semibold py-3 px-7 rounded-full hover:bg-black hover:text-white  transition">
            Selanjutnya..
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src={Logo} alt="About Sedap" className="rounded-xl shadow-xl object-cover w-full max-w-md mx-auto" style={{ maxHeight: '300px' }} />
        </div>
      </div>
    </section>
  );
}
