// src/components/Hero.jsx
// app/components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('herobg.jpg')", // <-- Replace with your uploaded image path
          animation: "bgZoom 6s ease-in-out infinite alternate",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#15002eaa] to-[#320b5f] z-0" />
  
        {/* Navigation */}
        
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Crafting<br />
            Momentum in a<br />
            <span className="text-pink-500">Digital World</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            At Lumina Growth, we fuse strategy, creativity, and data to transform your digital presence into measurable business success.
          </p>
          {/* <button className="mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md backdrop-blur-lg">
            Explore Our Impact
          </button> */}
        </div>
      </section>
    );
  }
  