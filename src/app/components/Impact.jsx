// src/components/Impact.jsx
export default function Impact() {
  const impactCards = [
    {
      icon: "⚡", // Lightning bolt
      title: "Results in 30-45 Days",
      description: "From strategy to execution, we deliver measurable growth. Most campaigns see a spike in traffic, engagement, and leads within the first 4-6 weeks.",
      color: "text-blue-400"
    },
    {
      icon: "🎯", // Target
      title: "4x-6x ROI on Average",
      description: "We don't guess. We optimize. Our digital campaigns generate 4-6x return on investment through smart targeting and data-led decisions.",
      color: "text-blue-400"
    },
    {
      icon: "⚙️", // Gear
      title: "60+ Campaigns Launched",
      description: "From local startups to global brands, we've executed over 60 tailored campaigns, adapting strategies to every niche.",
      color: "text-blue-400"
    }
  ];

  return (
    <section 
      className="text-white py-20 px-6 bg-cover bg-center" 
      style={{
        backgroundColor: "#F5EFFF"
        // animation: "bgZoom 6s ease-in-out infinite alternate",
       }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Video Section */}
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px] animate-pulse">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-sm"></div>
              </div>
              
              {/* Video container */}
              <div className="relative rounded-2xl overflow-hidden">
                <video 
                  className="w-full aspect-video rounded-2xl"
                  
                  autoPlay
                  muted
                  loop
                >
                  <source src="/why.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ">
          Proven. Precise. Powerful.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impactCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-600/30 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-black/60 hover:border-purple-400/50 group"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 ease-in-out hover:scale-110">{card.icon}</div>
              <h3 className={`text-xl font-bold mb-4 ${card.color}`}>
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 