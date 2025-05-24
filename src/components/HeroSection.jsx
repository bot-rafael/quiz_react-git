export default function HeroSection({ image, headline, subheadline, ctaText, onCtaClick }) {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-r from-gray-50 via-white to-blueZodiac">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-rethinksans-italic font-extrabold text-gray-900 leading-snug mb-5 tracking-wide">{headline}</h1>
          <p className="text-lg md:text-xl font-rethinksans font-extralight text-gray-600 mb-8 max-w-lg leading-relaxed">{subheadline}</p>
          {ctaText && (
            <button
              onClick={onCtaClick}
              className="inline-block bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              type="button"
            >
              {ctaText}
            </button>
          )}
        </div>

        {/* Image Content */}
        <div className="flex-1 max-w-lg mx-auto rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
          {image ? <img src={image} alt="Hero Banner" className="w-full h-auto object-cover" /> : <p className="text-gray-400 italic text-center">No image provided</p>}
        </div>
      </div>
    </section>
  );
}
