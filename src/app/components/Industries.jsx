// src/components/Industries.jsx
import { useState } from 'react';

export default function Industries() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      title: "Technology & SaaS",
      description: "We craft high-impact marketing for tech pioneers and SaaS disruptors turning complex solutions into compelling stories that scale.",
      metrics: ["150+ Visionary Brands Partnered", "+300% Growth Achieved"],
      caseStudy: "Engineered a 300% surge in user acquisition for a fintech startup through precision-led strategy and immersive brand storytelling.",
      icon: "⚙️",
      color: "white",
      backgroundColor: "white "
    },
    {
      title: "E-commerce & Retail",
      description: "We blend creativity with data to build seamless shopping journeys that spark interest, drive action, and keep customers coming back.",
      metrics: ["200+ Clients Elevated", "+250% Average Growth"],
      caseStudy: "Elevated a fashion retailer's online revenue by 250% through precision targeting and tailored user experiences.",
      icon: "🛍️",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Healthcare & Wellness",
      description: "We create trusted strategies that elevate care brands and connect them with the people who need them most.",
      metrics: ["80+ Practices Guided", "+180% Patient Growth"],
      caseStudy: "Drove a 180% rise in patient appointments for a dental clinic through locally-focused outreach and experience-driven campaigns.",
      icon: "💚",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Education",
      description: "Empowering educational institutions with tailored campaigns that connect with learners, enhance engagement, and accelerate admissions.",
      metrics: ["60+ Educators Partnered", "+120% Enrollment Growth"],
      caseStudy: "Achieved a 120% increase in student enrollment for an online university through data-driven targeting and compelling content.",
      icon: "🎓",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Automotive",
      description: "Tailored digital strategies that boost dealership traffic, generate quality leads, and put your automotive brand in the fast lane.",
      metrics: ["45+ Clients Accelerated", "500+ Qualified Leads Monthly"],
      caseStudy: "Generated over 500 qualified leads per month for a car dealership through targeted campaigns and conversion-optimized funnels.",
      icon: "🚗",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Real Estate",
      description: "Strategic digital solutions that elevate listings, attract serious buyers, and help real estate professionals close faster and smarter.",
      metrics: ["90+ Clients Empowered", "85% Inventory Sold"],
      caseStudy: "Enabled a property developer to sell 85% of their inventory in just 6 months through targeted outreach and high-impact visuals.",
      icon: "🏠",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section 
      id="industries" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We craft digital strategies that adapt to your industry, connect with your audience, and move your brand forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-amber-50 p-8 rounded-2xl h-full border border-gray-200 backdrop-blur-sm transition-all duration-300 ${
                hoveredCard === index ? 'shadow-2xl shadow-amber-500/30' : 'shadow-lg'
              }`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 filter drop-shadow-lg">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#2E2D2D' }}>{industry.title}</h3>
                </div>
                
                <p className="mb-6 leading-relaxed" style={{ color: '#2E2D2D' }}>
                  {industry.description}
                </p>

                <div className="space-y-3 mb-6">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="text-sm font-semibold" style={{ color: '#2E2D2D' }}>
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="text-sm leading-relaxed" style={{ color: '#2E2D2D' }}>
                  <span className="font-semibold" style={{ color: '#2E2D2D' }}>Case Study:</span> {industry.caseStudy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 