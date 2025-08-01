// src/components/Resources.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Resources() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const resources = [
    {
      title: "Blog Articles",
      subtitle: "200+ Insights",
      description: "Fresh perspectives, expert tips, and deep dives into the evolving world of digital marketing.",
      featured: "Mastering Content Trends in 2025",
      icon: "/blogico.png",
      // color: "from-blue-500 to-cyan-600",
      buttonText: "Dive"
    },
    {
      title: "SEO Guides",
      subtitle: "Proven Frameworks",
      description: "Clear, actionable guides to help you climb search rankings and stay competitive in any market.",
      featured: "The Modern SEO Blueprint",
      icon: "/seooico.png",
      // color: "from-orange-500 to-purple-600",
      buttonText: "Dive"
    },
    {
      title: "Templates",
      subtitle: "Built for Action",
      description: "Plug-and-play templates that save time, streamline planning, and boost productivity.",
      featured: "Digital Launch Plan Template",
      icon: "/tempico.png",
      // color: "from-blue-400 to-yellow-500",
      buttonText: "Dive"
    }
  ];

  return (
    <section 
      id="resources" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Resources</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore a curated collection of expert content crafted to sharpen your skills, grow your brand, and simplify execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-110`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${resource.color} p-8 rounded-2xl h-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/50' : 'shadow-lg'
              }`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 filter drop-shadow-lg">
                    {resource.icon.startsWith('/') ? (
                      <img 
                        src={resource.icon} 
                        alt={resource.title}
                        className="w-24 h-24 mx-auto object-contain"
                      />
                    ) : (
                      resource.icon
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                  <div className="text-yellow-400 font-bold text-lg mb-4">
                    {resource.subtitle}
                  </div>
                </div>
                
                <p className="text-gray-100 mb-6 leading-relaxed text-center">
                  {resource.description}
                </p>

                <div className="mb-6">
                  <div className="font-bold text-white mb-2">    Featured</div>
                  <div className="text-gray-200 text-sm">
                    {resource.featured}
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    onClick={() => {
                      if (resource.title === "Blog Articles") {
                        router.push('/blogs');
                      }
                    }}
                  >
                    {resource.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 