import HeroSection from "../components/HeroSection";
import gambar1 from "../assets/img/1.jpg";
import gambar2 from "../assets/img/2.jpg";
import gambar3 from "../assets/img/3.jpg";
import gambar4 from "../assets/img/4.jpg";

export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <HeroSection
          image={gambar1}
          headline="Ayam Bakar Juara Rasa"
          subheadline="Disajikan dengan telur mata sapi, kangkung segar, dan sambal merah pedas yang menggoda."
          ctaText="Pesan Sekarang"
          onCtaClick={() => console.log("Navigating to Ayam Bakar Menu")}
        />

        <HeroSection
          image={gambar2}
          headline="Mie Ayam Legendaris"
          subheadline="Tekstur mie kenyal, ayam berbumbu gurih, dan kuah yang bikin nagih."
          ctaText="Coba Sekarang"
          onCtaClick={() => console.log("Navigating to Mie Ayam Menu")}
        />

        <HeroSection
          image={gambar3}
          headline="Ayam Penyet Pedas Terasi"
          subheadline="Rasakan sensasi sambal terasi khas kami, pedasnya nampol!"
          ctaText="Lihat Detail"
          onCtaClick={() => console.log("Opening Ayam Penyet Section")}
        />

        <HeroSection
          image={gambar4}
          headline="Ayam Oven Spesial"
          subheadline="Ayam utuh dipanggang sempurna — juicy di dalam, crispy di luar. Cocok untuk keluarga."
          ctaText="Lihat Menu Keluarga"
          onCtaClick={() => console.log("Navigating to Family Menu")}
        />
      </div>
    </div>
  );
}